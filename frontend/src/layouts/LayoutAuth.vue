<template>
    <div class="h-screen grid grid-cols-10">
        <div class="col-span-6 backgound-base h-full"  :style="` background-image: url(${Logo});`"></div>
        <div class="col-span-4 content items-center justify-center flex">
            <slot></slot>
        </div>

    </div>
</template>
<script setup>
import Logo from "@/assets/images/background.png";
import { computed } from "vue"

</script>
<style scoped lang="scss">
.backgound-base {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
</style>