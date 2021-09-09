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
    responses: {
      '200': {
        description: 'Register Succeed'
      },
    }
  }
}