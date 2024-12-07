<script setup lang="ts">
import BreadCrumbs from '../../components/BreadCrumbs.vue';
</script>

<template>
    <div class="container-fluid pt-4 px-4">
        <div class="row mb-3">
            <div class="col-12 col-sm-6">
                <h1>Home</h1>
            </div>
            <div class="col-12 col-sm-6">
                <BreadCrumbs :items="['Home', '']"/>
            </div>
        </div>

        <div class="row g-4 vh-100">
            <div class="col-sm-12">
                <div class="bg-secondary rounded p-4">
                    <h3>Hello Jasen</h3>
                    <p>JD Note is a simple and efficient note management web app that allows you to easily create, edit, and delete notes. Keep your notes organized with features to archive and mark your favorite entries. Stay productive and organized with JD Note!</p>
                    <b class="text-white">Features :</b>
                    <ol>
                        <li>List Notes</li>
                        <li>Create Note</li>
                        <li>Edit Note</li>
                        <li>Delete Note</li>
                        <li>Archive Note</li>
                        <li>Favorite Note</li>
                    </ol>
                    <b class="text-white">Media Social Link:</b>
                    <ol>
                        <li>Instagram: <a class="text-decoration-underline" href="#"></a></li>
                        <li>Facebook: <a class="text-decoration-underline" href="#"></a></li>
                        <li>X (Twitter): <a class="text-decoration-underline" href="#"></a></li>
                        <li>Youtube: <a class="text-decoration-underline" href="#"></a></li>
                        <li>Tiktok: <a class="text-decoration-underline" href="#"></a></li>
                    </ol>
                    <b class="text-white">Thank you for using JD Note!</b>
                    <p>We appreciate your trust in our platform to manage and organize your notes. We hope JD Note helps you stay productive and organized. If you have any feedback or suggestions, feel free to reach out!</p>
                </div>
            </div>
        </div>
    </div>
</template>