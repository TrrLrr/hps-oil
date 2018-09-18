'use strict';

import React from 'react';
import {connect} from 'react-redux';


import './_dashboard.scss';

class Dashboard extends React.Component {
  

  render() {
    return (
      <main className='dashboard-container'>
        <div className='hero-image'>
          <div className='caption'>
          {/* <img src='../../assets/hps\ oil.png' /> */}
            <span className='hero-text'>hps oil.</span>
          </div>
        </div>
        <div className='section-one'>
          <h3 className='header-one'>About Us</h3>
          <p className='section-one-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mauris id nulla faucibus, quis mollis ex dapibus. Donec elementum mattis lorem at consequat. Duis eu neque sed justo suscipit fringilla eu vitae est. Quisque id tortor leo. Ut et accumsan lorem. Mauris sem ligula, iaculis eu lorem eu, eleifend interdum ante. Maecenas quis aliquam tortor. Morbi libero sem, interdum vel consectetur id, sollicitudin a metus. Ut ac libero nec est convallis varius. Phasellus vitae laoreet ante. Vestibulum dictum aliquam pellentesque. Integer a sodales massa.</p>
        </div>
        <div className='image-two'>
        </div>
        <div className='section-one'>
          <h3 className='header-one'>Section Two</h3>
          <p className='section-one-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mauris id nulla faucibus, quis mollis ex dapibus. Donec elementum mattis lorem at consequat. Duis eu neque sed justo suscipit fringilla eu vitae est. Quisque id tortor leo. Ut et accumsan lorem. Mauris sem ligula, iaculis eu lorem eu, eleifend interdum ante. Maecenas quis aliquam tortor. Morbi libero sem, interdum vel consectetur id, sollicitudin a metus. Ut ac libero nec est convallis varius. Phasellus vitae laoreet ante. Vestibulum dictum aliquam pellentesque. Integer a sodales massa.</p>
        </div>
        <div className='image-three'>
        </div>
        <div className='section-one'>
          <h3 className='header-one'>Section Three</h3>
          <p className='section-three-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mauris id nulla faucibus, quis mollis ex dapibus. Donec elementum mattis lorem at consequat. Duis eu neque sed justo suscipit fringilla eu vitae est. Quisque id tortor leo. Ut et accumsan lorem. Mauris sem ligula, iaculis eu lorem eu, eleifend interdum ante. Maecenas quis aliquam tortor. Morbi libero sem, interdum vel consectetur id, sollicitudin a metus. Ut ac libero nec est convallis varius. Phasellus vitae laoreet ante. Vestibulum dictum aliquam pellentesque. Integer a sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mauris id nulla faucibus, quis mollis ex dapibus. Donec elementum mattis lorem at consequat. Duis eu neque sed justo suscipit fringilla eu vitae est. Quisque id tortor leo. Ut et accumsan lorem. Mauris sem ligula, iaculis eu lorem eu, eleifend interdum ante. Maecenas quis aliquam tortor. Morbi libero sem, interdum vel consectetur id, sollicitudin a metus. Ut ac libero nec est convallis varius. Phasellus vitae laoreet ante. Vestibulum dictum aliquam pellentesque. Integer a sodales massa.</p>
        </div>

      </main>
    )
  }
}



export default (Dashboard);