import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import CNHeader from '../../components/CNHeader';
import CNFooter from '../../components/CNFooter';
// import CNButton from '../../components/CNButton';
class Privacypolicy extends Component {
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
                      <h2 className="text-center">Privacy Policy</h2>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End of Breadcrumb Banner Area*/}
            {/* Privacy Policy Area Start */}
            <div className="about-area ptb-130 ptb-sm-60">
              <div className="container">
                <div className="row">

                  <div className="col-lg-12">
                    <div className="abt-content">
                      <h4><span>Privacy</span> Policy</h4>
                      <span>CreditorNetwork is a leading blockchain fuelled peer-to-peer programmatic Ad Platform that offers engaging and innovative advertising and monetization solutions for mobile applications.</span>
                      <span>Any questions in regards to CreditorNetwork’s privacy practices should be sent via email to <a style={{ fontWeight: 'bold' }}>support@CreditorNetwork.com.</a></span>
                      <span>Thank you for visiting the CreditorNetwork Publisher network website located at CreditorNetwork .com (the "Site"). CreditorNetwork ("we", "us") is committed to protecting the privacy your personally identifiable information. We provide this privacy policy ("Privacy Policy") in order to explain our online information practices and the choices you can make about the way your information is used by us. You must agree to this Privacy Policy,
                          in its entirety, including our use of cookies in order to: register an account ("Account") with the CreditorNetwork Publisher network ("Publisher Network") and log-into your Account as member of the Publisher Network. Your acceptance of both this Privacy Policy and our use of cookies on the Site shall be deemed a blanket acceptance of such Privacy Policy and cookie usage for all future attempts to log-in and access your Account.
                      If you do not agree to this Privacy Policy in its entirety, you are not authorized to register for an Account on the Publisher Network.</span>
                      <span>Privacy Policies Used in Connection with Your Subscription. When you register for an Account on the Publisher Network, we use a password-protected third party portal to store your personal information, and we may share your personal information with such third party ("Third Party Agent") as is necessary for the performance of your Account and the Publisher Network.</span>
                      <div style={{ textAlign: 'center', fontWeight: 'bold' }} className='vert-offset-top-1'>
                        <h5 >What type of information do we collect?</h5><br />
                        <p>Personally Identifiable Information</p><br />
                      </div>
                      <span>We collect personally identifiable information when you register for an Account or otherwise choose to provide personally identifiable information to us. Personally identifiable information is any information that can be used to identify or locate a particular person or entity. This may include, but is not limited to: business entity name and/or your title with the applicable business entity, as well as your personal and/or business
                        entity related e-mail address, mailing address, daytime and/or cellular telephone numbers, fax number, account information (or other information that we require in order to pay any amounts due to you under the Publisher Network) and/or any other information requested on the applicable Subscriber registration form. For purposes of this Privacy Policy, your account information shall be considered "Sensitive Information."</span>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Privacy Policy Area End */}




            <CNFooter />

          </div>


        </div>

      </div>
    )
  }
}

export default Privacypolicy;