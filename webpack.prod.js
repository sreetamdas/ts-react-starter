const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const SizePlugin = require("size-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(
	common,
	smp.wrap({
		mode: "production",
		plugins: [
			new CleanWebpackPlugin(),
			new CopyPlugin([{ from: "src/static", to: "" }]),
			new SizePlugin(),
		],
	})
);
