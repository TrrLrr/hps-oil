'use strict'

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { IconButton } from 'material-ui';
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import Dashboard from '../dashboard';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
    
    };
  }

  render() {
    return(
      <main id='app-container'>
        
        
          <BrowserRouter>
            <section>
              <Route exact path='/' component={Dashboard} />
              
            </section>
          </BrowserRouter>
        
        
      </main>


    )
  }
}

export default App;