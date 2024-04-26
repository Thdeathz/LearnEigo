<template>
    <div class="bg-white content-dropdown">
        <div class="flex items-center p-3">
            <div class="avatar">
                <img :src="AvaterDefault" class="max-w-11">
            </div>
            <div class="pl-5">
                <div>Nguyeenx Vaan</div>
                <div>nguyenvan@gmail.com</div>
            </div>
        </div>
        <hr class="text-gray_01">
        <div class="p-3 flex justify-between">
            <span class="text-gray_02">{{ t('logout') }}</span>
            <span class="cursor-pointer" @click="logout">
                <Icon :type="LOGOUT"/>
            </span>

        </div>
    </div>
</template>
<script setup>
import AvaterDefault from "@/assets/images/avatar.png";
import { useI18n } from "vue-i18n";
import Icon from '@/components/elements/Icon.vue';
import { LOGOUT } from '@/utils/constant';
import JwtService from "@/services/jwt.service";

const { t } = useI18n();

const logout = () => {
    JwtService.destroyToken();
    window.location.reload();
}
</script>
<style scoped lang="scss">
.content-dropdown {
    border-radius: 0.75rem;
}
</style>