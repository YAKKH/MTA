/* eslint-disable indent */
/* eslint-disable no-tabs */
const express = require('express');
const pgController = require('./controller/pgController');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/localhost:3000', express.static(path.join(__dirname, '../public')));

// app.get('/', pgController.getList, (req, res) => {
// 	return res.status(200).json({ message: 'hello' });
// });

app.get('/', pgController.getTrain, (req, res) => {
	return res.status(200).send(res.locals.list.rows);
});

app.post('/post', pgController.postMessage, pgController.getTrain, (req, res) => {
	return res.status(200).send(res.locals.list.rows);
});

// app.delete('/list/:id', pgController.deleteListItem, (req, res) => {
// 	return res.status(200).json({ recieved: true });
// });

// app.patch('/list', pgController.updateList, (req, res) => {
// 	return res.status(200).json({ recieved: true });
// });

app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});
