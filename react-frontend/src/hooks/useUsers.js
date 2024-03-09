import {useContext} from 'react'
import UserContext from '../context/UserProvider.js'

function useUsers() {
    return (useContext(UserContext))
}

export default useUsers;