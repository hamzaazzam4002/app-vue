<template>
  <div class="product-details mt-16">
    <v-dialog v-model="dialog" max-width="900">
      <v-icon
        color="#fff"
        style="
          position: absolute;
          top: -14px;
          right: -16px;
          background-color: #000;
          z-index: 999;
          cursor: pointer;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content-card">
        <v-container fluid class="bg-white">
          <v-row>
            <!-- Main Image and tabs -->
            <v-col cols="7">
              <!-- Main Image  -->
              <img
                :src="tab ? tab : product.thumbnail"
                alt=""
                class="w-100"
                height="400"
                v-if="!loading"
              />

              <!--Start Tabs -->
              <v-skeleton-loader
                type="image,image,image"
                v-if="loading"
              ></v-skeleton-loader>
              <v-tabs center-active height="300px" v-model="tab" class="mb-10">
                <v-tab v-for="(img, i) in product.images" :key="i" :value="img">
                  <img :src="img" width="200" height="250" />
                </v-tab>

                <!-- End Tabs -->
              </v-tabs>
            </v-col>
            <v-col cols="5" class="pt-0 pl-4">
              <v-skeleton-loader
                type="article,button"
                v-if="loading"
              ></v-skeleton-loader>
              <v-card elevation="0">
                <v-card-title
                  style="
                    font-size: 18px;
                    color: rgb(30, 29, 30);
                    font-weight: bold;
                    white-space: pre-wrap;
                  "
                  >({{ product.title }}) sample - {{ product.category }} for
                  sale
                </v-card-title>
                <div
                  class="rating d-flex align-center pl-7 mt-1"
                  style="gap: 10px"
                >
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow darken-1"
                    size="small"
                    density="compact"
                  ></v-rating>
                  <span style="color: #333; font-size: 13px"
                    >Stock : {{ product.stock }}</span
                  >
                </div>
                <v-card-text style="color: #333; font-size: 13px">
                  {{ product.description }}
                </v-card-text>
                <v-card-text style="color: #333; font-size: 13px" class="pt-0">
                  brand: {{ product.brand }}
                </v-card-text>
                <v-card-text style="color: #333; font-size: 13px" class="pt-0">
                  Avilability:
                  {{ product.stock > 0 ? "In Stock" : "Out of Stock" }}
                </v-card-text>
                <!--Start Price code -->
                <v-card-text class="pt-0 font-weight-bold">
                  <del> $ {{ product.price }} </del> From
                  <span class="text-black" style="font-size: 20px"
                    >${{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}</span
                  >
                </v-card-text>
                <!-- End Price Code -->
                <!-- Start Quantitiy -->
                <v-card-text>
                  <div
                    class="counter py-2"
                    style="
                      border: 1px solid #333;
                      border-radius: 20px;
                      width: fit-content;
                    "
                  >
                    <v-icon
                      size="22"
                      class="px-6"
                      @click="Quantitiy > 1 ? Quantitiy-- : Quantitiy"
                      >mdi-minus</v-icon
                    >
                    <input
                      class="text-center"
                      type="number"
                      min="1"
                      v-model="Quantitiy"
                      style="border: none; outline: none; width: 60px"
                    />
                    <v-icon size="22" @click="Quantitiy++" class="px-6"
                      >mdi-plus</v-icon
                    >
                  </div>
                </v-card-text>
                <!-- End Quantitiy -->
                <!-- Start Subtotals -->
                <v-card-text style="font-weight: bold">
                  Subtotal: $
                  {{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * Quantitiy
                  }}
                </v-card-text>
                <!-- End Subtotals -->
                <v-card-actions class="mt-6 w-100 text-center">
                  <v-btn
                    variant="outlined"
                    density="compact"
                    height="50"
                    style="text-transform: none; border-radius: 30px"
                    class="w-75 bg-black text-white"
                    @click="addToCart(product)"
                    :loading="btnLoading"
                    >Add To Card</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import { CartStore } from "@/stores/Cart";
import { mapActions } from "pinia";
export default {
  inject: ["Emitter"],
  components: {
    VSkeletonLoader,
  },
  data() {
    return {
      dialog: false,
      loading: false,
      tab: "",
      Quantitiy: 1,
      product: "",
      btnLoading: false,
    };
  },
  methods: {
    ...mapActions(CartStore, ["addItem"]),
    addToCart(item) {
      item.Quantitiy = this.Quantitiy;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("OpenCard");
        this.Emitter.emit("showMsg", item.title);

        this.dialog = false;
      }, 1000);
    },
  },
  async mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.product = data;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    });
  },
};
</script>

<style lang="scss">
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.content-card {
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #333;
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ccc;
    width: 15px;
  }
}
</style>
