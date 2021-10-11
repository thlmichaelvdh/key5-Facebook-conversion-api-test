<template>
  <div>
    <Navigation></Navigation>
    <div style="padding: 0 30px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <img style="width: 100%" src="https://res.cloudinary.com/thl/image/upload/c_fill,h_240,w_240/v1633925427/zzz_test_folder/Screen_Shot_2021-05-28_at_10.05.35_PM.png" />
        </a-col>
        <a-col :span="8">
          <p>Corolla TE71</p>
          <p>1983</p>
          <p>2T DOHC 1800cc</p>
          <p>Twin Overhead Cam</p>
          <p>Fuel injected</p>
          <p>Rear wheel drive</p>
          <NuxtLink :to="`/shopping-cart`">
            <a-button type="primary">ADD to CART</a-button>
          </NuxtLink>
        </a-col>
      </a-row>
    </div>


  </div>
</template>
<script>

export default {
  data() {
    return {
      item: "valiant",
    };
  },
}
</script>
