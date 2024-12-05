<script lang="ts">
export default {
    name: "SideBar"
}
</script>

<template>
    <div class="sidebar pe-4 pb-3">
        <nav class="navbar bg-secondary navbar-dark">
            <router-link :to="{ name: 'notes' }" class="navbar-brand mx-4 mb-3">
                <h3 class="text-primary"><i class="fa fa-rocket me-2"></i>JDNote</h3>
            </router-link>
            <div class="d-flex align-items-center ms-4 mb-4">
                <div class="position-relative">
                    <img class="rounded-circle" src="/darkpan/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                    <div
                        class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1">
                    </div>
                </div>
                <div class="ms-3">
                    <h6 class="mb-0">Jasen</h6>
                    <span>Developer</span>
                </div>
            </div>
            <div class="navbar-nav w-100">
                <router-link :to="{ name: 'notes' }" exact class="nav-item nav-link" active-class="active"><i class="fa fa-tachometer-alt me-2"></i>Notes</router-link>
                <router-link :to="{ name: 'archive' }" exact class="nav-item nav-link" active-class="active"><i class="fa fa-archive me-2"></i>Archived</router-link>
                <router-link :to="{ name: 'favorite' }" exact class="nav-item nav-link" active-class="active"><i class="fa fa-star me-2"></i>Favorite</router-link>
            </div>
        </nav>
    </div>
</template>