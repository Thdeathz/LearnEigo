<template>
    <div class="flex items-center justify-between mb-5">
        <div>
            <div class="text-lg text-black font-medium">{{ breadcrumbs.title }}</div>
            <!--Third breadcrumb-->
            <div class="breadcrumb-grid" v-if="(listItem && listItem.length > 0) || breadcrumbs.isShowSelect">
                <nav>
                    <ol class="flex flex-wrap">
                        <li v-for="(item, i) in listItem" :key="i" class="flex items-center">
                            <router-link v-if="item.sub" :to="item.src" class="item-router-link">
                                {{ item.title }}
                            </router-link>
                            <span class="mx-2" v-if="item.type === 'tab'">
                                <Icon :type="NEXT_BREADCRUMB" />
                            </span>
                            <span :class="[item.class ? item.class : 'item-text']" v-if="!item.sub">{{ item.title }}</span>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="button">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
import { computed } from "vue";
import { breadcrumbsStore } from "@/stores/breadcrumb";
import Icon from '@/components/elements/Icon.vue';
import { NEXT_BREADCRUMB } from '@/utils/constant';

const breadcrumbs = breadcrumbsStore();

const listItem = computed(() => {
    const result = [];
    breadcrumbs.breadcrumbs.forEach((item, i) => {
        if (i < breadcrumbs.breadcrumbs.length - 1) {
            item.sub = true;
            result.push(item);
            const object = {
                type: "tab",
            };
            result.push(object);
        } else {
            item.sub = false;
            result.push(item);
        }
    });
    return result;
});
</script>
<style lang="scss" scoped>
.flex-center {
    @apply flex justify-between items-center;
}

.breadcrumb-grid {
    @extend .flex-center;
    @apply text-sm text-gray font-light;

}
</style>
