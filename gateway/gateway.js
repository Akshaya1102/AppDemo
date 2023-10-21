const express= require('express');
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(morgan('dev'));
const PORT = 5600;
const axios = require('axios');

app.get('/orders', (req, res) => {
  axios.get('http://localhost:3000/orders')
    .then(response => {
      // Handle the response here
            res.send(response.data); // Send the data back to the client
    })
    .catch(error => {
      // Handle errors here
      console.error(error);
      res.status(500).send('An error occurred'); // Send an error response to the client
    });
});

app.get('/products', (req, res) => {
  axios.get('http://localhost:3000/products')
    .then(response => {
      // Handle the response here
            res.send(response.data); // Send the data back to the client
    })
    .catch(error => {
      // Handle errors here
      console.error(error);
      res.status(500).send('An error occurred'); // Send an error response to the client
    });
});


app.post('/signup', (req, res) => {
  const postData = {
    email: req.body.email,
    password: req.body.password
  };
  axios.post('http://localhost:3001/user/signup', postData)
    .then(response => {
      // Handle the response here
            res.send(response.data); // Send the data back to the client
    })
    .catch(error => {
      // Handle errors here
      console.error(error);
      res.status(500).send('An error occurred'); // Send an error response to the client
    });
});

app.post('/login', (req, res) => {
  const postData = {
    email: req.body.email,
    password: req.body.password
  };
  axios.post('http://localhost:3001/user/login',postData)
    .then(response => {
      // Handle the response here
            res.send(response.data); // Send the data back to the client
    })
    .catch(error => {
      // Handle errors here
      console.error(error);
      res.status(500).send('An error occurred'); // Send an error response to the client
    });
});
 app.get('/info',(req,res,next)=>
{
    res.status(200).send("API Gateway running on port 5600");
})
app.listen(PORT,()=>
{
    console.log("API Gateway started on port"+ PORT);
});