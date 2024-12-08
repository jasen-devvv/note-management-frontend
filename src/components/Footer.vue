<script setup lang="ts">
const data = {
    logoName: "JD Note",
    profileLink: "https://github.com/jasen-devvv",
    profileName: "Jasen Dev"
}
</script>

<template>
  <div class="container-fluid pt-4 px-4">
    <div class="bg-secondary rounded-top p-4">
      <div class="row">
        <div class="col-12 col-sm-6 text-center text-sm-start">
          &copy; <a href="#">{{ data.logoName }}</a> | All Rights Reserved.
        </div>
        
        <div class="col-12 col-sm-6 text-center text-sm-end">
          Build with ❤️ by 
          <a :href="data.profileLink" target="_blank">{{ data.profileName }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
