<template>
  <div class="product-details">
    <h1>Product Details</h1>
    <v-container fluid>
      <v-row>
        <!-- Main Image and tabs -->
        <v-col cols="7">
          <!-- Main Image  -->
          <img
            :src="tab ? tab : singlProdcut.thumbnail"
            alt=""
            class="w-100"
            height="500"
            v-if="!loading"
          />

          <!--Start Tabs -->
          <v-skeleton-loader
            type="image,image,image"
            v-if="loading"
          ></v-skeleton-loader>
          <v-tabs center-active height="300px" v-model="tab" class="mb-10">
            <v-tab
              v-for="(img, i) in singlProdcut.images"
              :key="i"
              :value="img"
            >
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
              style="font-size: 18px; color: rgb(30, 29, 30); font-weight: bold"
              >({{ singlProdcut.title }}) sample -
              {{ singlProdcut.category }} for sale
            </v-card-title>
            <div class="rating d-flex align-center pl-7 mt-1" style="gap: 10px">
              <v-rating
                v-model="singlProdcut.rating"
                half-increments
                readonly
                color="yellow darken-1"
                size="small"
                density="compact"
              ></v-rating>
              <span style="color: #333; font-size: 13px"
                >Stock : {{ singlProdcut.stock }}</span
              >
            </div>
            <v-card-text style="color: #333; font-size: 13px">
              {{ singlProdcut.description }}
            </v-card-text>
            <v-card-text style="color: #333; font-size: 13px" class="pt-0">
              brand: {{ singlProdcut.brand }}
            </v-card-text>
            <v-card-text style="color: #333; font-size: 13px" class="pt-0">
              Avilability:
              {{ singlProdcut.stock > 0 ? "In Stock" : "Out of Stock" }}
            </v-card-text>
            <!--Start Price code -->
            <v-card-text class="pt-0 font-weight-bold">
              <del> $ {{ singlProdcut.price }} </del> From
              <span class="text-black" style="font-size: 20px"
                >${{
                  Math.ceil(
                    singlProdcut.price -
                      singlProdcut.price *
                        (singlProdcut.discountPercentage / 100)
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
              <v-card-text style="font-weight: bold">
                Subtotal: $
                {{
                  Math.ceil(
                    singlProdcut.price -
                      singlProdcut.price *
                        (singlProdcut.discountPercentage / 100)
                  ) * Quantitiy
                }}
              </v-card-text>
            </v-card-text>
            <!-- End Quantitiy -->
            <v-card-actions class="mt-6 w-100 text-center">
              <v-btn
                variant="outlined"
                density="compact"
                @click="addToCart(singlProdcut)"
                :loading="btnLoading"
                height="50"
                style="text-transform: none; border-radius: 30px"
                class="w-75 bg-black text-white"
                >Add To Card</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productModules } from "@/stores/Products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import { CartStore } from "@/stores/Cart";
export default {
  inject: ["Emitter"],
  components: {
    VSkeletonLoader,
  },
  methods: {
    ...mapActions(productModules, ["getSinglProdcut"]),
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
  computed: {
    ...mapState(productModules, ["singlProdcut"]),
  },
  data() {
    return {
      btnLoading: false,
      loading: false,
      tab: "",
      Quantitiy: 1,
      products: {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/2/1.jpg",
          "https://cdn.dummyjson.com/product-images/2/2.jpg",
          "https://cdn.dummyjson.com/product-images/2/3.jpg",
          "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        ],
      },
    };
  },
  async mounted() {
    this.loading = true;
    await this.getSinglProdcut(this.$route.params.productId);
    this.loading = false;
  },
};
</script>

<style lang="scss">
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>
