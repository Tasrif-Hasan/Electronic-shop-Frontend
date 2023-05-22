import axios from 'axios';
import './MyItems.css'
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemDetails from '../MyItemDetails/MyItemDetails';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const email = user?.email

    const [products, setProduct] = useState([])
    useEffect(() => {

        const run = async () => {
            await axios.get(`https://warehouse-server-v9j4.onrender.com/myItem/${email}`)
                .then(function (res) {
                    setProduct(res.data)
                })

        }
        run()
    }, [email, products])

    return (
        <div className='w-50 mx-auto mt-3 mb-5'>
            <h2 className='text-center mb-3'>My product   {products.length}</h2>
            <div className='myitem'>
                {
                    products.map(product => <MyItemDetails
                        key={product._id}
                        product={product}
                    >

                    </MyItemDetails>)
                }
            </div>
        </div>
    );
};

export default MyItems;