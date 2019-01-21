import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends Component {
    componentDidMount() {
      this.props.fetchUser();
    }

    render() {
     return (
        
           <BrowserRouter>
         <div className="container">
             <Header />
             <Route exact path="/" component={Landing} />
             <Route exact path="/surveys" component={Dashboard}/>
             <Route path="/surveys/new" component={SurveyNew}/>
             
         </div>
           </BrowserRouter>
     );
  }
}

export default connect(null, actions)(App);