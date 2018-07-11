// required
const express = require('express');
const mongoose = require('mongoose');
// init app to setup with express
const app = express();

// connect to mlab
let db = require(`./config/keys`).mongoURI;
mongoose.connect(db)
    .then(() => console.log("app connected to mlab"))
    .catch(err => console.log(err));

// routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// listen
let port = process.env.port || 5000;
app.listen(port, () => console.log(`server running on port${port}`));