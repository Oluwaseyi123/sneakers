<template>
  <div class="home">
    <the-header />
    <!-- <hr> -->
    <div class="container">
      <div class="flex">
        <div class="slider">
          <carousel
            :navigation="true"
            :pagination="false"
            :startAutoPlay="false"
            class="carousel"
            v-slot="{ currentSlide }"
          >
            <slide v-for="(slide, index) in slides" :key="index">
              <div v-show="currentSlide === index + 1" class="slide-info">
                <img :src="slide" alt="" />
              </div>
            </slide>
          </carousel>
        </div>
        <div class="bottom-images-container">
          <bottom-images />
        </div>
      </div>

      <div class="product-info">
        <the-product-info />
      </div>
    </div>
  </div>
</template>

<script>
import BottomImages from "../components/BottomImages.vue";
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";

import TheHeader from "../components/TheHeader.vue";
// import TheImageCarousel from "../components/TheImageCarousel.vue";
import TheProductInfo from "../components/TheProductInfo.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    TheHeader,

    TheProductInfo,

    Carousel,
    Slide,
    BottomImages,
  },
  data() {
    return {
      slides: [
        require("@/assets/images/image-product-1.jpg"),
        require("@/assets/images/image-product-2.jpg"),
        require("@/assets/images/image-product-3.jpg"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  //top: 6em;
  //height: 50vh;
  width: auto;
  height: auto;
  img {
    width: 100vw;
    height: 60vh;
    object-fit: fill;
    outline: none;
    user-select: none;
  }
}
// .slide-info {
//   width: 100vw;
// }
.images-container {
  height: 40vh;
  .images {
    img {
      width: 100%;
      height: 50vh;
      max-height: 20em;
      object-fit: cover;
      // height: 50vh;
    }
  }
}
.container {
  display: flex;
  flex-direction: column;
}
.product-info {
  margin-top: 2.5em;
}
.bottom-images-container {
  display: none;
}
@media screen and (min-width: 820px) {
  .container {
    flex-direction: row;
    padding: 0px 50px;
    //align-items: center;
  }
  .slider {
    img {
      width: 23em;
      height: 22em;
      border-radius: 5px;
     
    }
  }
  .bottom-images-container {
    display: block;
  }
}
@media screen and (min-width: 1112px) {
  .container {
    padding: 0px 100px;
  }
}
</style>