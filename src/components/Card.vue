<script setup lang="ts">
import { PropType } from 'vue';
import API from '../services/api';

type TNote = {
    id: string,
    title: string,
    content: string
}

const props = defineProps({
    index: {
        type: Number,
        required: true
    },
    note: {
        type: Object as PropType<TNote>,
            required: true
    }
})

const archiveNote = async (status: boolean) => {
    try {
        API.patch(`/notes/${props.note.id}/archive?status=${status}`)
        console.log("Success archived")
    } catch (error) {
        console.log(error)
    }
}

const deleteNote = async () => {
    try {
        API.delete(`/notes/${props.note.id}`)
        console.log("Success deleted")
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <div class="col-sm-12 col-sm-6 col-xl-3">
        <div class="bg-secondary rounded p-4 overflow-auto">
            <div class="d-flex text-center align-items-center justify-content-between mb-4">
                <h6 class="mb-0 text-info">Note {{ props.index + 1 }}</h6>
                <a href="">Favorite</a>
            </div>
            <div>
                <h1>{{ props.note.title }}</h1>
                <p>{{ props.note.content }}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-4">
                <button @click="archiveNote(true)" class="btn btn-small btn-success">Archive</button>
                <router-link :to="{ name: 'edit-note', params: { id: props.note.id } }"
                    class="btn btn-small btn-warning">Edit</router-link>
                <button @click="deleteNote" class="btn btn-small btn-primary">Delete</button>
            </div>
        </div>
    </div>
</template>