<script setup lang="ts"></script>

<template>
  <section id="video-section" class="video-section py-4 py-md-5" aria-label="Sección de video">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8 mx-auto text-center mb-4 mb-lg-5">
          <h2
            class="display-2 fw-bold text-secondary mb-4 fs-1 fs-md-2 fs-lg-1"
            aria-label="Título de la sección de video"
          >
            ¿Qué es?
          </h2>
          <p
            class="lead text-dark mb-4 hyphens-auto fs-6 fs-md-5 fs-lg-4"
            aria-label="Descripción de la sección de video"
          >
            <strong class="fw-bold" aria-label="Negrita en la descripción de la sección de video">
              Cursos gratuitos para jóvenes de entre 10 y 18 años para enseñarles a usar la
              tecnología de manera saludable, positiva y responsable.
            </strong>
            Además, aprenderán sobre los riesgos de pasar demasiado tiempo frente a las pantallas y
            cómo esto puede afectar tanto a su salud física como mental. Cualquier centro educativo
            o entidad que trabaje en la educación de jóvenes puede solicitarlos.
          </p>
          <button
            type="button"
            class="btn btn-secondary btn-lg px-4 fs-8 fs-md-6 fs-lg-4 py-2"
            aria-label="Botón de solicitud de formación gratuita"
          >
            Solicita formación gratuita
          </button>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div
            class="card shadow-lg rounded-4 overflow-hidden border-0"
            aria-label="Tarjeta de video"
          >
            <div class="ratio ratio-16x9">
              <img
                src="@/assets/images/video-section.jpg"
                class="w-100 h-100 object-fit-cover rounded-4"
                alt="Video preview"
                aria-label="Imagen del video"
              />
              <div
                class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-25 rounded-4"
              >
                <svg
                  class="btn-play"
                  width="131"
                  height="129"
                  viewBox="0 0 131 129"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Icono de reproducción"
                >
                  <path
                    d="M65.4938 0.199951C29.4193 0.199951 0.1875 28.9785 0.1875 64.4937C0.1875 100.009 29.4193 128.787 65.4938 128.787C101.568 128.787 130.8 100.009 130.8 64.4937C130.8 28.9785 101.555 0.199951 65.4938 0.199951ZM87.6092 68.8455L54.3265 87.7618C50.9189 89.7019 46.6628 87.2767 46.6628 83.41V45.564C46.6628 41.6972 50.9189 39.272 54.3265 41.2121L87.6092 60.1284C91.0168 62.0685 91.0168 66.9054 87.6092 68.832V68.8455Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  background: url('@/assets/images/fondo-video-section.png') no-repeat center bottom;
  background-size: 100% 60%;
  min-height: 100vh;
}

.btn-play:hover {
  cursor: pointer;
  opacity: 1;
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.btn-play {
  width: 60px;
  height: 60px;
}

@media screen and (width >= 768px) {
  .video-section {
    background-size: 100% 50%;
  }
}

@media screen and (width >= 992px) {
  .video-section {
    background-size: 100% 40%;
  }
}
</style>
