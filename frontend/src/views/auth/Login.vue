<template>

    <div class="w-[70%] lg:w-[60%] xl:w-[50%]">
        <div class="flex justify-center w-full">
            <img :src="Logo">
        </div>
        <div class="text-center">
            <div class="text-gray font-light">
                {{ t('login.description') }}
            </div>
            <div class="my-3 uppercase font-bold">
                {{ t('login.title') }}
            </div>
        </div>
        <Form @submit="login">
            <div class="my-2">
                <InputText v-model="formData.email" :placeholder="$t('login.email')" rules="required"
                    name="user_name"></InputText>
            </div>
            <div class="my-2">
                <InputPassword v-model="formData.password" name="password" :placeholder="$t('login.password')"
                    rules="required|min:6"></InputPassword>
            </div>
            <div class="flex justify-center my-3 mt-[30px]">
                <BaseButton width="w-full h-[40px] rounded-[8px]" :title="t('login.title')" placeholder="Login"
                    @onClick="login">
                </BaseButton>
            </div>
        </Form>
    </div>
</template>
<script setup>
import InputText from "@/components/elements/InputText.vue";
import InputPassword from "@/components/elements/InputPassword.vue";
import BaseButton from "@/components/elements/BaseButton.vue";
import Logo from "@/assets/images/logo.png";
import { reactive } from "vue";
import { Form, defineRule, configure } from "vee-validate";
import { required, min } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import { useI18n } from "vue-i18n";
import { toastStore } from "@/stores/toasted";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";



const router = useRouter();
const route = useRoute();
const { t } = useI18n();
const toast = toastStore();
const authStore = useAuthStore();
defineRule("required", required);
defineRule("min", min);
defineRule("emailWithTrim", (value) => {
    const email = value.trim();
    const regex = /^\s*[\w+\-.%]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}\s*$/;
    if (regex.test(email)) {
        return true;
    }
    return t("validate.invalid", { field: t("login.email") });
});

configure({
    generateMessage: localize("en", {
        messages: {
            min: t("validate.min", { number: "6" }),
        },
        fields: {
            email: {
                required: t("validate.required", { field: t("login.email") }),
            },
            password: {
                required: t("validate.required", { field: t("login.password") }),
            },
        },
    }),
});

const formData = reactive({
    email: "",
    password: "",
});

const login = async (values) => {
    if (values) {
        authStore.login(values).then((data) => {
      if (data.status) {
        if (route.redirect) {
          router.push(`/${route.redirect}`);
        }
        router.push("/");
      }
      if (!data.status) {
        toast.setToasted({ type: "error", message: t(`MESSAGE.${data.code}`) });
      }
    });
    }
};
</script>
  