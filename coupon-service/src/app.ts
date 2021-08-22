import express from 'express'
import 'express-async-errors'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import cookieSession from 'cookie-session'
import couponRoutes from '@src/routes/v1/coupon.routes'
import { errorHandler, NotFoundError } from '@devdezyn/buyemall-common'

const app = express()

app.set('trust proxy', 1)

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

// Resource routes
app.use('/api/v1/coupons', couponRoutes)

app.all('*', async () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export default app
