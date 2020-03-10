'use strict';

var lodash = require('lodash');

////////////////////////////////////////////////////////////////////////////////
// PRIVATE FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

function buildErrorLog(err) {
    var errorLog;
    if (lodash.isUndefined(err)) {
        errorLog = 'Error not defined';
    } else if (!lodash.isUndefined(err.stack)) {
        errorLog = err.stack;
    } else if (!lodash.isUndefined(err.message)) {
        errorLog = err.message;
    } else {
        errorLog = JSON.stringify(err);
    }
    return errorLog;
}

function buildErrorResponse(nameController, nameMethod) {

    var jsonResultFailed = {
        error: {
            code: 500,
            message: 'Internal Server Error',
            description: `Internal Application Error in ${nameController}:${nameMethod}`
        }
    };
    return jsonResultFailed;
}

////////////////////////////////////////////////////////////////////////////////
// PUBLIC FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

function handleErrorResponse(controllerName, methodName, err, res) {

    //console.log(buildErrorLog(err));

    var jsonResultFailed = buildErrorResponse(controllerName, methodName);
    res.status(500).send(jsonResultFailed);
}

////////////////////////////////////////////////////////////////////////////////
// MODULE EXPORTS
////////////////////////////////////////////////////////////////////////////////

module.exports = {
    handleErrorResponse,
    // for testing
    buildErrorLog: buildErrorLog,
    buildErrorResponse
};