<template>
  <div class="app">
    <Navigation />
    <div  style="background-color: #ececec;">
      <Cards />
    </div>
    <p>This is represents the next step forward for thl-web projects, utilising a bunch NEW of frameworks</p>
    <p>- NUXTJS : A javascript library that treats a website as a single page application.</p>
    <p>- ANTD : a design framework for Vue</p>
    <p>- Keystone 5 integrated</p>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Test rig',
    meta: [
      {
        "robots": "noindex, nofollow"
      },
      {
        "name": "facebook-domain-verification",
        "content":"v2cxf9yuiexbs5amr9c7sbpw1sjxrr"
      }
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
};
</script>

