<template>
  <div>
    <UpperBanner />
    <TheFeaturs />
    <TopOffers />
    <ProductComponent
      :products="flashdeal"
      title="flashdeal"
      titlColor="red"
      :index="0"
    />
    <TopCategories />
    <NewProducts :products="newproducts" :index="1" />
    <QualityFeatures />
    <ProductComponent
      :products="mobilephone"
      title="Top Mobile Phones"
      titlColor="#444"
      :index="0"
    />
    <v-container fluid class="py-16">
      <v-row>
        <v-col cols="6">
          <img src="../assets/band-left-cover.webp" alt="" class="w-100" />
        </v-col>
        <v-col cols="6">
          <img src="../assets/band-right-cover.webp" alt="" class="w-100" />
        </v-col>
      </v-row>
    </v-container>
    <ProductComponent
      :products="fragrances"
      title="Top Fragrances"
      titlColor="blue"
      :index="4"
    />
    <img src="../assets/tv-banner.webp" alt="" class="w-100 px-5 py-12" />
    <ProductComponent
      :products="groceries"
      title="Top groceries"
      titlColor="blue"
      :index="5"
    />
    <WhyShopwithus />
    <!-- <AppFooter /> -->
  </div>
</template>

<script>
import UpperBanner from "../components/home_page/UpperPanner";
import TheFeaturs from "../components/home_page/TheFeatures.vue";
import TopOffers from "../components/home_page/TopOffers.vue";
import ProductComponent from "@/components/global/ProductSwiper.vue";
import TopCategories from "../components/home_page/TopCategories.vue";
import NewProducts from "../components/home_page/NewProducts.vue";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
import WhyShopwithus from "../components/home_page/WhyShopwithus.vue";
// import AppFooter from "../components/global/AppFooter";
import { productModules } from "@/stores/Products";
import { mapActions, mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeaturs,
    TopOffers,
    ProductComponent,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopwithus,
    // AppFooter,
  },
  computed: {
    ...mapState(productModules, [
      "flashdeal",
      "newproducts",
      "mobilephone",
      "fragrances",
      "groceries",
    ]),
  },
  methods: {
    ...mapActions(productModules, ["getproducts"]),
  },
  async mounted() {
    await this.getproducts();
  },
};
</script>
