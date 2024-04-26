<template>
    <div class="content">
        <div class="header">
            <Header @toggleSidebar="toggleSidebar"></Header>
        </div>
        <div class="main-content">
            <div class="main-content__sidebar" id="sidebar">
                <Sidebar ref="sidebar" />
            </div>
            <div class="main-content__content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
import Sidebar from '@/components/layout/Sidebar.vue';
import Header from '@/components/layout/Header.vue';
import { ref, onMounted } from 'vue'

const sidebar = ref(null)
const toggleSidebar = () => {
    var element = document.getElementById("sidebar");
    element.classList.toggle("main-content__sidebar_sm");
    sidebar.value.openMenu()
}

</script>
<style lang="scss" scoped>
$height_header : 5rem;

.content {
    @apply bg-secondary;
}

.header {
    height: $height_header;
}

.main-content {
    height: calc(100vh - $height_header);
    @apply flex items-center mt-5;

    &__sidebar {
        transition: width 500ms;
        @apply h-full w-[20rem] p-5 pt-0;
    }

    &__sidebar_sm {
        @apply h-full w-[4rem] p-3;
    }

    &__content {
        @apply rounded-xl w-full h-full bg-white p-8 mr-5 mb-10;
    }
}
</style>