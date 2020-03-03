import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '../actions/ActionTypes';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            mobile: '',
            password: '',
            errorMessage: '',
            submitted: false,
            redirect: false
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
        let { fullname, email, mobile, password, errorMessage } = this.state;
        let { type } = this.props;
        return (
            <div>
                {this.renderRedirect()}
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="form-pop-up-content ptb-60 pl-60 pr-60">
                            <div className="area-title text-center mb-43">
                                <img src="assets/images/logo/logo.png" alt="Logo" />
                            </div>
                            <form name="Form" onSubmit={this.handleSubmit}>
                                <div className="form-box">
                                    <input type="text" name="fullname" placeholder="Full Name Koushik" className="mb-14" value={fullname} onChange={this.handleChange} />
                                    <input type="text" name="mobile" placeholder="Mobile#" className="mb-14" value={mobile} onChange={this.handleChange} />
                                </div>
                                <div className="form-box">
                                    <input type="email" name="email" placeholder="Email" className="mb-14" value={email} onChange={this.handleChange} />
                                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                                    {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                                </div>
                                <div className="fix ptb-30">
                                    <span className="remember pull-left"><input className="p-0 pull-left" type="checkbox" />Remember Me</span>
                                </div>
                                <div className="text-center">
                                    <button onClick={this.handleSubmit} className="text-uppercase">{type == ActionTypes.SIGN_UP_PENDING ? <i className="fas fa-spinner fa-spin" style={{ fontSize: 20 }}></i> : 'Register'}</button>
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