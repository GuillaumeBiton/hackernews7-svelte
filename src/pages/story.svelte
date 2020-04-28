<Page name="story">
  <!-- Top Navbar -->
  <Navbar large title={item.title} backLink="Back"/>
  <!-- Page content -->
  <p>{item.title}</p>
  <Link href={item.url} external>{item.domain}</Link>
  <p>{pluralize(item.points, 'point')} by {item.user}, {item.time_ago}</p>
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
    
    import Comment from '../components/Comment.svelte';

    export let item;
    let comments;
  
  $: getStory(item.id);
  
  async function getStory(id) {
        const res = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`);
        const data = await res.json();
        comments = (comments) ? [] : data.comments;
    }

  function pluralize(prop, text) {
    return `${prop} ${prop < 2 ? text : text + 's'}`
  }
</script>