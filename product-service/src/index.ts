import mongoose from 'mongoose'
import chalk from 'chalk'
import dotenv from 'dotenv'
import app from './app'
import { rabbitMQWrapper } from './rabbitmq-wrapper'

dotenv.config()

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined')
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined')
  }

  if (!process.env.RabbitMQ_URI) {
    throw new Error('RabbitMQ_URI must be defined')
  }

  try {
    await rabbitMQWrapper.connect(process.env.RabbitMQ_URI, 'PRODUCT')

    rabbitMQWrapper.client.on('close', () => {
      console.log('RabbitMQ connection closed!')
      process.exit()
    })

    // When a connection/client is closed, so are its channels.
    process.on('SIGINT', () => rabbitMQWrapper.client.close())
    process.on('SIGTERM', () => rabbitMQWrapper.client.close())

    await rabbitMQWrapper.channel.consume('ORDER', function (msg: any) {
      if (msg) {
        console.log(msg.content.toString())
        // const { } = JSON.parse(msg.content)
        rabbitMQWrapper.channel.ack(msg)
      }
    })

    await mongoose.connect(`${process.env.MONGO_URI}/product-service-db`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log(chalk.green('Connected to MongoDb!!!'))
  } catch (error) {
    console.error(chalk.red(error.message))
  }

  app.listen(3000, () => {
    console.log('Product service is listening on port 3000!')
  })
}

start()
