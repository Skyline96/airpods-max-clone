<script setup>
import { ref, onMounted, reactive, watch, defineAsyncComponent } from 'vue';
import { gsap, ScrollTrigger } from 'gsap/all';
import HeroSection from '@/components/sections/HeroSection.vue';
import HighlightsSection from '@/components/sections/HighlightsSection.vue';
import ColorGallery from '@/components/sections/ColorGallery.vue';

// Lazy load sections that are not immediately visible
const HifiSoundSection = defineAsyncComponent(() => import('@/components/sections/HifiSoundSection.vue'));
const ProductStoriesSection = defineAsyncComponent(() => import('@/components/sections/ProductStoriesSection.vue'));
const ProductDesignSection = defineAsyncComponent(() => import('@/components/sections/ProductDesignSection.vue'));
const BatteryDetailsSection = defineAsyncComponent(() => import('@/components/sections/BatteryDetailsSection.vue'));
const WhyAppleSection = defineAsyncComponent(() => import('@/components/sections/WhyAppleSection.vue'));

import HighlightsControls from '@/components/controls/HighlightsControls.vue';
import ColorGalleryControls from '@/components/controls/ColorGalleryControls.vue';
import HifiSoundControls from '@/components/controls/HifiSoundControls.vue';
import ProductDesignControls from '@/components/controls/ProductDesignControls.vue';

// Track visibility of each section
const highlightsVisible = ref(false);
const colorGalleryVisible = ref(false);
const hifiSoundVisible = ref(false);
const productDesignVisible = ref(false);

// Element refs
const highlightsRef = ref(null);
const colorGalleryRef = ref(null);
const hifiRef = ref(null);
const productDesignRef = ref(null);

// Swiper state
const highlightsSwiperRef = ref(null);
const swiperState = reactive({
  isAutoplayRunning: true,
  isAutoplayEnded: false
});

// Color gallery state
const colorGallerySwiperRef = ref(null);
const colorVariant = ref('midnight');

// Setup GSAP ScrollTrigger
onMounted(async () => {
  try {
    gsap.registerPlugin(ScrollTrigger);

    // Wait a bit for DOM to be ready
    await new Promise(resolve => setTimeout(resolve, 100));

    // Create ScrollTriggers for each section
    if (highlightsRef.value) {
      ScrollTrigger.create({
        trigger: highlightsRef.value,
        start: 'top 20%',
        end: 'bottom 20%',
        onEnter: () => {
          highlightsVisible.value = true;
        },
        onLeave: () => {
          highlightsVisible.value = false;
        },
        onEnterBack: () => {
          highlightsVisible.value = true;
        },
        onLeaveBack: () => {
          highlightsVisible.value = false;
        }
      });
    }

    if (colorGalleryRef.value) {
      ScrollTrigger.create({
        trigger: colorGalleryRef.value,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          colorGalleryVisible.value = true;
        },
        onLeave: () => {
          colorGalleryVisible.value = false;
        },
        onEnterBack: () => {
          colorGalleryVisible.value = true;
        },
        onLeaveBack: () => {
          colorGalleryVisible.value = false;
        }
      });
    }

    if (hifiRef.value) {
      ScrollTrigger.create({
        trigger: hifiRef.value,
        start: 'top 80%',
        end: 'bottom 100%',
        onEnter: () => {
          hifiSoundVisible.value = true;
        },
        onLeave: () => {
          hifiSoundVisible.value = false;
        },
        onEnterBack: () => {
          hifiSoundVisible.value = true;
        },
        onLeaveBack: () => {
          hifiSoundVisible.value = false;
        }
      });
    }

    if (productDesignRef.value) {
      ScrollTrigger.create({
        trigger: productDesignRef.value,
        start: 'top 70%',
        end: 'bottom 100%',
        onEnter: () => {
          productDesignVisible.value = true;
        },
        onLeave: () => {
          productDesignVisible.value = false;
        },
        onEnterBack: () => {
          productDesignVisible.value = true;
        },
        onLeaveBack: () => {
          productDesignVisible.value = false;
        }
      });
    }
  } catch (error) {
    console.error('Error setting up GSAP ScrollTrigger:', error);
  }
});

// Watch for swiper state changes
watch(() => highlightsSwiperRef.value?.highlightsSwiperProps, (newProps) => {
  if (newProps) {
    swiperState.isAutoplayRunning = newProps.isAutoplayRunning;
    swiperState.isAutoplayEnded = newProps.isAutoplayEnded;
  }
}, { deep: true });
</script>

<template>
  <HeroSection />
  <div ref="highlightsRef">
    <HighlightsSection ref="highlightsSwiperRef" />
  </div>
  <div ref="colorGalleryRef">
    <ColorGallery ref="colorGallerySwiperRef" v-model:colorVariant="colorVariant" />
  </div>
  <div ref="hifiRef">
    <HifiSoundSection />
  </div>
  <ProductStoriesSection />
  <div ref="productDesignRef">
    <ProductDesignSection />
  </div>
  <BatteryDetailsSection />
  <WhyAppleSection />
  
  <!-- Show HighlightsControls only when HighlightsSection is visible -->
  <HighlightsControls 
    v-if="highlightsVisible && !colorGalleryVisible && !hifiSoundVisible && !productDesignVisible" 
    :visible="highlightsVisible"
    :isAutoplayRunning="swiperState.isAutoplayRunning"
    :isAutoplayEnded="swiperState.isAutoplayEnded"
    :toggleSliderAutoplay="() => highlightsSwiperRef?.toggleSliderAutoplay()"
    :updatePaginationElement="(element) => highlightsSwiperRef?.updatePaginationElement(element)"
  />
  
  <!-- Show ColorGalleryControls when ColorGallery is visible -->
  <ColorGalleryControls 
    v-if="colorGalleryVisible && !hifiSoundVisible && !productDesignVisible" 
    :visible="colorGalleryVisible"
    :colorVariant="colorVariant"
    @update:colorVariant="colorVariant = $event"
  />
  
  <!-- Show HifiAudioControls when HifiSection is visible -->
  <HifiSoundControls 
    v-if="hifiSoundVisible && !productDesignVisible" 
    :visible="hifiSoundVisible"
  />
  
  <!-- Show ProductDesignControls when ProductDesignSection is visible -->
  <ProductDesignControls 
    v-if="productDesignVisible" 
    :visible="productDesignVisible"
  />
</template>

<style>
.highlights_swiper__pagination,
.swiper-controls__pagination {
  & .swiper-pagination-bullet {
    display: inline-block;
    background: rgba(29, 29, 31, 0.6);
    width: 8px;
    height: 8px;
    margin-inline: 8px !important;
    border-radius: 100vmax;
    transition: width .5s;
    opacity: 1;
  }

  & .swiper-pagination-bullet-active {
    width: 48px;
  }
}
</style>