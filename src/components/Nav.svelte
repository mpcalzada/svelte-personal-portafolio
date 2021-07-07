<script>
  export let segment;
</script>

<svelte:head>
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/LineIcons.css" />
  <link rel="stylesheet" href="assets/css/animate.min.css" />
  <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
  <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
  <link rel="stylesheet" href="assets/css/theme.css" />

  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/popper.min.js"></script>
  <script src="assets/js/bootstrap.bundle.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
  <script src="assets/js/wow.min.js"></script>
  <script src="assets/js/owl.carousel.min.js"></script>
  <script src="assets/js/custom.js"></script>
</svelte:head>

<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="container">
    <div class="navbar-brand">
      <a id="pramuimge-logo" title="Pramukh IME" href="."
        ><img
          src="assets/images/logo_white.png"
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

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? "page" : undefined} href=".">
        home
      </a>
    </li>
    <li>
      <a aria-current={segment === "about" ? "page" : undefined} href="about">
        about
      </a>
    </li>
    <li>
      <a
        aria-current={segment === "contact" ? "page" : undefined}
        href="contact"
      >
        contact
      </a>
    </li>
    <li>
      <a
        aria-current={segment === "general" ? "page" : undefined}
        href="general"
      >
        general
      </a>
    </li>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === "blog" ? "page" : undefined}
        href="blog">blog</a
      >
    </li>
  </ul>
</nav>

<style>
</style>
