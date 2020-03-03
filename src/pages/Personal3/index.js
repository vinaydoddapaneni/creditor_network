import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';
// import CNButton from '../../components/CNButton';
import style from '../Business3/style.css';

class Personal3 extends Component {
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


              <div className="col-lg-8 vert-offset-top-1">
                <div className="atbd_term_and_condition_area custom-control custom-checkbox checkbox-outline checkbox-outline-primary">

                  <input type='checkbox' />

                  <span className={style.com}>I have read, understood, and agreed to CreditorNetwork Report's Terms of Service. By posting the Report/Update/Rebuttal (hereafter the “Post”). I attest that this Post is valid and in compliance
                  with the Online Conduct and other requirements set forth in the Terms of Service.
          <br />I hereby assign to CreditorNetwork the copyrights in the Post. CreditorNetwork hereby grants you, the author, an exclusive and non-transferable license to use, copy, perform, display and distribute such
          information content and to prepare derivative works of, or incorporate into other works, such information and content. <br />
                  I acknowledge that once I submit my Post, the Post cannot later be edited by me, nor will it be removed, even at my request. I understand that I can update my Post to reflect new developments
                  and/or changes in my position by clicking on UPDATE. Further, I agree that the state of Arizona has exclusive jurisdiction over any disputes between me and the operator of CreditorNetwork Report
                  arising out of this Post and is subject to Arbitration as outlined in the Terms of Service.</span>
        </div>
                <div className="btn_wrap list_submit m-top-25 vert-offset-top-2 vert-offset-bottom-4 offset-8">
                  <Link class="modal-view button" to={'#'} data-toggle="popover" style={{ backgroundColor: '#258ccc', textDecoration: 'none', color: 'white' }}>Submit</Link>
                </div>
              </div>{/* ends: .col-lg-8 */}
              <div className="col-lg-4">
                <img src="assets/images/ads/bcma6f3jo.png" className="rounded" />
              </div>
            </div>
          </div>
        </section>

        <CNFooter />

      </div>
    )
  }
}

export default Personal3;