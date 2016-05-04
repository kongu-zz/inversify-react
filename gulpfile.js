/// <binding Clean='clean' />
"use strict";
// var require;

var gulp = require("gulp");
var gutil = require("gulp-util");
var rimraf = require("rimraf");
var webpack = require("webpack-stream");
var WebpackDevServer = require("webpack-dev-server");
var dwebpack = require("webpack");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var WebpackNotifierPlugin = require('webpack-notifier');
//var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var argv = require("yargs").argv;

var port = argv.port ? argv.port : 8080;
var wport = argv.wport ? argv.wport : 3000;
var whost = argv.whost ? argv.whost : "localhost";

var runSequence = require("run-sequence");
var packageFile = require("./package.json");

//var browserSync = require('browser-sync');
//var less = require('gulp-less');
var path = require('path');

var paths = {
    webroot: "./wwwroot/",
    nodeModules: "./node_modules/**/*",
    scripts: "./Scripts/",
    awcache: "./.awcache/**/*"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean:modules", function (cb) {
    rimraf(paths.nodeModules, cb);
});

gulp.task("clean:awcache", function (cb) {
    rimraf(paths.awcache, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);


gulp.task("react:development", function () {
    var wconfig = {
        cache: true,
        devtool: "eval",
        entry: {
            app: ["reflect-metadata", "webpack-dev-server/client?http://" + whost + ":" + wport,
                "webpack/hot/only-dev-server",
                paths.scripts + "src/index.tsx"]
        },
        resolve: {
            extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
        },
        output: {
            path: process.cwd(),
            filename: "[name].js",
            publicPath: "http://" + whost + ":" + wport + "/js/"
        },
        plugins: [
            new dwebpack.HotModuleReplacementPlugin(),
            new dwebpack.NoErrorsPlugin(),
            new dwebpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                minChunks: Infinity,
                filename: "vendor.js"
            }),
            new dwebpack.LoaderOptionsPlugin({
                minimize: false,
                debug: true
            }),
            new dwebpack.DefinePlugin({
                "process.env": { NODE_ENV: JSON.stringify("development") }
            }),
            /*new dwebpack.ProvidePlugin({
                Reflect: "reflect-metadata"
            }),*/
            new WebpackNotifierPlugin({ title: "KL.TIS.Frontend.JS.Search", alwaysNotify: true })
        ],
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: ["react-hot", "babel-loader"],
                    exclude: /node_modules/
                },
                {
                    test: /\.ts(x?)$/,
                    loaders: ["react-hot", "babel-loader", "ts-loader"],
                    exclude: /node_modules/
                },
                { test: /\.json$/, loader: "file-loader" }

            ]
        },
        ts: {
            compiler: "typescript"
        }
    };

    var server = new WebpackDevServer(dwebpack(wconfig), {
        publicPath: wconfig.output.publicPath,
        hot: true,
        inline: true,
        noInfo: false,
        headers: { "Access-Control-Allow-Origin": "*" },
        stats: {
            colors: true,
            progress: true
        }
    });

    server.listen(wport, function (err, result) {
        if (err) {
            console.log(err);
        }

        gutil.log("Webpack Dev Server started. Compiling...");
    });
});

gulp.task('react:build', function () {
    dwebpack({
        //devtool: 'source-map',
        //devtool: null,
        entry: {
            app: ["./Scripts/src/index.tsx"],
            vendor: ["reflect-metadata", "react", "react-dom", "inversify"]
        },
        resolve: {
            extensions: ["", ".ts", ".tsx", ".js", ".jsx"],
            modules: [
              path.resolve("./Scripts/src"),
              "node_modules"
            ]
        },
        output: {
            path: path.join(__dirname, 'wwwroot/js'),//process.cwd()
            filename: '[name].js',
            pathinfo: false
        },
        plugins: [
            new dwebpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            //new dwebpack.optimize.UglifyJsPlugin({ minimize: true, output: { comments: false } }),
            new dwebpack.DefinePlugin({
                "process.env": { NODE_ENV: JSON.stringify("production") }
            }),
            new CommonsChunkPlugin({
                name: "vendor",
                filename: "vendor.js",
                minChunks: Infinity
            })
        ],
        module: {
            loaders: [
               { test: /\.js$/, loaders: ["react-hot"], exclude: /node_modules/ },
               { test: /\.ts(x?)$/, loaders: ["babel-loader", "ts-loader"], exclude: /node_modules/ },
               { test: /\.json$/, loader: "file-loader" }
            ]
        },
        ts: {
            compiler: "typescript"
        }
    }, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
        //callback();  
    });

});

gulp.task("default", function (callback) {
    runSequence("react:development", callback);
});


gulp.task('build', ['react:build']);

/*
gulp.task('default', ['copycssstuff'], function(callback) {
    runSequence('react:development', 'watch2', 'build:less', callback);
});
*/


