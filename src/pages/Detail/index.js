import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';
import './style.css';


import Carousel from 'react-bootstrap/Carousel'
class Detail extends Component {
  render() {
    return (
      <div>
        <CNHeader />
        {/*Main Wrapper Start*/}
        <div className="as-mainwrapper">
          {/*Header Area Start*/}

          {/* End of Header Area */}
          {/*Breadcrumb Banner Area Start*/}
          <div className="breadcrumb-banner-area pt-70 pb-50 bg-3 vert-offset-top-7">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="breadcrumb-text">
                    <h2 className="text-center">Report Detail</h2>
                    <div className="breadcrumb-bar">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End of Breadcrumb Banner Area*/}
          {/*Start of Blog Area*/}
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
          <div className="blog-area ptb-100 ptb-sm-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="single-blog hover-effect mb-50">

                    <div className="blog-text">
                      <h4>Report id. #200301</h4>
                      <h3><span style={{ color: 'red', textAlign: 'justify', textJustify: 'inter-word' }}>Complaint Review: </span> My Mobile is taken by  and i report to  company but there didn't response.</h3>
                      <div className="blog-post-info vert-offset-top-1">
                        <span><b>Submitted:</b> May 09 2019.</span>
                        <span><b>Updated:</b> April 13 2019.</span>
                        <span><b>Reported By:</b> Abul</span>
                        <hr />
                      </div>
                      <div >
                        <span style={{ color: '#7a7a7a', display: 'inline-block', fontFamily: 'montserratregular', fontSize: '12px', marginRight: '26px', position: 'relative', textTransform: 'uppercase' }}>
                          <ol>
                            <li><b>*Phone:</b> 1234567890.</li>
                            <li><b>*Web:</b> <Link style={{ fontSize: '12px' }} target='_'>www.booksinshow.com</Link></li>
                            <li><b>*Category:</b> Mobile</li>
                            <li><b>*Amount:</b> 10,000/-</li></ol></span>

                      </div>
                      <h4>Description :</h4>
                      <div style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                        <p className="mb-25">It is a long established fact that a reader will be distracted by the readable content of a page when looking  its layout. The point of using Lorem Ipsum is tat it has a more-or-less normal distribution of letters It is a long established fact that a reader will be distracted by the readable content of a page when looking  its layout. The point of using Lorem Ipsum is tat it has a more Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
                        <p className="mb-25">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                        <p>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                      </div>
                    </div>
                  </div>
                  <div className="tags-and-links fix pt-14 pb-12">
                    <div className="related-tag pull-left">
                      <span className="mr-10">Tag:</span>
                      <ul className="tags">
                        <li><a href="#">Car,</a></li>
                        <li><a href="#">Mobile,</a></li>
                        <li><a href="#">Autocad,</a></li>
                        <li><a href="#">Bank</a></li>
                        {/* <li><a href="#">job offer</a></li> */}
                      </ul>
                    </div>
                    <div className="social-links pull-right">
                      <span>Share:</span>
                      <a href="#"><i className="zmdi zmdi-share" /></a>
                    </div>
                  </div><br />
                  <div className="">
                    <h4 className='' style={{ color: 'red' }}>Report Attachments:</h4>

                    <Carousel className='rounded img-fluid vert-offset-top-2 carousel'>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="assets/images/blog/6.jpg"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="assets/images/blog/7.jpg"
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="assets/images/blog/8.jpg"
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>

                  </div>
                  <br/>
                  <div class="vert-offset-top-3 embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/W7qWa52k-nE" allowfullscreen></iframe>
                  </div>

                  <div className='card vert-offset-top-3 row'>
                    <h4 className='offset-4' style={{ color: 'red' }}>Denial & Report</h4><br />
                    <div className='col-lg-6 col-md-4'>
                      <h6>Respond to this report!</h6>
                      <Link class="vert-offset-top-1 vert-offset-bottom-1 modal-view button" data-toggle="popover" title="Raise Issue" href="/select" style={{ backgroundColor: 'rgb(37, 140, 204)', textDecoration: 'none', color: 'white' }}>File a Denial</Link>
                    </div>
                    <div className='col-lg-6 col-md-4'>
                      <h6>Also a victim?</h6>
                      <Link class="vert-offset-top-1 vert-offset-bottom-1 modal-view button" data-toggle="popover" title="Raise Issue" href="/select" style={{ backgroundColor: 'rgb(37, 140, 204)', textDecoration: 'none', color: 'white' }}>File a Report</Link>
                    </div>
                  </div>
                  <div className=''>
                    <img src="assets/images/ads/ad3.jpg" class="rounded img-fluid vert-offset-bottom-1 vert-offset-top  -1" alt=" Responsive image" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <img src="assets/images/ads/bcma6f3jo.png" className="rounded" /><br /><br /><br />
                  <img src="assets/images/ads/ad2.jpg" className="rounded" width='280px' />
                </div>
              </div>
            </div>
          </div>
          {/*End of Blog Area*/}

        </div>
        {/*End of Main Wrapper Area*/}
        <CNFooter />

      </div>
    )
  }
}

export default Detail;