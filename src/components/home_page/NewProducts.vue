<template>
  <div class="new-products">
    <div class="title d-flex align-center justify-space-between pa-12">
      <h2 class="" style="font-size: 33px; text-transform: capitalize">
        New Products
      </h2>
      <!-- <a href="#" class="text-black" style="text-decoration: none">Shop All</a> -->
      <router-link
        :to="{
          name: 'product-category',
          params: {
            title: categories[index].title,
            category: categories[index].route,
          },
        }"
        >Shop All</router-link
      >
    </div>
    <v-container>
      <v-row>
        <!--start Skeletonloader -->
        <v-col cols="7" class="pt-16" v-if="!products.length">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image,article,button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <!--End Skeletonloader -->
        <v-col cols="12" md="7" class="pt-16 order-1 order-md-0" v-else>
          <Swiper
            :slides-per-view="3"
            :space-between="10"
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :autoplay="{ delay: 3000 }"
            class="pb-15"
            :breakpoints="breakpoints"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="0" class="pb-5 pl-8" width="300px">
                <!-- Start the thumbnials image -->
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="parent-img"
                    style="
                      width: 200px;
                      height: 150px;
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
                      width="90"
                      height="40"
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
                    item.description + " " + item.title.split("").length <= 10
                      ? item.description
                      : item.description.split(" ").slice(0, 7).join(" ")
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
                <v-btn-toggle v-model="shownitem[item.title]" mandatory>
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
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="12" md="5">
          <img src="../../assets/vr-banner.webp" alt="" class="w-100" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import { productModules } from "@/stores/Products";
import { mapState } from "pinia";
export default {
  inject: ["Emitter"],
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productModules, ["categories"]),
  },
  data() {
    return {
      shownitem: {},
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };
  },
  props: {
    products: {
      type: Array,
    },
    index: {
      type: Number,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>
<style lang="scss">
.product-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    &::after {
      font-size: 15px;
      border-radius: 50px;
      width: 40px;
      height: 40px;
      position: absolute;
      background: #e5dcdc;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .swiper-button-next {
    &::after {
      left: -10px;
    }
  }
  .swiper-pagination-bullet {
    width: 13px;
    height: 13px;
    border-radius: 50%;
  }
  .parent-img:hover .quick-view-btn {
    opacity: 1 !important;
  }
}
@media (max-width: 580px) {
  .parent-img {
    height: 500px !important;
  }
  .swiper-button-next,
  .swiper-button-prev {
    top: 55% !important;
    &::after {
      font-size: 15px !important;
      width: 30px !important;
      height: 30px !important;
    }
  }
}
</style>
