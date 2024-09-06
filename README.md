# Kafka-Docker-Project

This project demonstrates a simple Kafka setup using Docker, with a producer and consumer written in Node.js.

## Setup

1. Ensure Docker and Node.js are installed on your system.
2. Run `docker-compose up -d` to start Kafka and Zookeeper.
3. In the producer directory, run `npm install`.
4. In the consumer directory, run `npm install`.

## Running the project

1. Start the consumer: `node consumer/consumer.js`
2. In another terminal, run the producer: `node producer/producer.js`

You should see the message "Hello Kafka!" logged in the consumer terminal.
