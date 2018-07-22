const fs = require('fs')
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

binary = fs.readFileSync(path.join(__dirname, 'random-bin-data.txt'));

function hexToBinary(data) {
  let binString = '';
  let int32View = new Int32Array(data);
  for (let i=0;i<int32View.length;i++){
    binString += int32View[i].toString(2);
  }
  return binString;
}

app.use(express.static('public'));

app.get('/data', (req, res) => {
  let binData = hexToBinary(binary);
  let binString = binData.toString();
  res.send(binString);
});

app.listen(8000, () => {
  console.log(`Listening on port ${port}...`);
})
