const express = require('express');
const app = express();

// Simple request time logger
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
 
    // This function call tells that more processing is required for the current request and is in the next middlewar function/route handler.
    next();  
 });

app.listen(3000, () => console.log('[Info] Listening on port 3000!'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/products', (req, res) => {
    
    res.send('List of products');
});

app.get('/products/:productID', (req, res) => {
    res.send(req.params);
});

// For invalid routes
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
});
