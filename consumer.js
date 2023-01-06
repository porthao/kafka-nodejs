const { Kafka } = require("kafkajs");
const kafka = require("./kafka");

const consumer = async () => {

    const consumer = kafka.consumer({ groupId: 'd' });

    await consumer.connect();

    await consumer.subscribe({ topic: 'testTopic1', fromBeginning: true });

    // Another topic
    await consumer.subscribe({ topic: 'testTopic2', fromBeginning: true });
    
    // Log every message consumed
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {

            console.log(
                'Consumed a message = ',
                { topic, partition, value: message.value.toString() }
            )
        },
    });

}

module.exports = consumer;