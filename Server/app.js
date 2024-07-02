const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const financeRoutes = require('./routes/financeRoutes');
require('./config/passport');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Failed to connect to MongoDB', err);
});

// Routes
app.use('/auth', authRoutes);
app.use('/api/finance', financeRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to FinLLM API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
