import React from 'react';
import UseProducts from '../../Hook/UseProducts';
import OfferDetails from '../OfferDetails/OfferDetails';

const Offer = () => {
    const [products, setProducts] = UseProducts()
    return (
        <div className='container mb-5'>
            <h2 style={{ color: 'purple' }} className='text-center pb-4'>EID Offer</h2>
            <div className='products '>
                {
                    products.slice(0, 3).map(product => <OfferDetails
                        key={product._id}
                        product={product}
                    ></OfferDetails>)
                }

            </div>
        </div>
    );
};

export default Offer;