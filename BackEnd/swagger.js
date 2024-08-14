require("dotenv/config")


const SwaggerOption = {
    definition: {
        openapi: '3.0.0',
    info: {
      title: 'Swagger API',
      version: '1.0.0',
      description: `This is a REST API application made with Express..</br>
      <a href="${process.env.Base_Url}/swagger.json">{Swagger Json}</a>`
     },
     server: [
        {
            url: 'http://localhost:2345',
            description: 'Server'
        }
     ],
    },
    apis: ['./routes/*.js'],

    displayRequestDuration: true
}

module.exports = SwaggerOption