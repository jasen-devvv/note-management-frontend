<script setup lang="ts">
import { INote } from '../util/interface';

const props = defineProps<{ data: {index: number, note: INote} }>()
const emit = defineEmits(['archive', 'favorite', 'delete'])

const index = props.data.index
const note = props.data.note

const archiveNote = () => emit('archive', {id: note.id, status: !note.archived})
const favoriteNote = () => emit('favorite', {id: note.id, status: !note.favorite})
const deleteNote = () => emit('delete', note.id)

</script>

<template>
    <div class="col-sm-12 col-sm-6 col-xl-3">
        <div class="bg-secondary rounded p-4 overflow-auto">
            <div class="d-flex text-center align-items-center justify-content-between mb-4">
                <h6 class="mb-0 text-info">Note {{ index + 1 }}</h6>
                <button @click="favoriteNote" class="btn"><i class="far fa-star"></i></button>
            </div>
            <div>
                <h1>{{ note.title }}</h1>
                <p>{{ note.content }}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-4">
                <button @click="archiveNote" class="btn btn-small btn-success">Archive</button>
                <router-link :to="{ name: 'edit-note', params: { id: note.id } }"
                    class="btn btn-small btn-warning">Edit</router-link>
                <button @click="deleteNote" class="btn btn-small btn-primary">Delete</button>
            </div>
        </div>
    </div>
</template>