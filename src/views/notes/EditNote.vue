<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BreadCrumbs from '../../components/BreadCrumbs.vue';
import API from '../../services/api';
import { NoteForm } from '../../util/interface';
import { useRouter } from 'vue-router';
import { note, fetchNoteByID, updateHandler } from '../../services/noteService'

const router = useRouter()
const props = defineProps<{ id: string }>()

const goBack = () => history.back()

const submitHandler = async () => {
    await updateHandler({ id: props.id, form: note })
    router.push({ name: 'notes' })
}

onMounted(() => { 
    fetchNoteByID(props.id)
})

</script>

<template>
    <div class="container-fluid pt-4 px-4">
        <div class="row mb-3">
            <div class="col-12 col-sm-6">
                <h1>Edit Note {{ id }}</h1>
            </div>
            <div class="col-12 col-sm-6">
                <BreadCrumbs :items="['Home', 'Notes', 'Edit']" />
            </div>
        </div>
        
        <div class="row g-4 vh-100">
            <div class="col-12">
                <div class="bg-secondary rounded p-4">
                    <h6 class="mb-4">Create Note</h6>
                    <form @submit.prevent="submitHandler">
                        <div class="mb-3">
                            <label for="title" class="form-label text-white">Title</label>
                            <input type="text" class="form-control" v-model="note.title" id="title" placeholder="ex: Hello World" />
                            <div class="invalid-feedback"></div>
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label text-white">Content</label>
                            <textarea class="form-control" id="content" v-model="note.content" rows="5" placeholder="ex: Lorem Ipsum Dolor Amit"></textarea>
                            <div class="invalid-feedback"></div>
                        </div>
                        
                        <div class="d-flex align-items-center gap-3">
                            <button type="submit" class="btn btn-success">Submit</button>
                            <button @click="goBack()" type="button" class="btn btn-light">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>