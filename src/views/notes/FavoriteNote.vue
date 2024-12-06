<script lang="ts">
import BreadCrumbs from '../../components/BreadCrumbs.vue';
export default {
    components: {
        BreadCrumbs
    }
}
</script>

<template>
    <div class="container-fluid pt-4 px-4">
        <div class="row mb-3">
            <div class="col-12 col-sm-6">
                <h1>Favorites Note List</h1>
            </div>
            <div class="col-12 col-sm-6">
                <BreadCrumbs :data="['Home', 'Notes']"/>
            </div>
        </div>

        <div class="row g-4 vh-100">
            <div class="col-sm-12 col-sm-6 col-xl-3">
                <div class="bg-secondary rounded p-4">
                    <div class="d-flex text-center align-items-center justify-content-between mb-4">
                        <h6 class="mb-0 text-info">Note 1</h6>
                        <a href="">Favorite</a>
                    </div>
                    <div>
                        <h1>Title</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi nisi possimus incidunt
                            ratione dolorum, unde sapiente vero rerum temporibus placeat distinctio laborum obcaecati
                            harum repellendus corporis commodi saepe, deserunt animi.</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-4">
                        <button class="btn btn-small btn-success">Unarchived</button>
                        <router-link :to="{ name: 'edit-note', params: { id: '1' } }" class="btn btn-small btn-warning">Edit</router-link>
                        <button class="btn btn-small btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>