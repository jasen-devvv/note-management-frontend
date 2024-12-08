<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <!-- Spinner Start -->
  <!-- <div id="spinner"
    class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div> -->
  <!-- Spinner End -->

  <!-- Sidebar Start -->
  <SideBar />
  <!-- Sidebar End -->

  <!-- Content Start -->
  <div class="content">
    <!-- Navbar Start -->
    <NavBar />
    <!-- Navbar End -->

    <router-view></router-view>

    <!-- Footer Start -->
    <Footer />
    <!-- Footer End -->
  </div>
  <!-- Content End -->


  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</template>