<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BreadCrumbs from '../../components/BreadCrumbs.vue';
import Card from '../../components/Card.vue'
import API from '../../services/api';
import { INote } from '../../util/interface';

const notes = ref<INote[]>([])
const loading = ref<boolean>(true)
const err = ref<string | null>(null)

const fetchNotes = async (): Promise<void> => {
    try {
        const response = await API.get<INote[]>('/notes')
        const filter = response.data.filter((note) => note.archived !== true)
        notes.value = filter
    } catch (error) {
        err.value = 'Failed to fetch notes'
    } finally {
        loading.value = false
    }
}

const archiveHandler = async ({ id, status }: { id: string, status: boolean }): Promise<void> => {
    try {
        const response = await API.patch(`/notes/${id}/archive?status=${status}`)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

const favoriteHandler = async ({ id, status }: { id: string, status: boolean }): Promise<void> => {
    try {
        const response = await API.patch(`/notes/${id}/favorite?status=${status}`)
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}

const deleteHandler = async (id: string): Promise<void> => {
    try {
        await API.delete(`/notes/${id}`)
        const index = notes.value.findIndex((note) => note.id === id)
        if (index !== -1) {
            notes.value.splice(index, 1)
        }
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => fetchNotes())
</script>

<template>
    <div class="container-fluid pt-4 px-4">
        <div class="row mb-3 align-items-center">
            <div class="col-12 col-sm-6">
                <h2>Notes List <router-link :to="{ name: 'create-note' }"
                        class="btn btn-success">Add</router-link></h2>
            </div>
            <div class="col-12 col-sm-6">
                <BreadCrumbs :items="['Home', 'Notes', 'List']" />
            </div>
        </div>

        <div v-if="loading" id="spinner"
            class="show bg-dark position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <div v-if="err" class="row g-4 vh-100">
            <div class="col-sm-12">
                <div class="bg-secondary rounded p-4 overflow-auto">
                    <h6 class="text-primary">{{ err }}</h6>
                </div>
            </div>
        </div>

        <div v-if="!loading && !err" class="row g-5 min-vh-100">
            <Card v-if="notes.length !== 0" v-for="(note, index) in notes" :key="note.id" :data="{ index, note }"
                @archive="archiveHandler" @favorite="favoriteHandler" @delete="deleteHandler" />
            <div v-else class="col-12">
                <div class="bg-secondary rounded p-4 overflow-auto">
                    <h6 class="text-primary">No notes found</h6>
                </div>
            </div>
        </div>
    </div>
</template>