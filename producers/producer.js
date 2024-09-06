const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:29092']
})

const producer = kafka.producer()

const run = async () => {
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello Kafka!' },
    ],
  })
  await producer.disconnect()
}

run().catch(console.error)
