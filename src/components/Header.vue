<script setup lang="ts"></script>

<template>
  <div class="header-wrapper" role="banner">
    <header class="navbar navbar-expand-lg navbar-dark py-3">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/images/desconecta-red.png"
            alt="Logo Desconecta"
            class="img-fluid brand-logo"
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <nav class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white custom-nav-link" href="#video-section" aria-label="Ir a la sección de Qué es">Qué es</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white custom-nav-link" href="#learn-section" aria-label="Ir a la sección de Qué vas a aprender">Qué vas a aprender</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white custom-nav-link" href="#form-section" aria-label="Solicita formación gratuita">Solicita formación</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <section class="py-4 py-md-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start">
            <h1 class="display-2 fw-bold text-white mb-4 fs-1 fs-md-2 fs-lg-1" aria-label="Protege tu bienestar digital">
              Protege tu bienestar digital
            </h1>
            <p class="lead text-white mb-4 fs-6 fs-md-5 hyphens-auto" aria-label="Descripción de la página">
              (des)CONECTA ofrece formación gratuita para enseñar a jóvenes de 10 a 18 años a usar
              la tecnología de forma segura y saludable, y conocer los riesgos del uso excesivo de
              pantallas en su salud física y mental.
            </p>
            <div class="d-grid d-lg-block">
              <button type="button" class="btn btn-outline-light btn-lg px-4 custom-btn-cta" aria-label="Solicita formación gratuita">
                Solicita formación gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.header-wrapper {
  background: url('@/assets/images/header.png') no-repeat center center;
  background-size: cover;
  position: relative;
  min-height: 350px;
}

.brand-logo {
  height: 2rem;
}

.custom-nav-link {
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;
}

.custom-nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.custom-nav-link:hover {
  transform: translateY(-2px);
}

.custom-nav-link:hover::after {
  width: 70%;
}

.custom-btn-cta {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.custom-btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (min-width: 992px) {
  .brand-logo {
    height: 2.8rem;
  }

  .nav-item {
    margin-left: 1.25rem;
  }
}
</style>
