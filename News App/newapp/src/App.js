import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/news';


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <News/>
      </div>
    )
  }
}
