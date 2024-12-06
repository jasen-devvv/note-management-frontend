import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/notes/NotesList.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/notes/NotesList.vue')
    },
    {
        path: '/notes',
        name: 'notes',
        component: () => import('../views/notes/NotesList.vue')
    },
    {
        path: '/create',
        name: 'create-note',
        component: () => import('../views/notes/CreateNote.vue')
    },
    {
        path: '/edit/:id',
        name: 'edit-note',
        component: () => import('../views/notes/EditNote.vue'),
        props: true
    },
    {
        path: '/archive',
        name: 'archive',
        component: () => import('../views/notes/ArchivedNote.vue')
    },
    {
        path: '/favorite',
        name: 'favorite',
        component: () => import('../views/notes/FavoriteNote.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router