const { Kafka } = require("kafkajs");

const kafka = new Kafka({
    clientId: 'ffff',
    brokers: ['localhost:9092'],
});

module.exports = kafka;