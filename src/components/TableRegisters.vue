<script setup lang="ts">
import type { IRegister } from '@/types/IRegister'

interface Props {
  registros: IRegister[]
}

defineProps<Props>()
</script>

<template>
  <div class="table-responsive">
    <table class="table table-hover align-middle">
      <thead class="table-light">
        <tr>
          <th scope="col" class="text-nowrap px-3">#</th>
          <th scope="col" class="text-nowrap px-3">Nombre</th>
          <th scope="col" class="text-nowrap px-3">Apellidos</th>
          <th scope="col" class="text-nowrap px-3">Email</th>
          <th scope="col" class="text-nowrap px-3">Teléfono</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-if="registros.length === 0">
          <td colspan="5" class="text-center py-4 text-muted">No hay registros disponibles</td>
        </tr>
        <tr v-else v-for="(registro, index) in registros" :key="index">
          <th scope="row" class="px-3">{{ index + 1 }}</th>
          <td class="px-3">{{ registro.nombre }}</td>
          <td class="px-3">{{ registro.apellidos }}</td>
          <td class="px-3"> {{ registro.email }}</td>
          <td class="px-3">{{ registro.telefono }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table {
  margin-bottom: 0;
  font-size: 0.95rem;
}

.table th {
  font-weight: 600;
  color: var(--secondary-color);
}

.table td,
.table th {
  vertical-align: middle;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .table {
    font-size: 0.85rem;
  }

  .table td,
  .table th {
    padding: 0.75rem;
  }
}

.table-responsive {
  border-radius: 0.5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.table-responsive::-webkit-scrollbar {
  height: 6px;
}

.table-responsive::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.table-responsive::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.table-responsive::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
