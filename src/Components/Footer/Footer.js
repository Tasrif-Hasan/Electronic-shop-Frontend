import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='footer'>
            <div className='container '>
                <div className="row footer-body">
                    <div className='col col-lg-3 col-6'>
                        <p className='  mb-0'><small>Copyright @ {year}</small></p>
                        <p className='mb-0'><small>All Rights Reserved</small></p>
                        <p className='mt-0'> By Sohag Hasan</p>
                    </div>
                    <div className='col col-lg-3 col-6'>
                        <h5>Information</h5>
                        About us
                        <br />
                        More Search
                        <br />
                        Blog
                        <br />
                        Testimonial
                    </div>
                    <div className='col col-lg-3 col-6'>
                        <h5>Helpful Links</h5>
                        Service
                        <br />
                        Support
                        <br />
                        Terms and Conditions
                        <br />
                        Privacy
                    </div>
                    <div className='col col-lg-3 col-6'>
                        <h5>Contact me</h5>
                        rakibulhasan@gmail.com
                        01790139036
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;