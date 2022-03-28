const userData = require('./Data/UserData.js');
const users = userData.customers;

function getCustomerInfo(uuid){
    return users.filter(user => user.id == uuid);
}

function createCustomer(name, email, password){
    const newUser = {
        id: Math.floor(Math.random() * 100),
        name: name,
        email: email,
        password: password,
    }

    userData.addCustomer(newUser);
}

function deleteCustomer(uuid){
    userData.removeCustomer(uuid);
    return userData.customers;
}

function updateCustomer(uuid){
    // do stuff
}



module.exports = {getCustomerInfo, createCustomer, deleteCustomer, updateCustomer}