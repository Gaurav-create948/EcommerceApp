const { AppRegistration } = require('@mui/icons-material');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('everything is fine');
})

app.listen(5000, function(){
    console.log('listening on port 5000');
})