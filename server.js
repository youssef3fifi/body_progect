const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

// Data file path
const dataFile = path.join(__dirname, 'data', 'bookings.json');

// Ensure data directory and file exist
if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
}
if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]));
}

// Helper function to read bookings
const readBookings = () => {
    const data = fs.readFileSync(dataFile, 'utf8');
    return JSON.parse(data);
};

// Helper function to write bookings
const writeBookings = (bookings) => {
    fs.writeFileSync(dataFile, JSON.stringify(bookings, null, 2));
};

// Generate booking reference
const generateReference = () => {
    return 'BK' + Date.now() + Math.floor(Math.random() * 1000);
};

// Routes
app.get('/api/bookings', (req, res) => {
    try {
        const bookings = readBookings();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});

app.get('/api/bookings/:id', (req, res) => {
    try {
        const bookings = readBookings();
        const booking = bookings.find(b => b.id === req.params.id);
        if (booking) {
            res.json(booking);
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch booking' });
    }
});

app.post('/api/bookings', (req, res) => {
    try {
        const bookings = readBookings();
        const newBooking = {
            id: generateReference(),
            ...req.body,
            createdAt: new Date().toISOString()
        };
        bookings.push(newBooking);
        writeBookings(bookings);
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create booking' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
