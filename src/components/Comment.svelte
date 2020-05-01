<Block strong>
    <BlockHeader>{comment.user} {comment.time_ago}</BlockHeader>

	<p>{@html comment.content}</p>

	{#each comment.comments as child}
		<svelte:self comment={child}/>
	{/each}

  </Block>
<script>
    import {
        Block,
        BlockHeader
    } from 'framework7-svelte';

    export let comment;

    /* bug : external class on link in content */
    //document.querySelectorAll('a').forEach((node) => { node.classList.add('external') });
</script>
<style>
/* bug : long text in content */
p {
    overflow: auto;
}

:global(.block.block-strong) {
    padding-bottom: 0px;
}
</style>