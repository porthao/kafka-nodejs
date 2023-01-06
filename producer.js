const { Kafka } = require("kafkajs");
const kafka = require("./kafka");

const producer = async () => {

    // Initialize the Kafka producer
    const producer = kafka.producer();

    await producer.connect();

    // Send an event to the demoTopic topic
    await producer.send({
        topic: 'testTopic1',
        messages: [
            { value: 'Test send each message to broker testTopic 1`' },
        ],
    });

    // Another topic
    await producer.send({
        topic: 'testTopic2',
        messages: [
            { value: 'Test testTopic2' },
        ],
    });

    // Disconnect the producer once we’re done
    await producer.disconnect();
}

module.exports = producer