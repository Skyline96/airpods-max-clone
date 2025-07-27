<template>
    <section class="why_apple overflow-x-clip bg-[rgb(245,245,247)] py-24 sm:py-40">
        <div class="section_header">
            <div class="w-[87.5%] max-w-[1680px] mx-auto">
                <h2 ref="heading" class="text-[28px] sm:text-[56px] leading-[1.15] tracking-tight font-semibold pb-12 sm:pb-20">Why
                    Apple is
                    the
                    best<br> place to buy AirPods.</h2>
            </div>
            <div ref="whyAppleSwiperContainer"
                class="why_apple_swiper px-[max(6.25vw,(100vw-1680px)/2,env(safe-area-inset-left),env(safe-area-inset-right))]">
                <div class="swiper-wrapper">
                    <div v-for="(whyAppleSwiperSlide, index) in whyAppleSwiperSlides" :key="whyAppleSwiperSlide.id"
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
                                    <p
                                        class="text-sm sm:text-[17px] leading-tight tracking-tight text-balance mt-[15px]">
                                        <span v-html="whyAppleSwiperSlide.description"></span>
                                    </p>
                                </div>
                            </div>
                            <button class="absolute inset-0 rounded-[inherit] focus-visible:outline-[#0066cc]"
                                @click="{ setWhyAppleSwiperActiveSlide(whyAppleSwiperSlide.id, index); toggleBodyScrollbar(); }">
                                <div class="absolute bottom-4 right-4 h-9 w-9 rounded-[100vmax] bg-current">
                                    <svg class="icon_control_plus fill-white" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 36 36">
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
                                                whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.topic
                                            }}</p>
                                            <h3
                                                class="text-[32px] sm:text-[56px] leading-[1.15] tracking-tight font-semibold mt-3">
                                                {{
                                                    whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.headline
                                                }}
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
                                                :src="whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.extraImage"
                                                alt="" class="mt-10">
                                        </div>
                                        <div v-if="whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.linkText !== ''"
                                            class="modal_content__footer mt-10">
                                            <a :href="whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.link"
                                                target="_blank" rel="noopener noreferrer"
                                                class="relative text-[17px] sm:text-lg leading-[1.15] text-[#0066cc] hover:underline">
                                                {{
                                                    whyAppleSwiperSlides[whyAppleSwiperActiveSlideIndex].modalContent.linkText
                                                }}
                                                <span
                                                    class="relative after:content-[''] after:absolute after:w-3 after:h-5 after:leading-none after:[mask-image:url('/images/icon_chevron_large.svg')] after:[mask-repeat:no-repeat] after:[mask-position:75%_85%] after:bg-current"></span></a>
                                        </div>
                                        <CloseButton @close="closeModal" class="text-white" />
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
                            <svg class="icon-control icon-control-chevronright fill-current"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
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
<script setup>
import { onMounted, ref, useTemplateRef } from 'vue';
import { Keyboard, Navigation } from 'swiper/modules';
import Swiper from 'swiper';
import { gsap, ScrollTrigger } from 'gsap/all';

const baseUrl = import.meta.env.BASE_URL;

const whyAppleSwiperEl = useTemplateRef('whyAppleSwiperContainer');
const whyAppleSwiperActiveSlideId = ref(0);
const whyAppleSwiperActiveSlideIndex = ref(0);

// Animation refs
const headingRef = useTemplateRef('heading');

import { useModal } from '@/composables/useModal'
import CloseButton from '@/components/ui/CloseButton.vue'

const { isModalOpen: isWhyAppleSwiperModalOpen, openModal, closeModal } = useModal()

const setWhyAppleSwiperActiveSlide = (id, index) => {
    whyAppleSwiperActiveSlideId.value = id;
    whyAppleSwiperActiveSlideIndex.value = index;
    openModal();
};

const initAnimations = () => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)
  
  // Set initial states - ensure elements start hidden
  gsap.set(headingRef.value, { opacity: 0, y: 30 })
  
  // Get swiper slides and navigation elements
  const swiperSlides = whyAppleSwiperEl.value.querySelectorAll('.swiper-slide')
  const navigationElements = whyAppleSwiperEl.value.querySelectorAll('.why_apple_swiper__navigation')
  
  gsap.set(swiperSlides, { opacity: 0, y: 30 })
  gsap.set(navigationElements, { opacity: 0, y: 30 })

  // Create timeline for heading animation
  const headingTl = gsap.timeline({
    scrollTrigger: {
      trigger: headingRef.value,
      start: 'top 80%', // Start when 20% of heading is in view
      end: 'bottom 50%',
      toggleActions: 'play none none none', // Play once, no reverse
    }
  })

  // Animate heading
  headingTl.to(headingRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out'
  })

  // Create separate timeline for swiper animation
  const swiperTl = gsap.timeline({
    scrollTrigger: {
      trigger: whyAppleSwiperEl.value,
      start: 'top 70%', // Start when 30% of swiper is in view
      end: 'bottom 20%',
      toggleActions: 'play none none none', // Play once, no reverse
    }
  })

  // Animate swiper slides with stagger
  swiperTl.to(swiperSlides, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: 'power2.out'
  })

  // Animate navigation elements
  swiperTl.to(navigationElements, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power2.out'
  }, '-=0.3') // Start navigation animation slightly before slides finish
}

const whyAppleSwiperParams = {
    modules: [Keyboard, Navigation],
    slidesPerView: "auto",
    spaceBetween: 20,
    grabCursor: true,
    speed: 500,
    watchSlidesProgress: true,
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
            summary: 'Choose from new engraving options. It\'s the perfect way to personalize your AirPods. Add a special message, name, or birthday. Even combine text and numbers with your favorite emoji.',
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
            summary: 'We can help you choose the product you need while guiding you through the online Apple Store. You won\'t appear on camera. Available 7 a.m.–7 p.m. PT.',
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
    initWhyAppleSwiper();
    initAnimations();
})
</script>