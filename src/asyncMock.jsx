const products = [
    {
        id: '1',
        name : 'Barra Olimpica de 20 kg.',
        price: '35000',
        category: 'Barras Olimpicas',
        img: 'https://www.corpomachine.com/Files/48757/Img/04/Barra-olimpica-profesional-20kg-ironsports-negro-0001-zoom.jpg',
        stock: 20,
        description: 'Barra Olimpica con rulemanes',
    },
    {
        id: '2',
        name : 'Barra Olimpica de 15 kg.',
        price: '30000',
        category: 'Barras Olimpicas',
        img: 'https://www.corpomachine.com/Files/48757/Img/25/Barra-olimpica-profesional-15kg-ironsports-0001-zoom.jpg',
        stock: 20,
        description: 'Barra Olimpica con rulemanes',
    },
    {
        id: '3',
        name : 'Barra Olimpica W.',
        price: '32000',
        category: 'Barras Olimpicas',
        img: 'https://sportexfit.com/wp-content/uploads/2019/11/Barra-w-olimpica-1009x1024.jpg',
        stock: 20,
        description: 'Barra Olimpica con rulemanes',
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)

    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId ))
        }, 500)
    })
}