module.exports = {
	entry: "./src/js/app.js",
    output: {
    	path: __dirname + "/public",
        filename: "app.js"
    },
    resolve: {
		extensions: ['', '.js', '.jsx'],
	},
    module: {
	    loaders: [
	    	{
	    		test: /\.scss$/,
	    		loaders: ["style", "css", "sass"]
	    	},
	    	{
	    		test: /\.js$/,
	    		loader: 'jsx-loader'
	    	},
	    ]
	  }
};