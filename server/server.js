const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();
const app = express()
app.use(express.json());
app.use(cors())

//routes
app.use('/api/products', require('./routes/products'));


// Define a route that returns JSON
// app.get('/api/products', (req, res) => {
    
//     res.json(products);
// });


// app.get('/api/products/:id', (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.products.find(p => p.id === productId);
  
//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ message: 'Product not found' });
//   }
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
