<script>
  export let title, description, created;
</script>

<section class="attributions container isGrid">
  <header>
    <h1>{ title }</h1>
    <p>{ description }</p>
  </header>
  <ul>
    <li>plenti</li>
    <li>skeleton css</li>
    <li>google font/raleway</li>
    <li>papermod/papermod creator</li>
  </ul>
</section>

<style>
  .container {
    width:  50vw;
  }

  .attributions {
    margin-top:  20vh;

    background-color:  beige;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "title list";
  }

  header {
    grid-area: title;
  }

  ul {
    grid-area: list;
  }

  li {
    font-size: 1.6rem;
    list-style: none;
  }

  .date {
    color: lightskyblue;
    padding-left:  10px;
  }
</style>
