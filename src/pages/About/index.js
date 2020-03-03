import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';

class About extends Component {
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
                      <h2 className="text-center">About Us</h2>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of Breadcrumb Banner Area*/}
            {/* About Area Start */}
            <div className="about-area ptb-130 ptb-sm-60">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="abt-img img-full">
                      <img src="assets/images/bg/about.jpg" alt="about" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="abt-content">
                      <h4><span>About</span> Creditor Network</h4>
                      <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</strong></p>
                      <p>Lorem ipsum dolor sit amet, consectel adipis elit, sed do eiusmod tempor incidi ut labore et dolore m aliqua. Ut enim ad minim veniam, quis nostrud exercitatik ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                      <p>sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudanti totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archite beatae vitae dicta sunt explicabo. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About Area End */}



            {/*Start of Blog Area*/}
            <div className="team-area pt-10 pb-100 pt-sm-60 pb-sm-30">
              <div className="container">
                {/* Section Title Start */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="section-title text-center ">
                      <h2>Team </h2>
                      {/* <p>Lorem ipsum dolor sit amet, contetur adipisil elit sed do</p> */}
                    </div>
                  </div>
                </div>
                {/* Section Title End */}
                <div className="row">
                  {/* Single Team Start */}
                  <div className="col-md-6 col-lg-3">
                    <div className="single-team">
                      <div className="team-img">
                        <img src="assets/images/candidates/3.png" alt="Team1" />
                      </div>
                      <div className="team-content">
                        <h5>Jon Dowe</h5>
                        <h6>CEO Jobhere</h6>
                      </div>
                    </div>
                  </div>
                  {/* Single Team End */}
                  {/* Single Team Start */}
                  <div className="col-md-6 col-lg-3">
                    <div className="single-team">
                      <div className="team-img">
                        <img src="assets/images/candidates/3.png" alt="Team1" />
                      </div>
                      <div className="team-content">
                        <h5>Jon Dowe</h5>
                        <h6>CEO Jobhere</h6>
                      </div>
                    </div>
                  </div>
                  {/* Single Team End */}
                  {/* Single Team Start */}
                  <div className="col-md-6 col-lg-3">
                    <div className="single-team">
                      <div className="team-img">
                        <img src="assets/images/candidates/3.png" alt="Team1" />
                      </div>
                      <div className="team-content">
                        <h5>Jon Dowe</h5>
                        <h6>CEO Jobhere</h6>
                      </div>
                    </div>
                  </div>
                  {/* Single Team End */}
                  {/* Single Team Start */}
                  <div className="col-md-6 col-lg-3">
                    <div className="single-team">
                      <div className="team-img">
                        <img src="assets/images/candidates/3.png" alt="Team1" />
                      </div>
                      <div className="team-content">
                        <h5>Jon Dowe</h5>
                        <h6>CEO Jobhere</h6>
                      </div>
                    </div>
                  </div>
                  {/* Single Team End */}
                </div>
              </div>
            </div>
            {/*End of Blog Area*/}
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
                          {/*                                        <span class="pull-right"><Link to={'#'}>Register</Link></span>*/}
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
        </div>
      </div>
    )
  }
}

export default About;