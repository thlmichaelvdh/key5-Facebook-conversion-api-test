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
