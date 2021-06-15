import React from 'react';
import './App.css';
import './utilities.css';
import {Switch,BrowserRouter,Route,Redirect} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Events from './components/Events/Events';
import Dashboard from './components/Admin/Dashboard';

const App=()=> {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path="/events" exact component={Events}/>
          <Route path="/admin" component={Dashboard}/>
          
      </Switch>


    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
