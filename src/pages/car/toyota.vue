<template>
  <div>
    <Navigation></Navigation>
    <div style="padding: 0 30px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <img style="width: 100%" src="https://res.cloudinary.com/thl/image/upload/c_fill,h_400,w_400/v1633925427/zzz_test_folder/Screen_Shot_2021-05-28_at_10.05.35_PM.png" />
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
  head: {
    title: 'Toyota yo',
    meta: [
      {
        "robots": "noindex, nofollow"
      },
    ],
    script: [
      {
        src: "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '140957418204575'); fbq('track', 'PageView');"
      }
    ],
    noscript: [{
      src: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=140957418204575&ev=PageView&noscript=1" />'
    }]
  },
}
</script>
