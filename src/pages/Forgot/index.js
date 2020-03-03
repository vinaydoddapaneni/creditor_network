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
                                <img src="assets/images/forgot.png" alt="IMG" />
                            </div>
                            <form className="login100-form validate-form">
                                <span className="login100-form-title">
                                    <Link to={'/'}><img src="assets/images/logo2.png" alt='' /></Link><br /><br />

                                    {/* Forgot Password */}
                                </span>
                                <div className="wrap-input100  col-12 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" name="email" placeholder="Email" style={{borderRadius:'10px'}}/>
                                    {/* <span className="focus-input100" /> */}
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="container-login100-form-btn  col-12">
                                    <button className="login100-form-btn" style={{borderRadius:'10px'}}>
                                        Submit
                    </button>
                                </div>
                                <div className="text-center p-t-12">
                                    <Link className="txt2 fa fa-home btn btn-primary" to={'/'} aria-hidden="true" style={{ color: 'white', borderRadius: '10px' }}>

                                        &nbsp;Back To Home
                                    </Link>
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