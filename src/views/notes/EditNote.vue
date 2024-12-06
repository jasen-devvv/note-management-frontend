<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BreadCrumbs from '../../components/BreadCrumbs.vue';
import API from '../../services/api';

interface NoteForm {
    title: string;
    content: string;
}

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

const form = ref<NoteForm>({
    title: '',
    content: ''
})

const fetchNote = async (id:string) => {
    try {
        const response = await API.get(`/notes/${id}`)
        form.value.title = response.data.title
        form.value.content = response.data.content
    } catch (error) {
        console.log(error)
    }
}

const submitHandler = async () => {
    try {
        const response = await API.put(`/notes/${props.id}`, form.value)
        console.log(response.data)
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    fetchNote(props.id)
})

const goBack = () => {
    history.back()
}

</script>

<template>
    <div class="container-fluid pt-4 px-4">
        <div class="row mb-3">
            <div class="col-12 col-sm-6">
                <h1>Edit Note {{ id }}</h1>
            </div>
            <div class="col-12 col-sm-6">
                <BreadCrumbs :data="['Home', 'Notes']" />
            </div>
        </div>
        
        <div class="row g-4 vh-100">
            <div class="col-12">
                <div class="bg-secondary rounded p-4">
                    <h6 class="mb-4">Create Note</h6>
                    <form @submit.prevent="submitHandler">
                        <div class="mb-3">
                            <label for="title" class="form-label text-white">Title </label>
                            <input type="text" class="form-control" v-model="form.title" id="title" placeholder="ex: Hello World" />
                            <div class="invalid-feedback"></div>
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label text-white">Content </label>
                            <textarea class="form-control" id="content" v-model="form.content" rows="5" placeholder="ex: Lorem Ipsum Dolor Amit"></textarea>
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