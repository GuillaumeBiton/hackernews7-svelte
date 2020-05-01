<Page name="story">
  <!-- Top Navbar -->
  <Navbar large title={item.title} backLink="Back"/>
  <!-- Page content -->
  <Block>
    <p>{item.title}</p>
    <Link href={item.url} external>{item.domain}</Link>
    <p>{pluralize(item.points, 'point')} by {item.user}, {item.time_ago}</p>
  </Block>
  {#if comments}
  {#each comments as comment}
    <Comment {comment}/>
	{/each}
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
        Link,
        Block,
        BlockHeader,
        Preloader
    } from 'framework7-svelte';
    import { pluralize } from '../utils';
    import Comment from '../components/Comment.svelte';

    export let item;
    let comments;
    let id = item.id;

  $: getStory(id);
  
  async function getStory(id) {
        const res = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`);
        const data = await res.json();
        comments = (comments) ? [] : data.comments;
    }
</script>
<style>
:global(.view-master-detail .navbar-master-detail-root .link.back, .view-master-detail .page-master-detail-root .navbar .link.back) {
  display: none;
}
</style>