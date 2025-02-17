const products = [
    {
        name: 'Dog bed',
        id: '0',
        price: 100,
        animal: 'Dog',
        category: 'Accessories',
        subCategory: 'bed',
        image: 'https://m.media-amazon.com/images/I/81amc1cWs0L._AC_SL1500_.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Dog food - dry',
        id: '1',
        price: 70,
        animal: 'Dog',
        category: 'Food',
        subCategory: 'dryfood',
        image: 'https://m.media-amazon.com/images/I/81753eskvxL._AC_SX466_.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Dog collar - Red',
        id: '2',
        price: 120,
        animal: 'Dog',
        category: 'Accessory',
        subCategory: 'collar',
        image: 'https://www.dfordog.co.uk/user/products/red-dingo-dog-collar-red.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Dog food - wet',
        id: '3',
        price: 370,
        animal: 'Dog',
        category: 'Food',
        subCategory: 'wetfood',
        image: '/src/assets/images/dog/dog_food_wet.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Dog food - glutenfree',
        id: '4',
        price: 470,
        animal: 'Dog',
        category: 'Food',
        subCategory: 'glutenfreefood',
        image: '/src/assets/images/dog/dog_food_glutenfree.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Dog toy - squeaker',
        id: '5',
        price: 70,
        animal: 'Dog',
        category: 'Accessory',
        subCategory: 'toy',
        image: '/src/assets/images/dog/dog_seahorse_squeaker.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Cat bed',
        id: '6',
        price: 150,
        animal: 'Cat',
        category: 'Accessory',
        subCategory: 'bed',
        image: '/src/assets/images/cat/cat_bed.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Cat food - dry',
        id: '7',
        price: 140,
        animal: 'Cat',
        category: 'Food',
        subCategory: 'dryfood',
        image: '/src/assets/images/cat/cat_food_dry.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Cat food - wet',
        id: '8',
        price: 130,
        animal: 'Cat',
        category: 'Food',
        subCategory: 'wet',
        image: '/src/assets/images/cat/cat_food_wet.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Cat toy - snack mouse',
        id: '9',
        price: 30,
        animal: 'Cat',
        category: 'Accessory',
        subCategory: 'toy',
        image: '/src/assets/images/cat/cat_toy_snackMouse.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Bird cage',
        id: '10',
        price: 250,
        animal: 'Bird',
        category: 'Accessory',
        subCategory: 'cage',
        image: '/src/assets/images/bird/bird_cage1.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Bird cage',
        id: '11',
        price: 200,
        animal: 'Bird',
        category: 'Accessory',
        subCategory: 'cage',
        image: '/src/assets/images/bird/bird_cage2.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Bird Food',
        id: '12',
        price: 110,
        animal: 'Bird',
        category: 'Food',
        subCategory: 'dryfood',
        image: '/src/assets/images/bird/bird_food.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Rodent cage',
        id: '13',
        price: 140,
        animal: 'Rodent',
        category: 'Accessory',
        subCategory: 'cage',
        image: '/src/assets/images/rodent/rodent_cage.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Rodent Food',
        id: '14',
        price: 100,
        animal: 'Rodent',
        category: 'Food',
        subCategory: 'dryfood',
        image: '/src/assets/images/rodent/rodent_food.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Rodent bed',
        id: '15',
        price: 40,
        animal: 'Rodent',
        category: 'Accessory',
        subCategory: 'bed',
        image: '/src/assets/images/rodent/rodent_bed.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Rodent Toy - running wheel',
        id: '16',
        price: 70,
        animal: 'Rodent',
        category: 'toy',
        subCategory: 'Running Wheel',
        image: '/src/assets/images/rodent/rodent_toy_runningWheel.jpg',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
];

module.exports = {products}
