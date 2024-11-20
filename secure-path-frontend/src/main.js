import { createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory } from 'vue-router';

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap"  

// import pages
import SignupPage from './components/shared/SignupPage.vue';
import LoginPage from './components/shared/LoginPage.vue';
import NotFound404 from './components/shared/NotFound404.vue';
import ModulesPage from './components/user/ModulesPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'app',
            component: App
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignupPage
        },
        {
            path: '/modules/all',
            name: 'allModules',
            component: ModulesPage  
        },
        {
            path: '/user/:id/profile',
            name: "userProfile",
            component: UserProfile
        },
        {
            path: "/:catchAll(.*)",
            component: NotFound404
        }
    ]
})

const app = createApp(App);
app.use(router);
app.mount("#app");
