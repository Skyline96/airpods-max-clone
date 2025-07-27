<template>
  <section class="highlights relative py-24 sm:py-40 overflow-x-clip">
    <div class="w-[87.5%] max-w-[1680px] mx-auto">
      <h2 ref="heading"
        class="text-[28px] sm:text-[56px] tracking-tight sm:leading-none sm:tracking-tighter font-semibold pb-12 sm:pb-20">
        Get the highlights.</h2>
    </div>
    <div ref="highlightsSwiper"
      class="highlights_swiper px-[max(6.25vw,(100vw-1680px)/2,env(safe-area-inset-left),env(safe-area-inset-right))]">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide relative overflow-hidden w-[min(calc(max(87.5vw,280px)-20px,1680px))] min-h-[480px] sm:min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
          <div class="absolute inset-0">
            <picture>
              <source media="(max-width: 480px)" srcset="/images/colors_static_xsmall_2x.jpg 2x">
              <img src="/images/colors_static_xlarge.jpg" alt="" class="h-full object-cover">
            </picture>
          </div>
          <div class="absolute inset-0 flex justify-center">
            <p class="max-w-[640px] h-fit sm:text-[28px] font-semibold leading-tight text-center m-8 sm:m-12">The
              ultimate
              over-ear personal
              listening experience — now in fresh new colors.
            </p>
          </div>
        </div>
        <div
          class="swiper-slide relative overflow-hidden w-[min(calc(max(87.5vw,280px)-20px,1680px))] min-h-[480px] sm:min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
          <div class="absolute inset-0">
            <picture>
              <source media="(max-width: 480px)" srcset="/images/hifi_static_xsmall_2x.jpg 2x">
              <img src="/images/hifi_static_xlarge.jpg" alt="" class="h-full object-cover">
            </picture>
          </div>
          <div class="absolute inset-0 flex justify-center sm:justify-start sm:items-center">
            <p
              class="max-w-[430px] h-fit sm:text-[28px] font-semibold leading-tight text-center sm:text-left m-8 sm:m-12">
              High-fidelity sound. Exhilarating audio with deep bass, expansive mids, and crisp highs.
            </p>
          </div>
        </div>
        <div
          class="swiper-slide relative overflow-hidden w-[min(calc(max(87.5vw,280px)-20px,1680px))] min-h-[480px] sm:min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
          <div class="absolute inset-0">
            <picture>
              <source media="(max-width: 480px)" srcset="/images/anc_endframe_xsmall_2x.jpg 2x">
              <img src="/images/anc_startframe_xlarge.jpg" alt="" class="h-full object-cover">
            </picture>
          </div>
          <div class="absolute inset-0 flex justify-center items-end sm:items-center sm:justify-end">
            <p
              class="max-w-[455px] h-fit sm:text-[28px] font-semibold leading-tight text-center sm:text-left m-8 sm:m-12">
              Pro-level Active Noise Cancellation. Removes unwanted noise so you can immerse yourself in the music.
            </p>
          </div>
        </div>
        <div
          class="swiper-slide relative overflow-hidden w-[min(calc(max(87.5vw,280px)-20px,1680px))] min-h-[480px] sm:min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
          <div class="absolute inset-0">
            <picture>
              <source media="(max-width: 480px)" srcset="/images/design_static_xsmall_2x.jpg 2x">
              <img src="/images/design_static_xlarge.jpg" alt="" class="h-full object-cover">
            </picture>
          </div>
          <div class="absolute inset-0 flex justify-center items-start sm:items-center sm:justify-end">
            <p
              class="max-w-[405px] h-fit sm:text-[28px] font-semibold leading-tight text-center sm:text-left m-8 sm:m-12">
              Over-ear design. From canopy to cushion, built for unequaled fit and comfort.
            </p>
          </div>
        </div>
        <div
          class="swiper-slide relative overflow-hidden w-[min(calc(max(87.5vw,280px)-20px,1680px))] min-h-[480px] sm:min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
          <div class="absolute inset-0">
            <picture>
              <source media="(max-width: 480px)" srcset="/images/usbc_static_xsmall_2x.jpg 2x">
              <img src="/images/usbc_static_xlarge.jpg" alt="" class="h-full object-cover">
            </picture>
          </div>
          <div class="absolute inset-0 flex justify-center">
            <p class="max-w-[640px] h-fit sm:text-[28px] font-semibold leading-tight text-center m-8 sm:m-12">
              USB‑C. Charging is fast and easy with the one‑cable convenience of USB‑C.
            </p>
          </div>
        </div>
      </div>
      <!-- Hidden pagination element for swiper initialization -->
      <div class="highlights_swiper__pagination hidden"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, useTemplateRef } from 'vue'
import { gsap, ScrollTrigger } from 'gsap/all'
import Swiper from 'swiper'
import { Pagination, Keyboard, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const headingRef = useTemplateRef('heading')

const highlightsSwiperEl = useTemplateRef('highlightsSwiper')
const highlightsSwiperProps = reactive({
  isAutoplayRunning: false, // Start with autoplay disabled
  isAutoplayEnded: false
})

const highlightsSwiperParams = {
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
    el: '.highlights_swiper__pagination',
    clickable: true,
  },
}

const toggleSliderAutoplay = () => {
  if (!highlightsSwiperEl.value.swiper.autoplay.running) {
    if (highlightsSwiperEl.value.swiper.isEnd) {
      highlightsSwiperEl.value.swiper.slideTo(0, 1500, false)
    }
    highlightsSwiperEl.value.swiper.autoplay.start()
    highlightsSwiperProps.isAutoplayRunning = true
  } else {
    highlightsSwiperEl.value.swiper.autoplay.stop()
    highlightsSwiperProps.isAutoplayRunning = false
  }
}

let highlightsSwiper = null

const initHighlightsSwiper = () => {
  highlightsSwiper = new Swiper(highlightsSwiperEl.value, highlightsSwiperParams)

  highlightsSwiper.on('slideChange', () => {
    highlightsSwiperProps.isAutoplayRunning = highlightsSwiper.autoplay.running

    if (!highlightsSwiper.isEnd) {
      highlightsSwiperProps.isAutoplayEnded = false
    }

    // Update active bullet in HighlightsControls
    updatePaginationBullets()
  })

  highlightsSwiper.on('reachEnd', () => {
    if (highlightsSwiper.autoplay.running && highlightsSwiper.isEnd) {
      setTimeout(() => {
        highlightsSwiper.autoplay.stop()
        highlightsSwiperProps.isAutoplayEnded = true
      }, 3999)
    }
  })
}

const updatePaginationBullets = () => {
  const highlightsControlsPagination = document.querySelector('.swiper-controls__pagination')

  if (highlightsControlsPagination && highlightsSwiper) {
    const bullets = highlightsControlsPagination.querySelectorAll('.swiper-pagination-bullet')

    bullets.forEach((bullet, index) => {
      const isActive = index === highlightsSwiper.activeIndex
      bullet.classList.toggle('swiper-pagination-bullet-active', isActive)
    })
  }
}

const updatePaginationElement = (element) => {
  if (highlightsSwiper && element) {
    // Move pagination bullets from hidden element to HighlightsControls
    const hiddenPagination = document.querySelector('.highlights_swiper__pagination')
    if (hiddenPagination && element) {
      // Move all pagination bullets
      const bullets = hiddenPagination.querySelectorAll('.swiper-pagination-bullet')
      bullets.forEach(bullet => {
        element.appendChild(bullet.cloneNode(true))
      })

      // Add click event listeners to new bullets
      const newBullets = element.querySelectorAll('.swiper-pagination-bullet')
      newBullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
          highlightsSwiper.slideTo(index)
        })
      })
    }
  }
}

const initAnimations = () => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  // Get all slides dynamically
  const slides = highlightsSwiperEl.value.querySelectorAll('.swiper-slide')

  // Set initial states - ensure elements start hidden
  gsap.set(headingRef.value, { opacity: 0, y: 30 })
  gsap.set(slides, { opacity: 0, y: 30 })

  // Create timeline for staggered animations
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: headingRef.value,
      start: 'top 80%', // Start when 20% of heading is in view
      end: 'bottom 20%',
      toggleActions: 'play none none none', // Play once, no reverse
    }
  })

  // Animate heading first
  tl.to(headingRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out'
  })

  // Stagger animate slides
  tl.to(slides, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: 'power2.out'
  }, '-=0.4') // Start slides animation before heading finishes

  // Create scroll trigger for swiper autoplay
  ScrollTrigger.create({
    trigger: highlightsSwiperEl.value,
    start: 'top 50%', // When 50% of swiper is in view
    end: 'bottom 50%',
    onEnter: () => {
      if (highlightsSwiper && !highlightsSwiper.autoplay.running) {
        highlightsSwiper.autoplay.start()
        highlightsSwiperProps.isAutoplayRunning = true
      }
    },
    onLeave: () => {
      if (highlightsSwiper && highlightsSwiper.autoplay.running) {
        highlightsSwiper.autoplay.stop()
        highlightsSwiperProps.isAutoplayRunning = false
      }
    },
    onEnterBack: () => {
      if (highlightsSwiper && !highlightsSwiper.autoplay.running) {
        highlightsSwiper.autoplay.start()
        highlightsSwiperProps.isAutoplayRunning = true
      }
    },
    onLeaveBack: () => {
      if (highlightsSwiper && highlightsSwiper.autoplay.running) {
        highlightsSwiper.autoplay.stop()
        highlightsSwiperProps.isAutoplayRunning = false
      }
    }
  })
}

onMounted(async () => {
  initHighlightsSwiper()
  initAnimations()
})

// Expose swiper state and functions for parent components
defineExpose({
  highlightsSwiperProps,
  toggleSliderAutoplay,
  updatePaginationElement
})
</script>