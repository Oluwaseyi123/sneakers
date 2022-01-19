<template>
  <div class="main-container">
    <div class="btn-container previous">
      <img src="@/assets/images/icon-previous.svg" alt="" class="btn" />
    </div>

    <div class="images">
      <div class="main-image">
        <img src="@/assets/images/image-product-1.jpg" alt="" />
      </div>
      <div class="other-images">
        <!-- <img src="@/assets/images/image-product-1.jpg" alt="" /> -->
      </div>
    </div>
    <div class="btn-container next">
      <img src="@/assets/images/icon-next.svg" alt="" class="btn" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  align-items: center;
  position: relative;
}
.btn {
  cursor: pointer;
}
.btn-container {
  position: absolute;
  width: 30px;
  height: 30px;
  background: var(--white-color);
  border-radius: 50%;
  display: flex;
  align-items: center; 
  img {
    margin: 0 auto;
  }
}
.next {
  right: 2em;
}
.previous {
  left: 2em;
}
.main-image {
  img {
    // position: absolute;
    width: 100vw;
    height: 45vh;
    max-height: 20em;
    object-fit: cover;
    // height: 50vh;
  }
}


@media screen and (min-width: 820px) {
  .main-image {
    img {
      border-radius: 5px;
      width: 20em;
      height: 45vh;
      max-height: 20em;
      object-fit: cover;
    }
  }
  .btn-container {
    display: none;
  }
  .main-container{
    margin-right: 1.5em;
  }
}

@media screen and (min-width: 1035px) {
  .images {
    img {
      border-radius: 5px;
      width: 25em;
     // height: 60vh;
      max-height: 30em;
      object-fit: cover;
    }
  }
}
</style>