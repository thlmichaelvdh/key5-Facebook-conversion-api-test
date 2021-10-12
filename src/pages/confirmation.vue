<template>
  <div>
    <Navigation />
    <div style="padding:  0 30px;">
      <h1>Thank you for your purchase</h1>
    </div>
  </div>
</template>
<script>
import Navigation from "../components/Navigation";
import Store from "../components/Store";
export default {
  components: {Navigation},
  head: {
    title: 'YAY THANKS',
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
