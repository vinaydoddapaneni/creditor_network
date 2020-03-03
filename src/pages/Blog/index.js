import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';

class Blog extends Component {
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
                      <h2 className="text-center">Our Blog</h2>
                      <div className="breadcrumb-bar">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of Breadcrumb Banner Area*/}
            {/*Start of Blog Area*/}
            <div className="blog-area pt-130 pb-120 ptb-sm-60">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="blog-posts">
                      <div className="row">
                        {/* Single Item Start */}
                        <div className="col-lg-6 col-md-6">
                          <div className="single-blog hover-effect">
                            <div className="blog-image box-hover">
                              <Link to={'#'} className="block">
                                <img src="assets/images/blog/1.jpg" alt="Blog1" />
                              </Link>
                            </div>
                            <div className="blog-text">
                              <h4><Link to={'blog-details'}>Standard blog post.</Link></h4>
                              <div className="blog-post-info">
                                <span>Feb 13.</span>
                                <span>ADMIN NAME</span>
                                <span>4 comments</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adiicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim</p>
                            </div>
                          </div>
                        </div>
                        {/* Single Item End */}
                        {/* Single Item Start */}
                        <div className="col-lg-6 col-md-6">
                          <div className="single-blog hover-effect">
                            <div className="blog-image box-hover">
                              <Link to={'#'} className="block">
                                <img src="assets/images/blog/2.jpg" alt="Blog2" />
                              </Link>
                            </div>
                            <div className="blog-text">
                              <h4><Link to={'blog-details'}>Standard blog post.</Link></h4>
                              <div className="blog-post-info">
                                <span>Feb 13.</span>
                                <span>ADMIN NAME</span>
                                <span>4 comments</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adiicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim</p>
                            </div>
                          </div>
                        </div>
                        {/* Single Item End */}
                        {/* Single Item Start */}
                        <div className="col-lg-6 col-md-6">
                          <div className="single-blog hover-effect">
                            <div className="blog-image box-hover">
                              <Link to={'#'} className="block">
                                <img src="assets/images/blog/3.jpg" alt="Blog3" />
                              </Link>
                            </div>
                            <div className="blog-text">
                              <h4><Link to={'blog-details'}>Standard blog post.</Link></h4>
                              <div className="blog-post-info">
                                <span>Feb 13.</span>
                                <span>ADMIN NAME</span>
                                <span>4 comments</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adiicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim</p>
                            </div>
                          </div>
                        </div>
                        {/* Single Item End */}
                        {/* Single Item Start */}
                        <div className="col-lg-6 col-md-6">
                          <div className="single-blog hover-effect">
                            <div className="blog-image box-hover">
                              <Link to={'#'} className="block">
                                <img src="assets/images/blog/4.jpg" alt="Blog4" />
                              </Link>
                            </div>
                            <div className="blog-text">
                              <h4><Link to={'blog-details'}>Standard blog post.</Link></h4>
                              <div className="blog-post-info">
                                <span>Feb 13.</span>
                                <span>ADMIN NAME</span>
                                <span>4 comments</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adiicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim</p>
                            </div>
                          </div>
                        </div>
                        {/* Single Item End */}
                        {/* Single Item Start */}
                        <div className="col-lg-6 col-md-6">
                          <div className="single-blog hover-effect">
                            <div className="blog-image box-hover">
                              <Link to={'#'} className="block">
                                <img src="assets/images/blog/5.jpg" alt="Blog5" />
                              </Link>
                            </div>
                            <div className="blog-text">
                              <h4><Link to={'blog-details'}>Standard blog post.</Link></h4>
                              <div className="blog-post-info">
                                <span>Feb 13.</span>
                                <span>ADMIN NAME</span>
                                <span>4 comments</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adiicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim</p>
                            </div>
                          </div>
                        </div>
                        {/* Single Item End */}
                        {/* Single Item Start */}
                        <div className="col-lg-6 col-md-6">
                          <div className="single-blog hover-effect">
                            <div className="blog-image box-hover">
                              <Link to={'#'} className="block">
                                <img src="assets/images/blog/6.jpg" alt="Blog6" />
                              </Link>
                            </div>
                            <div className="blog-text">
                              <h4><Link to={'blog-details'}>Standard blog post.</Link></h4>
                              <div className="blog-post-info">
                                <span>Feb 13.</span>
                                <span>ADMIN NAME</span>
                                <span>4 comments</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adiicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim</p>
                            </div>
                          </div>
                        </div>
                        {/* Single Item End */}
                        {/* Single Item Start */}
                        <div className="col-lg-6 col-md-6">
                          <div className="single-blog hover-effect">
                            <div className="blog-image box-hover">
                              <Link to={'#'} className="block">
                                <img src="assets/images/blog/7.jpg" alt="Blog7" />
                              </Link>
                            </div>
                            <div className="blog-text">
                              <h4><Link href={'blog-details'}>Standard blog post.</Link></h4>
                              <div className="blog-post-info">
                                <span>Feb 13.</span>
                                <span>ADMIN NAME</span>
                                <span>4 comments</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adiicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim</p>
                            </div>
                          </div>
                        </div>
                        {/* Single Item End */}
                        {/* Single Item Start */}
                        <div className="col-lg-6 col-md-6">
                          <div className="single-blog hover-effect">
                            <div className="blog-image box-hover">
                              <Link to={'#'} className="block">
                                <img src="assets/images/blog/8.jpg" alt="Blog8" />
                              </Link>
                            </div>
                            <div className="blog-text">
                              <h4><Link to={'blog-details'}>Standard blog post.</Link></h4>
                              <div className="blog-post-info">
                                <span>Feb 13.</span>
                                <span>ADMIN NAME</span>
                                <span>4 comments</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adiicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim</p>
                            </div>
                          </div>
                        </div>
                        {/* Single Item End */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 sidebar-right">
                    <div className="single-sidebar-widget mb-48">
                      <div className="sidebar-widget-title">
                      </div>
                      <div className="search-container">
                        <form action="#" method="post">
                          <input type="text" placeholder="Search keyword" />
                          <button>Search</button>
                        </form>
                      </div>
                    </div>
                    <div className="single-sidebar-widget mb-48">
                      <div className="sidebar-widget-title">
                        <h4><span>Categories</span></h4>
                      </div>
                      <ul className="sidebar-widget-lists">
                        <li className="ptb-10"><Link to={'#'}>Popular posts<span className="ml-9">(9)</span></Link></li>
                        <li className="ptb-10"><Link to={'#'}>Productivity <span className="ml-9">(5)</span></Link></li>
                        <li className="ptb-10"><Link to={'#'}>Resumes <span className="ml-9">(2)</span></Link></li>
                        <li className="ptb-10"><Link to={'#'}>Women <span className="ml-9">(9)</span></Link></li>
                        <li className="ptb-10"><Link to={'#'}>Quitting <span className="ml-9">(9)</span></Link></li>
                        <li className="ptb-10"><Link to={'#'}>Popular posts <span className="ml-9">(7)</span></Link></li>
                        <li className="ptb-10"><Link to={'#'}>Productivity <span className="ml-9">(2)</span></Link></li>
                        <li className="ptb-10"><Link to={'#'}>Resumes <span className="ml-9">(5)</span></Link></li>
                      </ul>
                    </div>
                    <div className="single-sidebar-widget mb-48">
                      <div className="sidebar-widget-title">
                        <h4><span>Recent Posts</span></h4>
                      </div>
                      <div className="recent-posts">
                        <div className="recent-post-item ptb-20">
                          <h5 className="mb-6"><Link to={'#'}>There are many variations of</Link></h5>
                          <span className="block"><i className="zmdi zmdi-calendar-check mr-10" />11 May 2018</span>
                        </div>
                        <div className="recent-post-item ptb-20">
                          <h5 className="mb-6"><Link to={'#'}>There are many variations of</Link></h5>
                          <span className="block"><i className="zmdi zmdi-calendar-check mr-10" />15 Mar 2018</span>
                        </div>
                        <div className="recent-post-item ptb-20">
                          <h5 className="mb-6"><Link to={'#'}>There are many variations of</Link></h5>
                          <span className="block"><i className="zmdi zmdi-calendar-check mr-10" />22 Feb 2018</span>
                        </div>
                        <div className="recent-post-item ptb-20">
                          <h5 className="mb-6"><Link to={'#'}>There are many variations of</Link></h5>
                          <span className="block"><i className="zmdi zmdi-calendar-check mr-10" />01 Jan 2015</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
          {/*End of Login Form*/}
        </div>


      </div>
    )
  }
}

export default Blog;