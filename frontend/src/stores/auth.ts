import { defineStore } from "pinia";
// @ts-ignore
import JwtService, { destroyToken } from "@/services/jwt.service";
// @ts-ignore
import axiosConfig from "@/services/api.js";
import { API } from "@/utils/api";

interface Auth {
  user: object;
}

export const useAuthStore = defineStore("auth", {
  state: (): Auth => {
    return {
      user: {},
    };
  },
  actions: {
    async login(payload: any) {
      return await axiosConfig.post(API.LOGIN, payload).then((data: any) => {
        if (data.data.data) {
          JwtService.saveToken(data.data.data.access_token);
        }
        return data.data;
      });
    },
  },
});
