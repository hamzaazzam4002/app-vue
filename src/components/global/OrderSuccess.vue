<template>
  <div class="order-success">
    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card class="text-center">
        <div class="text-center py-6">
          <v-icon
            style="
              background-color: white;
              width: 100px;
              height: 100px;
              border-radius: 50%;
              color: green;
              border: 1px solid green;
              font-size: 70px;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title style="font-size: 30px; color: #444; font-weight: bold">
          Order Placed Successffly
        </v-card-title>
        <v-card-text style="font-size: 16px; color: #888">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id vel fugit
          maiores nesciunt laboriosam magni nihil dicta, explicabo laudantium
          autem! Dicta facilis sit quae unde cumque doloribus deserunt earum
          dignissimos!
        </v-card-text>
        <v-card-actions class="mt-p justify-center">
          <v-btn color="blue" variant="elevated" @click="resetdata"
            >Got it!</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { CartStore } from "@/stores/Cart";
import { mapActions } from "pinia";
export default {
  name: "OrderSuccess",
  data: () => ({
    dialog: false,
  }),
  props: {
    popup: {
      type: Boolean,
    },
  },
  watch: {
    dialog(newval) {
      setTimeout(() => {
        if (!newval) {
          this.$emit("close-popup");
        }
      }, 200);
    },
  },
  methods: {
    ...mapActions(CartStore, ["resetitems"]),
    resetdata() {
      this.resetitems();
      this.dialog = false;
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
};
</script>
