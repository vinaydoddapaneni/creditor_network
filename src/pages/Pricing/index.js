import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';
import '../Home/media.css';

class Pricing extends Component {
  render() {
    return (
      <div>
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
                      <h2 className="text-center">Subscribe</h2>
                      <div className="breadcrumb-bar">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of Breadcrumb Banner Area*/}
            {/*Start of Single Job Post Area*/}
            <div className="single-job-post-area ptb-80 ptb-sm-50">
              <div className="container">
                <div className="row">
                  {/*Pricing*/}
                  <section className="pricing py-5">
                    <div className="container">
                      <div className="row">
                        {/* Free Tier */}
                        <div className="col-lg-4">
                          <div className="card mb-sm-6">
                            <div className="card-body">
                              <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                              <h6 className="card-price text-center">₹0<span className="period">/month</span></h6>
                              <hr />
                              <ul className="fa-ul">
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Single User</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>5GB Storage</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Unlimited Public Projects</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Community Access</li>
                                <li className="text-muted"><span className="fa-li"><img src="assets/images/icons/wrong.png" alt="wrong" /></span>Unlimited Private Projects</li>
                                <li className="text-muted"><span className="fa-li"><img src="assets/images/icons/wrong.png" alt="wrong" /></span>Dedicated Phone Support</li>
                                <li className="text-muted"><span className="fa-li"><img src="assets/images/icons/wrong.png" alt="wrong" /></span>Free Subdomain</li>
                                <li className="text-muted"><span className="fa-li"><img src="assets/images/icons/wrong.png" alt="wrong" /></span>Monthly Status Reports</li>
                              </ul>
                              <Link to={'#'} className="btn btn-block btn-primary text-uppercase">Subscribe</Link>
                            </div>
                          </div>
                        </div>
                        {/* Plus Tier */}
                        <div className="col-lg-4">
                          <div className="card mb-sm-6">
                            <div className="card-body">
                              <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                              <h6 className="card-price text-center">₹199<span className="period">/month</span></h6>
                              <hr />
                              <ul className="fa-ul">
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span><strong>5 Users</strong></li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>50GB Storage</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Unlimited Public Projects</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Community Access</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Unlimited Private Projects</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Dedicated Phone Support</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Free Subdomain</li>
                                <li className="text-muted"><span className="fa-li"><img src="assets/images/icons/wrong.png" alt="wrong" /></span>Monthly Status Reports</li>
                              </ul>
                              <Link to={'#'} className="btn btn-block btn-primary text-uppercase">Subscribe</Link>
                            </div>
                          </div>
                        </div>
                        {/* Pro Tier */}
                        <div className="col-lg-4">
                          <div className="card mb-sm-6 ">
                            <div className="card-body">
                              <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                              <h6 className="card-price text-center">₹499<span className="period">/Year</span></h6>
                              <hr />
                              <ul className="fa-ul">
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span><strong>Unlimited Users</strong></li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>150GB Storage</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Unlimited Public Projects</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Community Access</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Unlimited Private Projects</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Dedicated Phone Support</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Unlimited</li>
                                <li><span className="fa-li"><img src="assets/images/icons/tick.png" alt="tick" /></span>Monthly Status Reports</li>
                              </ul>
                              <Link to={'#'} className="btn btn-block btn-primary text-uppercase">Subscribe</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/*Pricing*/}
                </div>
              </div>
            </div>
          </div>
          {/*End of Single Job Post Area*/}
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
                        <img src="assets/images/logo/logo.png" alt="Logo" />
                      </div>
                      <form method="post" action="#">
                        <div className="form-box">
                          <input type="text" name="username" placeholder="Email" className="mb-14" />
                          <input type="password" name="pass" placeholder="Password" />
                        </div>
                        <div className="fix ptb-30">
                          <span className="remember pull-left"><input className="p-0 pull-left" type="checkbox" />Remember Me</span>
                          <span className="pull-right"><Link to={'#'} data-toggle="modal" data-target="#forgetPassword">Forget Password</Link></span>
                        </div>
                        <div>
                          <span className="pull-right"><Link className="modal-view" to={'#'} data-toggle="modal" data-target="#register">Sign Up</Link></span>
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
                        <img src="assets/images/logo/logo.png" alt="Logo" />
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
                        <img src="assets/images/logo/logo.png" alt="Logo" />
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
                          <button type="submit" className="text-uppercase">Submit</button>
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

export default Pricing;