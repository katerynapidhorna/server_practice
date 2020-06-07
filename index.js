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



function giveDatabyName(u) {
  const message = `
    <html>
    <head><title>User info</title></head>
    <body>
    <h1>Person ${u.name}</h1>
    <p>Age ${u.age}</p>
    <p> Gender ${u.gender}</p>
    </body>
    `
    return message;
}

function userInfo(request,response) {
  response.send(userData);
  console.log('data on the client')
}

function findOneByName(request,response) {
  const name = request.params.name;
  const result = userData.find((user) => {
    return user.name === name;
  })

  if(result) {
    response.send(giveDatabyName(result));
  } else {
    response.send(`<h1>no user</h1>`);
  }
 
}

                          //endpoints***************************//

//user information
app.get('/user-info',userInfo)

app.get('/user-info/:name', findOneByName) 





app.listen(port,()=>{console.log(`server: ${port} up and running`)})