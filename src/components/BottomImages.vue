<template>
  <div class="images">
    <img src="@/assets/images/image-product-1.jpg" alt="" />
    <img src="@/assets/images/image-product-2.jpg" alt="" />
    <img src="@/assets/images/image-product-3.jpg" alt="" />
    <img src="@/assets/images/image-product-4.jpg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.images {
  margin-top: 1em;
  img {
    width: 84px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3) {
      margin-right: 10px;
    }
    &:hover {
     // opacity: 0.5;

      transform: scale(2);

      border: 1px solid var(--orange-color);
    }
  }
}
</style>