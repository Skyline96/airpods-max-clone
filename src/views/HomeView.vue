<script setup>
import HeroSection from '@/components/HeroSection.vue';
import HighlightsSection from '@/components/HighlightsSection.vue';
import ColorGallery from '@/components/ColorGallery.vue';
import HifiSection from '@/components/HifiSection.vue';
import ProductStoriesSection from '@/components/ProductStoriesSection.vue';
import ProductDesignSection from '@/components/ProductDesignSection.vue';
import BatteryDetailsSection from '@/components/BatteryDetailsSection.vue';
import WhyAppleSection from '@/components/WhyAppleSection.vue';
</script>

<template>
  <HeroSection />
  <HighlightsSection />
  <ColorGallery />
  <HifiSection />
  <ProductStoriesSection />
  <ProductDesignSection />
  <BatteryDetailsSection />
  <WhyAppleSection />
</template>
<style>
.highlights_swiper__pagination {
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