<template>
  <section class="gallery relative pb-24 sm:pb-40 overflow-x-clip">
    <div class="w-[87.5%] max-w-[1680px] mx-auto">
      <h2
        class="text-[28px] sm:text-[56px] tracking-tight sm:leading-none sm:tracking-tighter font-semibold pb-12 sm:pb-20">
        Take a closer look.</h2>
    </div>
    <div ref="colors_swiper"
      class="colors_swiper px-[max(6.25vw,(100vw-1680px)/2,env(safe-area-inset-left),env(safe-area-inset-right))]">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide relative overflow-hidden w-[min(max(87.5vw,280px),1680px)] min-h-[480px] sm:min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
          <div class="absolute inset-0">
            <picture>
              <source media="(max-width: 480px)"
                :srcset="`${baseUrl}images/colors/bento_1_airpod_max_${colorVariant}_xsmall.jpg 2x`">
              <img :src="`${baseUrl}images/colors/bento_1_airpod_max_${colorVariant}_xlarge.jpg`" alt=""
                class="h-full object-cover">
            </picture>
          </div>
        </div>
        <div class="swiper-slide w-[min(max(87.5vw,280px),1680px)] min-h-[480px] sm:min-h-[740px]">
          <div class="absolute inset-0 grid sm:grid-cols-2 gap-[20px]">
            <div class="relative h-full rounded-[28px] bg-[rgb(232,232,237)] overflow-clip">
              <picture>
                <source media="(max-width: 480px)"
                  :srcset="`${baseUrl}images/colors/bento_2_airpod_max_${colorVariant}_xsmall.jpg 2x`">
                <img :src="`${baseUrl}images/colors/bento_2_airpod_max_${colorVariant}_xlarge.jpg`" alt=""
                  class="h-full object-cover">
              </picture>
            </div>
            <div class="relative h-full rounded-[28px] bg-[rgb(232,232,237)] overflow-clip">
              <picture>
                <source media="(max-width: 480px)"
                  :srcset="`${baseUrl}images/colors/bento_3_airpod_max_${colorVariant}_xsmall.jpg 2x`">
                <img :src="`${baseUrl}images/colors/bento_3_airpod_max_${colorVariant}_xlarge.jpg`" alt=""
                  class="h-full object-cover">
              </picture>
            </div>
          </div>
        </div>
        <div class="swiper-slide w-[min(max(87.5vw,280px),1680px)] min-h-[480px] sm:min-h-[740px]">
          <div class="absolute inset-0 grid sm:grid-cols-2 gap-[20px]">
            <div class="relative h-full rounded-[28px] bg-[rgb(232,232,237)] overflow-clip">
              <picture>
                <source media="(max-width: 480px)"
                  :srcset="`${baseUrl}images/colors/bento_4_airpod_max_${colorVariant}_xsmall.jpg 2x`">
                <img :src="`${baseUrl}images/colors/bento_4_airpod_max_${colorVariant}_xlarge.jpg`" alt=""
                  class="h-full object-cover">
              </picture>
            </div>
            <div class="relative h-full rounded-[28px] bg-[rgb(232,232,237)] overflow-clip">
              <picture>
                <source media="(max-width: 480px)"
                  :srcset="`${baseUrl}images/colors/bento_5_airpod_max_${colorVariant}_xsmall.jpg 2x`">
                <img :src="`${baseUrl}images/colors/bento_5_airpod_max_${colorVariant}_xlarge.jpg`" alt=""
                  class="h-full object-cover">
              </picture>
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
import Swiper from 'swiper'
import { Keyboard, Navigation } from 'swiper/modules'
import 'swiper/css'


const baseUrl = import.meta.env.BASE_URL
const colorsSwiperEl = useTemplateRef('colors_swiper')
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

onMounted(() => {
  initColorsSwiper()
})

// Expose color state for parent components
defineExpose({
  colorVariant
})
</script> 