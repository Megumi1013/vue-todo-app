import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import ToDo from './components/ToDo.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/todo',
        name: 'todo',
        component: ToDo
    },
];

const router =  createRouter({
    history: createWebHistory(),
    routes
});

export default router;