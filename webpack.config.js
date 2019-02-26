var path = require("path");

module.exports = {
    entry:"./js/mainApp.jsx",
    output: { filename: "out.js", path: path.resolve(__dirname, "dist") },
    mode: "development", watch: true,
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "stage-2", "react"]
                }
            }
        },
            {
                test: /\.(jpg|png)$/,
                exclude: /node_modules/,
                use:
                    {
                        loader: "url-loader",
                        options:
                            {
                                name: "[path][name].[hash].[ext]",
                            }
                    }
            },
            {
                test: /\.css$/,
                use: ['css-loader'],
            },
        ]
    }
}