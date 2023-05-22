import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseProducts from '../../Hook/UseProducts';

const ManageInventoryDetails = (props) => {
    const { _id, name, img, description, price, supplierName, quantity } = props.product;

    const navigate = useNavigate();
    const handleAddItem = () => {
        navigate('/add')
    }

    // delete section
    const [products, setProducts] = UseProducts()
    const handleDeleteBtn = id => {
        const procced = window.confirm('Are you sure for delete ??')
        if (procced) {
            const url = `https://warehouse-server-v9j4.onrender.com/myItem/${id}`
            console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingItem = products.filter(product => product._id !== id)
                    setProducts(remainingItem)
                })

        }
    }


    return (
        <div className='product-details ps-5 mb-5'>
            <img src={img} alt="" />
            <h4 className='mt-0'>Name: {name}</h4>
            <p className='mb-0'> Description: {description}</p>
            <p className='mb-0'> Price: {price}</p>
            <p className='mb-0'>Quantity : {quantity}</p>
            <p className='mt-0 mb-3'> Supplier: {supplierName}</p>
            <button onClick={handleAddItem} className='btn btn-success mb-3 me-5'>Add</button>
            <button onClick={() => handleDeleteBtn(_id)} className='btn btn-danger mb-3 ms-3'>Delete</button>

        </div>
    );
};

export default ManageInventoryDetails;