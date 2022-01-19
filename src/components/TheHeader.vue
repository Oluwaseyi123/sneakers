<template>
  <header>
    <the-nav />
  </header>
</template>

<script>
import TheNav from './TheNav.vue'
export default {
  components: {
    TheNav
  }
}
</script>

<style lang="scss" scoped>
  header{
    padding: 10px 30px;
  }

  @media screen and (min-width: 820px) {
    header{
     padding: 20px 50px;
    }
  }
 @media screen and (min-width: 1112px) {
    header{
      margin-bottom: 2em;
      padding: 20px 100px;
    }
  }
</style>