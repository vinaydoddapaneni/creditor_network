import React, { Component } from 'react';
// import CNButton from './CNButton';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '../actions/ActionTypes';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            submitted: false,
            show: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }
    handleShow = () => {
        this.setState({ show: true });
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
            this.handleErrorMessage('Please enter the Credentials');
        }
    }

    handleErrorMessage = (message) => {
        this.setState({ errorMessage: message });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.type === ActionTypes.SIGN_IN_FAIL) {
            this.handleErrorMessage(nextProps.message);
        }

        if (nextProps.type === ActionTypes.SIGN_IN_SUCCESS) {
            localStorage.setItem('userData', JSON.stringify(nextProps.userData));
            localStorage.setItem('token', nextProps.token);
            this.props.closeModal(true);
        }
    }

    handleSignUp = () => {
        this.props.handleShow("Register");
    }
    handleForgot = (mVal) => {
        this.props.handleShow("Forgot");
    }

    render() {
        let { email, password, submitted, errorMessage } = this.state;
        let { type } = this.props;
        return (
            <div id="quickview-login">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="form-pop-up-content ptb-60 pl-60 pr-60">
                            <div className="area-title text-center mb-43">
                                <img src="assets/images/logo/logo.png" alt="Logo" />
                            </div>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className="form-box">
                                    <input type="text" name="email" placeholder="Email" className="mb-14" value={email} onChange={this.handleChange} />
                                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                                    {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                                </div>
                                <div className="fix ptb-30">
                                    <span className="remember pull-left"><input className="p-0 pull-left" type="checkbox" />Remember Me</span>
                                    <span><input type='submit' className="modal-view pull-right" to={"#"} onClick={this.handleForgot} name="Forget Password?" /></span>
                                    {/*  <span class="pull-right"><Link to={'#'}>Forget Password?</Link></span>*/}
                                </div>
                                <div>
                                    {/* <span class="pull-right"><Link to={'#'}>Register</Link></span>*/}
                                    <span className="pull-right"><input type='submit' className="modal-view" to={"#"} onClick={this.handleSignUp} name="Sign Up" /></span>
                                </div>
                                <div className="text-center">
                                    <button type="submit" data-dismiss="modal" active className="text-uppercase">{type == ActionTypes.SIGN_IN_PENDING ? <i className="fas fa-spinner fa-spin" style={{ fontSize: 20 }}></i> : 'Login'}</button>
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