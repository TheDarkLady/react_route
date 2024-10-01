import React from 'react'

const productList = [
    { id: 1, title: 'Product 1' },
    { id: 2, title: 'Product 2' },
    { id: 3, title: 'Product 3' },
    { id: 4, title: 'Product 4' },
    { id: 5, title: 'Product 5' },
]
export const fetchListOfProducts = async() => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return productList
}
export const addNewProduct = async() => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return newlyCreatedProduct = {
        id: productList.length + 1,
        title: productName
    }
    productList.push(newlyCreatedProduct)
    return newlyCreatedProduct
}