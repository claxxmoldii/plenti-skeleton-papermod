<script>
  import { sortByDate } from '../scripts/sort_by_date.svelte';

  export let items, postRangeLow, postRangeHigh;
</script>

<div class="grid">
  {#each sortByDate(items) as item, i}
    {#if i >= postRangeLow && i < postRangeHigh}
      <article class="post-entry">
        <a class="isLinkTextDecorationNone" href="{item.path}">
        <header class="entry-header">
            <h2>{ item.fields.title }</h2>
        </header>
        <section class="entry-content">
            <p>{ item.fields.teaser }</p>
        </section>
        <footer class="byLine">
          <span>
            { item.fields.date }&nbsp;·&nbsp;{ item.fields.readTime }&nbsp;·&nbsp;{ item.fields.author }</span>
        </footer>
        </a>
      </article>
    {/if}
  {/each}
</div>



<style>
  .grid {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 20px;
  }

  a:hover {
    color: inherit;
  }

  h2 {
    color: rgba(0,0,0,0.75);
    font-size: 2.3rem;
    font-weight: 600;
  }

  h2, p {
    margin: 0;
    padding-bottom: 5px;
  }

  p, .byLine {
    color: rgba(0, 0, 0, 0.56);
  }

  .posts-collection {
    margin-top: 60px;
  }

  .post-entry {
    position: relative;
    padding: 20px;
    background: white;
    border-radius: 10px;
    transition: transform .1s;
    border: 1px solid rgba(0,0,0,0.10);
  }
</style>
