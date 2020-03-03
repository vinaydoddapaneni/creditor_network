import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CNFooter extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="footer-top bg-opacity-dark-blue-90 ptb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 pb-sm-30">
                                <div className="subscribe-text">
                                    
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="subscribe-form">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-widget-area ptb-10 pb-sm-45">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-5">
                                <div className="single-footer-widget">
                                    <h3 className="text-white mb-26">GET IN TOUCH</h3>
                                    
                                    <span className="text-white mb-9"><i className="fa fa-envelope" />info@creditornetwork.com</span>
                                    <span className="text-white mb-9"><i className="fa fa-globe" />www.creditornetwork.com</span>
                                    <span className="text-white mb-9"><i className="fa fa-map-marker" />India</span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3">
                                <div className="single-footer-widget">
                                    <h3 className="text-white mb-21">Pages</h3>
                                    <ul className="footer-list">
                                        <li><Link to={{pathname: "/about"}}>About</Link></li>
                                        <li><Link to={'blog'}>Blog</Link></li>
                                        {/* <li><Link to={'pricing'}>Pricing</Link></li> */}
                                        <li><Link to={'contact'}>Contact</Link></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3">
                                <div className="single-footer-widget">
                                    <h3 className="text-white mb-21">Support</h3>
                                    <ul className="footer-list">
                                    <li><Link to={'privacypolicy'}>Privacy Policy </Link></li>
                                    <li><Link to={'faqs'}>FAQ's </Link></li>
                                    <li><Link to={'termsconditions'}>Terms&Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 d-md-none d-lg-block">
                                <div className="single-footer-widget">
                                    <h3 className="text-white mb-21">Industry</h3>
                                    <ul className="footer-list">
                                        <li><Link to={'#'}>Education</Link></li>
                                        <li><Link to={'#'}>Automobile</Link></li>
                                        <li><Link to={'#'}>Construction</Link></li>
                                        <li><Link to={'#'}>Electronics</Link></li>
  
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="single-footer-widget">
                                    <h3 className="text-white mb-21">Get It on Stores</h3>
                                    <ul className="footer-list">
                                        <h5 className='text-primary'>Coming Soon</h5>
                                        {/* <li><Link to={'#'}><img src="assets/images/logo/Google-Play-Store-Icon.png" alt="playstore" /></Link></li>
                                       <br/>
                                        <li><Link to={'#'}><img src="assets/images/logo/apple-store-app-icon.png" alt="Appstore" /></Link></li> */}
 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End of Footer Widget-area*/}
                {/* Start of Footer area */}
                <div className="copyright-area text-center ptb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="footer-text">
                                    <span className="text-white block"> Copyright© 2019 <Link to={'#'}>Creditor Network </Link>.&nbsp;&nbsp;&nbsp;All rights are reserved.</span>


                                        <Link to={'privacypolicy'}>Privacy Policy </Link>|&nbsp;
                                        <Link to={'faqs'}>FAQ's </Link>|&nbsp;
                                        <Link to={'termsconditions'}>Terms&Conditions</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </footer>
        )
    }
}

export default CNFooter;