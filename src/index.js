const express = require('express');
const bodyParser = require('body-parser');

const api = express();
// api.use((req,res,next) => {
//   console.log('hello');
//   next();
// });
api.use(express.static(__dirname + '/public'));
api.use("/styles", express.static(__dirname + '/styles'));
api.use(bodyParser.json());

api.listen(3000, () => {
  console.log("Api up and running")
});

// api.get('/',(req, res) => {
//   res.send('Hello world');
// });

api.post('/add', (req,res) => {
  console.log(req.body);
  res.send('It works');
});