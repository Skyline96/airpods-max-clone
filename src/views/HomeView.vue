<script setup>
import { onMounted, reactive, useTemplateRef } from 'vue';
import Swiper from 'swiper';
import { Pagination, Keyboard, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const highlightsSwiperEl = useTemplateRef('highlights_swiper');
const colorsSwiperEl = useTemplateRef('colors_swiper');

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

const highlightsSwiperProps = reactive({
  isAutoplayRunning: true,
  isAutoplayEnded: false
});

const toggleSliderAutoplay = () => {
  if (!highlightsSwiperEl.value.swiper.autoplay.running) {
    if (highlightsSwiperEl.value.swiper.isEnd) {
      highlightsSwiperEl.value.swiper.slideTo(0, 1500, false);
    }
    highlightsSwiperEl.value.swiper.autoplay.start();
    highlightsSwiperProps.isAutoplayRunning = true;
  } else {
    highlightsSwiperEl.value.swiper.autoplay.stop();
    highlightsSwiperProps.isAutoplayRunning = false;
  }
}

const initHighlightsSwiper = () => {
  const highlightsSwiper = new Swiper(highlightsSwiperEl.value, highlightsSwiperParams);

  highlightsSwiper.on('slideChange', () => {
    highlightsSwiperProps.isAutoplayRunning = highlightsSwiper.autoplay.running;

    if (!highlightsSwiper.isEnd) {
      highlightsSwiperProps.isAutoplayEnded = false;
    }
  });

  highlightsSwiper.on('reachEnd', () => {
    if (highlightsSwiper.autoplay.running && highlightsSwiper.isEnd) {
      setTimeout(() => {
        highlightsSwiper.autoplay.stop();
        highlightsSwiperProps.isAutoplayEnded = true;
      }, 3999);
    }
  });
}

const initColorsSwiper = () => {
  const colorsSwiper = new Swiper(colorsSwiperEl.value, colorsSwiperParams);
}

onMounted(() => {
  initHighlightsSwiper();
  initColorsSwiper();
})
</script>

<template>
  <main>
    <section class="hero relative">
      <div class="video_wrapper h-[103vh]">
        <video src="/videos/hero.mp4" loop muted autoplay class="w-full h-full object-cover"></video>
      </div>
      <div class="absolute w-full bottom-0 z-0">
        <div class="absolute w-full h-full top-0 -z-10 bg-white/50 backdrop-blur-[20px] backdrop-saturate-100"
          style="mask-image: linear-gradient(180deg, transparent 25%, black 100%);"></div>
        <div class="w-[87.5%] max-w-[1680px] mx-auto pb-20 z-10">
          <div class="product flex justify-between items-end">
            <div class="product_details">
              <h1 class="product_name text-3xl mt-2 font-semibold">AirPods Max</h1>
              <h2 class="product_desc text-[80px] leading-none tracking-tighter mt-2 font-semibold">Symphonic boom.</h2>
            </div>
            <div
              class="product_price flex items-center gap-5 p-3 ps-6 rounded-[100vmax] bg-[rgba(232,232,232,.5)] backdrop-blur-lg">
              <p class="text-lg leading-tight tracking-wider font-semibold mb-[2px]">₹59900.00*</p>
              <a href="http://" target="_blank" rel="noopener noreferrer"
                class="text-lg leading-tight tracking-tight bg-blue-600 text-white px-5 py-2 rounded-[100vmax]">
                <p class="mb-[2px]">Buy</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="highlights relative py-40 overflow-x-clip">
      <div class="w-[87.5%] max-w-[1680px] mx-auto">
        <h2 class="text-[56px] leading-none tracking-tighter font-semibold pb-20">Get the highlights.</h2>
      </div>
      <div ref="highlights_swiper"
        class="highlights_swiper px-[max(6.25vw,(100vw-1680px)/2,env(safe-area-inset-left),env(safe-area-inset-right))]">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide relative overflow-hidden w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
            <div class="absolute inset-0">
              <img src="/images/colors_static_xlarge.jpg" alt="" class="h-full object-cover">
            </div>
            <div class="absolute inset-0 flex justify-center">
              <p class="max-w-[640px] h-fit text-[28px] font-semibold leading-tight text-center m-12">The ultimate
                over-ear personal
                listening experience — now in fresh new colors.
              </p>
            </div>
          </div>
          <div
            class="swiper-slide relative overflow-hidden w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
            <div class="absolute inset-0">
              <img src="/images/hifi_static_xlarge.jpg" alt="" class="h-full object-cover">
            </div>
            <div class="absolute inset-0 flex items-center">
              <p class="max-w-[430px] h-fit text-[28px] font-semibold leading-tight m-12">
                High-fidelity sound. Exhilarating audio with deep bass, expansive mids, and crisp highs.
              </p>
            </div>
          </div>
          <div
            class="swiper-slide relative overflow-hidden w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
            <div class="absolute inset-0">
              <img src="/images/anc_startframe_xlarge.jpg" alt="" class="h-full object-cover">
            </div>
            <div class="absolute inset-0 flex items-center justify-end">
              <p class="max-w-[455px] h-fit text-[28px] font-semibold leading-tight m-12">
                Pro-level Active Noise Cancellation. Removes unwanted noise so you can immerse yourself in the music.
              </p>
            </div>
          </div>
          <div
            class="swiper-slide relative overflow-hidden w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
            <div class="absolute inset-0">
              <img src="/images/design_static_xlarge.jpg" alt="" class="h-full object-cover">
            </div>
            <div class="absolute inset-0 flex items-center justify-end">
              <p class="max-w-[405px] h-fit text-[28px] font-semibold leading-tight m-12">
                Over-ear design. From canopy to cushion, built for unequaled fit and comfort.
              </p>
            </div>
          </div>
          <div
            class="swiper-slide relative overflow-hidden w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
            <div class="absolute inset-0">
              <img src="/images/usbc_static_xlarge.jpg" alt="" class="h-full object-cover">
            </div>
            <div class="absolute inset-0 flex justify-center">
              <p class="max-w-[640px] h-fit text-[28px] font-semibold leading-tight text-center m-12">
                USB‑C. Charging is fast and easy with the one‑cable convenience of USB‑C.
              </p>
            </div>
          </div>
        </div>
        <div class="swiper__controls sticky bottom-8 mt-8 text-center h-14 z-10">
          <div class="inline-flex h-full">
            <button
              class="relative h-full aspect-square me-4 rounded-[100vmax] bg-[rgba(232,232,237,0.7)] backdrop-blur-lg"
              @click="toggleSliderAutoplay">
              <svg v-show="!highlightsSwiperProps.isAutoplayRunning && !highlightsSwiperProps.isAutoplayEnded"
                id="play-icon" class="absolute inset-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                <path
                  d="m23.7555 36.6237c.4478 0 .8598-.1343 1.4241-.4568l10.9178-6.3322c.8598-.5016 1.3614-1.021 1.3614-1.8361 0-.8061-.5016-1.3255-1.3614-1.8271l-10.9178-6.3322c-.5643-.3314-.9762-.4657-1.4241-.4657-.9315 0-1.7555.7165-1.7555 1.9435v13.3629c0 1.227.824 1.9435 1.7555 1.9435z">
                </path>
              </svg>
              <svg v-show="highlightsSwiperProps.isAutoplayRunning && !highlightsSwiperProps.isAutoplayEnded"
                id="pause-icon" class="absolute inset-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                <path
                  d="m21.7334 36.67h2.5342c1.1483 0 1.7324-.5796 1.7324-1.7193v-13.9015c0-1.12-.5841-1.6898-1.7324-1.7193h-2.5342c-1.1483 0-1.7324.5698-1.7324 1.7193v13.9015c-.0297 1.1396.5544 1.7193 1.7324 1.7193zm9.9992 0h2.5347c1.1485 0 1.7327-.5796 1.7327-1.7193v-13.9015c0-1.12-.5842-1.7193-1.7327-1.7193h-2.5347c-1.1485 0-1.7327.5698-1.7327 1.7193v13.9015c0 1.1396.5545 1.7193 1.7327 1.7193z">
                </path>
              </svg>
              <svg v-show="highlightsSwiperProps.isAutoplayEnded" id="replay-icon" class="absolute inset-0"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                <path
                  d="m36.2448 26.6447c-1.1073 0-2.0052.8978-2.0052 2.0052 0 3.4405-2.7992 6.2397-6.2397 6.2397s-6.2397-2.7992-6.2397-6.2397 2.7992-6.2397 6.2397-6.2397c.0283 0 .0546-.0072.0825-.0083l-1.2839 1.2841c-.7833.7828-.7833 2.0526 0 2.8354.3911.3916.9047.5874 1.4177.5874s1.0266-.1958 1.4177-.5874l4.4406-4.4406c.7833-.7828.7833-2.0526 0-2.8354l-4.657-4.657c-.7823-.7833-2.0531-.7833-2.8354 0-.7833.7828-.7833 2.0526 0 2.8354l.9973.9974c-5.4561.223-9.8295 4.7189-9.8295 10.2287 0 5.6517 4.5983 10.25 10.25 10.25s10.25-4.5983 10.25-10.25c0-1.1073-.8978-2.0052-2.0052-2.0052z">
                </path>
              </svg>
            </button>
            <div
              class="highlights_swiper__pagination h-full rounded-[100vmax] bg-[rgba(232,232,237,0.7)] backdrop-blur-lg flex items-center px-4">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="gallery relative pb-40 overflow-x-clip">
      <div class="w-[87.5%] max-w-[1680px] mx-auto">
        <h2 class="text-[56px] leading-none tracking-tighter font-semibold pb-20">Take a closer look.</h2>
      </div>
      <div ref="colors_swiper"
        class="colors_swiper px-[max(6.25vw,(100vw-1680px)/2,env(safe-area-inset-left),env(safe-area-inset-right))]">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide relative overflow-hidden w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
            <div class="absolute inset-0">
              <img src="/images/colors/bento_1_airpod_max_midnight_xlarge.jpg" alt="" class="h-full object-cover">
            </div>
          </div>
          <div class="swiper-slide w-[min(max(87.5vw,280px),1680px)] min-h-[740px]">
            <div class="absolute inset-0 grid grid-cols-2 gap-[20px]">
              <div class="relative h-full rounded-[28px] bg-[rgb(232,232,237)] overflow-clip">
                <img src="/images/colors/bento_2_airpod_max_midnight_xlarge.jpg" alt="" class="min-h-full object-cover">
              </div>
              <div class="relative h-full rounded-[28px] bg-[rgb(232,232,237)] overflow-clip">
                <img src="/images/colors/bento_3_airpod_max_midnight_xlarge.jpg" alt="" class="min-h-full object-cover">
              </div>
            </div>
          </div>
          <div class="swiper-slide w-[min(max(87.5vw,280px),1680px)] min-h-[740px]">
            <div class="absolute inset-0 grid grid-cols-2 gap-[20px]">
              <div class="relative h-full rounded-[28px] bg-[rgb(232,232,237)] overflow-clip">
                <img src="/images/colors/bento_4_airpod_max_midnight_xlarge.jpg" alt="" class="min-h-full object-cover">
              </div>
              <div class="relative h-full rounded-[28px] bg-[rgb(232,232,237)] overflow-clip">
                <img src="/images/colors/bento_5_airpod_max_midnight_xlarge.jpg" alt="" class="min-h-full object-cover">
              </div>
            </div>
          </div>
        </div>
        <div class="colors_swiper__navigation flex justify-end gap-4 pt-12">
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
  </main>
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