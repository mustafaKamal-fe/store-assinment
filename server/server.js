const express = require('express');
const app = express();
const port = 3001;

app.get('/api/user', (req, res) => {
	res.send({ message: 'Hello World!' });
});
app.listen(port, () => console.log(`Dolphin app listening on port ${port}!`));
