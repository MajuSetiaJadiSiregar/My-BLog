const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

/**
 * middleware
 */
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

app.listen(PORT, () => {
   console.log(`Server started on ${PORT}`);
});