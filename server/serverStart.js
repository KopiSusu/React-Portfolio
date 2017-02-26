var Server = require('./serverConfig.js');
var port = (process.env.PORT || 3001);
var app = Server.app();
var http = require('http');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');
var Config = require('../webpack/dev.config.js');

Config.plugins.unshift(new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}));

Config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
Config.entry.unshift('webpack/hot/only-dev-server');

Config.entry.unshift("webpack-dev-server/client?http://localhost:" + port + "/");
Config.devTool = "eval";

var compiler = webpack(Config);

var server = new WebpackDevServer(compiler, {
	contentBase: './dist',
    publicPath: '/',
    filename: 'bundle.js',
	historyApiFallback: true,
	hot: true,
	inline: true
});

server.listen(port);







