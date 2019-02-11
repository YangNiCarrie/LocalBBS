const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
	return {
		entry: [
			"./ClientApp/App.tsx"
		],
		output: {
			filename: "bundle.js",
			path: path.join(__dirname, "public", "dist")
		},

		devtool: "source-map",

		resolve: {
			extensions: [".ts", ".tsx", ".js", ".css", ".less"],
			alias: {
				"@api": "./CliendApp/@api"
			}
		},

		module: {
			rules: [
				{
					test: /\.less$/,
					use: [{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader"
					},
					{
						loader: "less-loader",
						options: {
							importLoaders: 1
						}
					}]
				},

				{
					test: /\.(ts|tsx)?$/,
					loader: [ "awesome-typescript-loader" ]
				},

				{
					enforce: "pre",
					test: /\.js$/,
					loader: [ "source-map-loader" ]
				},

				{
					test: /\.(png|jpeg|jpg|gif|svg)$/,
					use: [
						{
							loader: "file-loader",
							options: {
								name: "dist/img/[name].[ext]"
							}
						}
					]
				}
			]
		},

		mode: "development",

		devServer: {
			contentBase: [
				path.join(__dirname, "public")
			],
			publicPath: "/dist/",
			historyApiFallback: true,
			hot: true,
			disableHostCheck: true
		},

		plugins: [
			new MiniCssExtractPlugin({
				filename: "styles.css",
				chunkFilename: "[id].css"
			}),
			new webpack.HotModuleReplacementPlugin()
		],
	};
};
