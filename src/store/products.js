let initialState = {
    products: [
        {
            category: 'Electronics',
            name: 'apple laptop 💻',
            description: 'lightest laptop, completely transformed by the Apple',
            price: '$1,999',

            img: 'https://th.bing.com/th/id/OIP.tlYzZHeIbKt9QDkKrl141wHaFj?pid=ImgDet&rs=1',
        },
        {
            category: 'Electronics',
            name: 'Apple Watch Series 7 ⌚️ ',
            description: 'Apple Watch Series 7 features a larger and more advanced display',
            price: '400$',
          
            img: 'https://cdn1.smartprix.com/rx-iozvWCR1D-w1200-h1200/apple-watch-se-44mm.jpg',
        },
        {
            category: 'Food',
            name: 'Pizza 🍕',
            description: 'More cheese ',
            price: '10$',

            img: 'https://th.bing.com/th/id/R.5481e8365c4f4e45df5b68ba0e07c86f?rik=qXmVeFZLeMciJQ&pid=ImgRaw&r=0',
        },

        {
            category: 'Food',
            name: 'Burger 🍔 ',
            description: 'Beef burger with fries',
            price: '10$',

            img: 'https://th.bing.com/th/id/OIP.S-7kwn5kP5HR5gdO7BmmtgHaE8?pid=ImgDet&rs=1',
        },

    ]

}


const ReduceProducts = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ACTIVE":

            let product = state.products.filter(product => {
                return product.category === payload ? product.category : null

            })
            console.log(product);
            return { ...state, product: product };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

export default ReduceProducts