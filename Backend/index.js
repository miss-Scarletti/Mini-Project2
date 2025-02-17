const hostname = 'localhost';
// const hostname = 'http://127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const productsUtils = require('./ProductsUtils.js');
// import productsUtils from './ProductsUtils';
const customerUtils = require('./CustomerUtils.js');
const basketUtils = require('./BasketUtils.js');

// Simple request time logger
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
    // This function call tells that more processing is required for the current request and is in the next middlewar function/route handler.
    next();  
 });

 app.use('/static', express.static('public'));
//  app.use(express.static('files'));

app.listen(3000, () => console.log(`[Info] Server listening at http://${hostname}:${port}/`));

// app.get('/', (req, res) => res.send('Hello World!'));

function getAllCustomers(req, res) {

    res.send({hello: 'world'});
}
app.get('/', getAllCustomers);

app.get('/customers/:customerId', (req,res) => {
    res.send(customerUtils.getCustomerInfo(req.params.customerId));
});

app.put('/customers/:customerId', (req,res) => {
    res.send(customerUtils.updateCustomer(req.params.customerId));
});

app.delete('/customers/:customerId', (req,res) => {
    res.send(customerUtils.deleteCustomer(req.params.customerId));
});

app.post('/customers/:name/:email/:password', (req,res) => {
    res.send(customerUtils.createCustomer(req.params.name, req.params.email, req.params.password));
});


app.get('/products', (req, res) => {
    
    // res.send('List of products');
    res.send(productsUtils.getProducts());
});

app.get('/products/info', (req, res) => {
    res.send(productsUtils.getMultipleProductsInfo()); //undone function
});

app.get('/products/product/:productID', (req, res) => {
    res.send(productsUtils.getSingleProductInfo(req.params.productID));
});

app.get('/products/category/:category', (req, res) => {
    res.send(productsUtils.getCategoryItems(req.params.category));
});

// For invalid routes
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
});
