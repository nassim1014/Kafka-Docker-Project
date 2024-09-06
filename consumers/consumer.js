const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['localhost:29092']
})

const consumer = kafka.consumer({ groupId: 'test-group' })

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
}

run().catch(console.error)
