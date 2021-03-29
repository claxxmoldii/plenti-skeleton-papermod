<script>
  export let title, body, date, readTime, author;
</script>

<article class="post-entry">
  <header class="entry-header">
      <h2>{ title }</h2>
  </header>
  <section class="entry-content">
      <p>{ body }</p>
  </section>
  <footer class="byLine">
    <span>{ date }&nbsp;·&nbsp;{ readTime }&nbsp;·&nbsp;{ author }</span>
  </footer>
  <a class="entry-link" aria-label="post link to Installation | Update" href="https://adityatelange.github.io/hugo-PaperMod/posts/papermod/papermod-installation/"></a>
</article>

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
