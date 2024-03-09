import { useRouter } from "vue-router";

export default function preventAuthAccess(){
    const router = useRouter()
    if(localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"){
        router.push("/onboard")
    }
}