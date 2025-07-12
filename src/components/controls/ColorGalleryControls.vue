<template>
  <Transition name="controls-fade">
    <div v-if="visible" class="fixed bottom-8 left-1/2 -translate-x-1/2 h-14 z-50 transition-all duration-200">
      <div class="h-full bg-[rgba(232,232,237,0.7)] backdrop-blur-lg rounded-[100vmax] overflow-hidden">
        <ul class="list-none color_swatches h-full inline-flex items-center mx-2">
          <li v-for="color in availableColorVariants" :key="color.colorName" class="w-7 h-7 mx-2">
            <input 
              type="radio" 
              name="color_swatch" 
              :value="color.colorName"
              :checked="colorVariant === color.colorName"
              @change="updateColorVariant(color.colorName)"
              class="appearance-none relative h-full w-full rounded-[100vmax] focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black/60 after:content-[''] after:absolute after:-inset-[1px] after:rounded-[inherit] after:bg-gradient-to-b after:from-black/60 after:to-55% after:-z-10"
              :class="isColorVariantActive(color.colorName) ? 'outline outline-2 outline-offset-4 outline-black/60' : ''"
              :style="`background:linear-gradient(0deg, ${color.colorShadeLight} 50%, ${color.colorShadeDark} 0);`" 
            />
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const colorVariants = [
  { colorName: 'midnight', colorShadeLight: '#2a3139', colorShadeDark: '#22252a' },
  { colorName: 'starlight', colorShadeLight: '#ccbeb1', colorShadeDark: '#e9e1d4' },
  { colorName: 'blue', colorShadeLight: '#91a9b5', colorShadeDark: '#64727d' },
  { colorName: 'purple', colorShadeLight: '#afa6bb', colorShadeDark: '#dad7e0' },
  { colorName: 'orange', colorShadeLight: '#e2a48d', colorShadeDark: '#ffc09d' }
]

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  colorVariant: {
    type: String,
    default: 'midnight'
  }
})

const emit = defineEmits(['update:colorVariant'])

const availableColorVariants = colorVariants

const isColorVariantActive = (color) => {
  return props.colorVariant === color
}

const updateColorVariant = (colorName) => {
  emit('update:colorVariant', colorName)
}
</script>

<style scoped>
.controls-fade-enter-active,
.controls-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.controls-fade-enter-from,
.controls-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) scale(0.9);
}
</style> 