const express = require('express');

const app = express();

const port = 4000;

//greeting functions
function greetInit(request, response) {
  response.send('Welcome')
  console.log('running!')
}

function personalGreeting(request, response) {
  const userName = request.params.name;
  const message = `Hello ${userName}, how are you today?`
  response.send(message);
}


                          //endpoints***************************//

// welcome user
app.get('/user/:name',personalGreeting)

//initial endpoint
app.get('/', greetInit)







app.listen(port,()=>{console.log(`server: ${port} up and running`)})