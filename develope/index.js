const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const reservations = [];
const waitlist = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/view-tables', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));
app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/api/tables', (req, res) => res.json(reservations));
app.get('/api/waitlist', (req, res) => res.json(waitlist));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));