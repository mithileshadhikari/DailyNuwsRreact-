
import './App.css';
import React, { Component } from 'react'
import Navbar from './componants/Navbar';
import News from './componants/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './componants/Footer';

export default class App extends Component {

  state={
    progress:0
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }


  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setprogress}  key="general" pageSize={6} country="in" category="general"/>}/>
          
          <Route exact path='/business' element={<News setProgress={this.setprogress}  key="business" pageSize={6} country="in" category="business"/>}/>

          <Route exact path='/entertainment' element={<News setProgress={this.setprogress}  key="entertainment" pageSize={6} country="in" category="entertainment"/>}/>

          <Route exact path='/general' element={<News setProgress={this.setprogress}  key="general" pageSize={6} country="in" category="general"/>}/>

          <Route exact path='/health' element={<News setProgress={this.setprogress}  key="health" pageSize={6} country="in" category="health"/>}/>

          <Route exact path='/science' element={<News setProgress={this.setprogress}  key="science" pageSize={6} country="in" category="science"/>}/>

          <Route exact path='/sports' element={<News setProgress={this.setprogress}  key="sports" pageSize={6} country="in" category="sports"/>}/>

          <Route exact path='/technology' element={<News setProgress={this.setprogress}  key="technology" pageSize={6} country="in" category="technology"/>}/>

        </Routes>
        <Footer/>
        </Router>
      </div>
    )
  }
}



