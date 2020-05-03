<Page name="stories" 
  infinite
  infiniteDistance={30}
  infinitePreloader={showPreloader}
  onInfinite={loadMore}>
  <!-- Top Navbar -->
  <Navbar large title="HackerNews7" />
  <!-- Page content -->
  {#if items}
  <List mediaList>
	  {#each items as item, i}
    <ListItem swipeout title={item.title} href="/item/{item.id}" routeProps={{item}} reloadDetail={true}>
      <i slot="media">{i + 1}</i>
      <span slot="footer">
        {pluralize(item.points, 'point')} by {item.user} {item.time_ago}
      </span>
      <SwipeoutActions left>
        <SwipeoutButton overswipe color="green"><Link href={item.url} color="white" external>Visit Site</Link></SwipeoutButton>
      </SwipeoutActions>
    </ListItem>
	  {/each}
  </List>
  {:else}
    <div class="preloader-backdrop"></div>
      <div class="preloader-modal">
        <Preloader color="multi"></Preloader>
      </div>
  {/if} 
</Page>
<script>
  import {
    Page,
    Navbar,
    List,
    ListItem,
    Button,
    Preloader,
    Link,
    Block,
    SwipeoutActions,
    SwipeoutButton
  } from 'framework7-svelte';
  import { pluralize } from '../utils';
  
  let page = 1;
  let items;
  let currentItem;
  let allowInfinite = true;
  let showPreloader = false;

  $: getStories(page);
  $: showPreloader = (items) ? (items.length < 299) ? true : false : false;

  async function getStories(page) {
        const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
        const data = await res.json();
        items = (items) ? items.concat(data) : data;
        allowInfinite = true
    }
  
  function loadMore() {
    if (!allowInfinite) return;
    allowInfinite = false;

    if (!showPreloader) return;
    
    page += 1;
  }
</script>