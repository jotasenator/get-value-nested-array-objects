products = [
    {
        name: 'Menu1',
            subitems: [
                {
                    name: 'Menu2'
                },
        ]
    },
    {
        name: 'Menu3',
            subitems: [
                {
                    name: 'Menu4',
                    subitems: [
                        {
                            name:'Menu5'
                        },
                        {
                            name: 'Menu6',
                            subitems: [
                                {
                                    name: 'Menu7'
                                },
                                {
                                    name: 'Menu8',
                                    subitems: [
                                        {
                                            name: 'Menu9'
                                        },
                                        {
                                            name: 'Menu10'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
        ]
    },
]


// var itemsToBuy = {
//     milk: {
//         quantity: 5,
//         price: 20
//     },
//     bread: {
//         quantity: 2,
//         price: 15
//     },
//     potato: {
//         quantity: 3,
//         price: 10
//     }
// }

// console.log(Object.keys(itemsToBuy))
// console.log(Object.values(itemsToBuy).map(x => x.price))

const _getNames = (products = []) =>
    products.reduce((names, { name, subitems = [] }) => {
        names.push(name);
        if (subitems.length > 0) {
            names.push(..._getNames(subitems));
        }
        return names;
    }, []);
console.log(_getNames(products));