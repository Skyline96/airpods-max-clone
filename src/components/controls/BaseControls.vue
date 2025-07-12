<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div v-if="visible" class="fixed bottom-7 left-1/2 transform -translate-x-1/2 z-50">
      <div 
        class="h-14 bg-[rgba(232,232,232,0.7)] backdrop-blur rounded-[100vmax] px-1 overflow-hidden focus-within:focus-visible:ring-2 focus-within:focus-visible:ring-blue-500 focus-within:focus-visible:ring-offset-2"
        :class="bgColor"
      >
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  bgColor: {
    type: String,
    default: 'bg-[rgba(232,232,232,0.7)] text-black'
  }
})
</script> 