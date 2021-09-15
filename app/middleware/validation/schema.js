module.exports = function schema(schema) {
  return function (req, res, next) {
    // console.log(req.files)
    // console.log(req.body)
    const { error } = schema.validate({
      header: req.headers,
      body: req.body,
      query: req.query,
    })

    if (error) return res.status(400).json({ 
      statusCode: 400,
      status: 'Bad Request',
      errors: error.details
    })
    else {
      next()
    }
  }
}