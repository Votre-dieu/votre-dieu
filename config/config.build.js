const fs = require('fs');
const path = require('path');
const join = path.join;
const resolve = dir => path.join(__dirname, '../', dir);

function getComponentEntries(path) {
    let files = fs.readdirSync(resolve(path));
    const componentEntries = files.reduce((fileObj, item) => {
        const itemPath = join(path, item);
        const isDir = fs.statSync(itemPath).isDirectory();
        const [name, suffix] = item.split('.');
        if (isDir) {
            fileObj[item] = resolve(join(itemPath, 'index.js'));
        }
        else if (suffix === 'js') {
            fileObj[name] = resolve(`${itemPath}`);
        }
        return fileObj;
    }, {});

    return componentEntries;
}
const buildConfig = {
    outputDir: resolve('lib'),
    productionSourceMap: false,
    configureWebpack: {
        entry: getComponentEntries('packages'),
        output: {
            filename: '[name]/index.js',
            libraryExport: 'default',
            library: 'votre-dieu',
            libraryTarget: 'umd'
        }
    },
    css: {
        sourceMap: false,
        extract: {
            filename: '[name]/index.css'
        }
    },
    chainWebpack: config => {
        config.optimization.delete('splitChunks');
        config.plugins.delete('copy');
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        config.plugins.delete('html');
        config.plugins.delete('hmr');
        config.entryPoints.delete('app');
    }
};
module.exports = buildConfig;
