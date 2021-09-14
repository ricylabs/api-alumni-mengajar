const luxon = require('luxon')
const moment = require('moment-timezone')

const tomorrow = moment.tz(moment().add(7,'days'), 'Asia/Jakarta')
const timeExample = tomorrow.format('YYYY/MM/DD')


module.exports = {
  CreateEvent: {
    type:'object',
    properties: {
      title: {
        type:'string',
        example:'Example Event Title'
      },
      description: {
        type:'string',
        example:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, nam. Doloremque quas nihil ratione consequatur asperiores? Alias molestiae repellendus beatae numquam est! Ad voluptate quidem officiis. Exercitationem quas possimus ratione!",
        format:'textarea',
      },
      date: {
        type:'string',
        format: 'date',
        example:timeExample
      },
      start: {
        type:'string',
        example:'09:00'
      },
      end: {
        type:'string',
        example:'12:00'
      },
      capacity: {
        type: 'integer',
        example: 100
      },
      price: {
        type:'number',
        example:100000
      },
      link: {
        type: 'string',
        example: 'https://zoom.us/'
      }
    },
    required: [
      'title',
      'description',
      'date',
      'start',
      'end',
      'capacity',
      'price',
      'link',
    ]
  }
}