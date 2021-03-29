<script>
  import ToggleTheme from '../components/toggleTheme.svelte';
</script>

<nav class="isFlex seven columns">
  <div class="logoSide isFlex">
    <a
      href="/"
      accesskey="h"
      title="PaperMod (Alt + H)"
      class="logo"
    >
      PaperMod
    </a>
    <span class="toggle">
      <ToggleTheme />
    </span>
    <span class="logo-switches">
      <ul class="lang-switch isFlex">
        <li class="">|</li>
        <li class=""><a href="/" title=":fr:" aria-label=":fr:">🇫🇷</a></li>
        <li class=""><a href="/" title="Fa" aria-label="Fa" class="">Fa</a></li>
      </ul>
    </span>
  </div>

  <ul id="menu" onscroll="menu_on_scroll()" class="menu isFlex">
    <li><a href="/archive" title="Archive"><span>Archive</span></a></li>
    <li><a href="/categories" title="Categories"><span>Categories</span></a></li>
    <li><a href="/search" title="Search (Alt + /)" accesskey="/"><span>Search</span></a></li>
    <li><a href="/tags" title="Tags"><span>Tags</span></a></li>
  </ul>
</nav>

<style>
  nav {
/*    background-color: beige;*/
    justify-content: space-between;
  }

  .menu li:not(:last-child) {
    padding-right: 1.25rem;
  }

  a {
    text-decoration: none;
    color: #222;
  }

  li {
    list-style-type: none;
    font-size: 1.6rem;
    letter-spacing: .5px;
    font-weight: 500;
  }

  .logo {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .logoSide li, .toggle {
    padding-left: 15px;
  }
</style>
