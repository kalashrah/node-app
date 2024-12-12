
var express = require('express');
var app = express();
const mongoose = require('mongoose');

const PORT = 4000

const URI = 'mongodb://root:example@mongo:27017'


async function main() {
  await mongoose.connect(URI).then(() => {
    console.log('connected db')
  }).catch((err) => {
    console.log('Error Connecting db : \n ', err);
  });

}

app.get('/', (reg, res) => {
  res.send('<h1>k10 !</h1>')
})
app.listen(PORT, () => {
  console.log(`app listen on port: ${PORT}`);
})

main()