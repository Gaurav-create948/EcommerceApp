const express = require('express');
const app = express();

const usermodeldesign = require('../Schemas/UserSchema');
const user = usermodeldesign;

app.post('/', (req, res) => {
    console.log('getting the request on login route');
})