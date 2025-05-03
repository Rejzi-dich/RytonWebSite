const path = require('path');

module.exports = {
    optimization: {
        parallel: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    parallel: true
                }
            })
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.json']
    }
}
