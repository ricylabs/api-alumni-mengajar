module.exports = {
  post: {
    tags: ['Event'],
    summary: 'Create event for alumni, upload to MongoDB',
    parameters:[
      {
        in: 'path',
        name:'imageId',
        schema: {
          type: 'string'
        },
        required: true,
        description: 'Image ID was generated from creating event. Use the generated ID to store the file uniquely'
      }
    ],
    requestBody: {
      required: true
    },
    requestBody: {
      requred: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            $ref: '#/components/schemas/UploadEventImage'
          }
        }
      },
    },
    responses: {
      '201': {
        description: 'Successfully uploaded event image',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties:{
                "statusCode": {
                  type: 'integer',
                  example: 201
                },
                status: {
                  type: 'string',
                  example: 'Created'
                },
                result: {
                  type: 'object',
                  properties: {
                    image: {
                      type: 'string',
                      example: 'event/cf00943b-25dc-4e18-8288-b8e3da16821a.png',
                    },
                    url: {
                      type: 'string',
                      example: 'https://storage.googleapis.com/api-alumni-mengajar.appspot.com/event/cf00943b-25dc-4e18-8288-b8e3da16821a.png'
                    }
                  },
                },
                message:{
                  type: 'string',
                  example: 'Successfully uploaded file'
                }
              }
            }
          }
        }
      },
      '400' : {
        description: "Failed to upload event's image",
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties:{
                statusCode:{
                  type: 'integer',
                  example: 400,
                },
                status: {
                  type: 'string',
                  example: 'Bad Request',
                },
                message:{
                  type: 'string',
                  example: "Failed to upload event's image"
                },
              }
            }
          }
        }
      }
    }
  }
}