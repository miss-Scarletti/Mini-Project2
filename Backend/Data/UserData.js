let customers = [
    {
        id: '0',
        name: 'Basic',
        email: 'basic@person.com',
        password: 'person',
    },
    {
        id: '1',
        name: 'Basic1',
        email: 'basic1@person.com',
        password: 'person',
    },
    {
        id: '2',
        name: 'Basic2',
        email: 'basic2@person.com',
        password: 'person',
    },
];

function addCustomer(customer){
    customers.push(customer);
}

function getCustomerIndex(uuid){
    const customer = customers.filter(customer => {customer.id == uuid});
    return customers.indexOf(customer);
}

function removeCustomer(uuid){
    const index = getCustomerIndex(uuid);
    customers = customers.splice(index, index);
}

function updateCustomer(customer){
    const index = getCustomerIndex(customer.id);
    customers[index] = customer;
}

module.exports = {customers, addCustomer, removeCustomer, updateCustomer}