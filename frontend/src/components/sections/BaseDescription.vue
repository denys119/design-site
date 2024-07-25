<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import type { BaseDescription } from './baseDescription.types';

defineProps({
  data: {
    type: Object as PropType<BaseDescription>,
    required: true
  }
});
</script>
