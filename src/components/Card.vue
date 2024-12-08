<script setup lang="ts">
import { formatDate } from '../util/date';
import { INote } from '../util/interface';

const props = defineProps<{ note: INote }>()
const emit = defineEmits(['archive', 'favorite', 'delete'])

const archiveNote = () => emit('archive', {id: props.note.id, status: !props.note.archived})
const favoriteNote = () => emit('favorite', {id: props.note.id, status: !props.note.favorite})
const deleteNote = () => emit('delete', props.note.id)
</script>

<template>
    <div class="col-sm-12 col-sm-6 col-xl-4">
        <div class="bg-secondary rounded p-4 overflow-auto">
            <div class="d-flex text-center align-items-center justify-content-between mb-4">
                <h6 class="mb-0 text-info">Note : {{ formatDate(note.CreatedAt) }}</h6>
                <button @click="favoriteNote" class="btn"><i :class="note.favorite ? 'fa fa-star text-warning' : 'far fa-star'"></i></button>
            </div>
            <div>
                <h2>{{ note.title }}</h2>
                <p>{{ note.content }}</p>
            </div>
            <div class="d-flex gap-2 align-items-center mt-4">
                <button @click="archiveNote" class="btn btn-small btn-success">{{ note.archived ? 'Unarchived' : 'Archive' }}</button>
                <router-link :to="{ name: 'edit-note', params: { id: note.id } }"
                    class="btn btn-small btn-warning">Edit</router-link>
                <button @click="deleteNote" class="btn btn-small btn-primary">Delete</button>
            </div>
        </div>
    </div>
</template>