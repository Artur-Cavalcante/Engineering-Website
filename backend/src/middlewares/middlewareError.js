function middlewareError(error, request, response, next) {
    return response.status(error.httpStatusCode).json("Algo de errado não está certo!")
};

module.exports = { middlewareError };
