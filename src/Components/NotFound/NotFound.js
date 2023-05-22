import React from 'react';
import notfound from '../../image/notfound.png'

const NotFound = () => {
    return (
        <div className='container d-flex justify-content-between'>
            <img width='600px' src={notfound} alt="" />
            <h2>Sorry !! No data data found</h2>
        </div>
    );
};

export default NotFound;