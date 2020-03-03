import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';


class Personal2 extends Component {
  render() {
    return (
      <div>
        <CNHeader />
        <div className="breadcrumb-banner-area pt-70 pb-50 bg-3 vert-offset-top-7">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumb-text">
                  <h2 className="text-center">Personal</h2>
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
              <Link to={'personal1'}><i class="fa fa-angle-right fa-7x offset-11"/></Link>
              <div className='col-lg-3 col-md-3' className='text-center offset-1'>
                Step 2
                    <div className=''>
                  Write your Report &
                    </div>
                Add Photos
                </div>
              <Link to={'personal2'}><i class="fa fa-angle-right fa-7x offset-11"/></Link>
              <div className='col-lg-3 col-md-3' className='text-center offset-1'>
                Step 3
                    <div className=''>
                  Review and Submit
                    </div>
              </div>
              <Link to={'personal3'}><i class="fa fa-angle-right fa-7x offset-11"/></Link>

              <hr width='70%' />

              <div className="col-lg-8 vert-offset-top-2">
                <div className="atbd_content_module">
                  <div className="atbd_content_module__tittle_area">
                    <div className="atbd_area_title">
                      <h4><span className="la la-user" />Write Your Report</h4>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address" className="form-label">Report Title</label>
                    <input type="text" placeholder="Enter Your Report Title" id="address" className="form-control" required style={{border:'1px solid rgb(255, 0, 0)'}}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="short_desc" className="form-label">Full Description</label>
                    <textarea id="short_desc" rows={5} className="form-control" placeholder="Enter Brief Description" defaultValue={""} style={{border:'1px solid rgb(255, 0, 0)'}}/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Report Display </label>
                    <div className="atbdp-radio-list">
                      <div className="custom-control custom-radio">
                        <input type="radio" id="customRadioOne" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioOne">Anonymous</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input type="radio" id="customRadioTwo" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioTwo">Original Name </label>
                      </div>

                    </div>
                  </div>


                  

                  <div className="atbd_area_title">
                    <h4><span className="la la-calendar-check-o" /> Add Photos, videos & Documents</h4>
                  </div>
                  <div className="form-group m-top-30">
                    <label htmlFor="videourl" className="form-label">Add Video Url</label>
                    <input type="text" id="videourl" name="videourl" className="form-control" placeholder="Enter Video Url" />
                  </div>
                  <div id="_listing_gallery">
                    <div className="add_listing_form_wrapper" id="gallery_upload">
                      <div className="form-group text-center">
                        {/*  add & remove image links */}

                      </div>
                      <div className="form-group text-center">
                        {/* image container, which can be manipulated with js */}
                        <div className="listing-img-container">
                          <img src="assets/images/picture.png" alt="No Image Found" />
                          <p>Images/Video/Documents</p>
                        </div>
                        {/*  add & remove image links */}
                        <p className="hide-if-no-js">

                          <input id="fileupload" name="fileupload" type="file" />


                        </p>
                      </div>
                      <div className="atbd_content_module__tittle_area">
                        <div className="atbd_area_title">
                          <h4><span className="la la-calendar-check-o" /> Location </h4>
                        </div>
                      </div>
                      <div className="atbdb_content_module_contents">
                        <label className="not_empty form-label">Set the Marker by clicking anywhere on the Map</label>
                        <div className="map" id="map-one" />
                        <div className="cor-wrap form-group">
                          <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                            <input type="checkbox" className="custom-control-input" name="manual_coordinate" defaultValue={1} id="manual_coordinate" />
                            <label htmlFor="manual_coordinate" className="not_empty custom-control-label">Or Enter Coordinates (latitude and longitude) Manually. </label>
                          </div>
                        </div>
                        <div className="cor-form">
                          <div id="hide_if_no_manual_cor" className="clearfix row m-bottom-30">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label htmlFor="manual_lat" className="not_empty"> Latitude </label>
                                <input type="text" name="manual_lat" id="manual_lat" className="form-control directory_field" placeholder="Enter Latitude eg. 24.89904" />
                              </div>
                            </div>
                            <div className="col-sm-6 mt-3 mt-sm-0">
                              <div className="form-group">
                                <label htmlFor="manual_lng" className="not_empty"> Longitude </label>
                                <input type="text" name="manual_lng" id="manual_lng" className="form-control directory_field" placeholder="Enter Longitude eg. 91.87198" />
                              </div>
                            </div>

                            <div className="col-md-12 col-sm-12">
                              <div className="form-group lat_btn_wrap m-top-15">
                                <button className="btn btn-primary" id="generate_admin_map">Generate on Map
                    </button>
                              </div>
                            </div> {/* ends #hide_if_no_manual_cor*/}
                          </div>
                          <div className="form-group">
                            <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                              <input type="checkbox" className="custom-control-input" name="hide_map" defaultValue={1} id="hide_map" />


                            </div>
                            <Link class="modal-view button vert-offset-top-2 vert-offset-bottom-2 offset-10" to={'#'} data-toggle="popover" style={{ backgroundColor: '#258ccc', textDecoration: 'none', color: 'white' }}>NEXT</Link>

                          </div>
                        </div>
                      </div>
                    </div> {/*ends add_listing_form_wrapper*/}
                  </div>
                  <div className="atbdb_content_module_contents">
                    <form action="#">





                    </form>
                  </div>{/* ends: .atbdb_content_module_contents */}
                </div>{/* ends: .atbd_content_module */}
              </div>{/* ends: .col-lg-10 */}

              
              
              <div className="col-lg-4 ">

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

export default Personal2;