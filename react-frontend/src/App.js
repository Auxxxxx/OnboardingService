import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { PrivateRoute } from './components/privateRoute.component';
import Profile from './components/profile.component'
import Login from './components/login.component'
import SignUp from './components/signup.component'
// import NotesList from './components/innerpages.component.jsx'
import ContactList from './views/contacts.js'
import ManagerList from './views/managerView.js'
import ContactPage from './views/contacts.js'
// import InnerPage from './components/innerpages.component.jsx'
import MeetingNotesPage from './views/meetingnotes.js'
import UsefulInfoPage from './views/usefulInformation.js'
import MediaPage from './views/mediaassert.js'
import Onboarding from './views/onboarding.js';
import ReportPage from './views/reports.js';
import AppPag from './components/AppPAgination.js';


function App() {


  return (
    // <Router>
    //   <div className="App">
    //        {routes}
    //   </div>
    // </Router>

<Router>   
  <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/sign-in' element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path ="/contacts" element = {<ContactPage />} />
      <Route path="/usefulinfo" element={<UsefulInfoPage />} />
      <Route path="/notes" element={<MeetingNotesPage />} />
      <Route path ="/media" element = {<MediaPage />} />
      <Route path ="/onboarding" element = {<Onboarding />} />
      <Route path ="/reports" element = {<ReportPage />} />

      <Route path="/pagination" element = {<AppPag/>}/>

      <Route path='/profile' element={<Profile />} />
     </Routes> 
</Router>
 
     );
}

export default App;
