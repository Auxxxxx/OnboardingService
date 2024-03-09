import { useRouter } from "vue-router";
export default function isLoggedIn({ next, to }){
    const router = useRouter()
    console.log("start")
    if (localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true") {
        console.log("logged");
      } else {
        console.log("not logged");
        router.push("/")
      }
    
}