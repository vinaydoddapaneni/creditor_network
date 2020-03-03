import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import { Modal } from 'react-bootstrap';

class CNModal extends Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            component: null
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.show === true) {
            this.handleShow();
        }
        if (nextProps.component) {
            console.log(nextProps.component);
            this.handleComponent(nextProps.component);
        }
    }
    handleComponent = (compValue) => {
        console.log(compValue);
        this.setState({ component: compValue });
    }
    render() {
        let { show, component } = this.state;
        return (
            <Modal show={show} onHide={this.handleClose} keyboard={false} backdrop={'static'} centered={true}>
                <Modal.Header closeButton />

                {component == "Register" && <Register closeModal={this.handleClose} handleShow={this.handleComponent} />}
                {component == "Login" && <Login closeModal={this.handleClose} handleShow={this.handleComponent} />}
                {component == "Forgot" && <ForgotPassword closeModal={this.handleClose} />}
            </Modal>
        )
    }
}

export default CNModal;