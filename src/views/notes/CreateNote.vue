<script setup lang="ts">
import { ref } from 'vue';
import BreadCrumbs from '../../components/BreadCrumbs.vue';
import { useRouter } from 'vue-router';
import { createHandler } from '../../services/noteService';
import { NoteForm } from '../../util/interface';

const router = useRouter();

const form = ref<NoteForm>({
    title: '',
    content: '',
});

const goBack = () => history.back();

const submitHandler = async (): Promise<void> => {
    if (!form.value.title || !form.value.content) {
        Swal.fire({
            title: 'Validation Error',
            text: 'Title and Content are required!',
            icon: 'error',
            timer: 2000,
            timerProgressBar: true,
        })
        return;
    }

    try {
        await createHandler(form.value);
        router.push({ name: 'notes' });
    } catch (error) {
        console.error('Error creating note:', error);
    }
};
</script>

<template>
    <div class="container-fluid pt-4 px-4">
        <!-- Header Section -->
        <div class="row mb-3">
            <div class="col-12 col-sm-6">
                <h1>Create Note</h1>
            </div>
            <div class="col-12 col-sm-6">
                <BreadCrumbs :items="['Home', 'Notes', 'Create']" />
            </div>
        </div>

        <!-- Form Section -->
        <div class="row g-4 vh-100">
            <div class="col-12">
                <div class="bg-secondary rounded p-4">
                    <h6 class="mb-4">Create Your Note</h6>
                    <form @submit.prevent="submitHandler">
                        <!-- Title Input -->
                        <div class="mb-3">
                            <label for="title" class="form-label text-white">Title</label>
                            <input
                                type="text"
                                v-model="form.title"
                                class="form-control"
                                id="title"
                                placeholder="ex: Hello World"
                                required
                            />
                        </div>

                        <!-- Content Textarea -->
                        <div class="mb-3">
                            <label for="content" class="form-label text-white">Content</label>
                            <textarea
                                class="form-control"
                                v-model="form.content"
                                id="content"
                                rows="5"
                                placeholder="ex: Lorem Ipsum Dolor Amit"
                                required
                            ></textarea>
                        </div>

                        <!-- Buttons Section -->
                        <div class="d-flex align-items-center gap-3">
                            <button type="submit" class="btn btn-success">Submit</button>
                            <button @click="goBack" type="button" class="btn btn-light">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
