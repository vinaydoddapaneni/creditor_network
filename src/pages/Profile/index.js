import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';

class Profile extends Component {
  constructor(props) {
    super(props);
    const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {};
    this.state = {
      userData: userData,
      name: userData.name,
      email: userData.email,
      mobile: userData.mobile,
      city: userData.city,
      errorMessage: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value, errorMessage: '' });
  }

  handleErrorMessage = (message) => {
    this.setState({ errorMessage: message });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { name, city, mobile, email, userData } = this.state;
    if (name, city) {
      // this.props.
    } else {

    }
  }

  render() {
    let { userData, name, mobile, email, city, errorMessage } = this.state;
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
                      <h2 className="text-center">Profile</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of Breadcrumb Banner Area*/}
            {/* Profile  Area Start */}
            {/*                Start of Single Job Post Area*/}
            <div className="single-job-post-area ptb-130 ptb-sm-60">
              <div className="container">
                <div className="row">
                  <div className="container">
                    <div className="row my-2">
                      <div className="col-lg-8 order-lg-2">
                        <ul className="nav nav-tabs">
                          <li className="nav-item">
                            <Link to data-target="#profile" data-toggle="tab" className="nav-link active">Profile</Link>
                          </li>
                          <li className="nav-item">
                            <Link to data-target="#settings" data-toggle="tab" className="nav-link ">Update Profile</Link>
                          </li>
                        </ul>
                        <div className="tab-content py-4">
                          {/* Profile starts */}
                          <div className="tab-pane active" id="profile">
                            <h5 className="mb-3">User Profile</h5>
                            <div className="row">
                              <div className="col-md-12">
                                <table className="table">
                                  <thead>
                                    <tr>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">Name : </th>
                                      <td>{userData.name}</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Mobile : </th>
                                      <td><strong style={{ fontWeight: 'bold' }}>{userData.mobile}</strong></td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Email : </th>
                                      <td>{userData.email}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="col-md-12">
                              </div>
                            </div>
                            {/*/row*/}
                          </div>
                          {/* Settings starts */}
                          <div className="tab-pane" id="settings">
                            <h5 className="mb-3">Settings</h5>
                            <div class="tab-content py-4">
                              <div class="tab-pane" id="profile">
                                <h5 class="mb-3">User Profile</h5>
                                <div class="row">
                                  <div class="col-md-12">
                                    <table class="table">
                                      <tbody>
                                        <tr>
                                          <th scope="row">Name</th>
                                          <td>{userData.name}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Mobile</th>
                                          <td>{userData.mobile}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Email</th>
                                          <td>{userData.email}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div class="col-md-12">
                                  </div>
                                </div>
                                {/* <!--/row--> */}
                              </div>
                              <div class="tab-pane active show" id="edit">
                                <form role="form" onSubmit={this.handleSubmit}>
                                  <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Name</label>
                                    <div class="col-lg-9">
                                      <input class="form-control" type="text" placeholder="Full Name" name="name" value={name} onChange={this.handleChange} />
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                    <div class="col-lg-9">
                                      <input class="form-control" readOnly type="email" placeholder="Email" name="email" value={email} />
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Mobile</label>
                                    <div class="col-lg-9">
                                      <input class="form-control" readOnly type="text" placeholder="Mobile#" name="mobile" value={mobile} />
                                    </div>
                                  </div>

                                  <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Identification No.</label>
                                    <div class="col-lg-9">
                                      <input class="form-control" type="text" name="Identification" placeholder="Identification No." />
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">City</label>
                                    <div class="col-lg-9">
                                      <input class="form-control" type="text" onChange={this.handleChange} name="city" value={city} placeholder="City" />
                                    </div>
                                  </div>
                                  <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>
                                  <div class="resubtn mt-40">
                                    <Link to={'#'} className="btn btn-primary btn-lg offset-10 vert-offset-top-1" >Save</Link>
                                  </div>
                                </form>
                              </div>
                            </div>
                            {/*/row*/}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 order-lg-1 text-center">
                        <img src="assets/images/candidates/3.png" className="mx-auto img-fluid img-circle d-block" alt="avatar" />
                        <h6 className="mt-2">Upload Image</h6>
                        <br />
                        <input type="file" className="form-control" />
                        <label className="custom-file">
                          <input type="file" id="file" className="custom-file-input" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of Single Job Post Area*/}
            {/* Profile Area End */}
            {/*Start of Footer Widget-area*/}
            <CNFooter />
            {/* End of Footer area */}
          </div>
          {/*End of Main Wrapper Area*/}
        </div>
      </div>
    )
  }
}

export default Profile;