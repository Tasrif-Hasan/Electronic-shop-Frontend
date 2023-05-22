import { useEffect, useState } from 'react';

const UseProductDetails = productId => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `https://warehouse-server-v9j4.onrender.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts]
};

export default UseProductDetails;