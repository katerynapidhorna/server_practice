const express = require('express');

const app = express();

const port = 4000;

//greeting functions
// function greetInit(request, response) {
//   response.send('Welcome')
//   console.log('running!')
// }

// function personalGreeting(request, response) {
//   const userName = request.params.name;
//   const message = `Hello ${userName}, how are you today?`
//   response.send(message);
// }

// object with data
const userData = [
    {
      name: 'Bob',
      age: 45,
      gender: 'm'
    },
    {
      name:'Lisa',
      age: 38,
      gender:'f'
    }
]


function userInfo(request,response) {
  response.send(userData);
  console.log('data on the client')
}

                          //endpoints***************************//

//user information
app.get('/user-info',userInfo)





app.listen(port,()=>{console.log(`server: ${port} up and running`)})