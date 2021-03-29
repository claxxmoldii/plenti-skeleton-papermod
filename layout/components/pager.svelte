<script>
  export let currentPage, totalPages;
</script>

<ul>
  {#if currentPage > 1}
    <!-- <li><a href="/">first</a></li> -->
    <!-- <li><a href="/{currentPage - 1}">prev</a></li> -->
    <li><a class="arrowed" href="/">| &lt</a></li>
    <li><a class="arrowed" href="/{currentPage - 1}">&lt</a></li>
  {:else}
    <!-- <li><span>first</span></li> -->
    <!-- <li><span>prev</span></li> -->
    <li><span>| &lt</span></li>
    <li><span>&lt</span></li>
  {/if}
  {#each [3,2,1] as i}
    {#if currentPage - i > 0}
      <li><a href="/{currentPage - i}">{currentPage - i}</a></li>
    {/if}
  {/each}
  <li><span>{currentPage}</span></li>
  {#each Array(3) as _, i}
    {#if currentPage + (i+1) <= totalPages}
      <li><a href="/{currentPage + (i+1)}">{currentPage + (i+1)}</a></li>
    {/if}
  {/each}
  {#if currentPage < totalPages}
    <!-- <li><a href="/{currentPage + 1}">next</a></li> -->
    <!-- <li><a href="/{totalPages}">last</a></li> -->
    <li><a class="arrowed" href="/{currentPage + 1}">&gt</a></li>
    <li><a class="arrowed" href="/{totalPages}">&gt |</a></li>
  {:else}
    <!-- <li><span>next</span></li> -->
    <!-- <li class="blacked"><span>last</span></li> -->
    <li><span>&gt</span></li>
    <li><span>&gt |</span></li>
  {/if}
</ul>

<style>
  ul {
    display: flex;
    max-width: 600px;
    margin: 20px auto;
  }
  li {
    flex-grow: 1;
    list-style: none;
  }
  a {
    text-decoration: none;
    text-align: center;
    padding: 10px 16px;
    border-radius: 20px;
    background: #333;
    color: #f5f5f5;
    margin-right: 10px;
  }
  span {
    text-align: center;
    padding: 5px 20px;
    color: gray;
  }

  .arrowed {
    padding: 10px 30px;
  }
</style>
