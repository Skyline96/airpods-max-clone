<template>
  <section class="gallery relative pb-24 sm:pb-40 overflow-x-clip">
    <div class="w-[87.5%] max-w-[1680px] mx-auto">
      <h2 ref="heading"
        class="text-[28px] sm:text-[56px] tracking-tight sm:leading-none sm:tracking-tighter font-semibold pb-12 sm:pb-20">
        Take a closer look.</h2>
    </div>
    <!-- ARIA live region for announcing color changes -->
    <div class="sr-only" aria-live="polite">AirPods Max color: {{ colorVariant }}</div>
    <!-- Keyboard navigation instruction for screen readers -->
    <div class="sr-only">Use left/right arrow keys to navigate color gallery</div>
    <div ref="colorsSwiper"
      class="colors_swiper px-[max(6.25vw,(100vw-1680px)/2,env(safe-area-inset-left),env(safe-area-inset-right))]">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide relative overflow-hidden w-[min(max(87.5vw,280px),1680px)] min-h-[480px] sm:min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
          <div class="absolute inset-0 h-full w-full">
            <!-- ARIA live region for announcing color changes -->
            <div class="sr-only" aria-live="polite">AirPods Max color: {{ colorVariant }}</div>
            <!-- Keyboard navigation instruction for screen readers -->
            <div class="sr-only">Use left/right arrow keys to navigate color gallery</div>
            <template v-for="variant in COLOR_VARIANTS" :key="variant">
              <picture :class="[
                'absolute inset-0 h-full w-full transition-[opacity,_visibility] will-change-[opacity,_visibility] duration-[600ms] ease-out opacity-0',
                colorVariant === variant ? 'opacity-100 visible pointer-events-auto' : 'invisible pointer-events-none'
              ]" :aria-hidden="colorVariant !== variant" :role="colorVariant === variant ? 'img' : null" :aria-label="colorVariant === variant ? `AirPods Max in ${variant} color` : null" :tabindex="colorVariant !== variant ? -1 : null">
                <source media="(max-width: 480px)" :srcset="`/images/colors/bento_1_airpod_max_${variant}_xsmall.jpg 2x`">
                <img :src="`/images/colors/bento_1_airpod_max_${variant}_xlarge.jpg`" :alt="`AirPods Max in ${variant} color`" class="h-full object-cover">
              </picture>
            </template>
          </div>
        </div>
        <div class="swiper-slide w-[min(max(87.5vw,280px),1680px)] min-h-[480px] sm:min-h-[740px]">
          <div class="absolute inset-0 grid sm:grid-cols-2 gap-[20px] h-full">
            <!-- Left image: bento_2 -->
            <div class="relative h-full rounded-[28px] bg-[rgb(232,232,237)] overflow-clip">
              <template v-for="variant in COLOR_VARIANTS" :key="variant">
                <picture :class="[
                  'absolute inset-0 h-full w-full transition-[opacity,_visibility] will-change-[opacity,_visibility] duration-[600ms] ease-out opacity-0',
                  colorVariant === variant ? 'opacity-100 visible pointer-events-auto' : 'invisible pointer-events-none'
                ]" :aria-hidden="colorVariant !== variant" :role="colorVariant === variant ? 'img' : null" :aria-label="colorVariant === variant ? `AirPods Max in ${variant} color` : null" :tabindex="colorVariant !== variant ? -1 : null">
                  <source media="(max-width: 480px)" :srcset="`${baseUrl}images/colors/bento_2_airpod_max_${variant}_xsmall.jpg 2x`">
                  <img :src="`${baseUrl}images/colors/bento_2_airpod_max_${variant}_xlarge.jpg`" :alt="`AirPods Max in ${variant} color`" class="h-full object-cover">
                </picture>
              </template>
            </div>
            <!-- Right image: bento_3 -->
            <div class="relative h-full rounded-[28px] bg-[rgb(232,232,237)] overflow-clip">
              <template v-for="variant in COLOR_VARIANTS" :key="variant">
                <picture :class="[
                  'absolute inset-0 h-full w-full transition-[opacity,_visibility] will-change-[opacity,_visibility] duration-[600ms] ease-out opacity-0',
                  colorVariant === variant ? 'opacity-100 visible pointer-events-auto' : 'invisible pointer-events-none'
                ]" :aria-hidden="colorVariant !== variant" :role="colorVariant === variant ? 'img' : null" :aria-label="colorVariant === variant ? `AirPods Max in ${variant} color` : null" :tabindex="colorVariant !== variant ? -1 : null">
                  <source media="(max-width: 480px)" :srcset="`${baseUrl}images/colors/bento_3_airpod_max_${variant}_xsmall.jpg 2x`">
                  <img :src="`${baseUrl}images/colors/bento_3_airpod_max_${variant}_xlarge.jpg`" :alt="`AirPods Max in ${variant} color`" class="h-full object-cover">
                </picture>
              </template>
            </div>
          </div>
        </div>
        <div class="swiper-slide w-[min(max(87.5vw,280px),1680px)] min-h-[480px] sm:min-h-[740px]">
          <div class="absolute inset-0 grid sm:grid-cols-2 gap-[20px] h-full">
            <!-- Left image: bento_4 -->
            <div class="relative h-full rounded-[28px] bg-[rgb(232,232,237)] overflow-clip">
              <template v-for="variant in COLOR_VARIANTS" :key="variant">
                <picture :class="[
                  'absolute inset-0 h-full w-full transition-[opacity,_visibility] will-change-[opacity,_visibility] duration-[600ms] ease-out opacity-0',
                  colorVariant === variant ? 'opacity-100 visible pointer-events-auto' : 'invisible pointer-events-none'
                ]" :aria-hidden="colorVariant !== variant" :role="colorVariant === variant ? 'img' : null" :aria-label="colorVariant === variant ? `AirPods Max in ${variant} color` : null" :tabindex="colorVariant !== variant ? -1 : null">
                  <source media="(max-width: 480px)" :srcset="`${baseUrl}images/colors/bento_4_airpod_max_${variant}_xsmall.jpg 2x`">
                  <img :src="`${baseUrl}images/colors/bento_4_airpod_max_${variant}_xlarge.jpg`" :alt="`AirPods Max in ${variant} color`" class="h-full object-cover">
                </picture>
              </template>
            </div>
            <!-- Right image: bento_5 -->
            <div class="relative h-full rounded-[28px] bg-[rgb(232,232,237)] overflow-clip">
              <template v-for="variant in COLOR_VARIANTS" :key="variant">
                <picture :class="[
                  'absolute inset-0 h-full w-full transition-[opacity,_visibility] will-change-[opacity,_visibility] duration-[600ms] ease-out opacity-0',
                  colorVariant === variant ? 'opacity-100 visible pointer-events-auto' : 'invisible pointer-events-none'
                ]" :aria-hidden="colorVariant !== variant" :role="colorVariant === variant ? 'img' : null" :aria-label="colorVariant === variant ? `AirPods Max in ${variant} color` : null" :tabindex="colorVariant !== variant ? -1 : null">
                  <source media="(max-width: 480px)" :srcset="`${baseUrl}images/colors/bento_5_airpod_max_${variant}_xsmall.jpg 2x`">
                  <img :src="`${baseUrl}images/colors/bento_5_airpod_max_${variant}_xlarge.jpg`" :alt="`AirPods Max in ${variant} color`" class="h-full object-cover">
                </picture>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="colors_swiper__navigation hidden sm:flex justify-end gap-4 pt-12">
        <div class="w-9 h-9">
          <button
            class="prev w-full h-full rounded-[100vmax] bg-[rgba(210,210,215,0.64)] text-black/50 disabled:opacity-50">
            <svg class="icon-control icon-control-chevronleft w-full h-full fill-current"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path
                d="m20 25c-.3838 0-.7676-.1465-1.0605-.4395l-5.5-5.5c-.5859-.5854-.5859-1.5356 0-2.1211l5.5-5.5c.5859-.5859 1.5352-.5859 2.1211 0 .5859.5854.5859 1.5356 0 2.1211l-4.4395 4.4395 4.4395 4.4395c.5859.5854.5859 1.5356 0 2.1211-.293.293-.6768.4395-1.0605.4395z">
              </path>
            </svg>
          </button>
        </div>
        <div class="w-9 h-9">
          <button
            class="next w-full h-full rounded-[100vmax] bg-[rgba(210,210,215,0.64)] text-black/50 disabled:opacity-50">
            <svg class="icon-control icon-control-chevronright fill-current" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36">
              <path
                d="m22.5597 16.9375-5.5076-5.5c-.5854-.5854-1.5323-.5825-2.1157.0039-.5835.5869-.5815 1.5366.0039 2.1211l4.4438 4.4375-4.4438 4.4375c-.5854.5845-.5874 1.5342-.0039 2.1211.2922.2944.676.4414 1.0598.4414.3818 0 .7637-.1455 1.0559-.4375l5.5076-5.5c.2815-.2812.4403-.6636.4403-1.0625s-.1588-.7812-.4403-1.0625z">
              </path>
            </svg>
          </button>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { onMounted, useTemplateRef, computed } from 'vue'
import { gsap, ScrollTrigger } from 'gsap/all'
import Swiper from 'swiper'
import { Keyboard, Navigation } from 'swiper/modules'
import 'swiper/css'

const baseUrl = import.meta.env.BASE_URL
const COLOR_VARIANTS = ['midnight', 'blue', 'orange', 'purple', 'starlight']

const headingRef = useTemplateRef('heading')
const colorsSwiperEl = useTemplateRef('colorsSwiper')

const props = defineProps({
  colorVariant: {
    type: String,
    default: 'midnight'
  }
})

const emit = defineEmits(['update:colorVariant'])

const colorVariant = computed({
  get: () => props.colorVariant,
  set: (value) => emit('update:colorVariant', value)
})

const colorsSwiperParams = {
  modules: [Keyboard, Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  speed: 1500,
  keyboard: {
    enabled: true
  },
  navigation: {
    prevEl: '.prev',
    nextEl: '.next'
  }
}

const initColorsSwiper = () => {
  new Swiper(colorsSwiperEl.value, colorsSwiperParams)
}

const initAnimations = () => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  // Get all slides dynamically
  const slides = colorsSwiperEl.value.querySelectorAll('.swiper-slide')

  // Get navigation buttons
  const navButtons = document.querySelector('.colors_swiper__navigation')

  // Set initial states - ensure elements start hidden
  gsap.set(headingRef.value, { opacity: 0, y: 30 })
  gsap.set(slides, { opacity: 0, y: 30 })
  gsap.set(navButtons, { opacity: 0, y: 30 })

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

  // Animate navigation buttons with stagger
  tl.to(navButtons, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
  }, '-=0.2') // Start navigation animation before slides finish
}

onMounted(() => {
  initColorsSwiper()
  initAnimations()
})

// Expose color state for parent components
defineExpose({
  colorVariant
})
</script>