const URL = require('../../src/common/urls').URL
const API_SUCCESS = require('../../src/common/urls').API_SUCCESS
const mockControllerArr = [
    require('./taskTopController')
];
module.exports = function(app, express) {
    const apiRouter = express.Router()
    mockControllerArr.forEach(function(controller) {
        controller(apiRouter, URL, API_SUCCESS) 
    });
    app.use("", apiRouter)
}