import { defineStore } from "pinia";
// @ts-ignore
import JwtService, { destroyToken } from "@/services/jwt.service";
// @ts-ignore
import axiosConfig from "@/services/api.js";
import { API } from "@/utils/api";

interface Category {
  categories: Array<any>;
}

export const categoryStore = defineStore("category", {
  state: (): Category => {
    return {
      categories: [],
    };
  },
  actions: {
    async getList() {
      return await axiosConfig.get(API.CATEGORIES).then((data: any) => {
        console.log(data);
        
        this.categories = data.data.data
        
        // return data.data;
      });
    },
  },
});
