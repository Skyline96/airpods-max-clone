<script setup>
import { onMounted } from 'vue';
import Swiper from 'swiper';
import { Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

onMounted(() => {
  const slider = new Swiper('.slider', {
    modules: [Pagination, Keyboard],
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    speed: 500,
    keyboard: {
      enabled: true
    },
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    }
  });
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
    <!-- <section class="highlights pt-40 pb-52">
      <div class="w-[87.5%] max-w-[1680px] mx-auto">
        <h2 class="text-[56px] leading-none tracking-tighter font-semibold pb-20">Get the highlights.</h2>
      </div>
      <div class="relative highlights_slider">
        <div
          class="relative overflow-x-visible overflow-y-hidden snap-x snap-mandatory px-[max(6.25vw,(100vw-1680px)/2,env(safe-area-inset-left),env(safe-area-inset-right))]"
          style="scrollbar-width: none;">
          <ul class="w-fit list-none grid grid-flow-col auto-cols-[1fr] gap-5">
            <li
              class="w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-slate-200 snap-center flex justify-center items-center rounded-[28px]">
              1</li>
            <li
              class="w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-slate-200 snap-center flex justify-center items-center rounded-[28px]">
              2</li>
            <li
              class="w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-slate-200 snap-center flex justify-center items-center rounded-[28px]">
              3</li>
            <li
              class="w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-slate-200 snap-center flex justify-center items-center rounded-[28px]">
              4</li>
            <li
              class="w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-slate-200 snap-center flex justify-center items-center rounded-[28px]">
              5</li>
          </ul>
        </div>
        <div class="relative">
          <div class="flex justify-center h-14">
            <div class="h-full aspect-square me-4 rounded-[100vmax] bg-[rgba(232,232,232,.5)] backdrop-blur-lg"></div>
            <div class="h-full rounded-[100vmax] bg-[rgba(232,232,232,.5)] backdrop-blur-lg flex items-center px-4">
              <div class="h-2 flex">
                <button
                  class="relative h-full w-2 hover:w-12 transition-[width] mx-2 after:content-[''] after:absolute after:inset-0 after:bg-neutral-600 after:rounded-[100vmax]"></button>
                <button
                  class="relative h-full w-2 hover:w-12 transition-[width] mx-2 after:content-[''] after:absolute after:inset-0 after:bg-neutral-600 after:rounded-[100vmax]"></button>
                <button
                  class="relative h-full w-2 hover:w-12 transition-[width] mx-2 after:content-[''] after:absolute after:inset-0 after:bg-neutral-600 after:rounded-[100vmax]"></button>
                <button
                  class="relative h-full w-2 hover:w-12 transition-[width] mx-2 after:content-[''] after:absolute after:inset-0 after:bg-neutral-600 after:rounded-[100vmax]"></button>
                <button
                  class="relative h-full w-2 hover:w-12 transition-[width] mx-2 after:content-[''] after:absolute after:inset-0 after:bg-neutral-600 after:rounded-[100vmax]"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section class="highlights relative pt-40 pb-52 overflow-x-clip">
      <div class="w-[87.5%] max-w-[1680px] mx-auto">
        <h2 class="text-[56px] leading-none tracking-tighter font-semibold pb-20">Get the highlights.</h2>
      </div>
      <div
        class="slider px-[max(6.25vw,(100vw-1680px)/2,env(safe-area-inset-left),env(safe-area-inset-right))] snap-x snap-mandatory">
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
            class="swiper-slide relative overflow-hidden w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px] snap-center">
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
            class="swiper-slide relative overflow-hidden w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px] snap-center">
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
            class="swiper-slide relative overflow-hidden w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px] snap-center">
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
            class="swiper-slide relative overflow-hidden w-[min(max(87.5vw,280px),1680px)] min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px] snap-center">
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
        <div class="slider__controls sticky bottom-8 my-8 text-center h-14 z-10">
          <div class="inline-flex h-full">
            <div
              class="relative h-full aspect-square me-4 rounded-[100vmax] bg-[rgba(232,232,237,0.7)] backdrop-blur-lg">
            </div>
            <div
              class="slider__pagination h-full rounded-[100vmax] bg-[rgba(232,232,237,0.7)] backdrop-blur-lg flex items-center px-4">
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style>
.slider__pagination {
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