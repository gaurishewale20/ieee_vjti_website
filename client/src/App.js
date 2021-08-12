import React from 'react';
import './App.css';
import './utilities.css';
import {Switch,BrowserRouter,Route,Redirect} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Events from './components/Events/Events';
import Projects from './components/Projects/Projects';
import Dashboard from './components/Admin/Dashboard';
import EventsDashboard from './components/Admin/EventsDashBoard';
import ProjectsDashboard from './components/Admin/ProjectsDashboard';
import AdminLogin from './components/Admin/AdminLogin/AdminLogin';
import EventDetails from './components/EventDetails/EventDetails';
import Magazine from './components/Magazine/Magazine';
import Membership from './components/Membership/Membership';
import TeamPage from './components/TeamPage/TeamPage';
import ContactUs from './components/ContactUs/ContactUs';
// import Submit from './components/ContactUs/Submit/Submit';

const App=()=> {
  const admin = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App mt-5 pt-5">
      <Switch>
          <Route path="/" exact component={Home}/>
          {/* <Route path="/" exact component={()=><Redirect to="/events"/>}/> */}
          <Route path="/events" exact component={Events}/>
          {/* <Route path="/events/search" exact component={Events}/> */}
          <Route path="/events/:id" exact component={EventDetails}/>
          <Route path="/rd" exact component={Projects}/>
          <Route path="/admin" exact component={()=>(!admin ? <AdminLogin/> : <Redirect to ="/"/>)}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/dashboard/events" exact component={EventsDashboard}/>
          <Route path="/dashboard/projects" exact component={ProjectsDashboard}/>
          <Route path="/magazine" exact component={Magazine}/>
          <Route path="/membership" exact component={Membership}/>
          <Route path="/teampage" exact component={TeamPage}/>
          <Route path="/contactus" exact component={ContactUs}/>
          {/* <Route path="/contactsubmit" exact component={Submit}/> */}

      </Switch>
</div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
