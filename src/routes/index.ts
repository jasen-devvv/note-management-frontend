import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/pages/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/notes/NotesList.vue')
    },
    {
        path: '/notes/list',
        name: 'notes',
        component: () => import('../views/notes/NotesList.vue')
    },
    {
        path: '/notes/create',
        name: 'create-note',
        component: () => import('../views/notes/CreateNote.vue')
    },
    {
        path: '/notes/edit/:id',
        name: 'edit-note',
        component: () => import('../views/notes/EditNote.vue'),
        props: true
    },
    {
        path: '/notes/archived',
        name: 'archive',
        component: () => import('../views/notes/ArchivedNote.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router