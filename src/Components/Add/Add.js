
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Add = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const email = user?.email

    const handleAddItem = async (e) => {
        e.preventDefault()
        const supplierName = e.target.supplierName.value;
        const UserName = e.target.UserName.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const quantity = e.target.quantity.value;
        const picture = e.target.picture.value;
        const product = {
            supplierName,
            UserName,
            price,
            description,
            quantity,
            picture,
        }
        console.log(product);
        const newProduct = {
            ...product, email: email
        }
        await axios.post('https://warehouse-server-v9j4.onrender.com/addItem', newProduct)
            .then(function (res) {
                if (res?.data?.insertedId) {
                    navigate('/myitems')
                }
            })
    }



    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mt-3 mb-3   '>Added New Product</h2>
            <form className='d-flex flex-column' onSubmit={handleAddItem}>
                <input className='mb-2' placeholder='UserName' type="text" value={user?.displayName} name="UserName" />
                <input className='mb-2' placeholder='email' type="email" value={user?.email} />
                <input className='mb-2' placeholder='SupplierName' type="text" name="supplierName" />
                <textarea className='mb-2' placeholder='Description' type="text" name="description" />
                <input className='mb-2' placeholder='Price' type="number" name="price" />
                <input className='mb-2' placeholder='Quantity' type="number" name='quantity' />
                <input className='mb-2' placeholder='Photo URL' type="text" name="picture" />
                <input type="submit" value="Add Service" className='btn btn-primary mb-3' />
            </form>


        </div>
    );
};

export default Add;