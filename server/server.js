require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

/**
 * middleware
 */
const passport = require('passport');
app.use(passport.initialize());
require('./middleware/Passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

/**
 * router
 */
app.get('/', (req, res) => {
   res.send('hello');
});

app.post('/', (req, res) => {
   console.log(req.body);
   res.json(req.body);

});

app.use('/api/users/', require('./routes/User'));
app.use('/api/post/', require('./routes/Post'));
/**
 * connect mongoose
 */
mongoose.connect(MONGO_URI, { useNewUrlParser : true, useUnifiedTopology : true})
.then(() => console.log('Cool...!! database connect'))
.catch(err => console.log(`Sorry ... Database error ${err}`));


/**
 * http server
 */
app.listen(PORT, () => {
   console.log(`Server started on ${PORT}`);
});