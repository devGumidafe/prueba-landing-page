<script setup lang="ts">
import { useFormRegister } from '@/composables/useFormRegister'
import TableRegisters from '@/components/TableRegisters.vue'

const { formState, errors, handleSubmit, isSubmitting, registros } = useFormRegister()
</script>

<template>
  <section id="form-section" class="form-section py-4 py-md-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 text-center mb-4">
          <h2 class="display-5 fw-bold text-secondary fs-4 fs-md-3 fs-lg-1">
            Solicita formación gratuita
          </h2>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <form @submit="handleSubmit" class="needs-validation" novalidate>
            <div class="row g-3 mb-3">
              <div class="col-12 col-md-6">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': errors.nombre }"
                  id="nombre"
                  v-model="formState.nombre"
                  placeholder="*Nombre"
                  required
                />
                <div class="invalid-feedback">{{ errors.nombre }}</div>
              </div>

              <div class="col-12 col-md-6">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': errors.apellidos }"
                  id="apellidos"
                  v-model="formState.apellidos"
                  placeholder="*Apellidos"
                  required
                />
                <div class="invalid-feedback">{{ errors.apellidos }}</div>
              </div>
            </div>

            <div class="row g-3 mb-3">
              <div class="col-12 col-md-6">
                <input
                  type="email"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': errors.email }"
                  id="email"
                  v-model="formState.email"
                  placeholder="*Email"
                  required
                />
                <div class="invalid-feedback">{{ errors.email }}</div>
              </div>

              <div class="col-12 col-md-6">
                <input
                  type="tel"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': errors.telefono }"
                  id="telefono"
                  v-model="formState.telefono"
                  placeholder="*Teléfono"
                  required
                />
                <div class="invalid-feedback">{{ errors.telefono }}</div>
              </div>
            </div>

            <div class="mt-4">
              <button
                type="submit"
                class="btn btn-secondary btn-lg px-4 fs-8 fs-md-6 fs-lg-4 py-2"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Enviando...' : 'Solicita' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <h3 class="mb-3">Registros</h3>
      <TableRegisters :registros="registros" />
    </div>
  </section>
</template>

<style scoped>
.btn-secondary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-control {
  border-radius: 50rem;
  padding: 1.25rem 1.5rem;
  border: 1px solid #dee2e6;
  font-size: 1rem;
  height: 60px;
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 0.8;
}

.form-control:focus {
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 0.25rem rgba(230, 43, 37, 0.1);
}

@media (max-width: 768px) {
  .form-control {
    font-size: 1rem;
    height: 50px;
    padding: 1rem 1.5rem;
  }
}

@media (min-width: 992px) {
  .form-control {
    font-size: 1.1rem;
  }
}
</style>
