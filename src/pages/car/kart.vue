<template>
  <div>
    <Navigation></Navigation>
    <div style="padding: 0 30px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <img style="width: 100%" src="https://res.cloudinary.com/thl/image/upload/c_fill,h_240,w_240/v1633925427/zzz_test_folder/Screen_Shot_2021-05-28_at_10.05.35_PM.png" />
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
    script: ['  !function(f,b,e,v,n,t,s)\n' +
    {
      src: '  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n' +
          '    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n' +
          '    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=\'2.0\';\n' +
          '    n.queue=[];t=b.createElement(e);t.async=!0;\n' +
          '    t.src=v;s=b.getElementsByTagName(e)[0];\n' +
          '    s.parentNode.insertBefore(t,s)}(window, document,\'script\',\n' +
          '  \'https://connect.facebook.net/en_US/fbevents.js\');\n' +
          '  fbq(\'init\', \'140957418204575\');\n' +
          '  fbq(\'track\', \'PageView\');'
    }
    ],
    noscript: [{
      src: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=140957418204575&ev=PageView&noscript=1" />'
    }]
  },
}
</script>
