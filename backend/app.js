const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://admin:12345@cluster0.k5fll.mongodb.net/shubhank', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));