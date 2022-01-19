import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    price: 125,
    cart:[],
  },
  mutations: {
    addToCart(state, payload){
      state.cart.push(payload)
    }
  },
  actions: {
    addToCart(context){
      context.commit('addToCart')
    }
  },
  getters: {
    increaseCount(state){
      return state.count++
    },
    decreaseCount(state){
      return state.count--
    },
    getCount(state){
      return state.count
    },
    getCart(state){
      return state.cart
    },
    getPrice(state){
      return state.price
    },
    cartCount(state){
      return state.cart.length
    },
    deleteItem(state){
      return state.cart
    }
  },
  modules: {},
});
