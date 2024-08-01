<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CardDrawer />
      <MenuDrawer />
      <v-main
        :style="`padding-top:${
          $route.name == 'check_out'
            ? '0px'
            : windowwidth <= 990
            ? '6px'
            : '150px'
        }`"
      >
        <slot></slot>
      </v-main>
      <app-nav
        v-show="$route.name != 'check_out' && windowwidth > 990"
      ></app-nav>
      <ResponsiveNav
        v-show="windowwidth <= 990 && $route.name != 'check_out'"
      />
      <app-footer v-show="$route.name != 'check_out'"></app-footer>
      <FixedNav v-show="$route.name != 'check_out'" />
    </v-layout>
  </div>
</template>

<script>
import AppNav from "./AppNav.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import CardDrawer from "@/components/global/CardDrawer.vue";
import FixedNav from "./FixedNav.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
import MenuDrawer from "./MenuDrawer.vue";
export default {
  name: "Lay-out",
  data() {
    return {
      windowwidth: 0,
    };
  },
  components: {
    AppNav,
    AppFooter,
    CardDrawer,
    FixedNav,
    ResponsiveNav,
    MenuDrawer,
  },
  mounted() {
    this.windowwidth = window.innerWidth;
    window.onresize = () => {
      this.windowwidth = window.innerWidth;
    };
  },
};
</script>
