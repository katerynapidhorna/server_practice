const express = require('express');

const app = express();

const port = 4000;

function greet(request, response) {
  response.send('Welcome')
}






//endpoints

app.get('/', greet)







app.listen(port,()=>{console.log(`server: ${port} up and running`)})