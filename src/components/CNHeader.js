import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CNModal from './CNModal';
import '../pages/Home/homedia.css';

class CNHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            userData: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : '',
            token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
        }

    }

    handleLogout = () => {
        this.setState({ userData: '', token: '' });
        localStorage.removeItem('userData');
        localStorage.removeItem('token');
        this.props.signOut();
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {
        let { type } = this.props;
        let { userData, token } = this.state;
        return (
            <div>
                

                <header id="sticky-header" class="header-area">

                <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
                    <div className="col-sm-12 col-lg-6" style={{paddingLeft:'0px'}}>
                                <div className="logo col-8 col-lg-9">
                                <Link to={'/'}><img src="assets/images/logo/logo.png" alt="Creditor Network" className='offset-sm-1c offset-lg-9' /></Link>
                                </div>
                                <div className="logo col-4 col-lg-3"> 
                                <button class="navbar-toggler offset-3" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                    </div>
                    </div>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav offset-5">
                        
                        
                        <li class="nav-item">
                            {token === '' && <li><Link class="nav-link"  to={'/register'} style={{fontFamily: "montserratregular", fontSize: '15px', textTransform: 'uppercase'}}>Sign Up</Link></li>}
                        </li>
                        <li class="nav-item">
                            {token === '' && <li><Link class="nav-link"  to={'/login'} style={{fontFamily: "montserratregular", fontSize: '15px', textTransform: 'uppercase'}}>Login</Link></li>}
                        </li>
                      
                        <li class="nav-item" style={{paddingTop:'5px'}}>
                                <span class="oi oi-plus"></span>
                                <Link class="modal-view button" to={'select'} data-toggle="popover" title="Raise Issue" style={{backgroundColor:'#258ccc',textDecoration: 'none',color:'white'}}>File a Report</Link>
                                    
                                    &nbsp;&nbsp;&nbsp;
                                </li>
                        <li class="nav-item cee-top">
                        {userData && <div className="nav-link" style={{paddingTop:'0px'}}>
                                        
                                            <nav>
                                                <ul className="main-menu">
                                                    <li><img src="assets/images/icons/profile.png" />&nbsp;
                                                        <b className="">{userData.name}</b>
                                                        <ul className="dropdown">
                                                            <li><Link to={'/profile'}>Profile</Link></li>
                                                            <li><Link to={'/myissues'}>My Search Reports</Link></li>
                                                            
                                                            <li><Link to={'/myissues'}>My Reports</Link></li>
                                                            
                                                            <li><Link onClick={this.handleLogout}>Logout</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </nav>
                                        
                                    </div>}
                        </li>
                        </ul>
                    </div>  
                    </nav>
                    </header>
                {/* End of Header Area */}
                <CNModal show={this.state.show} component={"Login"} />
            </div>
        )
    }
}


function mapStateToProps({ authReducers }) {
    return {
        type: authReducers.type
    }
}


export default connect(mapStateToProps)(CNHeader);