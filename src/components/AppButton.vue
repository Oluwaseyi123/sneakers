<template>
 <div class="btn-container">
     <slot> </slot>
 </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .btn-container{
        display: flex;
        align-items: center;
        background: var(--orange-color);
        text-align: center;
    }
</style>