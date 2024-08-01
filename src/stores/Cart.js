import { defineStore } from "pinia";
export const CartStore = defineStore("CartStore", {
  // States
  state: () => ({
    Cartitem: [],
  }),
  //   Action
  actions: {
    addItem(item) {
      // check if item is exist or no
      let exist = false;
      for (let i = 0; i < this.Cartitem.length; i++) {
        if (this.Cartitem[i].id == item.id) {
          this.Cartitem[i].Quantitiy += item.Quantitiy;
          exist = true;
          break;
        }
      }
      if (!exist) {
        // The Firt push to array & Change it
        // this.Cartitem.push(item);
        this.Cartitem.push(JSON.parse(JSON.stringify(item)));
        //put array to LocalStorage to Keep it
        localStorage.setItem("cart-items", JSON.stringify(this.Cartitem));
      }
    },
    // put localStorage to Our Arry Cartitem
    // Put it To CardDrawer
    getCarditem() {
      if (localStorage.getItem("cart-items")) {
        this.Cartitem = JSON.parse(localStorage.getItem("cart-items"));
      }
      console.log(this.Cartitem);
    },
    deleteItem(id) {
      for (let i = 0; i < this.Cartitem.length; i++) {
        if (this.Cartitem[i].id == id) {
          this.Cartitem.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("cart-items", JSON.stringify(this.Cartitem));
    },
    // CheckOut Fun
    setToLocalStorage() {
      localStorage.setItem("cart-items", JSON.stringify(this.Cartitem));
    },
    resetitems() {
      this.Cartitem = [];
      localStorage.removeItem("cart-items");
    },
  },
});
