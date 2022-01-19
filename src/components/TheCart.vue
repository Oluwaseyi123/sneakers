<template>
  <div class="cart-container">
    <h4>Cart</h4>
    <hr class="hr">
    <div class="empty" v-if="isEmpty">
      <p>Your cart is empty</p>
    </div>
    <div class="div" v-else>
      <div class="product-info-container">
        <div class="flex">
          <img src="@/assets/images/image-product-1-thumbnail.jpg" alt="" />
          <div class="product-info">
            <p>Autumn Limited Edition</p>
            <p>${{getPrice}} x {{getCount}} - <span> ${{totalPrice}}</span></p>
          </div>
        </div>
        <img src="@/assets/images/icon-delete.svg" alt="" class="delete-btn" @click="deleteItem" />
      </div>
      <button>Checkout</button>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      isEmpty: false,
    };
  },
  computed: {
    getPrice(){
       return Number(this.$store.getters['getPrice'])
    },
    getCount(){
      return this.$store.getters['getCount']
    },
    totalPrice(){
      return this.getCount * this.getPrice
    },
    
  },
  methods: {
    deleteItem(){
      let items = this.$store.getters['getCart']
      items.splice(0,1)
      this.isEmpty = true
      console.log('me', items)
    }
  },
  mounted() {
    console.log(this.$store.getters['getPrice']);
    if (this.$store.getters["getCart"] == '') {
      this.isEmpty = true;
      console.log(this.$store.getters["getCart"]);
    }else{
      this.isEmpty = false
    }
  },
};
</script>

<style lang="scss" scoped>
.div {
  display: flex;
  flex-direction: column;
  //align-items: center;
}
.cart-container {
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  // align-items: center;
  top: 4.5em;
  left: 50%;
  transform: translate(-50%, 0);
  background: var(--white-color);
  width: 90vw;
  max-width: 600px;
  box-shadow: 0px 2px 6px 1px rgba($color: #000000, $alpha: 0.2);

  h4 {
    text-align: left;
    padding: 5px 15px;
  }
  hr.hr {
   border-top: 1px solid var(--dark-grayish-blue);
  }
}
.flex,
.product-info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex {
  img {
    width: 50px;
    margin-right: 10px;
  }
}
.empty {
  p {
    text-align: center;
    margin: 2em 0;
  }
}
.product-info {
  p {
    color: var(--dark-grayish-blue-color);
    span {
      font-weight: 700;
      color: var(--black-color);
    }
  }
}
.product-info-container {
  margin: 1em 0;
  padding: 5px 15px;
}
.delete-btn {
  cursor: pointer;
}
button {
  background: var(--orange-color);
  border: none;
  width: 90%;
  border-radius: 5px;
  padding: 12px 20px;
  margin: 0 auto 1.5em;
  color: var(--white-color);
  font-weight: 700;
  font-family: var(--kumbh-family);
  cursor: pointer;
}

@media screen and (min-width: 820px) {
  .cart-container {
    left: 75%;
    width: 35vw;
    max-width: 600px;
  }
}
</style>