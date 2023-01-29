const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://gaurav:sonu%4012345@giftapp-cluster.noynvon.mongodb.net/Gift-data", {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log('successful'))
.catch(err => console.log(err));

module.exports = mongoose;