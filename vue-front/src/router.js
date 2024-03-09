import {createRouter, createWebHistory} from "vue-router"
import Login from "./pages/Login.vue"
import OnBoard from "./pages/OnBoard.vue"
import MediaAsserts from "./pages/MediaAsserts.vue"
import isLoggedIn from "./middleware/isLoggedIn"
import preventAuthAccess  from "./middleware/preventAuthAccess"

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/onboard",
            component:OnBoard,
            beforeEnter:isLoggedIn
        },
        {
            path:"/",
            component:Login,
            beforeEnter:preventAuthAccess
        },
        {
            path:"/media-asserts",
            component:MediaAsserts
        }
        
    ]
})
