import React, { useEffect, useState } from 'react'
import CardComp from './common/CardComp'

export default function ProductComp() {
    const [product, setProducts] = useState([])

    useEffect(() => {
        handleFetch()
    }, [])

    const handleFetch = async () => {
        let data = await fetch("https://dummyjson.com/products")
        let json = await data.json()

        setProducts(json.products)
        console.log('handle fetch');
    }
    console.log(product);

    // !map function always take single object before .map()


    return (
        <>

            <CardComp products={product}/>

        </>
    )
}
