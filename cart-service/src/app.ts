import express from 'express'
import 'express-async-errors'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import cookieSession from 'cookie-session'
import cartRoutes from './routes/v1/cart.routes'
import { currentUser, errorHandler, NotFoundError } from '@devdezyn/common'

const app = express()

app.set('trust proxy', true)

app.use(helmet())

app.use(cors())

app.use(compression())

app.use(express.json())

app.use(
  cookieSession({
    // name: 'session',
    signed: false,
    secure: process.env.NODE_ENV === 'production',
  })
)

app.use(currentUser)

app.use('/api/v1', cartRoutes)

app.all('*', async () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export default app
