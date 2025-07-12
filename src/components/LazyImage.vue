<template>
  <picture>
    <source 
      v-if="mobileSrc" 
      :media="mobileMedia" 
      :srcset="mobileSrc"
      @load="onImageLoad"
    >
    <img 
      :src="desktopSrc" 
      :alt="alt"
      :class="imageClass"
      @load="onImageLoad"
      @error="onImageError"
      :loading="loading"
    >
  </picture>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  desktopSrc: {
    type: String,
    required: true
  },
  mobileSrc: {
    type: String,
    default: null
  },
  mobileMedia: {
    type: String,
    default: '(max-width: 480px)'
  },
  alt: {
    type: String,
    default: ''
  },
  imageClass: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'lazy'
  }
})

const emit = defineEmits(['load', 'error'])

const onImageLoad = () => {
  emit('load')
}

const onImageError = () => {
  emit('error')
}
</script> 