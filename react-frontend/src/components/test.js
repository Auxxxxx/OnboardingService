import React, { useEffect, useState, useContext } from 'react';
// import './index.css';
import {useNavigate} from 'react-router-dom'
import useUsers from '../hooks/useUsers.js';
import useNotes from '../hooks/useNotes.js'
import useAuth from '../hooks/useAuth.js'
import  UserContext  from '../context/UserProvider.js';
const Testing = () => {
    const {setClients} = useContext(UserContext)

    const {clients} = useUsers()
    const {data, setData} = useNotes()
    const {setAuth, isAuthenticated} = useAuth()
    const navigate = useNavigate()

    useEffect(() =>{
    setAuth("1")
    setData({id: 0, content: ["New", " new"] , header: "new new", date: "12.04.23"})
    setClients("emailing")}
    , [])


    useEffect(() => {
        // navigate("/admin")
        console.log("clients:", clients)
       console.log("data:", data)
    console.log("auth:", isAuthenticated)

    }, [clients, data, isAuthenticated])

}

export default Testing;