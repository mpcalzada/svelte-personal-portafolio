<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<!--
      Banner Start
    / -->
<section class="banner">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-sm-8">
        <h1 class="wow animated fadeInUp" data-wow-delay="0.5s">
          Marco Calzada
        </h1>
        <p class="wow animated fadeInUp" data-wow-delay="1.0s">
          Hello! I´m glad you´re here. 
        </p>
        <p class="wow animated fadeInUp" data-wow-delay="1.0s">
          I am a software developer engineer, currently working as Head of Software Egineering department
          at KS Soluciones.
        </p>
        <a
          href="about"
          class="btn btn-lg wow animated fadeInUp"
          data-wow-delay="1.5s">Check more about me</a
        >
      </div>
      <div class="col-lg-6 col-sm-4" />
    </div>
  </div>
</section>

<style>
  /* Banner */

  .banner {
    background-image: url(assets/images/bg.jpg);
    background-position: center;
    background-size: cover;
  }

  .banner .row {
    min-height: 87vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner h1 {
    font-size: 53px;
    color: #fff;
  }

  .banner p {
    font-size: 18px;
    color: #fff;
    margin: 10px 0px 25px;
  }

  .banner .btn {
    padding: 15px 40px;
    margin-right: 20px;
    background: transparent;
    color: #fff;
    border: 2px solid #ffff;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
  }

  .banner .btn:hover {
    background: #fff;
    color: #000;
    transition: 0.5s;
  }

  .parralax {
    width: 100%;
    height: 87vh;
    overflow: hidden;
    background: url(assets/images/background.jpg);
    background-attachment: fixed;
    background-size: cover;
  }

  .parralax .row {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mixBlnd {
    background-blend-mode: screen;
  }

  .holmes {
    padding-bottom: 0px;
    min-height: 87vh;
    background: url(assets/images/hl-bg.jpg);
  }

  .holmes h2 {
    font-size: 40px;
    margin: 30px 0px 10px;
    color: #999;
  }

  .holmes h1 {
    font-size: 90px;
    color: #444;
  }

  .holmes img {
    margin-bottom: -20px;
  }
</style>
