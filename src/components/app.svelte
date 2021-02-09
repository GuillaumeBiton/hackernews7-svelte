<script>
  import {
    App,
    View,
  } from 'framework7-svelte';

  import routes from '../js/routes';
  import store from '../js/store';

  // Framework7 Parameters
  let f7params = {
    name: 'HackerNews7-svelte', // App name
    theme: 'auto', // Automatic theme detection
    autoDarkTheme: true, // Automatic Dark Theme

    // App store
    store: store,
    // App routes
    routes: routes,
    // Register service worker
    serviceWorker: {
      path: '/service-worker.js',
    },
  };
</script>
<App { ...f7params } >

  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" masterDetailBreakpoint={800} />

</App>
<style>
  :global(body) {
      --f7-page-master-width: 33%;
  }
  </style>
