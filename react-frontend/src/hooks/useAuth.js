import { useContext } from "react"
import AuthContext from "../context/AuthProvider.js"

function useAuth() {
  //хук позволяет подписаться на котнекст с объектом из двух свойств
  return (
    useContext(AuthContext)
  )
}

export default useAuth;