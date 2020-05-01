// Import Framework7
import Framework7 from './framework7-custom'

// Import Framework7-Svelte Plugin
import Framework7Svelte from 'framework7-svelte';

// Import Framework7 Styles
import './framework7-custom.less';

// Init F7 Svelte Plugin
Framework7.use(Framework7Svelte)

import App from './App.svelte';

var app = new App({
	target: document.body
});

export default app;