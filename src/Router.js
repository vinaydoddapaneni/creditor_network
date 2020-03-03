import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Select from './pages/Select';
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Pricing from './pages/Pricing';
import Results from './pages/Results';
import Error404 from './pages/Error404';
import Thanks from './pages/Thanks';
import Business1 from './pages/Business1';
import Business2 from './pages/Business2';
import Business3 from './pages/Business3';
import Personal1 from './pages/Personal1';
import Personal2 from './pages/Personal2';
import Personal3 from './pages/Personal3';
import Myissues from './pages/Myissues';
import Resetpassword from './pages/Resetpassword';
import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from './components/PrivateRoute';
import Onetimepassword from './pages/Onetimepassword';
import Privacypolicy from './pages/Privacypolicy';
import Termsconditions from './pages/Termsconditions';
import Faqs from './pages/Faqs';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// https://github.com/schnee72/react-router-dom-example/blob/master/src/App.js follow this

function Root() {
  return (
    <Router>

      <ScrollToTop>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <PrivateRoute exact path="/detail" component={Detail} />
            <Route path="/search" component={Search} />
            <Route path="/results" component={Results} />
            <Route path="/pricing" component={Pricing} />
            <PrivateRoute exact path="/select" component={Select} />
            <Route path="/contact" component={Contact} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/business1" component={Business1} />
            <Route path="/business2" component={Business2} />
            <Route path="/business3" component={Business3} />
            <Route path="/personal1" component={Personal1} />
            <Route path="/personal2" component={Personal2} />
            <Route path="/personal3" component={Personal3} />
            <Route path="/Onetimepassword" component={Onetimepassword} />
            <PrivateRoute exact path="/myissues" component={Myissues} />
            <Route path="/resetpassword" component={Resetpassword} />
            <Route path="/privacypolicy" component={Privacypolicy} />
            <Route path="/termsconditions" component={Termsconditions} />
            <Route path="/faqs" component={Faqs} />
            <Route path="/" component={Error404} />
            
            
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default Root;
