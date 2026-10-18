<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'theorem' | 'lemma' | 'proposition' | 'corollary' | 'definition' | 'remark' | 'example'
  title?: string
}>(), { type: 'theorem' })

const label = computed(() => props.type.charAt(0).toUpperCase() + props.type.slice(1))
</script>

<template>
  <div class="thm" :class="`thm--${type}`">
    <p class="thm__head">
      <span class="thm__label">{{ label }}</span>
      <span v-if="title" class="thm__title">{{ title }}</span>
    </p>
    <div class="thm__body"><slot /></div>
  </div>
</template>
