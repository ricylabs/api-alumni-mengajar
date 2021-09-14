module.exports = {
  UploadEventImage: {
    type: 'object',
    properties: {
      event: {
        type: 'string',
        format: 'binary'
      } 
    }
  }
}