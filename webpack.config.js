const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATH_SRC = path.join(__dirname, 'src');
const PATH_DIST = path.join(__dirname, 'dist');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = (env, argv) => {
    const THEME_NAME = (env.theme === undefined) ? 'default' : env.theme;
    return {
        output: {
            path: PATH_DIST,
        },
        devtool: isDev && 'source-map',
        devServer: {
            port: 3000,
            open: true,
            host: '0.0.0.0',
            static: PATH_SRC,
        },
        cache: {
            type: 'memory',
            maxGenerations: isDev ? 3 : Infinity, // prevent memory overflow
        },
        resolve: {
            alias: {
                '@js': path.join(__dirname, 'src/assets', THEME_NAME, '/js'),
            }
        },
        plugins: [
            new HtmlBundlerPlugin({
                entry: './src/pages',
                data: './src/data.json',
                loaderOptions: {
                    preprocessor: 'handlebars', // enable Handlebars compiler
                    preprocessorOptions: {
                        root: './src/pages',
                        views: [
                            './src/partials',
                        ],
                        partials: [
                            './src/partials',
                        ],
                        helpers: [
                            './src/helpers',
                        ],
                    },
                },
            }),
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: !isDev
            }),
        ]
    }
};