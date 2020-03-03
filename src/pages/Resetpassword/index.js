import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';

class Thanks extends Component {
    render() {
        return (
            <div>

                <CNHeader />
                <div class="jumbotron text-xs-center vert-offset-top-6">
                    <img src='assets/images/reset.png' alt=' '/>
                    <p class="lead"><strong>Check your email</strong><br /><br /> we have sent a message to creditornetwork@gmail.com.</p>
                    <hr />
                    <p class="lead">
                        <Link class="btn btn-primary btn-sm" to={'/'} role="button">Go to Mail</Link>
                    </p>
                    <p>
                        <br />
                        If you have not received the mail,<Link to={'contact'}> Click here</Link> to resend it.
                    </p>

                </div>
                <CNFooter />

            </div>
        )
    }
}

export default Thanks;