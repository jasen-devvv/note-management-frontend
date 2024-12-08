<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BreadCrumbs from '../../components/BreadCrumbs.vue';
import Card from '../../components/Card.vue';
import { notes, err, loading, fetchNotes, archiveHandler, favoriteHandler, deleteHandler } from '../../services/noteService.ts';

onMounted(() => fetchNotes());
</script>

<template>
    <div class="container-fluid pt-4 px-4">
        <!-- Heading Section -->
        <div class="row mb-3 align-items-center">
            <div class="col-12 col-sm-6">
                <h2>
                    Notes List
                    <router-link :to="{ name: 'create-note' }" class="btn btn-success ms-3">Add</router-link>
                </h2>
            </div>
            <div class="col-12 col-sm-6">
                <BreadCrumbs :items="['Home', 'Notes', 'List']" />
            </div>
        </div>

        <div class="alert alert-info">
            <b>Note:</b> If you archive notes that are in favorites, they will become unfavourites
        </div>

        <!-- Loading Spinner -->
        <div v-if="loading" id="spinner"
            class="show bg-dark position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <!-- Notes List or No Notes Message -->
        <div v-else-if="!loading && !err" class="row g-5 min-vh-100">
            <template v-if="notes.length > 0">
                <Card 
                    v-for="(note) in notes" 
                    :key="note.id" 
                    :note="note" 
                    @archive="archiveHandler" 
                    @favorite="favoriteHandler" 
                    @delete="deleteHandler"
                />
            </template>
            <div v-else class="col-12">
                <div class="bg-secondary rounded p-4 overflow-auto">
                    <h6 class="text-primary">No notes found</h6>
                </div>
            </div>
        </div>

        <!-- Error Message -->
        <div v-if="err" class="alert alert-danger">
            <strong>Error:</strong> Unable to load notes. Please try again later.
        </div>
    </div>
</template>

