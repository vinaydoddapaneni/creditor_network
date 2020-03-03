import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CNHeader from '../../components/CNHeader';
// import CNFooter from '../../components/CNFooter';


import '../Login/util.css';
import '../Login/main.css';



class Forgot extends Component {
    render() {
        return (
            <div>

                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src="assets/images/otp.png" alt="IMG" />
                            </div>
                            <form className="login100-form validate-form">
                                <span className="login100-form-title ">
                                    <Link to={'/'}><img src="assets/images/logo2.png" alt='' /></Link><br /><br />
                                    {/* Enter OTP */}
                                </span>
                                <div className="wrap-input100 validate-input  col-12" data-validate="Valid email is required: ex@abc.xyz ">
                                    <input className="input100" type="text" name="email" placeholder="One Time Password " />

                                    <span className="symbol-input100 ">
                                        <i className="fa fa-key" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="container-login100-form-btn  col-12">
                                    <button className="login100-form-btn">
                                        Submit
                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

export default Forgot;