<script>
  import { sortByDate } from '../scripts/sort_by_date.svelte';

  export let items;
</script>

<div class="post-entry">
  <header class="entry-header">
      <h4>{ title }</h4>
  </header>
  <footer class="byLine">
    <span>{ date }&nbsp;·&nbsp;{ readTime }&nbsp;·&nbsp;{ author }</span>
  </footer>
</div>

<style>
  h2, p {
    margin: 0;
    padding-bottom: 10px;
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

  h2 {
    font-size: 2.3rem;
    font-weight: 600;
  }
</style>
