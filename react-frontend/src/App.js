import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Profile from './components/profile'
import Login from './components/login.js'
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
import AppPage from './components/AppPAgination.js';
import TemplateNote from './views/templateNotes.js';
import ManagerPage from './views/managerView.js'
import { PrivateRoute } from './components/privateRoute.js';
import UserWievTemplate from './views/templateManageUser.js'
import InnerNote from './components/templateNote.jsx'



function App() {


  return (
<Router>   
  <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/sign-in' element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route element = {<PrivateRoute/>} >
        <Route path='/profile' element={<Profile />} />
        <Route path ="/contacts" element = {<ContactPage />} />
        <Route path="/usefulinfo" element={<UsefulInfoPage />} />
        <Route path="/notes" element={<MeetingNotesPage />} />
        <Route path ="/media" element = {<MediaPage />} />
        <Route path ="/onboarding" element = {<Onboarding />} />
        <Route path ="/reports" element = {<ReportPage />} />
        <Route path ="/notes/1" element = {<InnerNote />} />
      </Route>
      
      <Route path="/pagination" element = {<AppPage/>}/>
      <Route path="/admin" element={<ManagerPage></ManagerPage>} />
      <Route path="/user" element={<UserWievTemplate></UserWievTemplate>} />

      {/* страницы пользователей, профилей, заметок */}
      <Route path='/user/:username' element={<UserWievTemplate/>} />
      <Route path='/notes/:id' element={<InnerNote />} />


     </Routes> 
</Router>
 
     );
}

export default App;
