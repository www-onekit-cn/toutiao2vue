const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'toutiao2vue': utils.resolve('toutiao2vue/index.js')
        }
    },
}