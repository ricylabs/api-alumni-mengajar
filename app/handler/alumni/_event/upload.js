const express = require('express')
const app = express()

const service = require('../../../../service')

module.exports = async function upload(req, res) {
  const imageId = req.params.imageId
  const allowedFileType = [
    'image/png',
    'image/jpeg',
    'image/jpg'
  ]
  const splitNameFile = req.file.originalname.split('.')
  formatFile = splitNameFile[splitNameFile.length - 1]

  if(allowedFileType.includes(req.file.mimetype)) {
    const image = await service._event.upload(req.file.buffer, `event/${imageId}.${formatFile}`)
    
    return res.status(201).json({
      statusCode: 201,
      status: 'Created',
      result: {
        image: image.image,
        url: image.publicUrl
      },
      message: 'Successfully uploaded file'
    })
  }
  return res.status(400).json({
    statusCode: 400,
    status: 'Bad Request',
    message: "Failed to upload file"
  })
}