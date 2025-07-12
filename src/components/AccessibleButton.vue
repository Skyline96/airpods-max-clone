<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :aria-pressed="ariaPressed"
    :aria-expanded="ariaExpanded"
    @click="handleClick"
    @keydown="handleKeydown"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'ghost', 'icon'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: ''
  },
  ariaPressed: {
    type: Boolean,
    default: undefined
  },
  ariaExpanded: {
    type: Boolean,
    default: undefined
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click', 'focus', 'blur'])

const buttonClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-apple-blue text-white hover:bg-blue-600 focus:ring-apple-blue',
    secondary: 'bg-apple-gray-100 text-apple-gray-900 hover:bg-apple-gray-200 focus:ring-apple-gray-500',
    ghost: 'text-apple-gray-700 hover:bg-apple-gray-100 focus:ring-apple-gray-500',
    icon: 'text-apple-gray-700 hover:bg-apple-gray-100 focus:ring-apple-gray-500 rounded-full'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl'
  }
  
  const widthClass = props.fullWidth ? 'w-full' : ''
  
  return `${baseClasses} ${variantClasses[props.variant]} ${sizeClasses[props.size]} ${widthClass}`
})

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleClick(event)
  }
}

const handleFocus = (event) => {
  emit('focus', event)
}

const handleBlur = (event) => {
  emit('blur', event)
}
</script> 