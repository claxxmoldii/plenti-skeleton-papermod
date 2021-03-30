<script>
  export let title, description, created;
</script>

<section class="buildLog container isGrid">
  <div class="title">
    <h1>{ title }</h1>
    <p>{ description }</p>
  </div>
  <ul>
    <li>created buildLog... <span class="date">/2021.3.5</span></li>
    <li>created attributions... <span class="date">/2021.3.5</span></li>
    <li>dropped skeleton... pow! <span class="date">/2021.3.5</span></li>
    <li>dropped raleway/google fonts... pow! <span class="date">/2021.3.5</span></li>
    <li>dropped footer. yeah! <span class="date">/2021.3.5</span></li>
    <br>

    <li>dropped navigation. yeah! <span class="date">/2021.3.5</span></li>
    <li>nav, okay... for now, desu! <span class="date">/2021.3.6</span></li>
    <li>pages, okay... for now, desu! <span class="date">/2021.3.6</span></li>
    <li>dropped posts! yeah! <span class="date">/2021.3.6</span></li>
    <li>post look... okay. for now. desu. <span class="date">/2021.3.7</span></li>
    <br>

    <li>opening block, okay. <span class="date">/2021.3.8</span></li>
    <li>postCard-look, okay. <span class="date">/2021.3.8</span></li>
    <li>to create a one-off kind of content: command is 'plenti new type --single'. <span class="date">/2021.3.9</span></li>
    <li>posts collection, working! pow! <span class="date">/2021.3.9</span></li>
    <li>dropped pagination. pow! <span class="date">/2021.3.9</span></li>
    <br>

    <li>posts posted from latest to first. yeah!<span class="date">/2021.3.10</span></li>
    <li>fixed assets/icons pointer to root... hah... <span class="date">/2021.3.23</span></li>
    <li>posts folder structures are okay with plenti! yey! <span class="date">/2021.3.23</span></li>
    <li>pager/pagination decoration. <span class="date">/2021.3.23</span></li>
    <li>search look is okay... <span class="date">/2021.3.24</span></li>
    <br>

    <li>categories and tags superscript styling, okay! <span class="date">/2021.3.25</span></li>
  </ul>
</section>

<style>
  .container {
    width:  50vw;
  }

  .buildLog {
    margin-top:  20vh;

    /*background-color:  beige;*/
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "title list";
  }

  .title {
    grid-area: title;
  }

  ul {
    grid-area: list;
    padding-bottom: 100px;
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
