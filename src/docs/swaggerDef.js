const { version } = require('../../package.json')

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'User crud API documentation',
    version
  },
  servers: [
    {
      url: 'https://user-crud.com/v1/'
    }
  ]
}

module.exports = swaggerDef
