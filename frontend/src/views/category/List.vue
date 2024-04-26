<template>
    <Breadcrumb></Breadcrumb>
    <Content>
        <div class="grid grid-cols-6 mb-3 gap-4">
            <div>
                <InputText/>
            </div>
            <div>
                <InputText/>
            </div>
            <div>
                <InputText/>
            </div>
        </div>
        <BaseTable :headers="header" :items="category.categories">
            <template #action={item} >
                <div class="flex items-center justify-center">
                    <div class="mr-3">
                        <Icon :type="PENCIL" />
                    </div>
                    <Icon :type="DELETE" />
                </div>
            </template>
        </BaseTable>
    </Content>
</template>
<script setup>
import BaseTable from "@/components/elements/BaseTable.vue";
import { categoryStore } from "@/stores/category";
import { useI18n } from "vue-i18n";
import { breadcrumbsStore } from "@/stores/breadcrumb";
import Breadcrumb from "@/components/layout/Breadcrumb.vue";
import Content from "@/components/elements/Content.vue";
import Icon from '@/components/elements/Icon.vue';
import { PENCIL,DELETE } from '@/utils/constant';
import InputText from "@/components/elements/InputText.vue";

const category = categoryStore();
category.getList()

const { t } = useI18n();
const header = [
    {
        key: "id",
        title: 'ID'
    },
    {
        key: "name",
        title: 'name',
        align : 'text-left'
    },
    {
        key: "slug",
        title: 'slug',
        align : 'text-left'
    },
    {
        key: "user_id",
        title: 'user_id',
    },
    {
        key: "action",
        title: t('action')
    },
]

const title = "Home";
const listBreadcrumb = [
    {
        title: "Home",
        src: "/",
    },
    {
        title: "Test",
        src: "/",
    },

];
const breadcrumb = breadcrumbsStore();
breadcrumb.setBreadcrumb(title, listBreadcrumb);
</script>