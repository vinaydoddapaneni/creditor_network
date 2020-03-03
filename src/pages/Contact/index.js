import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';

class Contact extends Component {
  render() {
    return (
      <div>
        {/*Main Wrapper Start*/}
        <div className="as-mainwrapper">
          {/*Header Area Start*/}
          <CNHeader />
          {/* End of Header Area */}
          {/*Breadcrumb Banner Area Start*/}
          <div className="breadcrumb-banner-area pt-70 pb-50 bg-3 vert-offset-top-7">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="breadcrumb-text">
                    <h2 className="text-center">Get In Touch</h2>
                    <div className="breadcrumb-bar">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End of Breadcrumb Banner Area*/}
          {/*Start of Contact Form And info*/}
          <div className="container">
            <div className="gray-bg fix">
              <div className="col-4 light-gray-bg contact-left">
                <div className="contact-info text-center">
                  <div className="single-contact-info">
                    <div className="single-contact-icon">
                      <i className="zmdi zmdi-email" />
                    </div>
                    <div className="single-contact-text" style={{ paddingTop: '10px' }}>
                      <span className="block">info@creditornetwork.com</span>

                    </div>
                  </div>

                  <div className="single-contact-info">
                    <div className="single-contact-icon">
                      <i className="zmdi zmdi-pin" />
                    </div>
                    <div className="single-contact-text" style={{ paddingTop: '10px' }}>
                      <span className="block">India</span>

                    </div>
                  </div>
                </div>
                <div className="followus">
                  <h4>Follow Us</h4>
                  <div className="social-links">
                    <a href="#"><i className="zmdi zmdi-facebook" /></a>
                    <a href="#"><i className="zmdi zmdi-linkedin" /></a>
                    <a href="#"><i className="zmdi zmdi-twitter" /></a>
                    <a href="#"><i className="zmdi zmdi-instagram" /></a>
                  </div>
                </div><br />
              </div>
              <div className="col-8 contact-right">
                <div className="contact-form pt-60 pb-30 fix">
                  <h4>Get In Touch</h4>
                  <form id="contact-form" action="http://demo.devitems.com/jobhere-v1/mail.php" method="post">
                    <div className="col-5 pr-6">
                      <input type="text" name="name" id="name" className="pl-20" placeholder="Name" />
                    </div>
                    <div className="col-5 pl-6">
                      <input type="text" name="email" id="email" className="pl-20" placeholder="Email" />
                    </div>
                    <div className="col-10">
                      <input type="text" name="text" id="sub" className="pl-20" placeholder="Subject" />
                    </div>
                    <div className="col-10">
                      <textarea name="message" id="message" cols={30} rows={10} placeholder="Message" className="mb-10" defaultValue={""} />
                    </div>
                    <div className="col-10 fix">
                      <button type="submit" className="button submit-btn">Submit</button>
                    </div>
                    <p className="form-messege" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/*End of Google Map*/}
          {/*End of Contact Form ANd info*/}
          {/*Start of Footer Widget-area*/}
          <CNFooter />
          {/* End of Footer area */}
          {/*End of Main Wrapper Area*/}
          {/*Start of Login Form*/}
          <div id="quickview-login">
            {/* Modal */}
            <div className="modal fade" id="productModal" tabIndex={-1} role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="zmdi zmdi-close" /></span></button>
                  </div>
                  <div className="modal-body">
                    <div className="form-pop-up-content ptb-60 pl-60 pr-60">
                      <div className="area-title text-center mb-43">
                        <img src="images/logo/logo.png" alt="jobhere" />
                      </div>
                      <form method="post" action="#">
                        <div className="form-box">
                          <input type="text" name="username" placeholder="Email" className="mb-14" />
                          <input type="password" name="pass" placeholder="Password" />
                        </div>
                        <div className="fix ptb-30">
                          <span className="remember pull-left"><input className="p-0 pull-left" type="checkbox" />Remember Me</span>
                          <span className="pull-right"><a href="#" data-toggle="modal" data-target="#forgetPassword">Forget Password</a></span>
                        </div>
                        <div>

                          <span className="pull-right"><a className="modal-view" href="#" data-toggle="modal" data-target="#register">Sign Up</a></span>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="text-uppercase">Login</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End of Login Form*/}
          {/*Start of Forget Form*/}
          <div id="quickview-login">
            {/* Modal */}
            <div className="modal fade" id="forgetPassword" tabIndex={-1} role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="zmdi zmdi-close" /></span></button>
                  </div>
                  <div className="modal-body">
                    <div className="form-pop-up-content ptb-60 pl-60 pr-60">
                      <div className="area-title text-center mb-43">
                        <img src="images/logo/logo.png" alt="jobhere" />
                      </div>
                      <form method="post" action="#">
                        <div className="form-box">
                          <input type="text" name="username" placeholder="Email" className="mb-14" />
                        </div>
                        <div className="fix ptb-30">
                          <span className="remember pull-left">Recover your password</span>
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
            </div>
          </div>
          {/*End of Forgot Form*/}
          {/*Start of Login Form*/}
          <div id="quickview-register">
            {/* Modal */}
            <div className="modal fade" id="register" tabIndex={-1} role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="zmdi zmdi-close" /></span></button>
                  </div>
                  <div className="modal-body">
                    <div className="form-pop-up-content ptb-60 pl-60 pr-60">
                      <div className="area-title text-center mb-43">
                        <img src="images/logo/logo.png" alt="jobhere" />
                      </div>
                      <form method="post" action="#">
                        <div className="form-box box2">
                          <input type="text" name="firstname" placeholder="First Name" className="mb-14" />
                          <input type="text" name="lastname" placeholder="Last Name" />
                        </div>
                        <div className="form-box">
                          <input type="email" name="emailnew" placeholder="Email" className="mb-14" />
                          <input type="password" name="pass" placeholder="Password" />
                        </div>
                        <div className="fix ptb-30">
                          <span className="remember pull-left"><input className="p-0 pull-left" type="checkbox" />Remember Me</span>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary offset-8">Submit</button>


                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End of Login Form*/}
        </div>


      </div>
    )
  }
}

export default Contact;