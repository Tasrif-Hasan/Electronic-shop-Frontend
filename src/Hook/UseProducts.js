import { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://warehouse-server-v9j4.onrender.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts]
};

export default UseProducts;