import React from 'react';
import './Review.css'
import review1 from '../../image/reviews/review1.png'
import review2 from '../../image/reviews/review2.png'
import review3 from '../../image/reviews/review3.png'

const Review = () => {
    return (
        <div className='container mb-4' >
            <h2 className='text-center mb-4' style={{ color: 'navy' }}>Our Service</h2>
            <div className='products '>
                <div className='review text-center review1'>
                    <img className='mt-5' width='70' src={review1} alt="" />
                    <p className='mt-1 mb-0'>Delivery</p>
                    <h5 className='mb-4'>In 24 hours</h5>
                </div>
                <div className='review text-center review2'>
                    <img className='mt-5' width='70' style={{ borderRadius: '15px' }} src={review3} alt="" />
                    <p className='mt-3 mb-0'>Best Product</p>
                    <h5 className='mb-4 '>9.2</h5>
                </div>
                <div className='review text-center review3'>
                    <img className='mt-5' width='100' src={review2} alt="" />
                    <p className='mt-1 mb-0'>Shipment</p>
                    <h5 >Free</h5>
                </div>

            </div>
        </div>
    );
};

export default Review;