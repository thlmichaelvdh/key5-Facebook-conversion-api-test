<template>
  <div>
    <Navigation></Navigation>
    <div style="padding: 0 30px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <img style="width: 100%" src="https://res.cloudinary.com/thl/image/upload/c_fill,h_400,w_400/v1633925475/zzz_test_folder/IMG_3727.jpg" />
        </a-col>
        <a-col :span="8">
          <p>Go Kart</p>
          <p>Liam Lawsom set the lap record in Avondale for this class in the same chassis</p>
          <p>Arrow Cadet</p>
          <p>Racket engine, cc unknown at the mo</p>
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
  head: {
    title: 'Go Kart',
    meta: [
      {
        "robots": "noindex, nofollow"
      },
    ],
  },
}
</script>
