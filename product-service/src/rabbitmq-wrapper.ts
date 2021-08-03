import amqplib, { Channel, Connection } from 'amqplib'

class RabbitMQWrapper {
  private _client?: Connection

  private _channel?: Channel

  get client() {
    if (!this._client) {
      throw new Error('Cannot access RabbitMQ client before connecting')
    }

    return this._client
  }

  get channel() {
    if (!this._channel) {
      throw new Error('Cannot access RabbitMQ channel before connecting')
    }

    return this._channel
  }

  async connect(url: string, queueName: string): Promise<void> {
    try {
      this._client = await amqplib.connect(url)

      this.client.on('connect', () => {
        console.log('Connected to RabbitMQ')
      })

      this.client.on('error', (err: any) => {
        console.log(err.message)
      })

      this._channel = await this.client.createChannel()

      await this._channel.assertQueue(queueName)
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const rabbitMQWrapper = new RabbitMQWrapper()
