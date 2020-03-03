import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';
import CNButton from '../../components/CNButton';
// import { IsEmpty, Map } from "react-lodash";
// import Dropdown from 'react-bootstrap/Dropdown'
class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.location.state.results ? this.props.location.state.results : {}
    }
  }


  // TODO: This is missing functionality for sub-menu here from SUI core examples.
  // The "Publish To Web" item should contain a sub-menu.











  render() {
    let { results } = this.state;
    return (
      <div>
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
                        <h2 className="text-center">Search Results</h2>
                        <div className="breadcrumb-bar">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




              <div className="vert-offset-top-2 job-post-area pb-50 pb-sm-35">
            <div className="container">

              <div className="all-job-post">
                {/* Nav tabs */}

                {/* Tab panes */}
                <div className="tab-content">
                  <div className="tab-pane active" id="featured">
                    <div className="row">
                      <div className='col-xl-7 col-sm-7 vert-offset-top-1 offset-0'>
                        <input type="text" class="form-control col-8" />&nbsp;
                  <button type="submit" class="btn btn-primary btn-lg button_size" name="Search" style={{ padding: '0.7rem 1rem' }}> Search</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

              {/* <div className="offset-5 vert-offset-top-4">
                
                
                <Link to={'pricing'} className="btn btn-primary offset-2 vert-offset-top-1">Subscribe</Link>
               &nbsp;
                <Link to={'#'} className="btn btn-primary vert-offset-top-1 dropdown-toggle">Export</Link>
  
                
              </div> */}
              <div className="vert-offset-top-1 job-post-area pb-90 pb-sm-35">
                <div className="container">

                  <div className="all-job-post">
                    {/* Nav tabs */}

                    {/* Tab panes */}
                    <div className="tab-content">
                      <div className="tab-pane active" id="featured">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="single-job-post">
                              {/* <div className="img-icon">
                                  <img src="images/company-logo/1.png" alt />
                                </div> */}
                              <div className='col-06'>
                                <div className="address">
                                  <p><b>Report id. #200301</b></p>
                                  <p>May 09 2019</p>
                                  <p>02:30PM</p>
                                </div>
                              </div>
                              <div className='col-06'>
                                <div className="address">
                                  <p><b>Title:</b> My Mobile is taken by xyz and i report to xzy company but there didn't care.</p>
                                  <p><b>Tags:</b> Mobile</p>
                                  <p><b>Amount:</b> 10,000/-</p>
                                </div>
                              </div>
                              <div className="button-box"><Link to={'detail'} className="btn btn-primary vert-offset-bottom-2">View Detail</Link></div>
                            </div>
                            {/* </div>
                            <div className="col-md-8"> */}
                            <div className="single-job-post" style={{ backgroundColor: '#f3f2f1' }}>
                              {/* <div className="img-icon">
                                  <img src="images/company-logo/1.png" alt />
                                </div> */}
                              <div className='col-06'>
                                <div className="address">
                                  <p><b>Report id. #200301</b></p>
                                  <p>May 09 2019</p>
                                  <p>02:30PM</p>
                                </div>
                              </div>
                              <div className='col-06'>
                                <div className="address">
                                  <p><b>Title:</b> My Mobile is taken by xyz and i report to xzy company but there didn't care.</p>
                                  <p><b>Tags:</b> Mobile</p>
                                  <p><b>Amount:</b> 10,000/-</p>
                                </div>
                              </div>
                              <div className="button-box"><Link to={'detail'} className="btn btn-primary vert-offset-bottom-2">View Detail</Link></div>
                            </div>
                          </div>



                          <div className="col-md-4">
                            <div className="loadmorebtn">
                              {/* <Link to={'#'} className="button">Load More</Link> */}
                              <img src="assets/images/ads/bcma6f3jo.png" className="rounded" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Job Post Area */}
              {/*Start of Footer Widget-area*/}
              <CNFooter />
              {/* End of Footer area */}
            </div>
            {/*End of Main Wrapper Area*/}
          </div>
        </div>
      </div>
    )
  }
}

export default Results;