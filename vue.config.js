const path = require('path');
const name = '联信区域管控系统';

module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    configureWebpack: {
        devtool: 'source-map'
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, 'src/styles/_variables.scss'),
                path.resolve(__dirname, 'src/styles/_mixins.scss')
            ]
        }
    },
    chainWebpack(config) {
    // Provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
        config.set('name', name);
        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .optimization.splitChunks({
                            chunks: 'all',
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial' // only package third parties that are initially dependent
                                },
                                elementUI: {
                                    name: 'chunk-elementUI', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                                },
                                commons: {
                                    name: 'chunk-commons',
                                    test: path.resolve(__dirname, 'src/components'),
                                    minChunks: 3, //  minimum common number
                                    priority: 5,
                                    reuseExistingChunk: true
                                }
                            }
                        });
                    config.optimization.runtimeChunk('single');
                }
            );
    }
};
