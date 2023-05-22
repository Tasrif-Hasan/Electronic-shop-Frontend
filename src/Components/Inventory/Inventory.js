import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = (props) => {
    const { _id, name, img, description, price, quantity, supplierName } = props.inventory;
    const navigate = useNavigate();
    const handleInventory = id => {
        navigate(`/invoice/${id}`)
    }
    return (
        <div className='product-details ps-5' >
            <img src={img} alt="" />
            <h4 className='mt-0'>Name: {name}</h4>
            <p className='mb-0'> Description: {description}</p>
            <p className='mb-0'> Price: {price}</p>
            <p className='mb-0'>Quantity :{quantity}</p>
            <p className='mb-3'> Supplier: {supplierName}</p>
            <button onClick={() => handleInventory(_id)} className='mb-3 mt-0 update-btn'>Update</button>
        </div >
    );
};

export default Inventory;