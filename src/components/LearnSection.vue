<script setup lang="ts">
import { cards } from '@/data/dataCard'
import LearnCard from './LearnCard.vue'
</script>

<template>
  <section
    id="learn-section"
    class="learn-section py-4 py-md-5"
    aria-label="Sección de aprendizaje"
  >
    <div class="container">
      <div class="main-card card shadow-lg rounded-4 overflow-hidden border-0 bg-light">
        <div class="card-body p-4 p-md-5">
          <h2
            class="display-2 fw-bold text-secondary text-center mb-4 fs-1 fs-md-2 fs-lg-1"
            aria-label="Título de la sección de aprendizaje"
          >
            ¿Qué vas a aprender?
          </h2>
          <p
            class="lead col-12 col-md-8 mx-auto text-dark text-center mb-4 hyphens-auto fs-6 fs-md-5 fs-lg-4"
            aria-label="Descripción de la sección de aprendizaje"
          >
            En (des)CONECTA - Conéctate contra la tecnoadicción, organizamos
            <strong
              class="fw-bold"
              aria-label="Negrita en la descripción de la sección de aprendizaje"
            >
              cursos gratuitos para enseñar a jóvenes de 10 a 18 años sobre el uso consciente,
              seguro y responsable de la tecnología,
            </strong>
            ayudándoles a comprender cómo el uso excesivo de pantallas puede afectar a su salud
            física y mental. Las personas participantes aprenderán a:
          </p>

          <div class="row g-4 mt-4">
            <div v-for="(card, index) in cards" :key="index" class="col-12 col-md-4">
              <LearnCard :card="card" :index="index" />
            </div>
          </div>

          <div class="text-center mt-4">
            <button
              type="button"
              class="btn btn-secondary btn-lg px-4 fs-8 fs-md-6 fs-lg-4 py-2"
              aria-label="Botón de solicitud de formación gratuita"
            >
              Solicita formación gratuita
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.learn-section {
  min-height: 100vh;
  margin-top: -100px;
}

.main-card {
  background-color: #f2f2f2 !important;
}

@media screen and (width >= 768px) {
  .learn-section {
    margin-top: -60px;
  }
}
</style>
