//import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../components/privateRoute.component';
import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from '../components/profile.component'
import Login from '../components/login.component'
import SignUp from '../components/signup.component'
import ContactList from '../views/contacts.js'
import ManagerList from '../views/managerView.js'
import ContactPage from '../views/contacts.js'
import InnerPage from '../components/innerpages.component.js'
import MeetingNotesPage from '../views/meetingnotes.js'
import UsefulInfoPage from '../views/usefulInformation.js'
import MediaPage from '../views/mediaassert.js'



export const useRoutes = () => {

  return (
    // <Routes>
    //   <Route index element={<Main />} />
    //   <Route path="/" element={<Main />} />
    //   <Route path="/login" element={<Login />} />
      
    //   <Route element={<PrivateRoute />}>
    //     <Route path='/admin' element={<Admin />} />
    //     <Route path="/logout" element={<Logout />} />
    //   </Route>


    <Routes>
      <Route exact path="/" element={<Login />} />
       {/* <Route path="/sign-in" element={<Login />} /> */}
      <Route path="/sign-up" element={<SignUp />} />
      <Route path ="/contacts" element = {<ContactPage />} />
      <Route path="/usefulinfo" element={<UsefulInfoPage />} />
      <Route path="/usefulinfo" element={<MeetingNotesPage />} />
      <Route path ="/media" element = {<MediaPage />} />

      <Route element = {<PrivateRoute />}>
        <Route exact path='/sign-in' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
      

      {/* //для менеджера, нужна будет проверка, что человек зарегался как менеджер */}
      {/* <Route element = {<ManageRoute />}>
        <Route exact path='/' element={<Login />} />
        <Route path='/managing' element={<ManagePage />} />
      </Route> */}

    </Routes>


    
  )
}

export default useRoutes