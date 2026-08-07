import Home from '@/components/Home.vue'
import Product from '@/components/Product.vue'
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory('http://localhost:5173/'),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/products/:id',
            name: 'products-detail',
            component: Product,
            meta: {requestAuth: false},
            props: true
        }
    ]
});

export default router;