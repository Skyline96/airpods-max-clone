<template>
  <button 
    @click="$emit('close')"
    :class="[
      'absolute h-9 w-9 rounded-[100vmax] top-4 right-4',
      bgColor || 'bg-[rgb(29,29,31)]'
    ]"
  >
    <svg class="icon_control_plus rotate-45 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
      <path d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z"></path>
    </svg>
  </button>
</template>

<script setup>
defineProps({
  bgColor: {
    type: String,
    default: ''
  }
})

defineEmits(['close'])
</script> 