<script>
  import { onMount } from 'svelte';

  import {
    f7,
    f7ready,
    App,
    View,
  } from 'framework7-svelte';


  import routes from '../js/routes';
  import store from '../js/store';


  // Framework7 Parameters
  let f7params = {
    name: 'hackernews7-svelte', // App name
    theme: 'auto', // Automatic theme detection



    // App store
    store: store,
    // App routes
    routes: routes,
    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV ==='production' ? {
      path: '/service-worker.js',
    } : {},
  };

  onMount(() => {
    f7ready(() => {


      // Call F7 APIs here
    });
  })
</script>

<App { ...f7params } >

  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" masterDetailBreakpoint={800}/>

</App>`

<style>
  :global(body) {
    --f7-page-master-detail-width: 33%;
  }
</style>`