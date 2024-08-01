<template>
  <div class="menu-drawer">
    <v-navigation-drawer
      class="px-5 pt-1 card-drawer"
      v-model="drawer"
      temporary
      width="370"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="px-0 pr-2 d-flex justify-space-between align-center"
          style="font-size: 17; font-weight: bold"
        >
          Menu
          <v-icon style="cursor: pointer" @click="drawer = false"
            >mdi-close</v-icon
          ></v-card-title
        >
        <v-list>
          <v-list-item
            class="px-0"
            v-for="cat in categories"
            :key="cat.route"
            @click="
              $router.push({
                name: 'product-category',
                params: { title: cat.title, category: cat.route },
              })
            "
          >
            <v-list-item-title>
              {{ cat.title }}
            </v-list-item-title></v-list-item
          >
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { productModules } from "@/stores/Products";
import { mapState } from "pinia";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  inject: ["Emitter"],
  mounted() {
    this.Emitter.on("openmenu", () => {
      this.drawer = !this.drawer;
    });
    this.Emitter.on("opencart", () => {
      this.drawer = !this.drawer;
    });
  },
  computed: {
    ...mapState(productModules, ["categories"]),
  },
};
</script>
