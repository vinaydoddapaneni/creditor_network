import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';
import CNButton from '../../components/CNButton';
import './thanks.css';
class Thanks extends Component {
    render() {
        return (
            <div>
                <CNHeader />
                <div class="jumbotron text-xs-center align vert-offset-top-6">
                    <h1 class="display-3">Thank You!</h1>
                    <p class="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
                    <hr />
                    <p>
                        Having trouble? <Link to={'contact'}>Contact us</Link>
                    </p>
                    <p class="lead">
                        <CNButton class="btn btn-primary btn-sm" to={'/'} role="button" name="Continue to Homepage" />
                    </p>
                </div>
                <CNFooter />

            </div>
        )
    }
}

export default Thanks;