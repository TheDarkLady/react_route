import React from 'react'
import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchListOfProducts } from '../pages/Api'
export default function ReactQueryDemo() {
    const {data:query, isLoading} = useQuery({
        queryKey: ['productList'],
        queryFn: () => fetchListOfProducts(),
    });
    const getQueryClient= useQueryClient()
    const {mutateAsync:handleAddNewProductMutation} = useMutation({
        mutationFn: addNewProduct,
        onSuccess: () => {
            getQueryClient.invalidateQueries({queryKey: ['productList']})
        }
    })
    async function handleAddNewProduct() {
      await handleAddNewProductMutation(productTitle)
      setProductTitle('')

    }
    const [productTitle, setProductTitle] = useState('')
    if (query.isLoading) {
        return <h1>Loading...</h1>
    }
    console.log(query)
  return (
    <div>
      <h1>React Query</h1>
      <div>
        <input type="text" name="product"  value={productTitle} onChange={(e) => setProductTitle(e.target.value)} placeholder='Entry Product'/>
        <button onClick={() => handleAddNewProduct(productTitle)} disabled={productTitle.trim() === 0}>Add New Product</button>
      </div>
      <ul>
        {
            query.data?.map(product => <li key={product.id}>{product.title}</li>)
        }
      </ul>
    </div>
  )
}
