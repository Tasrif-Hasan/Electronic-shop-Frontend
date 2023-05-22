import React from 'react';
import './OfferDetails.css'
const OfferDetails = (props) => {
    const { _id, name, img, description, price, quantity, supplierName } = props.product
    return (
        <div className='position-relative '>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill mt-20 bg-danger">
                20% off
                <span className="visually-hidden">unread messages</span>
            </span>
            <div className='product-details ps-5 pb-2' >
                <img src={img} alt="" />
                <h4 className='mt-0'>Name: {name}</h4>
                <p className='mb-0'> Description: {description}</p>
                <p className='mb-0'> Price: {price}</p>
                <p className='mb-0'>Quantity :{quantity}</p>
                <p className='mb-3'> Supplier: {supplierName}</p>
            </div >

        </div>
    );
};

export default OfferDetails;
