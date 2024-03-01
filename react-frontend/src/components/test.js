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

    const [temp, setTemp] = useState([1, 2, 3, 4])
    // const [clients, setClients] = useState([])

    useEffect(() =>{
        // fetch(`http://${URL}/client/list`)
        // // fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
        //   .then((res) =>
        //    {
        //     return res.json()
        //   }
        //   )
    
        //   .then((body) => {
        //     setData(body.clients);
        //     setClients(prev => [...prev, ...body.clients])
            
        // })
        //   .catch(() => {
        //   });

    // console.log("temp:", temp[0])
}
    , [])


    // useEffect(() => {
    //     // navigate("/admin")
    //     console.log("clients:", clients)
    //    console.log("data:", data)
    // console.log("auth:", isAuthenticated)

    // }, [clients, data, isAuthenticated])

}

export default Testing;