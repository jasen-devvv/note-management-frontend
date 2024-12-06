<script lang="ts">
import { onMounted, ref } from 'vue';
import BreadCrumbs from '../../components/BreadCrumbs.vue';
import Card from '../../components/Card.vue'
import API from '../../services/api';

interface INote {
    id: string,
    title: string,
    content: string,
    archived: boolean,
    favorite: boolean,
    created_at?: string,
    updated_at?: string
}

export default {
    setup() {
        const notes = ref<INote[]>([])
        const loading = ref<boolean>(true)
        const err = ref<string | null>(null)

        const fetchNotes = async(): Promise<void> => {
            try {
                const response = await API.get<INote[]>('/notes')
                notes.value = response.data
                console.log(response.data)
            } catch (error) {
                err.value = 'Failed to fetch notes'
            } finally {
                loading.value = false
            }
        }

        onMounted(() => {
            fetchNotes()
        })

        return { notes, loading, err }
    },
    components: {
        BreadCrumbs,
        Card
    }
}
</script>

<template>
    <div class="container-fluid pt-4 px-4">
        <div class="row mb-3">
            <div class="col-12 col-sm-6">
                <h1>Notes List <router-link :to="{ name: 'create-note' }" class="btn btn-lg btn-success">Add</router-link></h1>
            </div>
            <div class="col-12 col-sm-6">
                <BreadCrumbs :data="['Home', 'Notes']" />
            </div>
        </div>

        <p v-if="loading">Loading ...</p>
        <p v-if="err">{{ err }}</p>
        <div v-if="!loading && !err" class="row g-5 min-vh-100">
            <Card v-for="(note, index) in notes" :key="index" :index="index" :note="note" />
        </div>
    </div>
</template>