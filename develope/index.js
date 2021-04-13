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
app.get('/reservation', (req, res) => res.sendFile(path.join(__dirnamne, 'reserve.html')));
app.get('/api/tables', (req, res) => res.json(reservations));
app.get('/api/tables/:reservations', (req, res) => {
    const chosen = req.params.reservations;
    for (let index = 0; index < reservations.length; index++) {
        if( chosen === reservations[index].routeName) {
            return res.json(reservations[index])
        };
    } 
    return res.json(false);
})
app.get('/api/waitlist', (req, res) => res.json(waitlist));
app.get('/api/waitlist/:waitlist', (req, res) => {
    const chosen = req.params.waitlist;
    for (let index = 0; index < waitlist.length; index++) {
        if( chosen === waitlist[index].routeName) {
            return res.json(waitlist[index])
        };
    } 
    return res.json(false);
})

app.post('/api/tables', (req, res) => {
    const newReservation = req.body;
    if (reservations.length < 5) {
        newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
    
        reservations.push(newReservation);
        return res.json(true);
        
    } else {
        newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
        waitlist.push(newReservation);
        return res.json(false)
    }

})
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));