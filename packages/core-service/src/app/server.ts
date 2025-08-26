import express from 'express'
import dotenv from 'dotenv'
import { errorMiddleware } from 'packages/core-service/src/middleware/error-middleware'
import { authRoutes } from 'packages/core-service/src/routes/auth-routes'
import { menuRoutes } from 'packages/core-service/src/routes/menu-routes'

dotenv.config()

console.log(`Starting ${process.env.APP_NAME} on port ${process.env.APP_PORT}`)

export const webServer = express()
webServer.use(express.json());

//#region Routes
webServer.use('/api/v1', authRoutes);
webServer.use('/api/v1', menuRoutes);
//#endregion Routes


//#region Middleware post request Catch
webServer.use(errorMiddleware)
//#endregion Middleware post Catch

webServer.get('/', (req, res) => {
  res.json({
    message: 'Core Service'
  })
})



