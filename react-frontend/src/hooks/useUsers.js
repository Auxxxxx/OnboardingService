import React, {useContext} from 'react'
import UserContext from '../context/NotesProvider'

const useUsers = () =>{
    return useContext(UserContext)
}

export default useUsers;