<script setup lang="ts">
import { useRoute } from 'vue-router';

const data = {
  logoName: "JDNote",
  profilePath: "/img/logo.png",
  name: "Jasen",
  role: "Programmer"
};

const route = useRoute();

// Computed property untuk mengatur apakah item aktif di sidebar
const isActive = (path: string) => route.path === path;
</script>

<template>
  <div class="sidebar pe-4 pb-3">
    <!-- Sidebar Navigation -->
    <nav class="navbar bg-secondary navbar-dark">
      <!-- Logo and Navigation -->
      <router-link :to="{ name: 'notes' }" class="navbar-brand mx-4 mb-3">
        <h3 class="text-primary"><i class="fa fa-rocket me-2"></i>{{ data.logoName }}</h3>
      </router-link>

      <!-- Profile Section -->
      <div class="d-flex align-items-center ms-4 mb-4">
        <div class="position-relative">
          <img class="rounded-circle" :src="data.profilePath" alt="" style="width: 40px; height: 40px;" />
          <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
        </div>
        <div class="ms-3">
          <h6 class="mb-0">{{ data.name }}</h6>
          <span>{{ data.role }}</span>
        </div>
      </div>

      <!-- Navigation Items -->
      <div class="navbar-nav w-100">
        <!-- Home Link -->
        <router-link 
          :to="{ name: 'home' }" 
          exact
          :class="['nav-item nav-link', { active: isActive('/') }]">
          <i class="fa fa-home me-2"></i>Home
        </router-link>

        <!-- Notes Dropdown -->
        <div class="nav-item dropdown">
          <a href="#" 
             :class="['nav-link dropdown-toggle', { active: route.path.startsWith('/notes') }]" 
             data-bs-toggle="dropdown">
            <i class="fa fa-file-alt me-2"></i>Notes
          </a>
          <div class="dropdown-menu bg-transparent border-0">
            <router-link 
              :to="{ name: 'notes' }" 
              exact
              :class="['dropdown-item', { active: isActive('/notes/list') }]">
              <i class="fa fa-list-ul me-2"></i>List
            </router-link>
            <router-link 
              :to="{ name: 'archive' }" 
              exact
              :class="['dropdown-item', { active: isActive('/notes/archived') }]">
              <i class="fa fa-archive me-2"></i>Archived
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
