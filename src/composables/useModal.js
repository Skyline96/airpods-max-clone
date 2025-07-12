import { ref } from 'vue'

export function useModal() {
  const isModalOpen = ref(false)

  const openModal = () => {
    isModalOpen.value = true
    toggleBodyScrollbar()
  }

  const closeModal = () => {
    isModalOpen.value = false
    toggleBodyScrollbar()
  }

  const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value
    toggleBodyScrollbar()
  }

  const toggleBodyScrollbar = () => {
    document.body.style.overflow = isModalOpen.value ? 'hidden' : 'auto'
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal
  }
} 