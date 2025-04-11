<template>
  <footer class="footer-section d-flex align-items-end justify-content-center py-4 py-md-5">
    <div class="container h-100">
      <div class="row justify-content-center h-100">
        <div class="col-12 col-lg-8 text-center d-flex flex-column justify-content-end">
          <h2 class="display-5 fw-bold text-white mb-4 fs-4 fs-md-3 fs-lg-1">
            ¿Quieres más información?
          </h2>
          <p class="lead text-white mb-4 fs-6 fs-md-5 fs-lg-4">
            Si tienes alguna duda o necesitas más información sobre nuestros cursos, no dudes en
            contactarnos.
          </p>
          <button type="button" class="btn btn-light btn-lg px-4 fs-6 fs-md-5 fs-lg-4 py-2">
            Contacta con nosotros
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  background: url('@/assets/images/fondo-footer.png') no-repeat center bottom;
  background-size: 100% 90%;
  min-height: 300px;
}

.btn-light:hover {
  background-color: #f8f9fa !important;
  border-color: #f8f9fa !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
