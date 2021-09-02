import React from 'react';
import Navbar from '../src/Components/navbar'
import Table from '../src/Components/table'
import Edit from '../src/Components/edit'
import Home from '../src/Components/home'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import './App.css'



class App extends React.Component {
  
  render() {
    
    
    return (
      <Router>

            <Navbar/>  
      <Switch>
      <Route path="/" exact component={Home}/>
       <Route path="/List" component={Table}/>
       <Route path="/Edit" component={Edit}/>

      </Switch>
      </Router>


    )}
     };
export default App;
