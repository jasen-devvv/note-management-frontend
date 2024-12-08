<script setup lang="ts">
defineProps<{ items: string[] }>();
</script>

<template>
  <nav aria-label="breadcrumb" class="float-sm-end">
    <ol class="breadcrumb">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="['breadcrumb-item', { active: index === items.length - 1 }]"
        :aria-current="index === items.length - 1 ? 'page' : 'false'"
      >
        <a v-if="index !== items.length - 1" href="#">{{ item }}</a>
        <span v-else>{{ item }}</span>
      </li>
    </ol>
  </nav>
</template>
