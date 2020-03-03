import React, { Component } from 'react';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };
    render() {
        return (
            <div id="quickview-forgotpassword">
                {/* Modal */}
                {/* <div className="modal fade" id="forget" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel-3">
                    <div className="modal-dialog" role="document"> */}
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="form-pop-up-content ptb-60 pl-60 pr-60">
                                    <div className="area-title text-center mb-43">
                                        <img src="assets/images/logo/logo.png" alt="Logo" />
                                    </div>
                                    <form method="post" action="#">
                                        <div className="form-box">
                                            <input type="text" name="email" placeholder="Email" className="mb-14" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                        <div className="fix ptb-30">
                                            <span className="remember pull-left">If you don't Remember the password then?</span>
                                        </div>
                                        <div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="text-uppercase">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            //     </div>
            // </div>
        )
    }
}

export default ForgotPassword;