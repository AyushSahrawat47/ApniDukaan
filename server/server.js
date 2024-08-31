const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();
const app = express()
app.use(express.json());
app.use(cors())

//routes
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
