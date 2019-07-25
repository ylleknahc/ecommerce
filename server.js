const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json());

require('./routes')(app);

app.listen(8000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port 8000");
    }
})