const express = require('express');
const app = express();

app.set('view engine', 'pug');

// root route for app
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/cards', (req, res) => {
	res.render('card', {prompt: "Who is buried in Grant's tomb?"});
});

// setup express dev server
app.listen(3000, () => {
	console.log('The application is running on localhost:3000')
});