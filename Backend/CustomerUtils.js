const userData = require('./Data/UserData.js');
const users = userData.customers;

function getCustomerInfo(uuid){
    // return users;
    return users.filter(user => user.id == uuid);
}

function createCustomer(){
    const uuid = '5000';
    return uuid;
}

function deleteCustomer(uuid){
    userData.removeCustomer(uuid);
    return userData.customers;
    // do stuff
}

function updateCustomer(uuid){
    // do stuff
}



module.exports = {getCustomerInfo, createCustomer, deleteCustomer, updateCustomer}