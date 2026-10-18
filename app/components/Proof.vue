<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
  <div class="proof">
    <p class="proof__head"><em>{{ title || 'Proof' }}.</em></p>
    <div class="proof__body"><slot /></div>
  </div>
</template>
