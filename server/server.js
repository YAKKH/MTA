/* eslint-disable indent */
/* eslint-disable no-tabs */
const express = require('express');
const userController = require('./controller/userController');
const trainController = require('./controller/trainController');
const complaintController = require('./controller/complaintController');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3000;
const authRouter = require('./auth');

app.use(express.json());
app.use(authRouter);

app.use('/', express.static(path.join(__dirname, '../src/components/')));

app.post('/login', userController.login, (req, res) => {
	return res.status(200).json(res.locals.user);
});

app.post('/signup', userController.signup, userController.login, (req, res) => {
	return res.status(200).json(res.locals.user);
});

app.get('/complaints/:train', trainController.findTrain, complaintController.findComplaints, (req, res) => {
	return res.status(200).json(res.locals.complaints);
});

app.post('/complaints/:train', trainController.findTrain, complaintController.createComplaint, (req, res) => {
	return res.sendStatus(200);
});

app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});
