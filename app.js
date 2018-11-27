const express = require('express')
const app = express()

app.set('views', './views');

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('title');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
