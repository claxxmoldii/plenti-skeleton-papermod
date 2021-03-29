<script>
    export let title, date, readTime, author, pic, caption, body;
</script>

<section class="isMarginAutoCentered">

    <img src="/assets/images/{pic}" alt="title">
    <p class="caption">{caption}</p>

    <header class="">
    <h1 class="">{ title }</h1>
    <div class="byLine">
      <span class="">{ date }</span>
      <span class="">/ { readTime }</span>
      <span>/ { author }</span>
    </div>
    </header>

    <article class="">{@html body}</article>

</section>

<style>
  section {
    max-width: 50vw;
    padding: 50px 0;
  }

  header {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 0;
    /*letter-spacing: 1px;*/
  }

  .byLine {
    color: #3f3f3f;
    font-size: 1.6rem;
    font-weight: 500;
  }

  img {
    max-width: 100%;
  }

  a:link {
    color:  pink;
    text-decoration:  none;
  }

</style>
