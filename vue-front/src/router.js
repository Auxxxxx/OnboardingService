import {createRouter, createWebHistory} from "vue-router"
import Login from "./pages/Login.vue"
import OnBoard from "./pages/OnBoard.vue"
import MediaAssets from "./pages/MediaAssets.vue"
import isLoggedIn from "./middleware/isLoggedIn"
import preventAuthAccess  from "./middleware/preventAuthAccess"
import SignUp from "./pages/SignUp.vue"
import MeetingNotes from "./pages/MeetingNotes.vue"
import UsefulInfo from "./pages/UsefulInfo.vue"
import PaidAdvertisementReports from "./pages/PaidAdvertisementReports.vue"
import AdminPage from "./pages/admin/AdminPage.vue"
import ClientPage from "./pages/admin/ClientPage.vue"

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/onboard",
            component:OnBoard,
            // beforeEnter:isLoggedIn
        },
        {
            path:"/",
            component:Login,
            beforeEnter:preventAuthAccess
        },
        {
            path:"/media-assets",
            component:MediaAssets
        },
        {
            path:"/signup",
            component:SignUp
        },
        {
            path:"/meeting-notes",
            component:MeetingNotes
        },
        {
            path:"/useful-info",
            component:UsefulInfo
        },
        {
            path:"/paid-advertising-reports",
            component:PaidAdvertisementReports
        },
        {
            path: "/admin",
            children: [
                {
                    path:"",
                    component: AdminPage,
                },
                {
                    path: "client-page/:email",
                    component: ClientPage
                }
            ]
        }
        
    ]
})
