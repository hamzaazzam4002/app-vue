import { defineStore } from "pinia";
import axios from "axios";
export const productModules = defineStore("productModules", {
  state: () => ({
    flashdeal: [],
    newproducts: [],
    mobilephone: [],
    fragrances: [],
    groceries: [],
    categoryproduct: [],
    singlProdcut: "",
    categories: [
      {
        title: "smartphones",
        route: "smartphones",
      },
      {
        title: "laptops",
        route: "laptops",
      },
      {
        title: "furniture",
        route: "furniture",
      },
      {
        title: "men's watches",
        route: "mens-watches",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Groceries",
        route: "groceries",
      },
      {
        title: "womens-bags",
        route: "womens-bags",
      },
    ],
  }),
  actions: {
    async getproducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.newproducts = res.data.products.filter(
            (el) => el.category === "laptops"
          );

          this.flashdeal = res.data.products.slice(0, 8);
          this.mobilephone = res.data.products.filter(
            (el) => el.category === "smartphones"
          );
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
          this.groceries = res.data.products.filter(
            (el) => el.category === "groceries"
          );
        })
        .catch((err) => console.log(err));
    },
    async getproductcategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.categoryproduct = res.data));
    },
    async getSinglProdcut(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => (this.singlProdcut = res.data));
    },
  },
});
