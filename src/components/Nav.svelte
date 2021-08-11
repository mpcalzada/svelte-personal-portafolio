<script>
  export let segment;
</script>

<svelte:head>

</svelte:head>

<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="container">
    <div class="navbar-brand">
      <a id="pramuimge-logo" title="Pramukh IME" href="."
        ><img
          src="assets/images/logo-mc.png"
          alt="Pramukh IME home page"
        /></a
      >
    </div>
    <button
      class="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#main-nav-1"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="navbar-collapse collapse" id="main-nav-1">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a href="." title="Blog" class="nav-link"> Home </a>
        </li>
        <li class="nav-item">
          <a href="about" title="Blog" class="nav-link"> About </a>
        </li>
        <li class="nav-item">
          <a href="contact" title="Blog" class="nav-link"> Contact </a>
        </li>
        <li class="nav-item">
          <a href="general" title="Blog" class="nav-link"> General </a>
        </li>
        <li class="nav-item">
          <a rel="prefetch" href="blog" title="Blog" class="nav-link"> Blog </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .bg-dark {
    background: #212121 !important;
  }
  .bg-dark h3 {
    font-size: 20px;
    padding-bottom: 10px;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 16px;
    text-transform: uppercase;
  }
  .navbar-dark .navbar-brand {
    padding: 10px 0px;
  }
  .dropdown-menu a {
    color: #444;
  }
  .dropdown-menu a:hover {
    background: transparent !important;
  }
  .dropdown:hover > .dropdown-menu {
    display: block;
  }
</style>
