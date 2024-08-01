<template>
  <div class="cart-page">
    <v-container fluid>
      <v-row>
        <!-- bradcrumbs -->
        <v-col cols="12">
          <v-breadcrumbs
            :items="['Home', 'Your Cart']"
            style="font-size: 14px; font-weight: bold"
          >
            <template v-slot:divider>
              <v-icon color="#333">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <!-- Progress and svg -->
        <v-col cols="12" class="py-0">
          <v-card-title
            class="px-0 pr-2 d-flex justify-space-between align-center"
            style="font-size: 40px; font-weight: bold"
          >
            Your Cart
          </v-card-title>
          <div
            class="progress mt-3 mr-3 position-relative"
            v-if="Cartitem.length"
          >
            <svg
              class="icon-shipping-truck"
              viewBox="0 0 40.55 24"
              width="30"
              :fill="
                parseInt((calTotalPrice / 10000) * 100) < 50
                  ? 'red'
                  : parseInt((calTotalPrice / 10000) * 100) >= 50 &&
                    parseInt((calTotalPrice / 10000) * 100) < 100
                  ? 'orange'
                  : 'green'
              "
              :style="`
              position: absolute;
              left: calc(${
                parseInt((calTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calTotalPrice / 10000) * 100)
                  : 100
              }% - 30px);
              bottom: 40%;
              transition: all 0.15s ease-in-out;
            `"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    class="truck-body"
                    d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.18,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                  ></path>
                  <path
                    class="truck-body"
                    d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.18,2.18,0,0,0,32.85,17.27Z"
                  ></path>
                </g>
              </g>
            </svg>
            <v-progress-linear
              :color="
                parseInt((calTotalPrice / 10000) * 100) < 50
                  ? 'red'
                  : parseInt((calTotalPrice / 10000) * 100) >= 50 &&
                    parseInt((calTotalPrice / 10000) * 100) < 100
                  ? 'orange'
                  : 'green'
              "
              height="10"
              :model-value="
                parseInt((calTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calTotalPrice / 10000) * 100)
                  : 100
              "
              striped
            ></v-progress-linear>
          </div>
          <v-card-text
            class="px-0 py-4"
            style="color: #555"
            v-if="Cartitem.length && 10000 - calTotalPrice > 0"
          >
            Only ${{ 10000 - calTotalPrice }} Away From Free Shipping
          </v-card-text>
          <v-card-text
            class="px-0 py-4"
            style="color: #555; font-weight: bold"
            v-if="!Cartitem.length"
          >
            Free Shipping For All Order $10000.00 !
          </v-card-text>
          <v-card-text
            class="px-0 py-4"
            style="color: #555"
            v-if="Cartitem.length && 10000 - calTotalPrice <= 0"
          >
            Your order will be shipped for free!
          </v-card-text>
          <v-card-text v-if="!Cartitem.length" class="text-center mt-6">
            Your Cart IS Empty
          </v-card-text>
          <v-card-actions v-if="!Cartitem.length" class="d-flex justify-center">
            <v-btn
              style="border-radius: 30px"
              variant="outlined"
              elevation="0"
              density="compact"
              height="45"
              width="300"
              class="mx-3 pa-3"
              @click="$router.push({ name: 'Home' })"
              >Continue Shopping</v-btn
            >
          </v-card-actions>
        </v-col>
        <v-col cols="8">
          <v-table class="w-100" v-if="Cartitem.length">
            <thead>
              <tr>
                <th style="font-size: 14px; font-weight: bold">PRODUCTS</th>
                <th
                  style="font-size: 14px; font-weight: bold"
                  class="text-center"
                >
                  PRICE
                </th>
                <th
                  style="font-size: 14px; font-weight: bold"
                  class="text-center"
                >
                  QUANTITy
                </th>
                <th
                  style="font-size: 14px; font-weight: bold"
                  class="text-center"
                >
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in Cartitem" :key="item.id">
                <td style="width: 55%">
                  <v-row>
                    <v-col cols="5">
                      <img :src="item.thumbnail" class="w-100" alt="" />
                    </v-col>
                    <v-col cols="7" class="mb-3" v-if="Cartitem.length">
                      <v-card-text
                        style="
                          font-size: 16;
                          white-space: pre-wrap;
                          font-weight: bold;
                        "
                      >
                        {{ item.title }} sample- {{ item.category }}
                      </v-card-text>
                    </v-col>
                  </v-row>
                </td>
                <td style="width: 15%" class="text-center">
                  <!-- price column -->
                  <v-card-text class="py-0 px-0 font-weight-bold"
                    >${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}
                  </v-card-text>
                </td>
                <td style="width: 15%" class="text-center">
                  <!-- Quantity -->
                  <div
                    class="item-footer d-flex justify-space-between align-center"
                  >
                    <div
                      class="counter py-2"
                      style="
                        border: 1px solid #333;
                        border-radius: 20px;
                        width: 120px;
                        font-size: 14px;
                      "
                    >
                      <v-icon
                        size="15"
                        class="px-6"
                        @click="
                          item.Quantitiy > 1 ? item.Quantitiy-- : item.Quantitiy
                        "
                        >mdi-minus</v-icon
                      >
                      <input
                        class="text-center"
                        type="number"
                        min="1"
                        v-model="item.Quantitiy"
                        style="
                          border: none;
                          outline: none;
                          width: 16px;
                          font-size: 12px;
                        "
                      />
                      <v-icon size="14" @click="item.Quantitiy++" class="px-6"
                        >mdi-plus</v-icon
                      >
                    </div>
                  </div>
                </td>
                <td style="width: 15%" class="text-center">
                  <!-- Price -->
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    ) * item.Quantitiy
                  }}
                </td>
                <td class="text-center">
                  <!-- Close Icon -->
                  <v-icon size="22" @click="deleteItem(item.id)"
                    >mdi-close</v-icon
                  >
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-divider length="100%" color="#000"></v-divider>
          <v-divider length="100%" color="#000"></v-divider>
          <v-card-text
            class="px-0 py-4 d-flex align-center mt-4"
            style="color: #555; gap: 10px"
            v-if="Cartitem.length"
          >
            <span
              ><svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 179.94 179.96"
                class="icon icon-shield-check"
                style="width: 20px"
              >
                <path
                  d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z"
                ></path>
                <polygon
                  fill="white"
                  class="cls-1"
                  points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57"
                ></polygon>
              </svg>
            </span>
            <span> Secure Shopping Guarantee</span>
          </v-card-text>
          <img
            v-if="Cartitem.length"
            src="../assets/cart-page-cards.webp"
            alt=""
            width="270"
            srcset=""
          />
        </v-col>
        <v-col cols="4" v-if="Cartitem.length">
          <v-card elevation="0">
            <v-card-title style="font-size: 15px; font-weight: bold">
              ORDER SUMARY
            </v-card-title>
            <v-divider length="100%" color="#000"></v-divider>
            <v-divider length="100%" color="#000"></v-divider>
            <v-divider length="100%" color="#000"></v-divider>
            <v-card-text class="d-flex justify-space-between">
              <span>subtotal</span>
              <span class="font-weight-bold" style="font-size: 15px"
                >$ {{ calTotalPrice }}</span
              >
            </v-card-text>
            <v-divider length="100%" color="#000"></v-divider>
            <v-divider length="100%" color="#000"></v-divider>
            <v-card-text> Get Shipping estimate </v-card-text>
            <select
              name=""
              id=""
              class="w-100 pa-3"
              style="
                border: 1px solid black;
                outline: none;
                border-radius: 30px;
                font-size: 14px;
              "
            >
              <option
                :value="country"
                v-for="country in countries"
                :key="country"
              >
                {{ country }}
              </option>
            </select>
            <div class="states">
              <select
                name=""
                id=""
                class="pa-3 mt-4"
                style="
                  border: 1px solid black;
                  outline: none;
                  border-radius: 30px;
                  font-size: 14px;
                  width: 50%;
                  margin-right: 1%;
                "
              >
                <option
                  :value="country"
                  v-for="country in countries"
                  :key="country"
                >
                  {{ country }}
                </option>
              </select>
              <input
                type="text"
                class="pa-3 mt-4"
                style="
                  border: 1px solid black;
                  outline: none;
                  border-radius: 30px;
                  font-size: 14px;
                  width: 43%;
                  margin-left: 1%;
                "
              />
            </div>
            <v-card-actions class="px-0 mt-5 my-3">
              <v-btn
                variant="elevated"
                elevation="0"
                density="compact"
                height="45"
                color="blue"
                class="w-100"
                style="text-transform: none; border-radius: 30px"
                >CheckOut</v-btn
              >
            </v-card-actions>
            <v-divider length="100%" color="#000"></v-divider>
            <v-divider length="100%" color="#000"></v-divider>
            <v-card-text class="d-flex justify-space-between">
              <span>TOTAL</span>
              <span class="font-weight-bold" style="font-size: 15px"
                >$ {{ calTotalPrice }}</span
              >
            </v-card-text>
            <v-divider length="100%" color="#000"></v-divider>
            <v-divider length="100%" color="#000"></v-divider>
            <v-card-actions
              class="px-1 mt-5 my-3 d-flex flex-column align-center"
              style="gap: 15px"
            >
              <v-btn
                variant="elevated"
                elevation="0"
                density="compact"
                height="45"
                color="#fff"
                class="w-100 bg-blue mx-3"
                style="text-transform: none"
                @click="toCheckout"
                >Proseed To CheckOut</v-btn
              >
              <v-btn
                variant="outlined"
                elevation="0"
                density="compact"
                height="45"
                color="blue"
                class="w-100 mx-3"
                @click="$router.push({ name: 'Home' })"
                >Continue Shopping</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { CartStore } from "@/stores/Cart";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      countries: ["Egypt", "KSA", "USA", "UEA"],
    };
  },
  computed: {
    ...mapState(CartStore, ["Cartitem"]),
    // Calc Subtotal
    calTotalPrice() {
      let total = 0;
      this.Cartitem.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100)
          ) * product.Quantitiy;
      });

      return total;
    },
  },
  methods: {
    ...mapActions(CartStore, [
      "getCarditem",
      "deleteItem",
      "setToLocalStorage",
    ]),
    toCheckout() {
      this.setToLocalStorage();
      this.$router.push({ name: "check_out" });
    },
  },
};
</script>
