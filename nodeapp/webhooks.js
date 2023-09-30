const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());
let postCount = 0;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
        next();    
  });
// API to handle the '/post' route
app.post('/post', (req, res) => {
  const postData = req.body.data;
  console.log('Received post data:', postData);

  postCount++;

  // Check if the number of posts has crossed 5
  if (postCount > 5) {
    // Send webhook notification and email
    sendWebhook(postCount);
   
  }

  res.json({ message: 'Post received successfully' });
});

// Webhook handler API
app.post('/webhook', (req, res) => {
  const webhookData = req.body;
  console.log('Received webhook data:', webhookData);

  // Send the number of posts back to the client
  res.json({ postCount });
});

// Function to send webhook notification
function sendWebhook(postCount) {
  //const webhookUrl = 'http://localhost:3000/webhook'; //Replace with your actual webhook URL
  const webhookUrl ='https://webhook.site/c25d4448-d715-41d3-8803-c698efcbd5b1';
  axios.post(webhookUrl, { postCount })
    .then(response => console.log('Webhook sent successfully'))
    .catch(error => console.error('Error sending webhook:', error));
}



//Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
