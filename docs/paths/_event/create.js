module.exports = {
  post: {
    tags: ['Event'],
    summary: 'Create event for alumni, upload to MongoDB',
    security: [
      {
        bearerAuth: []
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
            $ref: '#/components/schemas/CreateEvent'
          }
        }
      },
    },
    responses: {
      '201': {
        description: 'Successfully created Event',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties:{
                statusCode: {
                  example: 201,
                  type: 'integer'
                },
                status: {
                  example: "Created",
                  type: 'string'
                },
                result: {
                  type: 'object',
                  properties: {
                    id : {
                      type: 'string',
                      example: "d972b077-30fa-4dbd-80b3-9a5b08b35093",
                    },
                    userId: {
                      type: 'string',
                      example: "2d354fd3-4ad4-412f-8d73-a18d7c13ba0c",
                    },
                    imageId: {
                      type: 'string',
                      example: "65276e85-2fb0-483e-aa4c-95a8ab26ecdd",
                    },
                  }
                },
                message:{
                  type: 'string',
                  example: "Succesfully created Event",
                }
              }
            }
          }
        },
      },
      '400' : {
        description: 'Failed to create Event',
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
                  example: 'Failed to create event'
                },
              }
            }
          }
        }
      }
    }
  }
}