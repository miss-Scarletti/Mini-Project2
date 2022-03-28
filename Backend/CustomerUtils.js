const userData = require('./Data/UserData.js');
const users = userData.customers;

function getCustomerInfo(uuid){
    return users.filter(user => user.id == uuid);
}

function createCustomer(name, email, password){
    const newUser = {
        id: createUniqID(),
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

function createUniqID(){
    return Math.floor(Math.random() * 100) + (new Date()).getTime();
}

module.exports = {getCustomerInfo, createCustomer, deleteCustomer, updateCustomer}