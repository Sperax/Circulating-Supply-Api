const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const port = process.env.PORT || 80;

app.get('/circulatingsupply/', async function(req, res) {
  let circulatingsupply = 5000000000;
  let account1 = "0x0f35e69af4db499dfb4ee1bec3e25bf48de2a143";
  let account2 = "0x7c24305fe66a9fdce2dd79ad5c9c05c6082b511e";
  let account3 = "0x86bf4908fece9a2cf06cb5c63c2e6052bf7f3470";
  let account4 = "0x2fea94e9e58ebb98f2ff6225ec32f2339f705b1d";
  let account5 = "0x6b75bf5ac9e5ef2fd01660c3555aaf015ba24439";
  let account6 = "0x19697cf184f69bc25ea742d49f6ec1639f2bc98b";
  
  // Account 1
  await axios.get("https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x9631483f28b7f5cbf7d435ab249be8f709215bc3&address=" + account1 + "&tag=latest&apikey=GEFK4JWQN58RJ1M5IKJKT2NACZATDAWZ5U")
    .then((result) => {
      circulatingsupply = circulatingsupply - (result.data.result / 10 ** 18);
    })
    .catch((err) => {
      console.log(err);
    })

  await axios.get("https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x9631483f28b7f5cbf7d435ab249be8f709215bc3&address=" + account2 + "&tag=latest&apikey=GEFK4JWQN58RJ1M5IKJKT2NACZATDAWZ5U")
    .then((result) => {
      circulatingsupply = circulatingsupply - (result.data.result / 10 ** 18);
    })
    .catch((err) => {
      console.log(err);
    })

  await axios.get("https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x9631483f28b7f5cbf7d435ab249be8f709215bc3&address=" + account3 + "&tag=latest&apikey=GEFK4JWQN58RJ1M5IKJKT2NACZATDAWZ5U")
    .then((result) => {
      circulatingsupply = circulatingsupply - (result.data.result / 10 ** 18);
    })
    .catch((err) => {
      console.log(err);
    })

  await axios.get("https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x9631483f28b7f5cbf7d435ab249be8f709215bc3&address=" + account4 + "&tag=latest&apikey=GEFK4JWQN58RJ1M5IKJKT2NACZATDAWZ5U")
    .then((result) => {
      circulatingsupply = circulatingsupply - (result.data.result / 10 ** 18);
    })
    .catch((err) => {
      console.log(err);
    })

  await axios.get("https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x9631483f28b7f5cbf7d435ab249be8f709215bc3&address=" + account5 + "&tag=latest&apikey=GEFK4JWQN58RJ1M5IKJKT2NACZATDAWZ5U")
    .then((result) => {
      circulatingsupply = circulatingsupply - (result.data.result / 10 ** 18);
    })
    .catch((err) => {
      console.log(err);
    })

  await axios.get("https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x9631483f28b7f5cbf7d435ab249be8f709215bc3&address=" + account6 + "&tag=latest&apikey=GEFK4JWQN58RJ1M5IKJKT2NACZATDAWZ5U")
    .then((result) => {
      circulatingsupply = circulatingsupply - (result.data.result / 10 ** 18);
    })
    .catch((err) => {
      console.log(err);
    })
 
  while(circulatingsupply == null) {
    
  }
  
  
  res.status(200).send({"circulatingsupply": circulatingsupply});
})

app.listen(port)
