<template>
  <div class="main-container">
    <div class="price-container">
      <div class="current-price">
        <h1>$125.00</h1>
        <p>50%</p>
      </div>
      <div class="previous-price">
        <p>$250.00</p>
      </div>
    </div>
    <div class="flex">
      <div class="counter-container">
        <img
          src="@/assets/images/icon-minus.svg"
          alt=""
          @click="decreaseCount"
        />
        <p>{{ itemCount }}</p>
        <img
          src="@/assets/images/icon-plus.svg"
          alt=""
          @click="increaseCount"
        />
      </div>

      <div class="btn" @click="addToCart()">
        <div class="button">
          <img src="@/assets/images/icon-cart-white.svg" alt="" />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
    console.log(this.$store.getters["getCount"]);
  },
  computed: {
    itemCount() {
      return this.$store.getters["getCount"];
    },
  },
  methods: {
    increaseCount() {
      this.$store.getters["increaseCount"];
      //this.count++;
    },
    decreaseCount() {
      if (this.$store.state.count == 0) {
        this.itemCount = 0;
      } else {
        this.$store.getters["decreaseCount"];
      }
    },
    addToCart(){
      if(this.$store.getters["getCount"] == 0){
        console.log('cart')
      }else{
        this.$store.commit('addToCart', 'me') 
      }
      
      
    }
  },
};
</script>

<style lang="scss" scoped>
.price-container {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.current-price {
  display: flex;
  align-items: center;
  h1 {
    font-size: 25px;
    margin-right: 15px;
  }
  p {
    background: var(--pale-orange-color);
    padding: 2px 5px;
    color: var(--orange-color);
    font-weight: 700;
  }
}
.previous-price {
  color: var(--grayish-blue-color);
  p {
    text-decoration: line-through;
  }
}
.counter-container,
.btn {
  border-radius: 5px;
}
.counter-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--grayish-blue-color-opacity);
  padding: 8px 10px;
  margin: 15px 0;
  img {
    cursor: pointer;
  }
}
.btn {
  background: var(--orange-color);
  width: 100%;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;

  .button {
    margin: 0 auto;
    background: none;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
    p {
      color: var(--white-color);
      font-weight: 600;
    }
  }
}
@media screen and (min-width: 820px) {
  .flex {
    display: flex;
    align-items: center;
   // justify-content: space-between;
  }
  .counter-container {
    width: 60%;
    max-width: 12em;
    margin-right: 1em;
  }
  .btn {
     max-width: 20em;
    width: 100%;
  }
  .price-container{
      flex-direction: column;
      align-items: flex-start;
  }
  .current-price{
      margin-bottom: .5em;
  }
}
</style>