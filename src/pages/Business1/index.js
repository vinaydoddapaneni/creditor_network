import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';

class Business1 extends Component {
  render() {
    return (
      <div>
        <CNHeader />
        <div className="breadcrumb-banner-area pt-70 pb-50 bg-3 vert-offset-top-7">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumb-text">
                  <h2 className="text-center">Business</h2>
                  <div className="breadcrumb-bar">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section className="add-listing-wrapper border-bottom section-bg section-padding-strict vert-offset-top-4">
          <div className="container">
            <div className="row">

              <div className='col-lg-3 col-md-3' className='text-center'>
                Step 1
                    <div className=''>
                  Basic Info &
                    </div>
                Report Category
                </div>
              <Link to={'business1'}><i class="fa fa-angle-right fa-7x offset-11"/></Link>
              <div className='col-lg-3 col-md-3' className='text-center offset-1'>
                Step 2
                    <div className=''>
                  Write your Report &
                    </div>
                Add Photos
                </div>
              <Link to={'business2'}><i class="fa fa-angle-right fa-7x offset-11"/></Link>
              <div className='col-lg-3 col-md-3' className='text-center offset-1'>
                Step 3
                    <div className=''>
                  Review and Submit
                    </div>
              </div>
              <Link to={'business3'}><i class="fa fa-angle-right fa-7x offset-11"/></Link>

              <hr width='70%' />
              <div className="col-lg-8 vert-offset-top-2">
                <div className="atbd_content_module">
                  <div className="atbd_content_module__tittle_area">
                    <div className="atbd_area_title">
                      {/* <h4><span className="la la-user" />Contact Information</h4> */}
                    </div>
                  </div>

                  <div className="atbdb_content_module_contents">
                    <form action="#">
                      <div className="form-group">






                        {/* <input type="text" className="form-control" id="title" placeholder="Enter Title" required /> */}
                      </div>
                      <div className="form-group">
                        <h4><span className="la la-user" />Contact Information</h4>

                      </div>
                      <div className="form-group">
                        <label htmlFor="tagline" className="form-label">Name of Company</label>
                        <input type="text" className="form-control" id="tagline" placeholder="Enter Company Name" required style={{border:'1px solid rgb(255, 0, 0)'}}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="short_desc" className="form-label">Additonal Names</label>
                        <textarea id="short_desc" rows={5} className="form-control" placeholder="Short Type one name per line, most relevant names first." defaultValue={""} />
                      </div>
                      <div className="form-group">

                        <div className="pricing-option-inputs">
                          {/* <input type="text" id="price-input" className="form-control" placeholder="Price of this listing Eg. 100" /> */}
                          <div className="select-basic" id="price-input-range">

                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Report Type</label>
                        <div id="social_info_sortable_container">
                          <div className="directorist atbdp_social_field_wrapper">
                            <div className="row m-bottom-25" id="social-form-fields">
                              <div className="col-sm-5">
                                <div className="form-group">
                                  <div className="select-basic">
                                    <select className="form-control" style={{border:'1px solid rgb(255, 0, 0)'}}>
                                      <option value="select"> Select</option>
                                      <option value="Scam"> Scam</option>
                                      <option value="Fraud"> Fraud</option>
                                      <option value="Complaint"> Complaint</option>
                                      <option value="Reviews"> Reviews</option>
                                      <option value="Lawsuit"> Lawsuit</option>
                                      <option value="Consumers Education"> Consumers Education</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">

                                  <input type="text" name="manual_lng" id="manual_lng" className="form-control directory_field" placeholder="Enter Amount" style={{border:'1px solid rgb(255, 0, 0)'}}/>
                                </div>
                              </div>
                              <div className="col-sm-2 d-flex align-items-center">
                                <span className="removeSocialField btn-danger" id="removeSocial" title="Remove this item"><i className="la la-times" /></span>
                                <span className="adl-move-icon btn-secondary"><i className="la la-arrows" /></span>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>


                      <div className="form-group">
                        <label className="form-label">Identification No.</label>
                        <div id="social_info_sortable_container">
                          <div className="directorist atbdp_social_field_wrapper">
                            <div className="row m-bottom-25" id="social-form-fields">
                              <div className="col-sm-5">
                                <div className="form-group">
                                  <div className="select-basic">
                                    <select className="form-control" style={{border:'1px solid rgb(255, 0, 0)'}}>
                                      <option value="select"> Select</option>
                                      <option value="Pan no."> Pan No.</option>
                                      <option value="Pan no."> Cin No.</option>
                                      <option value="LLP no."> LLP No.</option>
                                      <option value="GST no."> GST No.</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">

                                  <input type="text" name="manual_lng" id="manual_lng" className="form-control directory_field" placeholder="Enter Identification No." style={{border:'1px solid rgb(255, 0, 0)'}}/>
                                </div>
                              </div>
                              <div className="col-sm-2 d-flex align-items-center">
                                <span className="removeSocialField btn-danger" id="removeSocial" title="Remove this item"><i className="la la-times" /></span>
                                <span className="adl-move-icon btn-secondary"><i className="la la-arrows" /></span>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="form-group">
                        <label className="form-label">City</label>
                        <div id="social_info_sortable_container">
                          <div className="directorist atbdp_social_field_wrapper">
                            <div className="row m-bottom-25" id="social-form-fields">
                              <div className="col-sm-5">
                                <div className="form-group">
                                  <div className="select-basic">
                                    <select className="form-control">
                                      <option>Hyderabad</option>
                                      <option>Vijayawada</option>
                                      <option>Visakhapatnam</option>
                                      <option>Mumbai</option>
                                      <option>Kolkata</option>
                                      <option>Chennai</option>
                                      <option>Bangalore</option>
                                      <option>kakinada</option>
                                      <option>Hyderabad</option>
                                      <option>Mumbai </option>
                                      <option>Delhi</option>
                                      <option>Ahmedabad</option>
                                      <option>Surat</option>
                                      <option>Pune</option>
                                      <option>Jaipur </option>
                                      <option>Lucknow</option>
                                      <option>Kanpur</option>
                                      <option>Nagpur</option>
                                      <option>Indore</option>
                                      <option>Thane</option>
                                      <option>Bhopal</option>
                                      <option>Pimpri-Chinchwad </option>
                                      <option>Patna</option>
                                      <option>Vadodara</option>
                                      <option>Ghaziabad</option>
                                      <option>Ludhiana</option>
                                      <option>Agra</option>
                                      <option>Nashik</option>
                                      <option>Faridabad</option>
                                      <option>Meerut </option>
                                      <option>Rajkot</option>
                                      <option>Kalyan-Dombivali</option>
                                      <option>Vasai-Virar</option>
                                      <option>Varanasi</option>
                                      <option>Srinagar</option>
                                      <option>Aurangabad</option>
                                      <option> Dhanbad</option>
                                      <option> Amritsar</option>
                                      <option> Navi Mumbai</option>
                                      <option> Allahabad</option>
                                      <option> Howrah</option>
                                      <option> Ranchi</option>
                                      <option> Gwalior</option>
                                      <option> Jabalpur</option>
                                      <option> Coimbatore</option>
                                      <option> Vijayawada</option>
                                      <option> Jodhpur</option>
                                      <option> Madurai</option>
                                      <option> Raipur</option>
                                      <option> Kota</option>
                                      <option> Chandigarh</option>
                                      <option> Guwahati</option>
                                      <option> Solapur</option>
                                      <option> Hubballi-Dharwad</option>
                                      <option> Tiruchirappalli</option>
                                      <option> Bareilly</option>
                                      <option> Mysore</option>
                                      <option> Tiruppur</option>
                                      <option> Gurgaon</option>
                                      <option> Aligarh</option>





                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">

                                  <input type="text" name="manual_lng" id="manual_lng" className="form-control directory_field" placeholder="Enter Street Address" />
                                </div>
                              </div>
                              <div className="col-sm-2 d-flex align-items-center">
                                <span className="removeSocialField btn-danger" id="removeSocial" title="Remove this item"><i className="la la-times" /></span>
                                <span className="adl-move-icon btn-secondary"><i className="la la-arrows" /></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>




                      <div className="cor-form">
                        <div id="hide_if_no_manual_cor" className="clearfix row m-bottom-30">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label htmlFor="manual_lat" className="not_empty"> Zip Code. </label>
                              <input type="text" name="manual_lat" id="manual_lat" className="form-control directory_field" placeholder="Enter Zip Code." />
                            </div>
                          </div>
                          <div className="col-sm-6 mt-3 mt-sm-0">
                            <div className="form-group">
                            <label htmlFor="" className="form-label">Phone No.</label>
                            <input type="text" id="" className="form-control" placeholder="Enter Phone No." style={{border:'1px solid rgb(255, 0, 0)'}}/>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="form-group">
                        
                        <label htmlFor="manual_lng" className="not_empty"> Email </label>
                        <input type="email" name="manual_lng" id="manual_lng" className="form-control directory_field" placeholder="Enter Email" style={{border:'1px solid rgb(255, 0, 0)'}}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="website_address" className="form-label">Website</label>
                        <input type="text" id="website_address" className="form-control" placeholder="Listing Website eg. http://example.com" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="ad_categroy" className="form-label">Report Category</label>
                        <div className="select-basic">
                          <select className="form-control ad_search_category" id="ad_categroy" style={{border:'1px solid rgb(255, 0, 0)'}}>
                            <option> Category</option>
                            <optgroup label="Health &Fitness">
                              <option value="trialoffers">Trial offers</option>
                              <option value="lunchpack">Lunch Pack</option>
                            </optgroup>
                            <optgroup label="Places">
                              <option value="travel">Travel</option>
                              <option value="booking">Booking</option>
                              <option value="hotel">Hotel</option>
                              <option value="location">Location</option>
                            </optgroup>
                            <optgroup label="Shopping">
                              <option value="accessories">Accessories</option>
                              <option value="clothing">Clothing</option>
                              <option value="gadgets">Gadgets</option>
                            </optgroup>                            
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="" className="form-label">Tags</label>
                        <input type="text" className="form-control" id="tags" required placeholder='Enter tags'/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="cdate" className="form-label">Custom Date</label>
                        <input type="date" className="form-control" id="cdate" required />
                      </div>

                      <div className="btn_wrap list_submit m-top-25 vert-offset-top-3 vert-offset-bottom-4 offset-10">
                        <Link class="modal-view button" to={'business2'} data-toggle="popover" style={{ backgroundColor: '#258ccc', textDecoration: 'none', color: 'white' }}>Next</Link>
                      </div>
                      


                      {/* ends: .form-group */}
                    </form>
                  </div>{/* ends: .atbdb_content_module_contents */}
                </div>{/* ends: .atbd_content_module */}
              </div>{/* ends: .col-lg-10 */}


              <div className="col-lg-4">
                <img src="assets/images/ads/bcma6f3jo.png" className="rounded" /><br /><br /><br />
                <img src="assets/images/ads/ad2.jpg" className="rounded" width='280px' />
              </div>{/* ends: .col-lg-10 */}
            </div>
          </div>
        </section>

        <CNFooter />

      </div>
    )
  }
}

export default Business1;