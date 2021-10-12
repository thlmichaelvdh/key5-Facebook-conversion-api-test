<template>
  <div>
    <Navigation />
    <div  style="padding: 0 30px;">
      <h2>Shopping Cart</h2>
      <br>
      <NuxtLink :to="`/confirmation`">
        <a-button type="primary">PURCHASE {{item}}</a-button>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import Navigation from "../components/Navigation";
export default {
  components: {Navigation},
  head: {
    title: 'BUY NOW!',
    meta: [
      {
        "robots": "noindex, nofollow"
      },
    ],
  },
}
</script>
