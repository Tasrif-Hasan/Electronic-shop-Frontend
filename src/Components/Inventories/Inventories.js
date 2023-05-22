import React from 'react';
import { Link } from 'react-router-dom';
import UseProducts from '../../Hook/UseProducts';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [products, setProducts] = UseProducts()
    return (
        <div className='container mt-4 mb-5'>
            <h2 style={{ color: 'darkcyan' }} className='text-center mb-4'> My Inventory</h2>
            <div className='products '>
                {
                    products.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }

            </div>
            <p className='text-center mt-4'> <Link style={{ fontFamily: 'cursive' }} to='/manageinventory' >Show All Products</Link></p>
        </div>
    );
};

export default Inventories;