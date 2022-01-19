<template>
  <div class="navigation-container">
    <div class="mobile-nav">
      <div class="try">
        <div class="bars" @click="animateNav" :class="{ animate: isClicked }">
          <div class="bar one"></div>
          <div class="bar two"></div>
        </div>
        <nav>
          <ul :class="{ show: isClicked }">
            <li>
              <div class="li">
                  <router-link to="/" @click="show">Collections</router-link>
                  <div class="after"></div>
              </div>
             <div class="li">
                  <!-- <router-link to="/about">Men</router-link> -->
                  <a href="#">Men</a>
                  
              </div>
               <div class="li">
                  <!-- <router-link to="/about">Women</router-link> -->
                  <a href="#"> Women</a>
              </div>
               <div class="li">
                  <!-- <router-link to="/about">About</router-link> -->
                  <a href="#">About</a>
              </div>
               <div class="li">
                  <!-- <router-link to="/about">Contact</router-link> -->
                  <a href="#">Contact</a>
              </div>
             
            </li>
          </ul>
        </nav>
      </div>
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="" />
      </router-link>
    </div>
    <div class="cart-profile">
      <div class="cart-count">
        <p>{{ getCartCount }}</p>
      </div>
      <img @click="toggleCart" src="@/assets/images/icon-cart.svg" alt="" />
      <img src="@/assets/images/image-avatar.png" alt="" />
    </div>
  </div>
  <div class="cart" v-if="isCart">
    <the-cart />
  </div>
</template>

<script>
import TheCart from "./TheCart.vue";
export default {
  components: { TheCart },
  data() {
    return {
      isClicked: false,
      isCart: false,
    };
  },
  computed: {
    getCartCount() {
      return this.$store.getters["cartCount"];
    },
  },
  methods: {
    animateNav() {
      this.isClicked = !this.isClicked;
      this.isCart = false;
    },
    toggleCart() {
      this.isCart = !this.isCart;
      this.isClicked = false;
    },
  },
};
</script>

<style lang="scss" scoped>
$dark-color: #1d1d1f;
.cart-count {
  padding: 5px;
  position: absolute;
  top: 0.5em;
  p {
    background: var(--orange-color);
    color: var(--white-color);
    padding: 0.5px 5px;
    border-radius: 50%;
    font-size: 10px;
    font-weight: 700;
  }
}
.navigation-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart-profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    &:nth-of-type(1) {
      margin-right: 1em;
      cursor: pointer;
    }
    &:nth-of-type(2) {
      width: 40px;
    }
  }
}
.li{
  margin-bottom: 1em;
}
nav {
  z-index: 100;
}

.bars {
  margin-right: 1em;
  cursor: pointer;
  .bar {
    width: 20px;
    height: 1px;
    background: $dark-color;
    transition: all 0.2s ease;
  }
  .bar:nth-of-type(1) {
    margin-bottom: 5px;
  }
}
.mobile-nav, .show{
  display: flex;
}
.mobile-nav {
 
  align-items: center;
  justify-content: space-between;
}
.animate {
  .one {
    transform: rotate(45deg);
  }
  .two {
    transform: rotate(-45deg) translate(4px, -5px);
  }
}

ul {
  list-style: none;
  display: none;
  transition: all 0.2s ease;
  li {
    a {
      text-decoration: none;
      color: var(--black-color);
      transition: all 0.3s ease;
      font-size: 20px;

      &.router-link-exact-active {
        color: var(--hover-color);
      }
    }
  }
}
.show {
  flex-direction: column;
  padding-left: 2em;
  position: fixed;
  background-color: var(--white-color);
  padding-top: 5em;
  animation: slideIn 0.2s linear;

  top: 3em;
  left: 0;
  width: 40%;
  height: 100vh;
  z-index: 100;
  li {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  a {
    font-weight: 600;
    margin-bottom: 20px;
    font-size: 15px;
  }
  &.router-link-exact-active {
    color: #42b983;
  }
}
@keyframes slideIn {
  from {
    left: -10em;
  }
  to {
    left: 0;
  }
}

@keyframes slideOut {
  from {
    left: 0;
  }
  to {
    left: -10em;
  }
}
@media screen and (min-width: 820px) {
  .mobile-nav {
    flex-direction: row-reverse;
    align-items: flex-start;
    a {
      font-size: 15px;
      img {
        margin-right: 2em;
      }
    }
  }
  nav {
    ul {
      // background: red;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      li {
        display: flex;
        a {
          color: var(--grayish-blue-color);
          text-transform: capitalize;
          font-size: 15px;
          margin-right: 20px;
          &:nth-of-type(6) {
            margin: 0;
          }
          &:hover {
            color: var(--dark-color);
          }
        }
      }
    }
  }
  .bars {
    display: none;
  }
}

@media screen and (min-width: 820px) {
  .cart-count {
    top: 1em;
  }
  .after{
    width: 40px;
    height: 2px;
    background: var(--orange-color);
  }
  ul{
    li{
      a{
        &.router-link-exact-active {
         color: var(--orange-color);
        }
        &.router-link-exact-active .after{
          display: block;
        }
      }
    }
  }
  .try{
  display: flex;
  flex-direction: column;
  align-items: center;
}
}
</style>