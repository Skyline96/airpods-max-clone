import { ref } from 'vue'
import Swiper from 'swiper'
import { Pagination, Keyboard, Autoplay, Navigation } from 'swiper/modules'

export function useSwiper(options = {}) {
  const swiperEl = ref(null)
  const swiperInstance = ref(null)
  const isAutoplayRunning = ref(true)
  const isAutoplayEnded = ref(false)

  const defaultOptions = {
    modules: [Pagination, Keyboard, Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    speed: 1500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    keyboard: {
      enabled: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.prev',
      nextEl: '.next'
    }
  }

  const swiperOptions = { ...defaultOptions, ...options }

  const initSwiper = () => {
    if (swiperEl.value) {
      swiperInstance.value = new Swiper(swiperEl.value, swiperOptions)

      // Only add autoplay event listeners if autoplay is enabled
      if (swiperOptions.autoplay) {
        swiperInstance.value.on('slideChange', () => {
          isAutoplayRunning.value = swiperInstance.value.autoplay.running

          if (!swiperInstance.value.isEnd) {
            isAutoplayEnded.value = false
          }
        })

        swiperInstance.value.on('reachEnd', () => {
          if (swiperInstance.value.autoplay.running && swiperInstance.value.isEnd) {
            setTimeout(() => {
              swiperInstance.value.autoplay.stop()
              isAutoplayEnded.value = true
            }, 3999)
          }
        })
      }
    }
  }

  const toggleAutoplay = () => {
    if (!swiperInstance.value?.autoplay.running) {
      if (swiperInstance.value?.isEnd) {
        swiperInstance.value.slideTo(0, 1500, false)
      }
      swiperInstance.value?.autoplay.start()
      isAutoplayRunning.value = true
    } else {
      swiperInstance.value?.autoplay.stop()
      isAutoplayRunning.value = false
    }
  }

  const destroySwiper = () => {
    if (swiperInstance.value) {
      swiperInstance.value.destroy()
      swiperInstance.value = null
    }
  }

  return {
    swiperEl,
    swiperInstance,
    isAutoplayRunning,
    isAutoplayEnded,
    initSwiper,
    toggleAutoplay,
    destroySwiper
  }
}

// Specialized composable for navigation-based swipers
export function useNavigationSwiper(options = {}) {
  const defaultNavOptions = {
    modules: [Keyboard, Navigation],
    slidesPerView: "auto",
    spaceBetween: 20,
    grabCursor: true,
    speed: 500,
    watchSlidesProgress: true,
    watchOverflow: true,
    keyboard: {
      enabled: true
    },
    navigation: {
      prevEl: '.prev',
      nextEl: '.next'
    }
  }

  const navSwiperOptions = { ...defaultNavOptions, ...options }
  
  return useSwiper(navSwiperOptions)
} 