<template>
    <button
      :class="['base-btn',color,background,height,width,classStyle]"
      :disabled="disabled"
      :type="type"
      @click="$emit('onClick')"
    >
      <slot>
        {{ props.title }}
      </slot>
    </button>
  </template>
  <script setup>
  const props = defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "w-full text-[15px]",
    },
    color: {
      type: String,
      default: "text-[#FFFFFF] ",
    },
    background: {
      type: String,
      default: "bg-primary",
    },
    height: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    classStyle: {
      type: String,
      default: "",
    },
  
  });
  </script>
  <style lang="scss" scoped>
  .base-btn{
      @apply font-bold ;
  }
  </style>
  