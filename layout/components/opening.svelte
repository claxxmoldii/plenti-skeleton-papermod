<script>
  export let siteName;
</script>

<article class="first-entry home-info">
  <header class="entry-header">
    <h1 class="siteName ">{ siteName }</h1>
  </header>
  <section class="entry-content">
    <p>Welcome to demo of hugo’s theme PaperMod.</p>
    <ul class="isListStyledNon">
      <li>
        <strong>PaperMod</strong> is a simple but fast and responsive theme with
        useful feature-set that enhances UX.
      </li>
      <li>Do give a 🌟 on Github !</li>
      <li>
        PaperMod is based on theme{" "}
        <a href="https://github.com/nanxiaobei/hugo-paper">Paper</a>.
      </li>
    </ul>
  </section>

  <div class="social-icons">
    <a
      href="https://github.com/adityatelange/hugo-PaperMod"
      target="_blank"
      rel="noopener noreferrer me"
      title="Github"
      class=""
    >
      <img src="../assets/icons/githubicon-26px.png" alt="github" />
    </a>
    <a
      href="https://ko-fi.com/adityatelange"
      target="_blank"
      rel="noopener noreferrer me"
      title="Ko fi"
      class=""
    >
      <img src="../assets/icons/ko-fi-26px.png" alt="ko-fi" />
    </a>
    <a
      href="index.xml"
      target="_blank"
      rel="noopener noreferrer me"
      title="Rss"
    >
      <img src="../assets/icons/rss-26px.png" alt="rss feed" />
    </a>
  </div>
</article>

<style>
  h1 {
    font-size: 2.5rem ;
    font-weight: 700;
    letter-spacing: 1px;
  }

  a:not(:last-child) {
    padding-right: 10px;
  }

  .entry-content {
    color: rgba(0,0,0,0.56);
  }

  p {
    margin: 0;
  }

  li {
    margin: 0;
  }
</style>
