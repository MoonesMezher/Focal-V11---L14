// Request always search on response 
// -> Stop -> Response
// -> Next -> 
const logger = (req, res, next) => {
    console.log("HI:", req.method, req.url);
    next()
}

module.exports = logger;