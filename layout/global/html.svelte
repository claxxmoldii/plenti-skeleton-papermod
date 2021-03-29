<script>
  import Head from './head.svelte';
  import Navigation from './navigation.svelte';
  import Footer from './footer.svelte';

  export let route, content, allContent, allComponents;
</script>

<html lang="en">
  <Head title={content.filename} />
  <body class="isGrid">
    <nav class="isFlexCentered">
      <Navigation />
    </nav>

    <main class="isFlexCentered">
      <svelte:component this={route} {...content.fields} {content} {allContent} {allComponents} />
    </main>

    <footer class="isFlexCentered">
      <Footer />
    </footer>
  </body>
</html>

<style>
  body {
    height: 100vh;
    grid-template-rows: 50px auto 40px;
  }

  nav {
    padding-top: 20px;
  }

  main {
    margin-top: 50px;
  }

  footer {
  }
</style>
