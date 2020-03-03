import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '../../actions/ActionTypes';

import './util.css';
import './main.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            submitted: false,
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.attachRef = target => this.setState({ target });
        this.state = {
            show: false,
        };


    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value, errorMessage: '' });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.signIn(email, password);
        } else {
            this.setState({ errorMessage: 'Please enter the Credentials' });
        }
    }

    handleErrorMessage = (message) => {
        this.setState({ errorMessage: message });
    }
    handleRedirect = () => {
        this.setState({ redirect: true })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.type === ActionTypes.SIGN_IN_FAIL) {
            this.handleErrorMessage(nextProps.message);
        }

        if (nextProps.type === ActionTypes.SIGN_IN_SUCCESS) {
            localStorage.setItem('userData', JSON.stringify(nextProps.userData));
            localStorage.setItem('token', nextProps.token);
            this.handleRedirect();
        }
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }
    render() {
        // const { show, target } = this.state;
        let { errorMessage, email, password } = this.state;
        return (
            <div>
                {this.renderRedirect()}
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src="assets/images/login.png" alt="IMG" />
                            </div>
                            <form className="login100-form validate-form" name="Form" onSubmit={this.handleSubmit}>
                                <span className="login100-form-title">
                                    <Link to={'/'}><img src="assets/images/logo2.png" alt='login' /></Link>
                                    {/* Login */}
                                </span>
                                <div className='row'>
                                    <div className="col-10 offset-1 wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                        <input className="input100 col-12" type="text" name="email" placeholder="Email" onChange={this.handleChange} value={email} style={{ border: '1px solid rgb(255, 0, 0)', borderRadius: '10px' }} />

                                        <span className="symbol-input100">
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                        </span>

                                    </div>

                                </div>
                                <div className='row'>
                                    <div className="col-10 offset-1 wrap-input100 validate-input" data-validate="Password is required">
                                        <input className="input100" type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password} style={{ border: '1px solid rgb(255, 0, 0)', borderRadius: '10px' }} />

                                        <span className="symbol-input100">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                        </span>
                                    </div>

                                </div>
                                {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                                <div className='row'>
                                    <div className="container-login100-form-btn">
                                        <button className="col-8 offset-2 login100-form-btn" style={{ borderRadius: '10px' }}>
                                            Login
                                        </button>
                                    </div>
                                </div>
                                <div className='row'></div>
                                <div className="container-login100-form-btn">
                                    <span className="txt1 offset-3">Forgot</span>  &nbsp;
                                    <Link className="txt2" to={'forgot'}>Username / Password?</Link>
                                </div>
                                <div className="text-center p-t-12">
                                    <Link className="txt2" to={'register'}>
                                        Create your Account
                                        &nbsp;<i className="fa fa-arrow-right" aria-hidden="true" />
                                    </Link>
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

function mapStateToProps({ authReducers }) {
    return {
        type: authReducers.type,
        message: authReducers.message,
        userData: authReducers.userData,
        token: authReducers.token
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);