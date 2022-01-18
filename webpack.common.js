import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: path.resolve(dirname(fileURLToPath(import.meta.url)), 'src', 'index.tsx'),
	output: {
		path: path.resolve(dirname(fileURLToPath(import.meta.url)), 'dist'),
		filename: '[name].[contenthash].js',
	},
	resolve: {
		extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json'],
		alias: {
			'@src': path.resolve(dirname(fileURLToPath(import.meta.url)), 'src')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
				exclude: [/\.module\.css$/i, /node_modules/]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(dirname(fileURLToPath(import.meta.url)), 'src/index.html')
		})
	]
};
