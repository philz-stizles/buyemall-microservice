import express from 'express'
import 'express-async-errors'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import cookieSession from 'cookie-session'
import categoryRoutes from '@src/routes/category.routes'
import subCategoryRoutes from '@src/routes/subCategory.routes'
import productRoutes from '@src/routes/product.routes'
import { currentUser, errorHandler, NotFoundError } from '@devdezyn/common'

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

app.use(currentUser)

// Resource routes
app.use('/api/v1/subCategories', subCategoryRoutes)
app.use('/api/v1/categories', categoryRoutes)
app.use('/api/v1/products', productRoutes)

app.all('*', async () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export default app
