import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';

class Select extends Component {
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
                      <h2 className="text-center">File a Report</h2>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of Breadcrumb Banner Area*/}
            {/* Select Area Start */}
            <div className="about-area ptb-130 ptb-sm-60">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="abt-content">
                      <h4><span>File </span> a Report</h4>
                      <p><strong></strong></p>
                      <div className="row">
                        {/* Bussiness starts*/}
                        <div className="col-lg-6 col-md-4">
                          <h4>Business</h4>
                          <p>The term is also often used colloquially (but not by lawyers or by public officials) to refer to a company. A company, on the other hand, is a separate legal entity</p>
                          {/* <Link to={'business1'} className="vert-offset-top-1 btn btn-primary" style={{ borderRadius: 5 }}>Choose</Link> */}
                          <Link class="vert-offset-top-1 vert-offset-bottom-1 modal-view button" data-toggle="popover" title="Raise Issue" to={"business1"} style={{ backgroundColor: 'rgb(37, 140, 204)', textDecoration: 'none', color: 'white' }}>Choose</Link><br /><br /><br />
                        </div>
                        {/* Personal Starts */}
                        <div className="col-lg-6 col-md-4">
                          <h4>Personal</h4>
                          <p>The term is also often used colloquially (but not by lawyers or by public officials) to refer to a company. A company, on the other hand, is a separate legal entity</p>
                          <Link class="vert-offset-top-1 vert-offset-bottom-1 modal-view button" data-toggle="popover" title="Raise Issue" to={"personal1"} style={{ backgroundColor: 'rgb(37, 140, 204)', textDecoration: 'none', color: 'white' }}>Choose</Link><br /><br /><br />
                        </div>
                      </div>


                    </div>
                  </div>
                  <div className="col-lg-3">
                    <img src="assets/images/ads/bcma6f3jo.png" className="rounded" />
                  </div>
                </div>
              </div>
            </div>
            {/* Select Area End */}




            {/*Start of Footer Widget-area*/}
            <CNFooter />
            {/* End of Footer area */}
          </div>
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
                        <img src="assets/images/logo/logo.png" alt="jobhere" />
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
                        <img src="assets/images/logo/logo.png" alt="jobhere" />
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
                        <img src="assets/images/logo/logo.png" alt="jobhere" />
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
                        <div className="fix">
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

export default Select;
