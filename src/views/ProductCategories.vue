<template>
  <div class="product-cat pa-5">
    <h1 class="text-center py-6">{{ $route.params.title }}</h1>
    <v-container fluid>
      <v-lazy>
        <v-card :loading="loading" class="pt-5" elevation="0">
          <v-row v-if="loading">
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image,article,button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
          <v-row v-if="!loading">
            <v-col
              cols="3"
              class="px-5"
              v-for="item in categoryproduct.products"
              :key="item.id"
            >
              <v-card elevation="0" class="pb-5 pl-8" width="300px">
                <!-- Start the thumbnials image -->
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="parent-img"
                    style="
                      width: 300px;
                      height: 250px;
                      overflow: hidden;
                      position: relative;
                    "
                  >
                    <img
                      :src="
                        shownitem[item.title]
                          ? shownitem[item.title]
                          : item.thumbnail
                      "
                      alt=""
                      class="w-100"
                      :style="`height:100%;transition:all .5s ease-in-out; scale:${
                        isHovering ? 1.05 : 1
                      };cursor:pointer`"
                      v-bind="props"
                    />
                    <v-btn
                      class="bg-white quick-view-btn"
                      variant="outlined"
                      width="120"
                      height="50"
                      style="
                        text-transform: none;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 120px;
                        border: none;
                        transition: all 0.4s ease-in-out;
                        opacity: 0;
                      "
                      @click="openQuickView(item)"
                      >Quick View</v-btn
                    >
                  </div>
                </v-hover>
                <!-- End the thumbnials image -->

                <!-- Start Discriptions -->
                <v-card-text class="pl-0"
                  >({{ item.title }}){{
                    `(${item.title}) ${item.description}`.length <= 45
                      ? `(${item.title}) ${item.description}`
                      : `(${item.title}) ${item.description}`.substring(0, 40)
                  }}</v-card-text
                >
                <!-- End Discriptions -->

                <!-- Start Rating -->
                <v-rating
                  v-model="item.rating"
                  half-increments
                  readonly
                  color="yellow darken-1"
                  size="small"
                  density="compact"
                ></v-rating>
                <!-- End Rating -->

                <!-- Start price -->
                <v-card-text class="pl-0 pt-0 font-weight-bold">
                  <del> $ {{ item.price }} </del> From
                  <span class="text-red" style="font-size: 20px"
                    >${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}</span
                  >
                </v-card-text>
                <!-- End price -->

                <!-- Start pic thum -->
                <v-btn-toggle v-model="shownitem[item.title]">
                  <v-btn
                    v-for="(pic, i) in item.images"
                    :key="i"
                    :value="pic"
                    size="x-small"
                  >
                    <img
                      :src="pic"
                      width="30"
                      height="30"
                      alt=""
                      style="border-radius: 30px"
                    />
                  </v-btn>
                </v-btn-toggle>
                <!-- End pic thum -->
                <!-- Start Button -->
                <div class="btn pt-6">
                  <v-btn
                    color="#444"
                    density="compact"
                    height="40"
                    width="170"
                    elevation="2"
                    variant="outlined"
                    style="text-transform: none"
                    class="py-1 px-8"
                    rounded
                    @click="
                      $router.push({
                        name: 'product_details',
                        params: { productId: item.id },
                      })
                    "
                    >choose options</v-btn
                  >
                </div>
                <!-- End Button -->
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-lazy>
    </v-container>
  </div>
</template>
<script>
import { productModules } from "@/stores/Products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
export default {
  inject: ["Emitter"],
  data() {
    return {
      shownitem: [],
      loading: false,
    };
  },
  components: {
    VSkeletonLoader,
  },
  methods: {
    ...mapActions(productModules, ["getproductcategory"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productModules, ["categoryproduct"]),
  },
  watch: {
    async $route() {
      document.documentElement.scrollTo(0, 0);
      this.loading = true;
      await this.getproductcategory(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getproductcategory(this.$route.params.category);
    this.loading = false;
  },
};
</script>
<style lang="scss">
.parent-img:hover .quick-view-btn {
  opacity: 1 !important;
}
</style>
