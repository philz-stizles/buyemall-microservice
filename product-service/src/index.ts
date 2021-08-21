import mongoose from 'mongoose'
import chalk from 'chalk'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined')
  }

  if (!process.env.MONGO_DB_URI) {
    throw new Error('MONGO_URI must be defined')
  }

  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log(chalk.green('Connected to MongoDb!!!'))
  } catch (error) {
    console.error(chalk.red(error.message))
  }

  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log(chalk.green(`Product service is listening on port ${PORT}!`))
  })
}

start()
