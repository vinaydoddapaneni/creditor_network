import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '../../actions/ActionTypes';


import '../Login/util.css';
import '../Login/main.css';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            mobile: '',
            password: '',
            errorMessage: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value, errorMessage: '' });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { fullname, mobile, email, password } = this.state;
        if (fullname && mobile && email && password) {
            this.props.signUp(fullname, mobile, email, password);
        } else {
            this.setState({ errorMessage: 'Please enter the Details' });
        }
    }

    handleErrorMessage = (message) => {
        this.setState({ errorMessage: message });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.type === ActionTypes.SIGN_UP_FAIL) {
            this.handleErrorMessage(nextProps.message);
        }

        if (nextProps.type === ActionTypes.SIGN_UP_SUCCESS) {
            this.handleRedirect();
        }
    }
    handleRedirect = () => {
        this.setState({ redirect: true })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/thanks' />
        }
    }
    render() {
        let { email, fullname, password, mobile, errorMessage } = this.state;
        // let { type } = this.props;
        return (
            <div>
                {this.renderRedirect()}
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src="assets/images/register.png" alt="IMG" className="img-responsive vert-offset-top-8" />
                            </div>
                            <form className="login100-form validate-form" name="Form" onSubmit={this.handleSubmit}>
                                <span className="login100-form-title">
                                    <Link to={'/'}><img src="assets/images/logo2.png" alt='' /></Link>

                                </span>
                                <div className='row'>
                                    <div className="col-10 offset-1 wrap-input100 validate-input">
                                        <input className="input100" type="text" name="fullname" placeholder="Full Name" value={fullname} onChange={this.handleChange} style={{border:'1px solid rgb(255, 0, 0)', borderRadius:'10px'}}/>

                                        <span className="symbol-input100">
                                            <i className="fa fa-user" aria-hidden="true" />
                                        </span>
                                    </div>
                                    
                                </div>

                                <div className='row'>
                                    <div className="col-10 offset-1 wrap-input100 validate-input">
                                        <input className="input100" type="text" name="mobile" placeholder="Mobile No." value={mobile} onChange={this.handleChange} style={{border:'1px solid rgb(255, 0, 0)', borderRadius:'10px'}}/>

                                        <span className="symbol-input100">
                                            <i className="fa fa-phone" aria-hidden="true" />
                                        </span>
                                    </div>
                                    
                                </div>

                                <div className='row'>
                                    <div className="col-10 offset-1 wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                        <input className="input100" type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} style={{border:'1px solid rgb(255, 0, 0)', borderRadius:'10px'}}/>

                                        <span className="symbol-input100">
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                        </span>
                                    </div>
                                    
                                </div>

                                <div className='row'>
                                    <div className="col-10 offset-1 wrap-input100 validate-input" data-validate="Password is required">
                                        <input className="input100" type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} style={{border:'1px solid rgb(255, 0, 0)', borderRadius:'10px'}}/>

                                        <span className="symbol-input100">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                        </span>
                                    </div>
                                    
                                </div>

                                {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                                <div className='row'>
                                    <div className="container-login100-form-btn">
                                        <button className="col-8 offset-2 login100-form-btn" style={{borderRadius:'10px'}}>
                                            Register
                                    </button>
                                    </div>
                                </div>
                                <div className="text-center p-t-12">
                                    <span className="txt1">
                                        Forgot
                                    </span>&nbsp;
                                    <Link className="txt2" to={'forgot'}>
                                        Username / Password?
                                    </Link>
                                </div>
                                <div className="text-center p-t-10">
                                    <Link className="txt2" to={'login'}>
                                        Login your Account
                                <i className="fa fa-arrow-right m-l-5" aria-hidden="true" />
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
        message: authReducers.message
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);