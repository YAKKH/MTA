/* eslint-disable indent */
/* eslint-disable no-tabs */
const express = require('express');
// const pgController = require('./controller/pgController');
const testController = require('./controller/testController');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.json());

app.use('/localhost:3000', express.static(path.join(__dirname, '../public')));

// app.get('/', pgController.getList, (req, res) => {
// 	return res.status(200).json({ message: 'hello' });
// });

// app.get('/', pgController.getTrain, (req, res) => {
// 	return res.status(200).send(res.locals.list);
// });
// app.post('/post', pgController.postMessage, pgController.getTrain, (req, res) => {
	// console.log("RESPONSE: ", res)
	// console.log(res.locals.list[ 0 ])
// 	return res.status(200).json(res.locals.list);
// });

app.get('/test', testController.createUser, (req, res) => {
	return res.sendStatus(200);
});

app.get('/getUsers', testController.findUsers, (req, res) => {
	return res.status(200).json(res.locals.users);
});

app.get('/getTrains', testController.findTrains, (req, res) => {
	return res.status(200).json(res.locals.trains);
});

app.get('/getComplaints', testController.findComplaints, (req, res) => {
	return res.status(200).json(res.locals.complaints);
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
