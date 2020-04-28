import StoriesPage from './pages/stories.svelte';
import StoryPage from './pages/story.svelte';

var routes = [
  {
    path: '/',
    component: StoriesPage,
  },
  {
    path: '/item/:id',
    component: StoryPage
  }
];

export default routes;