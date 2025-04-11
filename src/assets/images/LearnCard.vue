<script setup lang="ts">
import type { ICardData } from '@/types/IDataCard'

interface Props {
  card: ICardData
  index: number
}

defineProps<Props>()
</script>

<template>
  <div class="card h-100 border-0 shadow-sm">
    <div class="card-body d-flex flex-column h-100">
      <div class="text-center mb-3">
        <h3 class="text-secondary fw-bold fs-2">{{ index + 1 }}</h3>
      </div>
      <div class="flex-grow-1 d-flex flex-column">
        <p class="mb-4 hyphens-auto flex-grow-1" v-html="card.text"></p>
        <div class="mt-auto">
          <img :src="card.image" :alt="'Card ' + (index + 1)" class="img-fluid rounded" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-secondary {
  color: var(--secondary-color) !important;
}

.card {
  min-height: 100%;
}

.hyphens-auto {
  text-align: justify;
  text-rendering: optimizeLegibility;
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
}
</style>
