const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false}));

app.get('/', (req, res) => 
    res.json({ msg: 'Welcome to the Payment Pro API' })
);

// Define Routes
app.use('/api/creditors', require('./routes/creditors'));
app.use('/api/payments', require('./routes/payments'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>(`Server started on port ${PORT}`));