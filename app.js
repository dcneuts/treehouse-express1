const express = require('express');
const app = express();

// root route for app
app.get('/', (request, response) => {
	response.send('I love treehouse!');
});

// setup express dev server
app.listen(3000);