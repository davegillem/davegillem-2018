const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => {
	return path.resolve(appDirectory, relativePath);
};

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(inputPath, needsSlash) {
	const hasSlash = inputPath.endsWith('/');
	if (hasSlash && !needsSlash) {
		return inputPath.substr(inputPath, inputPath.length - 1);
	} else if (!hasSlash && needsSlash) {
		return `${inputPath}/`;
	} else {
		return inputPath;
	}
}

const getPublicUrl = (appPackageJson) => envPublicUrl || require(appPackageJson).homepage;

function getServedPath(appPackageJson) {
	const publicUrl = getPublicUrl(appPackageJson);
	const servedUrl = envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
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
	'jsx',
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
	appTsConfig: resolveApp('tsconfig.test.json'),
	appTsProdConfig: resolveApp('tsconfig.prod.json'),
	dotenv: resolveApp('.env'),
	publicUrl: getPublicUrl(resolveApp('package.json')),
	servedPath: getServedPath(resolveApp('package.json')),
};
module.exports.moduleFileExtensions = moduleFileExtensions;
