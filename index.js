const express = require('express');
const consumer = require('./consumer');
const producer = require('./producer');

(async () => {

  await producer()
  await consumer()

  const app = express();

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🎉🎉🎉 Application running on port: ${PORT} 🎉🎉🎉`);
  });
})();
