# HackerNews7-svelte

Another Hacker News Reader powered by [Framework7](https://github.com/nolimits4web/Framework7) and [Svelte](https://svelte.dev/)

## About

This is a demo app to show how [Framework7](https://github.com/nolimits4web/Framework7) makes it easy to develop hybrid apps.

## Features

Framework7-svelte v6 features demonstrate in this app.

This demo is developped using [Framework7-cli](http://framework7.io/cli/).

## stories.svelte

- [Infinite scroll](https://framework7.io/svelte/page.html#infinite-scroll)
- [Preloader](https://framework7.io/svelte/preloader.html)
- [SwipeOut](https://framework7.io/svelte/swipeout.html)
- [Master-Detail](https://framework7.io/docs/view.html#master-detail)

## story.svelte

- [Preloader](https://framework7.io/svelte/preloader.html)

## components/Comment.svelte

- [svelte:self](https://svelte.dev/docs#svelte_self)

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production

## WebPack

There is a webpack bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Webpack config located in `build/webpack.config.js`.

Webpack has specific way of handling static assets (CSS files, images, audios). You can learn more about correct way of doing things on [official webpack documentation](https://webpack.js.org/guides/asset-management/).

## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## License

Licensed under the [MIT License](https://github.com/GuillaumeBiton/hackernews7-svelte/raw/master/LICENSE)

## Thanks

To all who contribute or want to contribute.

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)


* [Framework7 Svelte Documentation](https://framework7.io/svelte/)
* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on patreon:
https://patreon.com/vladimirkharlampidi