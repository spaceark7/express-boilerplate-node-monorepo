import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

console.log(`Starting ${process.env.APP_NAME} on port ${process.env.APP_PORT}`)

export const webServer = express()
webServer.use(express.json());


webServer.get('/', (req, res) => {
  res.json({
    message: 'Core Service'
  })
})



