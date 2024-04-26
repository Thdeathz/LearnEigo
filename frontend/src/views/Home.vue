<template>
  <Breadcrumb></Breadcrumb>
  <Content>
    <div>wuyewet</div>
    <div>weiyrreer7y</div>
  </Content>
</template>
<script setup>
import { breadcrumbsStore } from "@/stores/breadcrumb";
import Breadcrumb from "@/components/layout/Breadcrumb.vue";
import Content from "@/components/elements/Content.vue";

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
const title = "Home";

const breadcrumb = breadcrumbsStore();
breadcrumb.setBreadcrumb(title, listBreadcrumb);
</script>