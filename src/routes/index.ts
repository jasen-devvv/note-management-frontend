import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'notes',
        component: () => import('../views/notes/NotesList.vue')
    },
    {
        path: '/archive',
        name: 'archive',
        component: () => import('../views/notes/NotesList.vue')
    },
    {
        path: '/favorite',
        name: 'favorite',
        component: () => import('../views/notes/NotesList.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router