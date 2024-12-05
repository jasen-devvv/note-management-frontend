<script lang="ts">
</script>

<template>
    <div class="container-fluid pt-4 px-4">
        <div class="row mb-3">
            <div class="col-12 col-sm-6">
                <h1>Title</h1>
            </div>
            <div class="col-12 col-sm-6">
                <nav aria-label="breadcrumb" class="float-sm-end">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link :to="{ name: 'notes' }">Home</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page"><router-link :to="{ name: 'notes' }">Notes</router-link></li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="row mb-3">
            <h3>Notes List +</h3>
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
                        <button class="btn btn-small btn-success">Archive</button>
                        <button class="btn btn-small btn-warning">Edit</button>
                        <button class="btn btn-small btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>