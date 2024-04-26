<template>
    <div class="pagination" v-if="total_pages > 1">
      <button
          @click="first"
          :disabled="hasFirst"
          class="rounded-l-[6px]"
          :class="hasFirst ? 'cursor-not-allowed' :'' "
      >
        <img src="@/assets/images/icons/pagination1st.svg" alt="pagination1st" class="icon ">
      </button>
      <button
          @click="prev"
          :disabled="hasFirst"
          :class="hasFirst ? 'cursor-not-allowed' :'' "
      >
        <img src="@/assets/images/icons/pagination_pre.svg" alt="pagination_pre" class="icon ">
      </button>
      <div
          v-for="page in items"
          :key="page.label"
      >
        <button v-if="page.disable" class="page-link btn">
          ...
        </button>
        <button
            v-else
            @click="goto(page.label)"
            :class="page.active ? 'bg-gray-200': ''"
        >
          {{ page.label }}
        </button>
      </div>
      <button
          @click="next"
          :disabled="hasLast"
          :class="hasLast ? 'cursor-not-allowed' :'' "
      >
        <img src="@/assets/images/icons/pagination_net.svg" alt="pagination_next" class="icon ">
  
      </button>
      <button
          @click="last"
          :disabled="hasLast"
          class="rounded-r-[6px] border-r"
          :class="hasLast ?'cursor-not-allowed': ''"
      >
        <img src="@/assets/images/icons/pagination_last.svg" alt="pagination_last" class="icon ">
      </button>
    </div>
  </template>
  
  <script  setup>
  import {computed, onMounted, ref, watch} from "vue";
  
  const props = defineProps({
    currentPage: {
      type: Number,
      default: 1
    },
    pagination: {
      type: Object,
      default: () => ({})
    },
    itemProject: {
      type: Number,
      default: 10
    }
  })
  
  const total = ref(1)
  const total_pages = ref(1)
  
  watch(props, (value) => {
        total.value = parseInt(value.pagination.totalPage)
        total_pages.value = Math.ceil(total.value / props.itemProject)
      },
      {
        deep: true,
        immediate: true
      })
  
  const emit = defineEmits(['update:modelValue', 'changePage',])
  
  
  onMounted(() => {
    if (props.currentPage > total_pages.value) {
      props.currentPage = total_pages.value
    }
  })
  
  const items = computed(() => {
    let valPrev = props.currentPage > 1 ? (props.currentPage - 1) : 1
    let valNext = props.currentPage < total_pages.value ? (props.currentPage + 1) : total_pages.value
    let extraPrev = valPrev === 3 ? 2 : null
    let extraNext = valNext === (total_pages.value - 2) ? (total_pages.value - 1) : null
    let dotsBefore = valPrev > 3 ? 2 : null
    let dotsAfter = valNext < (total_pages.value - 2) ? (total_pages.value - 1) : null
  
    let output = []
    for (let i = 1; i <= total_pages.value; i++) {
      if ([1, total_pages.value, props.currentPage, valPrev, valNext, extraPrev, extraNext, dotsBefore, dotsAfter].includes(i)) {
        output.push({
          label: i,
          active: props.currentPage == i,
          disable: [dotsBefore, dotsAfter].includes(i)
        })
      }
    }
    return output
  })
  
  const hasFirst = computed(() => props.currentPage === 1)
  const hasLast = computed(() => props.currentPage === total_pages.value)
  
  const first = () => {
    if (!hasFirst.value) {
      emit('changePage', 1)
    }
  }
  const prev = () => {
    if (!hasFirst.value) {
      emit('changePage', props.currentPage - 1)
    }
  }
  const next = () => {
    if (!hasLast.value) {
      emit('changePage', props.currentPage + 1)
    }
  }
  const last = () => {
    if (!hasLast.value) {
      emit('changePage', total_pages.value)
    }
  }
  const goto = (pageCurrent) => {
    window.scrollTo(0, 0);
    emit('changePage', pageCurrent)
  }
  
  </script>
  <style lang="scss" scoped>
  .pagination {
    @apply flex items-center justify-end  pl-0 rounded-[4px];
    button {
      @apply h-[32px] w-[32px] flex items-center justify-center text-[#333333] text-[14px] border-y font-medium border-l  ;
      img {
        @apply min-w-[8px]  min-h-[12px];
      }
    }
  }
  </style>
  