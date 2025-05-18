<script setup>
import { onMounted, ref, reactive, useTemplateRef, watch, nextTick } from 'vue';
import Swiper from 'swiper';
import { Pagination, Keyboard, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const baseUrl = import.meta.env.BASE_URL;

const highlightsSwiperEl = useTemplateRef('highlights_swiper');
const highlightsSwiperProps = reactive({
  isAutoplayRunning: true,
  isAutoplayEnded: false
});

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

const colorsSwiperEl = useTemplateRef('colors_swiper');
const colorVariant = ref('midnight');

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

const availableColorVariants = [
  { colorName: 'midnight', colorShadeLight: '#2a3139', colorShadeDark: '#22252a' },
  { colorName: 'starlight', colorShadeLight: '#ccbeb1', colorShadeDark: '#e9e1d4' },
  { colorName: 'blue', colorShadeLight: '#91a9b5', colorShadeDark: '#64727d' },
  { colorName: 'purple', colorShadeLight: '#afa6bb', colorShadeDark: '#dad7e0' },
  { colorName: 'orange', colorShadeLight: '#e2a48d', colorShadeDark: '#ffc09d' }
];

const isColorVariantActive = (color) => {
  return colorVariant.value == color;
}

const initColorsSwiper = () => {
  new Swiper(colorsSwiperEl.value, colorsSwiperParams);
}

const isHifiSoundModalOpen = ref(false);
const hifiDetailsTabs = [
  {
    id: 'microphones',
    title: 'Microphones',
    description: 'To cancel unwanted external noise, AirPods Max use six outward-facing microphones to detect noise in your environment, and two inward-facing microphones to measure what you’re hearing. Beamforming microphones help isolate your voice on phone calls, so it’s heard clearly — even in windy situations.',
    imgSrc: `${baseUrl}images/hifi-sound/modal/audio_bc_microphone_large.png`
  },
  {
    id: 'driver',
    title: 'Driver',
    description: 'The Apple-designed dynamic driver produces an extended frequency range that uncovers the rich details of every sound — delivering your favorite songs with previously unheard texture and accuracy.',
    imgSrc: `${baseUrl}images/hifi-sound/modal/audio_bc_driver_large.png`
  },
  {
    id: 'playback',
    title: 'Distortionless Playback',
    description: 'Modeled after those in high-end floor-standing speakers, the driver’s dual-neodymium ring magnet motor minimizes total harmonic distortion across the entire audible range. The result is consistently clear playback, even at full volume.',
    imgSrc: `${baseUrl}images/hifi-sound/modal/audio_bc_distortionless_playback_large.png`
  }
];
const hifiDetailsTabRefs = useTemplateRef('hifi_details_tabs');
const activeTabIndex = ref(0); // Default active tab index
const tabHighlightWidth = ref(0);
const tabHighlightLeft = ref(0);

const setTabPosition = () => {
  if (hifiDetailsTabRefs.value) {
    const currentTab = hifiDetailsTabRefs.value[activeTabIndex.value];
    tabHighlightLeft.value = currentTab?.offsetLeft || 0;
    tabHighlightWidth.value = currentTab?.clientWidth || 0;
  }
};

// Watch for changes in the active tab index and update the highlight position
watch([hifiDetailsTabRefs, activeTabIndex], () => {
  nextTick(() => {
    setTabPosition();
  });
});

// Set active tab function
const setActiveTab = (index) => {
  activeTabIndex.value = index;
};

// Check if tab is active
const isTabActive = (index) => {
  return activeTabIndex.value === index;
};


const isProductDesignModalOpen = ref(false)

// Hide body scrollbar if modal is open
const toggleBodyScrollbar = () => {
  isHifiSoundModalOpen.value || isProductDesignModalOpen.value || isWhyAppleSwiperModalOpen.value ?
    document.body.style.overflow = 'hidden' :
    document.body.style.overflow = 'auto';
}

const batteryDetailsSwiperEl = useTemplateRef('battery_details_swiper');

const batteryDetailsSwiperParams = {
  modules: [Keyboard, Navigation],
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: true,
  speed: 500,
  keyboard: {
    enabled: true
  },
  navigation: {
    prevEl: '.prev',
    nextEl: '.next'
  }
}

const initBatteryDetailsSwiper = () => {
  new Swiper(batteryDetailsSwiperEl.value, batteryDetailsSwiperParams);
}

const whyAppleSwiperEl = useTemplateRef('why_apple_swiper');
const whyAppleSwiperActiveSlideId = ref(0);
const whyAppleSwiperActiveSlideIndex = ref(0);
const isWhyAppleSwiperModalOpen = ref(false);

const setWhyAppleSwiperActiveSlide = (id, index) => {
  whyAppleSwiperActiveSlideId.value = id;
  whyAppleSwiperActiveSlideIndex.value = index;
  isWhyAppleSwiperModalOpen.value = true;
};

const whyAppleSwiperParams = {
  modules: [Keyboard, Navigation],
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: true,
  speed: 500,
  keyboard: {
    enabled: true
  },
  navigation: {
    prevEl: '.prev',
    nextEl: '.next'
  }
}

const whyAppleSwiperSlides = [
  {
    id: 1,
    icon: `${baseUrl}images/why-apple/icon_emoji_face_grinning_large.png`,
    title: 'Personalize your AirPods for free.',
    description: 'Engrave your AirPods with your initials or favorite emoji — free. Only at Apple.',
    modalContent: {
      topic: 'Engraving',
      headline: 'Add a message that lasts.',
      summary: 'Choose from new engraving options. It’s the perfect way to personalize your AirPods. Add a special message, name, or birthday. Even combine text and numbers with your favorite emoji.',
      linkText: 'Learn more',
      link: ''
    }
  },
  {
    id: 2,
    icon: `${baseUrl}images/why-apple/icon_truck_box_large.png`,
    title: 'Get flexible delivery and easy&nbsp;pickup.',
    description: 'Choose 2‑hour delivery from an Apple&nbsp;Store, free delivery, or easy pickup&nbsp;options.',
    modalContent: {
      topic: 'Delivery and Pickup',
      headline: 'Flexible delivery and pickup options.',
      summary: 'Get your new Apple products quickly and easily with 2‑hour delivery from an Apple Store, free next‑day delivery, or convenient Apple pickup options.',
      linkText: 'Learn more',
      link: ''
    }
  },
  {
    id: 3,
    icon: `${baseUrl}images/why-apple/icon_applecard_large.png`,
    title: 'Pay over time, interest‑free.',
    description: 'When you choose to check out with Apple&nbsp;Card Monthly Installments.',
    modalContent: {
      topic: 'Ways to Buy',
      headline: 'Apple Card Monthly Installments',
      summary: 'Pay for your new AirPods over time, interest‑free with Apple Card.† Simply choose to check out with Apple Card Monthly Installments as your payment option when you make your purchase. And enjoy 3% Daily Cash back, all up front. Terms apply.',
      linkText: 'Learn more',
      link: ''
    }
  },
  {
    id: 4,
    icon: `${baseUrl}images/why-apple/icon_message_and_message_large.png`,
    title: 'Shop live with a&nbsp;Specialist.',
    description: 'Let us guide you live over video and answer all of your questions.',
    modalContent: {
      topic: 'Guided Video Shopping',
      headline: 'Shop live with a Specialist.',
      summary: 'We can help you choose the product you need while guiding you through the online Apple Store. You won’t appear on camera. Available 7 a.m.–7 p.m. PT.',
      linkText: 'Shop together with a Specialist',
      link: ''
    }
  },
  {
    id: 5,
    icon: `${baseUrl}images/why-apple/icon_app_applestore_large.png`,
    title: 'Explore a shopping experience designed around you.',
    description: 'Use the Apple Store app to get a more personal way to shop.',
    modalContent: {
      topic: 'Apple Store App',
      headline: 'Shop in the Apple Store app, tailored specifically for you.',
      summary: 'Get personalized product recommendations, compare models, access your Saved Items, and track your orders. Plus, opt in today to get updates on new products, promotions, flexible payment options, and store events.',
      extra: 'Scan the QR code to get started.',
      extraImage: `${baseUrl}images/why-apple/boc_qr_code_large.jpg`,
      linkText: '',
      link: ''
    }
  },
];


const initWhyAppleSwiper = () => {
  new Swiper(whyAppleSwiperEl.value, whyAppleSwiperParams);
}

onMounted(() => {
  initHighlightsSwiper();
  initColorsSwiper();
  initBatteryDetailsSwiper();
  initWhyAppleSwiper();
})
</script>

<template>
  <section class="hero relative">
    <div class="video_wrapper h-screen sm:h-[103vh]">
      <video loop muted autoplay class="w-full h-full object-cover">
        <source src="/videos/xsmall_2x.mp4" media="(max-width: 480px)">
        <source src="/videos/hero.mp4" media="(min-width: 1441px)">
      </video>
    </div>
    <div class="absolute w-full bottom-0 z-0">
      <div
        class="absolute w-full h-full top-0 -z-10 bg-white/50 backdrop-blur-[20px] backdrop-saturate-100 [mask-image:linear-gradient(180deg,transparent,black_50%)] xl:[mask-image:linear-gradient(180deg,transparent_25%,black_100%)]">
      </div>
      <div class="w-[87.5%] max-w-[1680px] mx-auto pt-[50px] xl:pt-0 pb-3 xl:pb-20 z-10">
        <div
          class="product flex flex-col xl:flex-row gap-14 xl:gap-0 items-center xl:justify-between xl:items-end text-center xl:text-left">
          <div class="product_details">
            <h1 class="product_name text-2xl xl:text-3xl mt-2 font-semibold">AirPods Max</h1>
            <h2
              class="product_desc text-[40px] xl:text-[80px] leading-none tracking-tight xl:tracking-tighter mt-2 font-semibold">
              Symphonic boom.</h2>
          </div>
          <div
            class="product_price sm:text-lg w-full xl:w-auto flex justify-between items-center gap-5 p-3 ps-6 rounded-[100vmax] bg-[rgba(232,232,232,.5)] backdrop-blur-lg">
            <p class="leading-tight tracking-wider font-semibold mb-[2px]">₹59900.00*</p>
            <a href="http://" target="_blank" rel="noopener noreferrer"
              class="leading-tight sm:tracking-tight bg-blue-600 text-white px-5 py-2 rounded-[100vmax]">
              <p class="mb-[2px]">Buy</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="highlights relative py-24 sm:py-40 overflow-x-clip">
    <div class="w-[87.5%] max-w-[1680px] mx-auto">
      <h2
        class="text-[28px] sm:text-[56px] tracking-tight sm:leading-none sm:tracking-tighter font-semibold pb-12 sm:pb-20">
        Get the highlights.</h2>
    </div>
    <div ref="highlights_swiper"
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
      <div class="swiper__controls sticky bottom-8 mt-12 sm:mt-8 text-center h-14 z-10">
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
    <div class="sticky bottom-8 inset-x-0 max-w-max mx-auto mt-8 text-center h-14 z-10">
      <div class="h-full bg-[rgba(232,232,237,0.7)] backdrop-blur-lg rounded-[100vmax] overflow-hidden">
        <ul class="list-none color_swatches h-full inline-flex items-center mx-2">
          <li v-for="color in availableColorVariants" class="w-7 h-7 mx-2">
            <input type="radio" name="color_swatch" v-model="colorVariant" :value="color.colorName"
              class="appearance-none relative h-full w-full rounded-[100vmax] focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black/60 after:content-[''] after:absolute after:-inset-[1px] after:rounded-[inherit] after:bg-gradient-to-b after:from-black/60 after:to-55% after:-z-10"
              :class="isColorVariantActive(color.colorName) ? 'outline outline-2 outline-offset-4 outline-black/60' : ''"
              :style="`background:linear-gradient(0deg, ${color.colorShadeLight} 50%, ${color.colorShadeDark} 0);`" />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="hifi_sound relative pb-8">
    <div class="hifi_sound_bg absolute inset-0 -z-10">
      <picture>
        <source media="(max-width: 480px)" srcset="/images/hifi-sound/audio_airpod_max_xsmall_2x.jpg 2x">
        <img src="/images/hifi-sound/audio_airpod_max_large.jpg" alt="" class="min-h-full object-cover">
      </picture>
    </div>
    <div
      class="flex flex-col justify-between items-center w-[87.5%] max-w-[1680px] sm:min-h-[2280px] mx-auto text-white">
      <div class="mt-24 sm:mt-40 mb-10 text-center">
        <h2
          class="text-[40px] sm:text-[110px] leading-tight sm:leading-[1.15] sm:tracking-[-3px] text-balance font-semibold">
          All the vivid details.</h2>
        <p
          class="text-[21px] sm:text-[28px] leading-tight sm:leading-[1.15] text-balance font-semibold mt-[30px] sm:mt-10">
          AirPods Max deliver stunningly
          detailed, high-fidelity audio for an unparalleled listening experience. Each
          part of the custom-built driver works to produce sound with ultra-low distortion across the audible range —
          so you’ll hear every note with a new sense of clarity.</p>
      </div>
      <div class="grid sm:grid-cols-2 gap-8 sm:gap-24 mt-[450px] sm:mt-0">
        <div class="">
          <div class="h-11 sm:h-[60px] mb-3 sm:mb-[18px]">
            <svg class="hifi_sound_detail_icon_spatial_audio max-h-full fill-current" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24.44 26.77">
              <path class="cls-1"
                d="M17.2,1.38a.37.37,0,0,0-.14.5h0A1,1,0,0,1,17,3.12,3,3,0,0,1,15.68,4a10.21,10.21,0,0,1-3.46.56A10.11,10.11,0,0,1,8.77,4a3,3,0,0,1-1.32-.84,1,1,0,0,1-.08-1.23h0a.36.36,0,0,0-.06-.44.37.37,0,0,0-.52,0A1.87,1.87,0,0,0,6.25,2.5a2.11,2.11,0,0,0,.28,1.24A4.09,4.09,0,0,0,8.22,5.17a9.23,9.23,0,0,0,4,.85,9.2,9.2,0,0,0,4-.85,4.17,4.17,0,0,0,1.69-1.43,2,2,0,0,0,.27-1.24,1.8,1.8,0,0,0-.54-1.06.35.35,0,0,0-.44-.06ZM15.2,0a.31.31,0,0,0-.15.41v0a.48.48,0,0,1-.08.62,2.15,2.15,0,0,1-.75.43,6.35,6.35,0,0,1-2,.3,6.09,6.09,0,0,1-2-.31,1.77,1.77,0,0,1-.74-.43A.47.47,0,0,1,9.38.46v0A.31.31,0,0,0,9.34.1a.32.32,0,0,0-.44,0,1.16,1.16,0,0,0-.37.69,1.37,1.37,0,0,0,.17.82,2.52,2.52,0,0,0,1.06.93,5.5,5.5,0,0,0,2.46.54,5.5,5.5,0,0,0,2.46-.54,2.46,2.46,0,0,0,1.06-.93,1.45,1.45,0,0,0,.17-.82,1.16,1.16,0,0,0-.37-.69.3.3,0,0,0-.34,0Zm7.86,17.22a.35.35,0,0,0-.5-.13h0A1,1,0,0,1,21.32,17a3,3,0,0,1-.84-1.31,10.21,10.21,0,0,1-.56-3.46,10.19,10.19,0,0,1,.56-3.45,3,3,0,0,1,.84-1.32,1,1,0,0,1,1.23-.07h0A.36.36,0,0,0,23,7.37a.36.36,0,0,0,0-.52,1.8,1.8,0,0,0-1.06-.54,2,2,0,0,0-1.24.27,4.13,4.13,0,0,0-1.43,1.7,9.16,9.16,0,0,0-.85,4,9.2,9.2,0,0,0,.85,4A4.17,4.17,0,0,0,20.7,18a2.13,2.13,0,0,0,1.24.28A1.87,1.87,0,0,0,23,17.69.35.35,0,0,0,23.06,17.25Zm1.35-2a.3.3,0,0,0-.4-.15l0,0a.47.47,0,0,1-.61-.09,1.75,1.75,0,0,1-.43-.75,6,6,0,0,1-.31-2,6.09,6.09,0,0,1,.31-2,1.77,1.77,0,0,1,.43-.74A.47.47,0,0,1,24,9.43h0a.31.31,0,0,0,.33,0,.31.31,0,0,0,0-.44,1.16,1.16,0,0,0-.69-.37,1.45,1.45,0,0,0-.82.17,2.52,2.52,0,0,0-.93,1.06,5.5,5.5,0,0,0-.54,2.46,5.47,5.47,0,0,0,.54,2.46,2.54,2.54,0,0,0,.93,1.07,1.37,1.37,0,0,0,.82.16,1.16,1.16,0,0,0,.69-.37.3.3,0,0,0,.05-.34ZM1.88,17.12a.35.35,0,0,0-.44.05.36.36,0,0,0,0,.52,1.87,1.87,0,0,0,1.06.55A2.11,2.11,0,0,0,3.74,18a4.17,4.17,0,0,0,1.43-1.69,9.2,9.2,0,0,0,.85-4,9.16,9.16,0,0,0-.85-4,4.13,4.13,0,0,0-1.43-1.7A2,2,0,0,0,2.5,6.31a1.8,1.8,0,0,0-1.06.54.37.37,0,0,0,.44.58h0a1,1,0,0,1,1.23.07A3,3,0,0,1,4,8.82a10.19,10.19,0,0,1,.56,3.45A10.21,10.21,0,0,1,4,15.73,3,3,0,0,1,3.12,17a1,1,0,0,1-1.23.08Zm-1.45-2a.29.29,0,0,0-.33.06.3.3,0,0,0,0,.43A1.16,1.16,0,0,0,.77,16a1.37,1.37,0,0,0,.82-.16,2.54,2.54,0,0,0,.93-1.07,5.47,5.47,0,0,0,.54-2.46,5.5,5.5,0,0,0-.54-2.46,2.52,2.52,0,0,0-.93-1.06,1.45,1.45,0,0,0-.82-.17A1.16,1.16,0,0,0,.08,9a.32.32,0,0,0,0,.34.3.3,0,0,0,.4.15h0a.47.47,0,0,1,.61.09,1.89,1.89,0,0,1,.44.74,6.35,6.35,0,0,1,.3,2,6.27,6.27,0,0,1-.3,2,2,2,0,0,1-.43.75.47.47,0,0,1-.62.08h0Zm15.73-2.83a4.1,4.1,0,0,1-3.94,4.25,4.1,4.1,0,0,1-3.94-4.25A4.1,4.1,0,0,1,12.22,8,4.1,4.1,0,0,1,16.16,12.27Zm-3.94,6C7.13,18.28,4,21.78,4,24.92c0,1.23.78,1.85,2.31,1.85H18.16c1.53,0,2.31-.62,2.31-1.85,0-3.14-3.16-6.64-8.25-6.64Z">
              </path>
            </svg>
          </div>
          <p class="text-[17px] sm:text-[21px] font-semibold leading-tight tracking-tight text-[#808488]"><span
              class="text-white">Personalized
              Spatial Audio</span> with dynamic head tracking gives you a theater‑like experience with
            sound that surrounds you for movies, TV shows, and games. Using built-in gyroscopes and accelerometers,
            AirPods Max and your iPhone, iPad, Mac, or Apple TV track the subtle motion of your head, anchoring sounds
            to your device.</p>
        </div>
        <div class="">
          <div class="h-11 sm:h-[60px] mb-3 sm:mb-[18px]">
            <svg class="hifi_sound_detail_icon_adaptive_eq max-h-full fill-current" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21.1 25.1">
              <path class="cls-1"
                d="M20.55,16.59A.55.55,0,0,1,20,16V9a.55.55,0,0,1,1.1,0v7A.55.55,0,0,1,20.55,16.59ZM17.1,21.67V3.42a.55.55,0,0,0-1.1,0V21.67a.55.55,0,0,0,1.1,0Zm-3.89-3.12v-12A.55.55,0,0,0,12.66,6a.55.55,0,0,0-.55.55v12a.55.55,0,0,0,.55.55A.55.55,0,0,0,13.21,18.55Zm-4.11,6V.55A.55.55,0,0,0,8.55,0,.55.55,0,0,0,8,.55v24a.55.55,0,0,0,.55.55A.55.55,0,0,0,9.1,24.55Zm-4-5v-14a.55.55,0,0,0-1.1,0v14a.55.55,0,1,0,1.1,0Zm-4-4.75V10.3a.55.55,0,0,0-.55-.55A.55.55,0,0,0,0,10.3v4.5a.55.55,0,0,0,.55.55A.55.55,0,0,0,1.1,14.8Z">
              </path>
            </svg>
          </div>
          <p class="text-[17px] sm:text-[21px] font-semibold leading-tight tracking-tight text-[#808488]"><span
              class="text-white">Adaptive
              EQ</span> tailors sound to the bespoke fit and seal created by the ear cushions. Inward-facing
            microphones measure what you’re hearing, then adjust the frequencies of your music to deliver a rich,
            consistent experience that faithfully reproduces every note.</p>
        </div>
      </div>
    </div>
    <!-- <div class="absolute inset-0 flex justify-center items-end">
        <div class="text-center h-14 sticky bottom-8">
          <button @click="{ isHifiSoundModalOpen = !isHifiSoundModalOpen; toggleBodyScrollbar() }"
            class="h-full bg-[rgba(66,66,69,0.7)] text-white backdrop-blur rounded-[100vmax] px-1 overflow-hidden outline-blue-500 focus:outline focus:outline-2">
            <span class="h-full inline-flex items-center gap-4 ms-5 me-2">
              <span class="text-[17px] font-semibold">Learn more about high-fidelity audio</span>
              <span class="relative h-9 w-9 rounded-[100vmax] bg-blue-500">
                <svg class="icon_control_plus fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <path
                    d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z">
                  </path>
                </svg>
              </span>
            </span>
          </button>
          <Teleport to="body">
            <div v-if="isHifiSoundModalOpen" class="fixed inset-0 py-4 px-2 z-50 backdrop-blur-lg overflow-y-scroll">
              <div
                class="relative pt-20 pb-10 rounded-[28px] text-white bg-[linear-gradient(50deg,#94afbd,#597d92_36%,#000_85%)]">
                <div class="modal_content w-[calc(87.5%+20px)] max-w-[1680px] flex flex-col items-center mx-auto">
                  <div :id="`${hifiDetailsTabs[activeTabIndex].id}_panel`"
                    class="w-full min-h-[85vh] grid grid-cols-2 gap-8">
                    <div class="relative">
                      <div class="absolute inset-0 flex justify-center">
                        <img :src="`${hifiDetailsTabs[activeTabIndex].imgSrc}`" alt="" class="max-h-full">
                      </div>
                    </div>
                    <div class="relative">
                      <div class="absolute inset-0 flex flex-col pt-28">
                        <h2 class="modal_header text-[56px] leading-[1.15] tracking-tight font-semibold">
                          High-fidelity details.
                        </h2>
                        <div
                          class="hifi_details_tabs_container w-fit h-11 flex items-center flex-nowrap text-nowrap text-sm text-white p-1 mt-12 mb-16 bg-[rgba(66,66,69,0.7)] backdrop-blur rounded-[100vmax]">
                          <span
                            class="absolute inset-y-1 -z-10 flex overflow-hidden rounded-[100vmax] transition-all duration-300"
                            :style="{ left: `${tabHighlightLeft}px`, width: `${tabHighlightWidth}px` }">
                            <span class="h-full w-full rounded-[inherit] bg-white"></span>
                          </span>
                          <div role="tablist">
                            <button ref="hifi_details_tabs" v-for="(hifiDetailsTab, index) in hifiDetailsTabs"
                              class="h-full px-4 text-nowrap transition-colors focus:outline-none"
                              :class="isTabActive(index) ? 'text-black duration-150 delay-150 ease-in' : 'duration-150 ease-out'"
                              :key="hifiDetailsTab.id" @click="setActiveTab(index)" role="tab"
                              :aria-selected="isTabActive(index)" :aria-controls="`${hifiDetailsTab.id}_panel`">
                              {{ hifiDetailsTab.title }}
                            </button>
                          </div>
                        </div>
                        <p class=" text-[21px] font-semibold leading-[1.15] tracking-tight">
                          {{ hifiDetailsTabs[activeTabIndex].description }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button @click="{ isHifiSoundModalOpen = false; toggleBodyScrollbar() }"
                    class="absolute h-9 w-9 rounded-[100vmax] top-4 right-4 bg-white">
                    <svg class="icon_control_plus rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                      <path
                        d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Teleport>
        </div>
      </div> -->
    <div class="sticky bottom-8 inset-x-0 max-w-max mx-auto my-12 text-center h-14 z-10">
      <button @click="{ isHifiSoundModalOpen = !isHifiSoundModalOpen; toggleBodyScrollbar() }"
        class="h-full bg-[rgba(66,66,69,0.7)] text-white backdrop-blur rounded-[100vmax] px-1 overflow-hidden outline-blue-500 focus:outline focus:outline-2">
        <span class="h-full inline-flex items-center gap-4 ms-5 me-2">
          <span class="text-sm sm:text-[17px] font-semibold">Learn more about high-fidelity audio</span>
          <span class="relative h-9 w-9 rounded-[100vmax] bg-blue-500">
            <svg class="icon_control_plus fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path
                d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z">
              </path>
            </svg>
          </span>
        </span>
      </button>
      <Teleport to="body">
        <div v-if="isHifiSoundModalOpen" class="fixed inset-0 py-4 px-2 z-50 backdrop-blur-lg overflow-y-scroll">
          <div
            class="relative sm:h-full min-h-[calc(100vh-32px)] py-20 rounded-[28px] text-white bg-[linear-gradient(to_bottom,#94afbd,#597d92_36%,#000_100%)] sm:bg-[linear-gradient(50deg,#94afbd,#597d92_36%,#000_100%)]">
            <div class="modal_content w-[calc(87.5%+20px)] max-w-[1680px] h-full mx-auto">
              <h2 class="modal_header sm:hidden text-[40px] leading-[1.15] font-semibold text-center mb-10">
                High-fidelity details.
              </h2>
              <div :id="`${hifiDetailsTabs[activeTabIndex].id}_panel`"
                class="w-[270px] sm:w-full h-full min-h-[354px] mx-auto sm:grid sm:grid-cols-2 gap-8">
                <div class="relative sm:h-0 sm:min-h-full">
                  <div class="flex justify-center max-h-full">
                    <img :src="`${hifiDetailsTabs[activeTabIndex].imgSrc}`" alt="" class="object-contain max-h-full">
                  </div>
                </div>
                <div class="relative">
                  <div class="flex flex-col items-center sm:items-start text-center sm:text-start pt-[15%]">
                    <h2 class="modal_header hidden sm:block text-[56px] leading-[1.15] tracking-tight font-semibold">
                      High-fidelity details.
                    </h2>
                    <div
                      class="hifi_details_tabs_container w-fit h-11 flex items-center flex-nowrap text-nowrap text-sm text-white p-1 mt-0 sm:mt-12 mb-10 sm:mb-16 bg-[#333336] backdrop-blur rounded-[100vmax]">
                      <span
                        class="absolute inset-y-1 -z-10 flex overflow-hidden rounded-[100vmax] transition-all duration-300"
                        :style="{ left: `${tabHighlightLeft}px`, width: `${tabHighlightWidth}px` }">
                        <span class="h-full w-full rounded-[inherit] bg-white"></span>
                      </span>
                      <div role="tablist">
                        <button ref="hifi_details_tabs" v-for="(hifiDetailsTab, index) in hifiDetailsTabs"
                          class="h-full px-3 sm:px-4 text-nowrap transition-colors focus:outline-none"
                          :class="isTabActive(index) ? 'text-black duration-150 delay-150 ease-in' : 'duration-150 ease-out'"
                          :key="hifiDetailsTab.id" @click="setActiveTab(index)" role="tab"
                          :aria-selected="isTabActive(index)" :aria-controls="`${hifiDetailsTab.id}_panel`">
                          {{ hifiDetailsTab.title }}
                        </button>
                      </div>
                    </div>
                    <p class="text-[17px] sm:text-[21px] font-semibold leading-[1.15] tracking-tight">
                      {{ hifiDetailsTabs[activeTabIndex].description }}
                    </p>
                  </div>
                </div>
              </div>
              <button @click="{ isHifiSoundModalOpen = false; toggleBodyScrollbar() }"
                class="absolute h-9 w-9 rounded-[100vmax] top-4 right-4 bg-white">
                <svg class="icon_control_plus rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <path
                    d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </section>
  <section class="product_stories relative bg-[rgb(245,245,247)] overflow-hidden">
    <div class="anc w-[87.5%] max-w-[1680px] mx-auto">
      <div class="section_header text-center mt-24 sm:mt-40 mb-12 sm:mb-24">
        <h2
          class="text-[40px] sm:text-[110px] leading-tight sm:leading-[1.15] sm:tracking-[-3px] text-balance font-semibold">
          Unheard-of sound.</h2>
      </div>
      <div class="pro_anc_contianer sm:flex items-center mb-16 sm:mb-24">
        <div class="relative sm:max-w-[41.66%] sm:ms-[8.33%] overflow-hidden">
          <picture>
            <source media="(max-width: 480px)" srcset="/images/anc/anc_airpod_max_lifestyle_small_2x.jpg 2x">
            <img src="/images/anc/anc_airpod_max_lifestyle_large.jpg" alt=""
              class="sm:w-[734px] sm:h-[860px] object-cover scale-110">
          </picture>
        </div>
        <div class="relative sm:max-w-[33.33%] mt-8 sm:mt-0 sm:ms-[8.33%]">
          <div class="h-11 sm:h-[60px] mb-3 sm:mb-[18px]">
            <svg class="anc-detail-icon-anc max-h-full fill-current" viewBox="0 0 31 39"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m26.06 22.7c1.78-2.5 2.71-5.52 2.71-8.74.01-7.7-5.95-13.96-13.28-13.96-3.42 0-6.67 1.38-9.17 3.88-2.66 2.67-4.12 6.26-4.1 10.11 0 3.18.96 6.2 2.78 8.72.32.45.95.55 1.4.23s.55-.95.23-1.4c-1.57-2.17-2.4-4.78-2.4-7.55-.01-3.31 1.23-6.4 3.52-8.69 2.11-2.12 4.87-3.29 7.75-3.29 6.23 0 11.29 5.37 11.29 11.96 0 2.8-.81 5.43-2.34 7.58-.32.45-.21 1.07.23 1.39.18.12.38.19.58.19.31 0 .62-.15.82-.42zm.61 16.3h-22.34c-2.87 0-4.33-1.08-4.33-3.21 0-5.36 6.23-11.1 15.5-11.1s15.5 5.74 15.5 11.1c0 2.13-1.46 3.21-4.33 3.21zm-11.17-17.44c-4.2 0-7.49-3.56-7.49-8.09s3.36-7.9 7.49-7.9 7.49 3.54 7.49 7.9-3.29 8.09-7.49 8.09z">
              </path>
            </svg>
          </div>
          <p class="text-[17px] sm:text-[21px] font-semibold leading-tight tracking-tight text-[#6c6c6c]"><span
              class="text-[#1d1d1f]">Pro‑level Active Noise Cancellation.</span> With up to 2x more noise cancelled,1
            pro‑level Active Noise Cancellation counters external sound with equal anti‑noise. With control over what
            you hear — and don’t hear — you can immerse yourself in music and podcasts, or simply stay focused, like
            never before.
          </p>
        </div>
      </div>
      <div class="transparency_mode_container flex flex-col sm:flex-row">
        <div class="relative sm:max-w-[25%] sm:ms-[8.33%] sm:mt-60 sm:mb-20">
          <div
            class="horizontal_pin box-border flex items-end sm:items-center absolute z-10 -bottom-[156px] sm:bottom-auto left-[200px] sm:-top-9 sm:left-0 sm:-right-[540px] before:content-[''] before:z-10 before:absolute before:w-2 before:h-2 before:right-0 before:bg-[rgb(134,134,139)] before:m-[-3px] before:rounded after:content-[''] after:w-[1.5px] sm:after:w-full after:h-[146px] sm:after:h-[1.5px] after:bg-[rgb(134,134,139)]">
          </div>
          <div class="h-11 sm:h-[60px] mb-3 sm:mb-[18px]">
            <svg class="anc-detail-icon-transparency max-h-full fill-current" viewBox="0 0 31 39.61"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m26.33 23.73c.07-.07.13-.15.19-.23.05-.08.1-.17.14-.26.03-.09.06-.18.08-.28s.03-.2.03-.29c0-.4-.16-.78-.44-1.06-.56-.56-1.56-.56-2.12 0-.28.28-.44.66-.44 1.06 0 .09 0 .19.03.29.02.1.05.19.09.28.03.09.08.18.14.26.05.08.11.16.18.23.28.28.67.44 1.06.44s.78-.16 1.06-.44zm1.39-6.19c.76 0 1.41-.57 1.49-1.34.09-.83-.51-1.56-1.34-1.65-.82-.08-1.56.52-1.64 1.34-.09.83.51 1.56 1.34 1.65zm-24.45 0s.1-.01.16-.01c.82-.09 1.42-.83 1.33-1.65-.08-.82-.82-1.42-1.65-1.34-.82.09-1.42.83-1.33 1.66.08.76.73 1.34 1.49 1.34zm23.4-6.98c.2 0 .41-.04.6-.13.76-.33 1.11-1.22.77-1.97-.33-.76-1.21-1.11-1.97-.78-.76.34-1.11 1.22-.77 1.98.24.56.79.9 1.37.9zm-22.37-.01c.58 0 1.13-.33 1.38-.9.33-.76 0-1.64-.77-1.97-.76-.34-1.64 0-1.98.77-.33.75 0 1.64.77 1.97.2.09.4.13.6.13zm17.9-5.44c.48 0 .95-.23 1.24-.65.47-.68.29-1.62-.39-2.09s-1.61-.29-2.08.39c-.48.68-.3 1.62.38 2.09.26.17.56.26.85.26zm-13.41 0c.29 0 .59-.09.85-.27.68-.47.85-1.4.38-2.1-.47-.68-1.4-.85-2.09-.38-.68.47-.85 1.41-.38 2.09.29.42.76.65 1.24.65zm6.71-2.1c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.49.67 1.51 1.5 1.51zm-9.42 21.13c.1-.02.19-.05.28-.09.09-.03.18-.08.26-.14.08-.05.16-.11.23-.18s.13-.15.18-.23c.06-.08.1-.17.14-.26s.07-.18.09-.28.03-.19.03-.29c0-.4-.16-.78-.44-1.06-.56-.56-1.57-.56-2.12 0-.28.28-.44.66-.44 1.06 0 .1 0 .19.03.29 0 .1.04.19.08.28s.09.18.14.26.12.16.19.23c.28.28.66.44 1.06.44.1 0 .19-.01.29-.03zm20.59 15.47h-22.34c-2.87 0-4.33-1.08-4.33-3.21 0-5.36 6.23-11.1 15.5-11.1s15.5 5.74 15.5 11.1c0 2.13-1.46 3.21-4.33 3.21zm-11.17-17.44c-4.2 0-7.49-3.56-7.49-8.09s3.36-7.9 7.49-7.9 7.49 3.54 7.49 7.9-3.29 8.09-7.49 8.09z">
              </path>
            </svg>
          </div>
          <p class="text-[17px] sm:text-[21px] font-semibold leading-tight tracking-tight text-[#6c6c6c]"><span
              class="text-[#1d1d1f]">Transparency mode.</span> Press the noise control button to switch to
            Transparency mode, which lets outside sound in so you can interact naturally with your surroundings.
          </p>
        </div>
        <div class="relative w-0 ms-[8.33%] sm:ms-0 mt-14 sm:mt-0">
          <div class="relative sm:left-[138px]">
            <picture>
              <source media="(max-width: 480px)" srcset="/images/anc/anc_airpod_max_close_up_small_2x.png 2x">
              <img src="/images/anc/anc_airpod_max_close_up_large.png" alt=""
                class="block min-w-max w-[636px] sm:w-[1414px] h-[422px] sm:h-[884px]">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="product_design relative">
    <div class="max-w-[1680px] py-24 sm:py-40 flex flex-col justify-center items-center">
      <div class="section_header w-[87.5%] max-w-[1008px] mx-auto text-center mb-[18px] sm:mb-10">
        <h2
          class="text-[40px] sm:text-[110px] leading-tight sm:leading-[1.15] tracking-[-1px] sm:tracking-[-3px] font-semibold">
          Everything designed in perfect harmony.
        </h2>
      </div>
      <div class="product_design_img relative z-10">
        <picture>
          <source media="(max-width: 480px)" srcset="/images/design/design_airpod_max_small_2x.png 2x">
          <img src="/images/design/design_airpod_max_large.png" alt="" class="sm:w-[1283px] sm:h-[1283px]">
        </picture>
      </div>
      <div class="product_design_description w-[87.5%] max-w-[1105px] mx-auto text-center text-[#707070]">
        <p class="text-[21px] sm:text-[28px] leading-[1.15] font-semibold mt-12">From cushion to canopy,
          AirPods&nbsp;Max are
          designed for an uncompromising fit with unequalled comfort that creates the optimal acoustic seal for many
          different head shapes — fully immersing you in every sound.</p>
      </div>
      <div class="sticky bottom-8 inset-x-0 max-w-max mx-auto mt-8 text-center h-14 z-10">
        <button @click="{ isProductDesignModalOpen = !isProductDesignModalOpen; toggleBodyScrollbar() }"
          class="group h-full bg-[rgba(232,232,232,0.7)] backdrop-blur rounded-[100vmax] px-1 overflow-hidden outline-blue-500 focus:outline focus:outline-2">
          <span class="h-full inline-flex items-center gap-4 ms-5 me-2">
            <span class="text-sm sm:text-[17px] font-semibold">Dive deeper into design</span>
            <span class="relative h-9 w-9 rounded-[100vmax] bg-blue-500">
              <svg class="icon_control_plus fill-white opacity-80 group-hover:opacity-100"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                <path
                  d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z">
                </path>
              </svg>
            </span>
          </span>
        </button>
        <Teleport to="body">
          <div v-if="isProductDesignModalOpen"
            class="fixed inset-0 py-4 px-2 z-50 bg-black/50 backdrop-blur-lg overflow-y-scroll">
            <div class="relative rounded-[28px] bg-white overflow-hidden">
              <div class="modal_content text-center grid grid-cols-12 gap-y-5">
                <div class="col-span-full bg-[rgb(245,245,247)]">
                  <div class="relative sm:min-h-[1151px] flex flex-col items-center justify-between">
                    <h2
                      class="modal_header z-10 max-w-[296px] sm:max-w-[756px] text-[40px] sm:text-[56px] leading-[1.15] tracking-tight font-semibold mt-20 sm:mt-32">
                      A radically original composition.
                    </h2>
                    <p
                      class="box-content z-10 max-w-[320px] sm:max-w-[580px] text-[17px] sm:text-[21px] text-[#424245] font-semibold leading-[1.15] sm:tracking-tight p-5 mt-[240px] sm:mt-0 mb-12 sm:mb-16">
                      <span class="text-[#1d1d1f]">Digital Crown.</span> Press the Digital Crown to play and pause
                      music or mute and unmute yourself on calls, and press twice to skip between tracks or end calls.
                      Turn it to precisely control volume.
                    </p>
                    <div class="absolute bottom-0 z-0 flex justify-center">
                      <picture>
                        <source media="(max-width: 480px)"
                          srcset="/images/design/modal/design_bc_digital_crown_xsmall_2x.jpg 2x">
                        <img src="/images/design/modal/design_bc_digital_crown_xlarge.jpg" alt=""
                          class="block w-[481px] sm:w-[1900px] h-[702px] sm:h-[1076px] object-cover">
                      </picture>
                    </div>
                  </div>
                </div>
                <div class="col-span-full px-3">
                  <div
                    class="relative bg-[rgb(245,245,247)] h-full sm:min-h-[900px] rounded-[28px] flex flex-col items-center justify-end overflow-hidden">
                    <p
                      class="box-content z-10 sm:max-w-[460px] text-[17px] sm:text-[21px] text-[#6c6c6c] font-semibold leading-[1.15] sm:tracking-tight p-5 mt-8 sm:mt-0 mb-72 sm:mb-52">
                      <span class="text-[#1d1d1f]">Canopy.</span> The canopy spanning the headband is made from a
                      breathable knit mesh, distributing weight to reduce on‑head pressure.
                    </p>
                    <div class="absolute z-0 flex justify-center">
                      <picture>
                        <source media="(max-width: 480px)"
                          srcset="/images/design/modal/design_bc_canopy_xsmall_2x.jpg 2x">
                        <img src="/images/design/modal/design_bc_canopy_large.jpg" alt=""
                          class="block w-[440px] sm:w-[1900px] h-[590px] sm:h-[980px] object-cover">
                      </picture>
                    </div>
                  </div>
                </div>
                <div class="col-span-full sm:col-span-6 px-3">
                  <div
                    class="relative bg-[rgb(245,245,247)] sm:min-h-[900px] rounded-[28px] flex flex-col items-center justify-end overflow-hidden">
                    <p
                      class="box-content sm:max-w-[540px] z-10 text-[17px] sm:text-[21px] text-[#6c6c6c] font-semibold leading-[1.15] sm:tracking-tight sm:mt-[734px] p-5 mt-80 sm:py-12 sm:px-10">
                      <span class="text-[#1d1d1f]">Cushions.</span> Crafted with acoustically engineered memory foam
                      and a custom-designed mesh textile, the pillow-like softness of the ear cushions gently creates
                      an immersive seal that is the foundation of incredible sound.
                    </p>
                    <div class="absolute top-0 z-0 flex justify-center">
                      <picture>
                        <source media="(max-width: 480px)"
                          srcset="/images/design/modal/design_bc_cushions_xsmall_2x.jpg 2x">
                        <img src="/images/design/modal/design_bc_cushions_large.jpg" alt=""
                          class="block w-[440px] sm:w-[940px] h-[584px] sm:h-[1100px] object-cover">
                      </picture>
                    </div>
                  </div>
                </div>
                <div class="col-span-full sm:col-span-6 px-3">
                  <div
                    class="relative bg-[rgb(245,245,247)] h-full sm:min-h-[900px] rounded-[28px] flex flex-col items-center justify-end overflow-hidden">
                    <p
                      class="box-content sm:max-w-[540px] z-10 text-[17px] sm:text-[21px] text-[#6c6c6c] font-semibold leading-[1.15] sm:tracking-tight sm:mt-[734px] p-5 mt-80 sm:py-12 sm:px-10">
                      <span class="text-[#1d1d1f]">Cups.</span> The beautifully anodized aluminum cups feature a
                      revolutionary mechanism that allows each cup to rotate independently and balance pressure.
                    </p>
                    <div class="absolute top-0 z-0 flex justify-center">
                      <picture>
                        <source media="(max-width: 480px)"
                          srcset="/images/design/modal/design_bc_cups_xsmall_2x.jpg 2x">
                        <img src="/images/design/modal/design_bc_cups_large.jpg" alt=""
                          class="block w-[440px] sm:w-[940px] h-[584px] sm:h-[1100px] object-cover">
                      </picture>
                    </div>
                  </div>
                </div>
                <div class="col-span-full px-3">
                  <div
                    class="relative bg-[rgb(245,245,247)] sm:min-h-[900px] rounded-[28px] flex flex-col items-center justify-end overflow-hidden">
                    <p
                      class="box-content z-10 sm:max-w-[540px] text-[17px] sm:text-[21px] text-[#ffffffcc] font-semibold leading-[1.15] sm:tracking-tight p-5 mt-[336px] mb-20 sm:mb-32">
                      <span class="text-[rgb(245,245,247)]">Telescoping arms.</span> The telescoping arms smoothly
                      extend from
                      the stainless steel frame — staying where you set them for a consistent fit and seal.
                    </p>
                    <div class="absolute inset-0 z-0 flex justify-center">
                      <picture>
                        <source media="(max-width: 480px)"
                          srcset="/images/design/modal/design_bc_telescoping_arms_xsmall_2x.jpg 2x">
                        <img src="/images/design/modal/design_bc_telescoping_arms_large.jpg" alt=""
                          class="block w-[440px] sm:w-[1900px] h-[534px] sm:h-[900px] object-cover">
                      </picture>
                    </div>
                  </div>
                </div>
                <div class="col-span-full bg-[rgb(245,245,247)] px-3">
                  <div
                    class="relative h-full sm:min-h-[900px] rounded-[28px] flex flex-col items-center justify-end overflow-hidden">
                    <p
                      class="box-content z-10 sm:max-w-[540px] text-[17px] sm:text-[21px] text-[#6c6c6c] font-semibold leading-[1.15] sm:tracking-tight p-5 mt-[368px] mb-10 sm:mb-12">
                      <span class="text-[#1d1d1f]">Smart Case.</span> When stored in their soft, slim Smart Case,
                      AirPods Max enter an ultra‑low‑power state that preserves charge.
                    </p>
                    <div class="absolute top-0 sm:-bottom-16 z-0 flex justify-center items-center">
                      <picture>
                        <source media="(max-width: 480px)"
                          srcset="/images/design/modal/design_bc_smart_case_xsmall_2x.jpg 2x">
                        <img src="/images/design/modal/design_bc_smart_case_large.jpg" alt=""
                          class="block w-[482px] sm:w-[1900px] h-[604px] sm:h-[992px] object-cover">
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
              <button @click="{ isProductDesignModalOpen = false; toggleBodyScrollbar() }"
                class="absolute h-9 w-9 rounded-[100vmax] top-4 right-4 bg-[rgb(29,29,31)]">
                <svg class="icon_control_plus rotate-45 fill-white" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 36">
                  <path
                    d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z">
                  </path>
                </svg>
              </button>
              <!-- <button @click="{ isProductDesignModalOpen = false; toggleBodyScrollbar() }"
                  class="absolute h-9 w-9 rounded-[100vmax] top-4 right-4 bg-[rgb(29,29,31)]">
                  <svg class="icon_control_plus rotate-45 fill-white" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36">
                    <path
                      d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z">
                    </path>
                  </svg>
                </button> -->
            </div>
          </div>
        </Teleport>
      </div>
    </div>
  </section>
  <section class="battery_details overflow-x-clip">
    <div class="section_header">
      <div class="w-[87.5%] max-w-[1680px] mx-auto text-center mb-10 sm:mb-20">
        <h2
          class="product_desc text-[40px] sm:text-[80px] leading-tight sm:leading-[1.15] tracking-[-1px] sm:tracking-[-3px] font-semibold">
          Effortless.<br />
          With encore-ready power.</h2>
        <!-- <h2 class="product_desc text-[80px] leading-none tracking-tighter mt-2 font-semibold mb-20">Effortless.<br />
            With encore-ready power.</h2> -->
      </div>
      <div ref="battery_details_swiper"
        class="battery_details_swiper px-[max(6.25vw,(100vw-1680px)/2,env(safe-area-inset-left),env(safe-area-inset-right))]">
        <div class="swiper-wrapper">
          <div class="swiper-slide max-w-min min-w-[280px] sm:min-w-[373px]">
            <div class="w-[280px] sm:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-[20px]">
              <picture>
                <source media="(max-width: 480px)" srcset="/images/battery-magical/battery_detection_small.jpg">
                <img src="/images/battery-magical/battery_detection_large.jpg" alt=""
                  class="w-full h-full object-cover">
              </picture>
            </div>
            <div class="mt-6 ps-2 pe-5 sm:pe-12">
              <p class="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                <span class="text-[#1d1d1f]">Automatic Switching and on-head detection.</span> If you’re playing music
                on
                your Mac and take a call on
                your iPhone, AirPods Max automatically switch over. And AirPods Max pause audio when you take them off
                and resume playback when you put them back on.
              </p>
            </div>
          </div>
          <div class="swiper-slide max-w-min min-w-[280px] sm:min-w-[373px]">
            <div class="w-[280px] sm:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-[20px]">
              <picture>
                <source media="(max-width: 480px)" srcset="/images/battery-magical/battery_listen_small.jpg">
                <img src="/images/battery-magical/battery_listen_large.jpg" alt="" class="w-full h-full object-cover">
              </picture>
            </div>
            <div class="mt-6 ps-2 pe-5 sm:pe-12">
              <p class="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                <span class="text-[#1d1d1f]">Audio Sharing.</span> With just a
                tap to connect, you can easily share an audio stream between two sets of AirPods on your iPhone, iPad,
                Mac, or Apple TV.
              </p>
            </div>
          </div>
          <div class="swiper-slide max-w-min min-w-[280px] sm:min-w-[373px]">
            <div
              class="relative bg-[conic-gradient(from_45deg,#bb64ff,#ff2288,#ff8b00_28%,#f2416b,#e750de_60%,#0096ff,#bb64ff)] flex items-center w-[280px] sm:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-[20px] text-[#1d1d1f]  px-11 sm:px-5 before:content-[''] before:absolute before:block before:inset-[38px] before:bg-white before:shadow-[0_0_32px_40px_#fff] before:rounded-[9px]">
              <h3 class="text-[32px] sm:text-5xl tracking-tight font-semibold text-center leading-[1.08] z-10">
                <span
                  class="text-transparent bg-[linear-gradient(108deg,#0894ff,#c959dd_34%,#ff2e54_68%,#ff9004)] bg-clip-text">Hey
                  Siri,</span> what’s&nbsp;
                on my&nbsp;Calendar
                today?
              </h3>
            </div>
            <div class="mt-6 ps-2 pe-5 sm:pe-12">
              <p class="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                <span class="text-[#1d1d1f]">Always-on Siri.</span> With
                Announce Notifications, Siri can automatically read important notifications from Messages, Phone,
                Calendar, Reminders, and more as they arrive.
              </p>
            </div>
          </div>
          <div class="swiper-slide max-w-min min-w-[280px] sm:min-w-[373px]">
            <div class="w-[280px] sm:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-[20px]">
              <picture>
                <source media="(max-width: 480px)" srcset="/images/battery-magical/battery_usbc_small.jpg">
                <img src="/images/battery-magical/battery_usbc_large.jpg" alt="" class="w-full h-full object-cover">
              </picture>
            </div>
            <div class="mt-6 ps-2 pe-5 sm:pe-12">
              <p class="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                <span class="text-[#1d1d1f]">USB‑C charging.</span> The new USB‑C connector lets you charge your
                AirPods
                Max with the same cable that charges your iPhone, iPad, Mac, or other Apple devices.
              </p>
            </div>
          </div>
          <div class="swiper-slide max-w-min min-w-[280px] sm:min-w-[373px]">
            <div class="relative w-[280px] sm:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-[20px]">
              <div class="absolute inset-x-0 top-[47%]">
                <h3 class="text-[32px] sm:text-5xl tracking-tight font-semibold text-center leading-[1.08] z-10">
                  Up to<br>20 hrs of<br>listening
                </h3>
              </div>
              <img src="/images/battery-magical/battery_long_lasting_large.jpg" alt=""
                class="w-full h-full object-cover">
            </div>
            <div class="mt-6 ps-2 pe-5 sm:pe-12">
              <p class="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                <span class="text-[#1d1d1f]">Battery.</span> Up to 20 hours of listening, movie watching, or talk time
                —
                with pro-level Active Noise Cancellation and Spatial Audio enabled. A quick 5‑minute charge delivers
                around 1.5 hours of listening.
              </p>
            </div>
          </div>
        </div>
        <div class="battery_details_swiper__navigation flex justify-end gap-4 pt-10 sm:pt-12 pb-20">
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
    </div>
  </section>
  <section class="why_apple overflow-x-clip bg-[rgb(245,245,247)] py-24 sm:py-40">
    <div class="section_header">
      <div class="w-[87.5%] max-w-[1680px] mx-auto">
        <h2 class="text-[28px] sm:text-[56px] leading-[1.15] tracking-tight font-semibold pb-12 sm:pb-20">Why Apple is
          the
          best<br> place to buy AirPods.</h2>
      </div>
      <div ref="why_apple_swiper"
        class="why_apple_swiper px-[max(6.25vw,(100vw-1680px)/2,env(safe-area-inset-left),env(safe-area-inset-right))]">
        <div class="swiper-wrapper">
          <div v-for="(whyAppleSwiperSlide, index) in whyAppleSwiperSlides"
            class="swiper-slide max-w-[260px] sm:max-w-[405px] !h-auto">
            <div
              class="relative h-full w-full rounded-[28px] bg-white text-[#1d1d1f] hover:scale-[1.02] transition-transform duration-300">
              <div class="p-[8.33%] pb-[72px] sm:pt-7 sm:pb-[52px] sm:ps-8 sm:pe-[76px] h-full">
                <div class="">
                  <img :src="whyAppleSwiperSlide.icon" height="56" alt="">
                </div>
                <div class="mt-[15px] mb-5">
                  <h3 class="text-[21px] sm:text-[28px] font-semibold leading-[1.15]"><span
                      v-html="whyAppleSwiperSlide.title"></span></h3>
                  <p class="text-sm sm:text-[17px] leading-tight tracking-tight text-balance mt-[15px]">
                    <span v-html="whyAppleSwiperSlide.description"></span>
                  </p>
                </div>
              </div>
              <button class="absolute inset-0 rounded-[inherit] focus-visible:outline-[#0066cc]"
                @click="{ setWhyAppleSwiperActiveSlide(whyAppleSwiperSlide.id, index); toggleBodyScrollbar(); }">
                <div class="absolute bottom-4 right-4 h-9 w-9 rounded-[100vmax] bg-current">
                  <svg class="icon_control_plus fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                    <path
                      d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z">
                    </path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <Teleport to="body">
            <div v-if="isWhyAppleSwiperModalOpen"
              class="fixed block top-0 left-0 w-full h-full bg-black/50 backdrop-blur-lg z-50 overflow-y-scroll">
              <div class="flex items-center min-h-full">
                <div class="sm:w-[816px] mx-auto py-10">
                  <div
                    class="modal_content__wrapper relative rounded-[28px] bg-white px-6 py-16 mx-3 sm:mx-0 sm:p-[76px]">
                    <div class="modal_content__header">
                      <p class="text-[17px] sm:text-lg font-medium tracking-wide">{{
                        whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.topic }}</p>
                      <h3 class="text-[32px] sm:text-[56px] leading-[1.15] tracking-tight font-semibold mt-3">
                        {{ whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.headline }}
                      </h3>
                    </div>
                    <div class="modal_content__body mt-5 font-medium">
                      <p class="text-[17px] sm:text-lg leading-[1.15]">{{
                        whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.summary
                      }}
                      </p>
                      <p v-if="whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.extra"
                        class="text-[17px] sm:text-lg leading-[1.15] mt-8">{{
                          whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.extra
                        }}</p>
                      <img v-if="whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.extraImage"
                        :src="whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.extraImage" alt=""
                        class="mt-10">
                    </div>
                    <div v-if="whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.linkText !== ''"
                      class="modal_content__footer mt-10">
                      <a :href="whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.link" target="_blank"
                        rel="noopener noreferrer"
                        class="relative text-[17px] sm:text-lg leading-[1.15] text-[#0066cc] hover:underline">
                        {{ whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.linkText }}
                        <span
                          class="relative after:content-[''] after:absolute after:w-3 after:h-5 after:leading-none after:[mask-image:url('/images/icon_chevron_large.svg')] after:[mask-repeat:no-repeat] after:[mask-position:75%_85%] after:bg-current"></span></a>
                    </div>
                    <button @click="{ isWhyAppleSwiperModalOpen = false; toggleBodyScrollbar() }"
                      class="absolute h-9 w-9 rounded-[100vmax] top-4 right-4 bg-[rgb(29,29,31)]">
                      <svg class="icon_control_plus rotate-45 fill-white" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 36 36">
                        <path
                          d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Teleport>
        </div>
        <div class="why_apple_swiper__navigation flex justify-end gap-4 pt-12">
          <div class="w-9 h-9">
            <button
              class="prev w-full h-full rounded-[100vmax] focus-visible:outline-[#0066cc] bg-[rgba(210,210,215,0.64)] text-black/50 disabled:opacity-50">
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
              class="next w-full h-full rounded-[100vmax] focus-visible:outline-[#0066cc] bg-[rgba(210,210,215,0.64)] text-black/50 disabled:opacity-50">
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
    </div>
  </section>
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