<template>
  <div class="why-shop py-12 px-5">
    <h2 class="text-center py-10" style="font-size: 30px; font-weight: 700">
      <span style="color: aqua">why shop </span> with us ?
    </h2>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" class="text-center">
          <v-card color="transparent" elevation="0">
            <div class="img">
              <img
                src="@/assets/free-shipping.png"
                alt=""
                style="background: transparent"
              />
            </div>
            <v-card-title class="text-white" style="white-space: pre-wrap">
              free shipping in first order
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing
            </v-card-text>
            <a href="#">learn more</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="text-center">
          <v-card color="transparent" elevation="0">
            <div class="img">
              <img
                src="@/assets/weekly-flash-sales.png"
                alt=""
                style="background: transparent"
              />
            </div>
            <v-card-title class="text-white" style="white-space: pre-wrap">
              free shipping in first order
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing
            </v-card-text>
            <a href="#">learn more</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="text-center">
          <v-card color="transparent" elevation="0">
            <div class="img">
              <img
                src="@/assets/discount.png"
                alt=""
                style="background: transparent"
              />
            </div>
            <v-card-title class="text-white" style="white-space: pre-wrap">
              free shipping in first order
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing
            </v-card-text>
            <a href="#">learn more</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="text-center">
          <v-card color="transparent" elevation="0">
            <div class="img">
              <img
                src="@/assets/cash-back.png"
                alt=""
                style="background: transparent"
              />
            </div>
            <v-card-title class="text-white" style="white-space: pre-wrap">
              free shipping in first order
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing
            </v-card-text>
            <a href="#">learn more</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.why-shop {
  background-image: url("../../assets/why-shop-with-us-banner.webp");
  background-repeat: repeat-x;
  background-size: cover;
  color: white;
  a {
    color: white;
  }
}
</style>
