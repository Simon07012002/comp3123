import './App.css';
import UserList from './components/UserList';
import { Routes, Route, BrowserRouter, NavLink, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import UserDetails from './components/UserDetails';
import {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Axios and Navigation</h1>
        {/* <UserList /> */}
        <BrowserRouter>
          <nav>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/userlist'>User List</NavLink>

          </nav>
          <Routes>
            <Route path='/home' element= {<Home/>}/>
            <Route path='/about?college=GBC' element= {<Contact/>}/>
            <Route path='/contact/:name' element= {<AboutUs/>}/>
            <Route path='/userlist' element = {<UserList/>}/>
            <Route path='/user/:userid' element = {<UserDetails/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
    )}
}
