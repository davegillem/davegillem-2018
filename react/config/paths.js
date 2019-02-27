const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd()); // eslint-disable-line
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL; // eslint-disable-line

function ensureSlash(filepath, needsSlash) {
	const hasSlash = filepath.endsWith('/');
	if (hasSlash && !needsSlash) {
		return filepath.substr(filepath, filepath.length - 1);
	} else if (!hasSlash && needsSlash) {
		return `${filepath}/`;
	} else {
		return filepath;
	}
}

const getPublicUrl = appPackageJson => envPublicUrl || require(appPackageJson)
	.homepage;

function getServedPath(appPackageJson) {
	const publicUrl = getPublicUrl(appPackageJson);
	const servedUrl = envPublicUrl || (publicUrl ? url.parse(publicUrl)
		.pathname : '/');
	return ensureSlash(servedUrl, true);
}

const moduleFileExtensions = [
	'web.mjs',
	'mjs',
	'web.js',
	'js',
	'web.ts',
	'ts',
	'web.tsx',
	'tsx',
	'json',
	'web.jsx',
	'jsx'
];

module.exports = {
	appBuild: resolveApp('build'),
	appHtml: resolveApp('public/index.html'),
	appHtmlDev: resolveApp('public/index-dev.html'),
	appHtmlProd: resolveApp('public/index.html'),
	appIndexJs: resolveApp('src/index.tsx'),
	appNodeModules: resolveApp('node_modules'),
	appPackageJson: resolveApp('package.json'),
	appPath: resolveApp('.'),
	appPublic: resolveApp('public'),
	appSrc: resolveApp('src'),
	appTsConfig: resolveApp('tsconfig.json'),
	appTsLint: resolveApp('tslint.json'),
	appTsProdConfig: resolveApp('tsconfig.prod.json'),
	dotenv: resolveApp('.env'),
	publicUrl: getPublicUrl(resolveApp('package.json')),
	servedPath: getServedPath(resolveApp('package.json'))
};
module.exports.moduleFileExtensions = moduleFileExtensions;