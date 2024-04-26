<template>
    <!-- manage exam  -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        v-if="props.type == MANAGE_PRODUCT">
        <path d="M2 12.6101H19" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28Z"
            :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z"
            :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M5.25 17.8101H6.96997" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.10986 17.8101H12.5499" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- circle -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        v-if="props.type == CIRCLE">
        <circle cx="12" cy="12" r="3" :fill="props.active ? COLOR.primary : COLOR.gray" />
    </svg>

    <!-- manage order -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="props.type == ORDER">
      <path d="M21.6599 10.44L20.6799 14.62C19.8399 18.23 18.1799 19.69 15.0599 19.39C14.5599 19.35 14.0199 19.26 13.4399 19.12L11.7599 18.72C7.58994 17.73 6.29994 15.67 7.27994 11.49L8.25994 7.30001C8.45994 6.45001 8.69994 5.71001 8.99994 5.10001C10.1699 2.68001 12.1599 2.03001 15.4999 2.82001L17.1699 3.21001C21.3599 4.19001 22.6399 6.26001 21.6599 10.44Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.0601 19.39C14.4401 19.81 13.6601 20.16 12.7101 20.47L11.1301 20.99C7.1601 22.27 5.0701 21.2 3.7801 17.23L2.5001 13.28C1.2201 9.31001 2.2801 7.21001 6.2501 5.93001L7.8301 5.41001C8.2401 5.28001 8.6301 5.17001 9.0001 5.10001C8.7001 5.71001 8.4601 6.45001 8.2601 7.30001L7.2801 11.49C6.3001 15.67 7.5901 17.73 11.7601 18.72L13.4401 19.12C14.0201 19.26 14.5601 19.35 15.0601 19.39Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.6399 8.53L17.4899 9.76" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.6599 12.4L14.5599 13.14" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <!-- manage store -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="props.type === MANAGE_STORE">
      <path d="M3.01001 11.22V15.71C3.01001 20.2 4.81001 22 9.30001 22H14.69C19.18 22 20.98 20.2 20.98 15.71V11.22" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.31 12C20.33 12 21.81 10.36 21.61 8.35L21.33 5.6C20.97 3 19.97 2 17.35 2H14.3L15 9.01C15.17 10.66 16.66 12 18.31 12Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.63988 12C7.28988 12 8.77988 10.66 8.93988 9.01L9.15988 6.8L9.63988 2H6.58988C3.96988 2 2.96988 3 2.60988 5.6L2.33988 8.35C2.13988 10.36 3.61988 12 5.63988 12Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  <!-- arrow down -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        v-if="props.type === ARROW_DOWN">
        <path d="M18 10L13.0606 14.5932C12.4773 15.1356 11.5227 15.1356 10.9394 14.5932L6 10"
            :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- hamburger icon -->
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="props.type === HUMBURER">
        <rect width="30" height="30" rx="2" fill="white" />
        <path d="M6 10H24" :stroke="COLOR.primary" stroke-width="1.5" stroke-linecap="round" />
        <path d="M6 15H24" :stroke="COLOR.primary" stroke-width="1.5" stroke-linecap="round" />
        <path d="M6 20H24" :stroke="COLOR.primary" stroke-width="1.5" stroke-linecap="round" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none"
        v-if="props.type === NEXT_BREADCRUMB">
        <path
            d="M5.66369 8.49996C5.74908 8.50025 5.83344 8.48141 5.91058 8.44483C5.98773 8.40824 6.05569 8.35484 6.10949 8.28855L8.86998 4.8603C8.95405 4.75807 9 4.62983 9 4.49748C9 4.36514 8.95405 4.2369 8.86998 4.13466L6.01233 0.70641C5.91532 0.589726 5.77591 0.516348 5.62478 0.502418C5.47366 0.488488 5.32318 0.535147 5.20647 0.632132C5.08975 0.729116 5.01635 0.868481 5.00242 1.01957C4.98848 1.17065 5.03516 1.32109 5.13217 1.43777L7.68691 4.50034L5.2179 7.56291C5.14801 7.64678 5.10361 7.7489 5.08997 7.85721C5.07632 7.96551 5.09399 8.07546 5.14089 8.17403C5.18778 8.27261 5.26195 8.3557 5.3546 8.41346C5.44725 8.47122 5.55451 8.50124 5.66369 8.49996Z"
            fill="#9D9D9D" />
        <path
            d="M0.663692 8.49996C0.749076 8.50025 0.83344 8.48141 0.910584 8.44483C0.987729 8.40824 1.05569 8.35484 1.10949 8.28855L3.86998 4.8603C3.95405 4.75807 4 4.62983 4 4.49748C4 4.36514 3.95405 4.2369 3.86998 4.13466L1.01233 0.70641C0.915315 0.589726 0.775912 0.516348 0.624784 0.502418C0.473656 0.488488 0.323183 0.535147 0.206467 0.632132C0.0897505 0.729116 0.0163522 0.868481 0.00241828 1.01957C-0.0115156 1.17065 0.0351567 1.32109 0.132168 1.43777L2.68691 4.50034L0.217898 7.56291C0.148009 7.64678 0.103614 7.7489 0.0899663 7.85721C0.0763183 7.96551 0.0939882 8.07546 0.140886 8.17403C0.187783 8.27261 0.261945 8.3557 0.354596 8.41346C0.447248 8.47122 0.55451 8.50124 0.663692 8.49996Z"
            fill="#9D9D9D" />
    </svg>

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="props.type === LOGOUT">
        <path
            d="M15.1001 7.55999C14.7901 3.95999 12.9401 2.48999 8.8901 2.48999H8.7601C4.2901 2.48999 2.5001 4.27999 2.5001 8.74999V15.27C2.5001 19.74 4.2901 21.53 8.7601 21.53H8.8901C12.9101 21.53 14.7601 20.08 15.0901 16.54"
            stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.99988 12H20.3799" stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18.15 8.6499L21.5 11.9999L18.15 15.3499" stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!-- pen -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="props.type === PENCIL">
        <path
            d="M12.9493 5.12701L6.79017 11.9325C6.5576 12.191 6.33254 12.7 6.28753 13.0524L6.00995 15.5898C5.91243 16.5061 6.5426 17.1326 7.41284 16.976L9.82849 16.5453C10.1661 16.4826 10.6387 16.2242 10.8713 15.9579L17.0305 9.15237C18.0957 7.97766 18.5759 6.63848 16.9179 5.00171C15.2675 3.3806 14.0146 3.95229 12.9493 5.12701Z"
            stroke="#A1A1A1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 7C12.3156 8.60777 13.9596 9.83689 16 10" stroke="#A1A1A1" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 20H19" stroke="#A1A1A1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>


    <!-- delete -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="props.type === DELETE">
        <path d="M20 6C17.04 6 14.0622 6 11.0933 6C9.33333 6 7.57333 6 5.81333 6H4" stroke="#A1A1A1" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M9 5L9.18857 4.11785C9.32571 3.47811 9.42857 3 10.8771 3H13.1229C14.5714 3 14.6829 3.50505 14.8114 4.12458L15 5"
            stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M18 10L17.4307 18.6135C17.3343 19.9565 17.2555 21 14.8117 21H9.18832C6.74453 21 6.66569 19.9565 6.56934 18.6135L6 10"
            stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.3301 16.5H13.6601" stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M10 12H14" stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!--dashboard-->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="props.type === DASHBOARD">
      <path d="M9.02 2.83998L3.63 7.03998C2.73 7.73998 2 9.22998 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28998 21.19 7.73998 20.2 7.04998L14.02 2.71998C12.62 1.73998 10.37 1.78998 9.02 2.83998Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.5 11.5L12.3 15.7L10.7 13.3L7.5 16.5" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.5 11.5H16.5V13.5" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  <!--  warehouse-->
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="props.type === WAREHOUSE">
    <path d="M2 22H22" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.5 2.39003 13.23 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 16.25V17.75" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.5 7.5H13.5" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  <!--  promotion-->
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="props.type === MANAGE_PROMOTION">
    <path d="M3 9C4.10457 9 5 8.10457 5 7C5 5.89543 4.10457 5 3 5C1.89543 5 1 5.89543 1 7C1 8.10457 1.89543 9 3 9Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 9C22.1046 9 23 8.10457 23 7C23 5.89543 22.1046 5 21 5C19.8954 5 19 5.89543 19 7C19 8.10457 19.8954 9 21 9Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19 7H15" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 7H5" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.5 16.5V18.5C7.5 19.11 7.13 19.64 6.61 19.86C6.42 19.95 6.22 20 6 20H4C3.17 20 2.5 19.33 2.5 18.5V16.5C2.5 15.67 3.17 15 4 15H6C6.83 15 7.5 15.67 7.5 16.5Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.5 16.5V18.5C21.5 19.33 20.83 20 20 20H18C17.78 20 17.58 19.95 17.39 19.86C16.87 19.64 16.5 19.11 16.5 18.5V16.5C16.5 15.67 17.17 15 18 15H20C20.83 15 21.5 15.67 21.5 16.5Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 5.5V8.5C15 9.32 14.32 10 13.5 10H10.5C9.68 10 9 9.32 9 8.5V5.5C9 4.68 9.68 4 10.5 4H13.5C14.32 4 15 4.68 15 5.5Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 7.72998C17.37 8.92998 19 11.51 19 14.5C19 14.67 18.99 14.83 18.97 15" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.03 15C5.01 14.83 5 14.67 5 14.5C5 11.51 6.63 8.92998 9 7.72998" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  <!--  news-->
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="props.type === MANAGE_NEWS">
    <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 7H16" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 10.5H13" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>


</template>
<script setup>
import { COLOR } from '../../utils/theme';
import {
  MANAGE_PRODUCT,
  CIRCLE,
  WAREHOUSE,
  MANAGE_STORE,
  ARROW_DOWN,
  HUMBURER,
  NEXT_BREADCRUMB,
  LOGOUT,
  PENCIL,
  DELETE,
  DASHBOARD, ORDER, MANAGE_PROMOTION, MANAGE_NEWS
} from '../../utils/constant';

const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "#FFFFFF",
    },
});
</script>