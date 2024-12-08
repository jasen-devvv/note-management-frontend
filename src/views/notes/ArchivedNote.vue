<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BreadCrumbs from '../../components/BreadCrumbs.vue';
import Card from '../../components/Card.vue'
import { notes, err, loading, fetchArchived, archiveHandler, favoriteHandler, deleteHandler } from '../../services/noteService'

onMounted(() => fetchArchived())
</script>

<template>
    <div class="container-fluid pt-4 px-4">
        <div class="row mb-3 align-items-center">
            <div class="col-12 col-sm-6">
                <h2>Notes Archived</h2>
            </div>
            <div class="col-12 col-sm-6">
                <BreadCrumbs :items="['Home', 'Notes', 'Archived']" />
            </div>
        </div>

        <div v-if="loading" id="spinner"
            class="show bg-dark position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <div v-if="!loading && !err" class="row g-5 min-vh-100">
            <Card v-if="notes.length !== 0" v-for="(note) in notes" :key="note.id" :note="note"
                @archive="archiveHandler" @favorite="favoriteHandler" @delete="deleteHandler" />
            <div v-else class="col-12">
                <div class="bg-secondary rounded p-4 overflow-auto">
                    <h6 class="text-primary">No notes found</h6>
                </div>
            </div>
        </div>
    </div>
</template>