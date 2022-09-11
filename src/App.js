import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {firstAction} from './firstAction/firstAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAction} from './firstAction/firstAction';
import {useEffect, useState} from 'react';
import React from 'react'
import Sisebar from './Sisebar';
import Feed from '../src/Fee/Feed'
import Widgets from './Widgets.js';

function App() {
   return(<>
   <div className='app'>
   {/* {sidevare} */}
   <Sisebar/>
   {/* {Feeed}
   {
    widgets
   } */}
   <Feed/>

   <Widgets/>
   </div>
   </>
   )
}

export default App;
