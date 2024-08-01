<template>
  <div class="offers bg-grey-lighten-4 py-10">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4" class="py-0 px-3 pr-lg-6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 5px"
            >
              <img
                src="../../assets/playstations.webp"
                alt=""
                :style="`width:100%;cursor:pointer; transition:all .2s ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="px-3 pr-lg-6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 5px"
            >
              <img
                src="../../assets/headset.webp"
                :style="`width:100%;cursor:pointer; transition:all .2s ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="px-3 pr-lg-6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 5px"
            >
              <img
                src="../../assets/chairs.webp"
                :style="`width:100%;cursor:pointer; transition:all .2s ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="pt-8 d-flex justify-center">
        <v-col cols="12" sm="6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 5px"
            >
              <img
                src="../../assets/iphones.webp"
                :style="`width:100%;cursor:pointer; transition:all .2s ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 5px"
            >
              <img
                src="../../assets/laptops.webp"
                :style="`width:100%;cursor:pointer; transition:all .2s ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
