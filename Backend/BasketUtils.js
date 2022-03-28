function getBasket(uuid){
    // return users basket
}

function createBasket(uuid){
    // create basket
}

function addItemToBasket(uuid, item, amount = null){
    // add item to users basket ---- optional add amount of items
}

function deleteProductFromBasket(uuid, item, amount = null){
    // remove item from users basket --- optinal is to remove an amount of that item
}

module.exports = { getBasket, createBasket, addItemToBasket, deleteProductFromBasket };