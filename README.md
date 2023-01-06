
# Run the following command to launch the ZooKeeper service
bin/zookeeper-server-start.sh config/zookeeper.properties

# In another terminal, run the following command to start the Kafka broker service
bin/kafka-server-start.sh config/server.properties

# Create kafka topic
bin/kafka-topics.sh --create --topic demoTopic --bootstrap-server localhost:9092
