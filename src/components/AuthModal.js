import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import { Modal } from 'react-bootstrap';

class AuthModal extends Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            component:"Login"
        };
    }

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.show === true){
          this.handleShow();
        }
    }
    render() {
         let {show} =this.state;
         let {component} = this.props;
        return (
            <Modal show={show} onHide={this.handleClose} keyboard={false} backdrop={'static'} centered={true}>
            <Modal.Header closeButton />
                {component === "Login" && <Login closeModal={this.handleClose}/>}
                {component === "Register" && <Register closeModal={this.handleClose}/>}
                {component === "Forgot" && <ForgotPassword closeModal={this.handleClose}/>}
            </Modal>
        )
    }
}

export default AuthModal;