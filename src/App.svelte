<App params={ f7params }>
  <a class="skip-link" href="/">Skip to main</a>

  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" masterDetailBreakpoint={800} />

</App>
<script>
  import {
    App,
    View,
  } from 'framework7-svelte';

  import routes from './routes';

  // Framework7 Parameters
  let f7params = {
    name: 'stock', // App name
    theme: 'auto', // Automatic theme detection
    autoDarkTheme: true, // Automatic Dark Theme
    routes: routes, // App routes
  };

  if (window.navigator.standalone) {
    document.body.classList.add('standalone');
  }
</script>
<style>
:global(body) {
    --f7-page-master-width: 33%;
}
/* style.css */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000000;
  color: white;
  padding: 8px;
  z-index: 100000;
}

.skip-link:focus {
  top: 0;
}
</style>