<Page name="stories">
  <!-- Top Navbar -->
  <Navbar large title="HackerNews7" />
  <!-- Page content -->
  {#if items}
  <List accordionList>
	  {#each items as item, i}
    <ListItem title={item.title} accordionItem>
      <i slot="media">{i + 1}</i>
      <span slot="footer">
        {pluralize(item.points, 'point')} by {item.user} {item.time_ago}
      </span>
      <AccordionContent>
      <Row>
      <Col>
        <Button><a href={item.url} class="external">Visit Site</a></Button>
      </Col>
      <Col>
        <Button>{#if item.comments_count}
          <Link href="/item/{item.id}" routeProps={{item}}>{pluralize(item.comments_count, 'comment')}</Link>
        {/if}</Button>
      </Col>
        </Row>
      </AccordionContent>
    </ListItem>
	  {/each}
  </List>
  {#if itemsCount < 299}
  <Block><Row>
  <Col><Button on:click={NextPage}>Load More ...</Button></Col>
  </Row></Block>
  {/if}
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
    AccordionContent,
    Row,
    Col,
    Button,
    Preloader,
    Link,
    Block
  } from 'framework7-svelte';

  let page = 1;
  let items;
  let currentItem;
  
  $: getStories(page);
  $: itemsCount = (items) ? items.length : 0;

  async function getStories(page) {
        const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
        const data = await res.json();
        items = (items) ? items.concat(data) : data;
    }

  function pluralize(prop, text) {
    return `${prop} ${prop < 2 ? text : text + 's'}`
  }
  
  function NextPage() {
    page += 1;
  }
</script>