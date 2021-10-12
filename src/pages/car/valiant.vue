<template>
  <div>
    <Navigation></Navigation>
    <div style="padding: 0 30px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <img style="width: 100%" src="https://res.cloudinary.com/thl/image/upload/c_fill,h_400,w_400/v1633925440/zzz_test_folder/1971-chrysler-valiant-charger-rt-e37-coupe.jpg" />
        </a-col>
        <a-col :span="8">
          <h2>Valiant Charger</h2>
          <h3>E49 Bathurst spec</h3>
          <h4>125,000 miles</h4>
          <p>265 Hemi matching numbers</p>
          <p>Unrestored & orginal condition</p>
          <p>AUD$749,000</p>
          <NuxtLink :to="`/shopping-cart`">
            <a-button type="primary">ADD to CART</a-button>
          </NuxtLink>
          <!--
          <p>Store {{store.item}} 1</p>
          <a-button type="default" @click="updateCart">UPDATE CART</a-button>

          -->
        </a-col>
      </a-row>
    </div>


  </div>
</template>
<script>

export default {
  head: {
    title: 'Valiant Charger',
    meta: [
      {
        "robots": "noindex, nofollow"
      },
    ],
  },
}
</script>
