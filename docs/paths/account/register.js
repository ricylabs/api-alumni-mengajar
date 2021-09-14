module.exports = {
  post: {
    tags: ['Account'],
    summary: 'Register Account',
    requestBody: {
      requred: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            $ref: '#/components/schemas/Register'
          }
        }
      },
    },
    responses : {
      '201': {
        description: 'Successfully created account',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties:{
                statusCode: {
                  type: 'integer',
                  example: 201,
                },
                status: {
                  type: 'string',
                  example: 'Created',
                },
                token: {
                  example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhiMWU2NzVhLTE5YTgtNDc1ZC04ZDgwLWU2NGMyZGJhYzM0NCIsImlhdCI6MTYzMTEwMjExNSwiZXhwIjoxNjMxMTAzMDE1fQ.aVYxP3oX085ARTLivfPVStxPJ0yBBy5HaaU-uTeMvFs',
                  type: 'string',
                  description:'JSON Web Token (JWT). Use to Authorize Account!'
                },
                result: {
                  type: 'object',
                  properties: {
                    userId: {
                      type: 'string',
                      example: '2d354fd3-4ad4-412f-8d73-a18d7c13ba0c'
                    }
                  }
                },
                message: {
                  type: 'string',
                  example: 'Account Successfully Created'
                }
              }
            }
          }
        }
      },
      '401': {
        description: 'Inputted Username or Email has already exist in database',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties:{
                statusCode: {
                  type: 'integer',
                  example: 409
                },
                status: {
                  type: 'string',
                  example: 'Conflict',
                },
                message: {
                  type: 'string',
                  example: 'Email/Username has alsready been taken'
                }
              }
            }
          }
        }
      }
    }
  }
}