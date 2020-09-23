import Vue from 'vue'
import VueGtm from 'vue-gtm';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import { Integrations } from "@sentry/tracing";
Vue.use({VueAnalytics,VueGtm}, {
  id: 'UA-173908665'
},
 {
  id: 'GTM-PGTZ4C2' , // Your GTM single container ID or array of container ids ['GTM-xxxxxxx', 'GTM-yyyyyyy']
  queryParams: { // Add url query string when load gtm.js with GTM ID (optional)
    gtm_auth:'AB7cDEf3GHIjkl-MnOP8qr',
    gtm_preview:'env-4',
    gtm_cookies_win:'x'
  },
  defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional) 
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  ignoredViews: ['homepage'], // If router, you can exclude some routes name (case insensitive) (optional)
  trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
})
Sentry.init({
  dsn: "https://83e77f979b1247688b7ae5e6c75cc8d5@o365232.ingest.sentry.io/5418779",
  integrations: [
    new VueIntegration({
      Vue,
      tracing: true,
    }),
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1,
});
Vue.config.productionTip = false
//173908665
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
