<template>
  <div class="info-container">
    <h4> sneakers</h4>
    <h1>fall limited edition sneakers</h1>
    <p>
      These low-profile sneakers are your perfect casual wear cpmpanion.
      Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
    </p>

    <the-price-component />
  </div>
</template>

<script>
import ThePriceComponent from './ThePriceComponent.vue';
export default {
  components: { ThePriceComponent },};
</script>

<style lang="scss" scoped>
.info-container {
  padding: 0px 2em;
}
h4 {
  text-transform: uppercase;
  color: var(--orange-color);
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 9px;
}
h1 {
  font-size: 25px;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: .5em;
}
p{
    color: var(--grayish-blue-color);
    font-size: 15px;
    font-weight: 500;
    max-width: 500px;
}

</style>