import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Settings from '@/pages/Settings'

export default new VueRouter({
    routes: [
        {
            path: '/', component: Home
        },
        {
            path: '/settings', component: Settings, props: true
        }
    ]
});