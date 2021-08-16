const notFound = (req,res)=>res.status(404).send("<h2>Resource not found.</h2>");
module.exports = notFound;