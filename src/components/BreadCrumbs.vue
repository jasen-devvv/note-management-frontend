<script lang="ts">
export default {
    name: "BreadCrumbs",
    props: {
        data: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <nav aria-label="breadcrumb" class="float-sm-end">
        <ol class="breadcrumb">
            <li v-for="(item, index) in data" :key="index"
                :class="['breadcrumb-item', { active: index === data.length - 1 }]"
                :aria-current="index === data.length - 1 ? 'page' : 'false'">
                <a v-if="index !== data.length - 1" href="#">{{ item }}</a>
                <span v-else>{{ item }}</span>
            </li>
        </ol>
    </nav>
</template>