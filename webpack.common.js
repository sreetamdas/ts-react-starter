const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");

// const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	// devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader", // creates style nodes from JS strings
					},
					{
						loader: "css-loader", // translates CSS into CommonJS
					},
					{
						loader: "less-loader", // compiles Less to CSS
						options: {
							javascriptEnabled: true,
							modifyVars: { "menu-collapsed-width": "50px" },
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						loader: "image-webpack-loader",
						options: {
							disable: true, // webpack@2.x and newer
						},
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx", ".tsx", ".ts"],
		modules: [
			path.resolve(__dirname, "src"),
			path.resolve(__dirname, "node_modules"),
		],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			filename: "index.html", //relative to root of the application
		}),
		new HtmlWebpackRootPlugin(),
		// new AntdDayjsWebpackPlugin(),
	],
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},

	// performance: {
	// 	hints: "warning",
	// },
};
