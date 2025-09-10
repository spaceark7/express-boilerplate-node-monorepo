import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import { handle } from "i18next-http-middleware";
import { i18n } from 'shared/src/i18n';
import { errorMiddleware } from 'packages/core-service/src/middleware/error-middleware'
import { authRoutes } from 'packages/core-service/src/routes/auth-routes'
import { menuRoutes } from 'packages/core-service/src/routes/menu-routes'
import { groupRoutes } from 'packages/core-service/src/routes/group-routes'
import { userRoutes } from 'packages/core-service/src/routes/user-routes'
import { menuAclsRoutes } from 'packages/core-service/src/routes/menu-acls-routes'
dotenv.config()

console.log(`Starting ${process.env.APP_NAME} on port ${process.env.APP_PORT}`)

export const webServer = express()
webServer.use(handle(i18n));

webServer.use(cors());
webServer.use(express.json());

//#region Routes
webServer.use('/api/v1', authRoutes);
webServer.use('/api/v1', menuRoutes);
webServer.use('/api/v1', groupRoutes);
webServer.use('/api/v1', userRoutes);
webServer.use('/api/v1', menuAclsRoutes);
//#endregion Routes


//#region Middleware post request Catch
webServer.use(errorMiddleware)
//#endregion Middleware post Catch

webServer.get('/', (req, res) => {
  res.json({
    message: req.t('welcome', { appName: process.env.APP_NAME || 'Express Boilerplate' })
    // message: req.t('greeting')
  })
})



