<template>
  <swiper>
    <swiper-slide v-for="image in images" :key="image">
      <img :src="image.src" alt="" />
    </swiper-slide>
  </swiper>

  <Navigation />
</template>

<script >
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Parallax } from "swiper";

import "swiper/swiper.scss";

import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation, Parallax]);

export default {
  data() {
    return {
      parallaxSwiperWidth: 0,
      images: [
        {
          id: 1,
          src: require("@/assets/images/image-product-1.jpg"),
        },
        {
          id: 2,
          src: require("@/assets/images/image-product-2.jpg"),
        },
        {
          id: 3,
          src: require("@/assets/images/image-product-3.jpg"),
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
img{
    position: relative;
    width: 300px;
    margin-right: 3em;
    &:nth-of-type(2){
        margin-top: 3em;
    }
}
</style>