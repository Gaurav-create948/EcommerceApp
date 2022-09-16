const { AppRegistration } = require('@mui/icons-material');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('everything is fine');
})

app.get('/about', (req, res) => {
    res.send('this is about page');
})

app.listen(5000, function(){
    console.log('listening on port 5000');
})f