import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';
import CNButton from '../../components/CNButton';
import './home.css';
import './media.css';

import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import { bindActionCreators } from 'redux';
import * as ActionTypes from '../../actions/ActionTypes';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      redirect: false, errorMessage: '',
      results: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let { keyword } = this.state;
    if (keyword) {
      this.props.search(keyword);
    }
  }
  handleResponse = (results) => {
    this.setState({ results: results, redirect: true })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.type === ActionTypes.SEARCH_SUCCESS) {
      this.handleResponse(nextProps.results);
    }
    if (nextProps.type === ActionTypes.SEARCH_FAILURE) {
      alert(nextProps.message)
    }
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/results',
        search: `?query=${this.state.keyword}`,
        state: { results: this.state.results }
      }} />
    }
  }
  render() {
    let { keyword } = this.state;
    return (
      <div className="App">
        {this.renderRedirect()}
        <div>
          <div>
            {/*Main Wrapper Start*/}
            <div className="as-mainwrapper">
              {/*Header Area Start*/}
              <CNHeader />
              {/* End of Header Area */}
              {/* Search Form Start */}
              <div className="search-job-area bg-5 vert-offset-top-1">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-10 col-lg-12 ml-auto mr-auto">
                      <div className="job-search-content text-center  vert-offset-top-4">
                        {/* <Link to={'select'} className="btn btn-primary btn-lg offset-0 vert-offset-top-0" >File a Report... It's Free</Link> */}
                        <Link class="modal-view button" title="Raise Issue" to={"select"} style={{ backgroundColor: 'rgb(37, 140, 204)', textDecoration: 'none', color: 'white' }}>File a Report... It's Free</Link>

                        <CNButton>Hello</CNButton>

                        <form onSubmit={this.handleSubmit} name="Form">
                          <div className="form-container ">
                            <div className="row offset-1 vert-offset-top-1">
                              <div className="col-sm-2"></div>
                              <input type="text" className="form-control col-7 col-sm-6" name="keyword" placeholder="Search" value={keyword} onChange={this.handleChange} />&nbsp;
                              <button type="submit" className="btn btn-primary btn-lg button_size" name="Search" > Search</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Search Form End */}
              {/* Job Category Start */}
              <div className="job-categroy-area ptb-90 ptb-sm-60">
                <div className="container">

                  <div className="row">
                    <div className="col-lg-6 col-md-4">
                      <div className="section-title">
                        <h2>File a Report</h2>
                        <p style={{ fontWeight: 'bold' }}>If you want to file a report the click here to know to
                          the other's<br></br>  click here to know to the other's</p>
                        <div className="subscribe-form">

                          {/* <Link to={'select'} className="btn btn-primary btn-lg offset-8 vert-offset-top-1" >File a Report</Link> */}
                          <Link class="vert-offset-top-2 modal-view button" data-toggle="popover" title="Raise Issue" to={"select"} style={{ backgroundColor: 'rgb(37, 140, 204)', textDecoration: 'none', color: 'white' }}>File a Report</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-4">
                      <img src="assets/images/icons/Icon-(1).png" alt="Icon" className="img-responsive offset-3" />
                    </div>
                  </div>
                  <div className="category-job-list-actiive owl-carousel">
                  </div>
                </div>
              </div>
              {/* Job Category End */}
              {/* Working Aera Start */}
              <div className="woring-area pt-50 pb-100 pt-sm-60 pb-sm-30">
                <div className="container">
                  {/* Section Title Start */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="section-title text-center ">
                        <h2>How It Works</h2>
                        <p>Lorem ipsum dolor sit amet, contetur adipisil elit sed do</p>
                      </div>
                    </div>
                  </div>
                  {/* Section Title End */}
                  <div className="row work-shap">
                    <div className="col-md-4">
                      <div className="work-item">
                        <div className="img-icon">
                          <img src="assets/images/icons/wrk1.png" alt="Icon1" />
                        </div>
                        <h5>File a Report</h5>
                        <p>Lorem ipsum dolor sit amet, contetur adipisil elit, sed do eiusmod tempor incididunt ut lab et dolore magna aliqua.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="work-item">
                        <div className="img-icon">
                          <img src="assets/images/icons/wrk2.png" alt="Icon2" />
                        </div>
                        <h5>Search Report's</h5>
                        <p>Lorem ipsum dolor sit amet, contetur adipisil elit, sed do eiusmod tempor incididunt ut lab et dolore magna aliqua.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="work-item">
                        <div className="img-icon">
                          <img src="assets/images/icons/share.png" alt="Icon3" />
                        </div>
                        <h5>Share Your Report</h5>
                        <p>Lorem ipsum dolor sit amet, contetur adipisil elit, sed do eiusmod tempor incididunt ut lab et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Working Aera End */}
              {/*Start of Fun Factor Area*/}
              <div className="fun-factor-area bg-1 text-center ptb-100 pt-sm-60 pb-sm-30">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 col-6">
                      <div className="single-fun-factor">
                        <h1><span className="counter">6400</span> +</h1>
                        <h3>Users</h3>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="single-fun-factor">
                        <h1><span className="counter">3600</span> +</h1>
                        <h3>Subscriptions</h3>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="single-fun-factor">
                        <h1><span className="counter">2120</span>+</h1>
                        <h3>Reports</h3>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="single-fun-factor">
                        <h1><span className="counter">1200</span>+</h1>
                        <h3>Company  Mentions</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End of Fun Factor Area*/}

              {/* Job Category Start */}
              <div className="job-categroy-area ptb-130 ptb-sm-60">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="section-title text-center ">
                        <h2>Search By Category </h2>
                        <p>Lorem ipsum dolor sit amet, contetur adipisil elit sed do</p>
                      </div>
                    </div>
                  </div>

                  <div className="category-job-list-actiive owl-carousel owl-theme owl-responsive-1200 owl-loaded">
                    <div className="owl-stage-outer" style={{ paddingLeft: '0px', paddingRight: '0px' }}><div className="owl-stage" style={{ width: '3585px', transitionDuration: '1s', transform: 'translate3d(-1195px, 0px, 0px)' }}><div className="owl-item" style={{ width: '273.75px', marginRight: '25px' }}><div className="category-item">
                      <div className="img-icon">
                        <img src="assets/images/icons/cat1.png" alt=' '/>
                      </div>
                      <h5>Hotel &amp; Restaurant</h5>
                      {/* <h6>(16 Jobs)</h6> */}
                    </div></div><div className="owl-item" style={{ width: '273.75px', marginRight: '25px' }}><div className="category-item">
                      <div className="img-icon">
                        <img src="assets/images/icons/cat2.png" alt=' ' />
                      </div>
                      <h5>Travel &amp; Agency </h5>
                      {/* <h6>(10 Jobs)</h6> */}
                    </div></div><div className="owl-item" style={{ width: '273.75px', marginRight: '25px' }}><div className="category-item">
                      <div className="img-icon">
                        <img src="assets/images/icons/cat3.png" alt=' ' />
                      </div>
                      <h5>Business &amp; Finance</h5>
                      {/* <h6>(15 Jobs)</h6> */}
                    </div></div><div className="owl-item" style={{ width: '273.75px', marginRight: '25px' }}><div className="category-item">
                      <div className="img-icon">
                        <img src="assets/images/icons/cat4.png" alt=' ' />
                      </div>
                      <h5>Theme &amp; Software</h5>
                      {/* <h6>(18 Jobs)</h6> */}
                    </div></div><div className="owl-item active" style={{ width: '273.75px', marginRight: '25px' }}><div className="category-item">
                      <div className="img-icon">
                        <img src="assets/images/icons/cat1.png" alt=' ' />
                      </div>
                      <h5>Hotel &amp; Restaurant</h5>
                      {/* <h6>(16 Jobs)</h6> */}
                    </div></div><div className="owl-item active" style={{ width: '273.75px', marginRight: '25px' }}><div className="category-item">
                      <div className="img-icon">
                        <img src="assets/images/icons/cat2.png" alt=' ' />
                      </div>
                      <h5>Travel &amp; Agency </h5>
                      {/* <h6>(10 Jobs)</h6> */}
                    </div></div><div className="owl-item active" style={{ width: '273.75px', marginRight: '25px' }}><div className="category-item">
                      <div className="img-icon">
                        <img src="assets/images/icons/cat3.png" alt=' ' />
                      </div>
                      <h5>Business &amp; Finance</h5>
                      {/* <h6>(15 Jobs)</h6> */}
                    </div></div><div className="owl-item active" style={{ width: '273.75px', marginRight: '25px' }}><div className="category-item">
                      <div className="img-icon">
                        <img src="assets/images/icons/cat4.png" alt=' ' />
                      </div>
                      <h5>Theme &amp; Software</h5>
                      {/* <h6>(18 Jobs)</h6> */}
                    </div></div><div className="owl-item" style={{ width: '273.75px', marginRight: '25px' }}><div className="category-item">
                      <div className="img-icon">
                        <img src="assets/images/icons/cat1.png" alt=' ' />
                      </div>
                      <h5>Hotel &amp; Restaurant</h5>
                      {/* <h6>(16 Jobs)</h6> */}
                    </div></div><div className="owl-item" style={{ width: '273.75px', marginRight: '25px' }}><div className="category-item">
                      <div className="img-icon">
                        <img src="assets/images/icons/cat2.png" alt=' ' />
                      </div>
                      <h5>Travel &amp; Agency </h5>
                      {/* <h6>(10 Jobs)</h6> */}
                    </div></div><div className="owl-item" style={{ width: '273.75px', marginRight: '25px' }}><div className="category-item">
                      <div className="img-icon">
                        <img src="assets/images/icons/cat3.png" alt=' ' />
                      </div>
                      <h5>Business &amp; Finance</h5>
                      {/* <h6>(15 Jobs)</h6> */}
                    </div></div><div className="owl-item" style={{ width: '273.75px', marginRight: '25px' }}><div className="category-item">
                      <div className="img-icon">
                        <img src="assets/images/icons/cat4.png" alt=' ' />
                      </div>
                      <h5>Theme &amp; Software</h5>
                      {/* <h6>(18 Jobs)</h6> */}
                    </div></div></div></div><div className="owl-controls"><div className="owl-dots"><div className="owl-dot"><span /></div><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div></div></div></div>
                </div>
              </div>



              <div className="container">

              </div>
            </div>
          </div>


          {/*End of Blog Area*/}
          {/*Start of Footer Widget-area*/}

          <CNFooter />
          {/* End of Footer area */}
        </div>


      </div>

    );
  }
}

function mapStateToProps({ complaintReducers }) {
  return {
    type: complaintReducers.type,
    message: complaintReducers.message,
    results: complaintReducers.results
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);