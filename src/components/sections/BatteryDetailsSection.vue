<template>
    <section class="battery_details overflow-x-clip">
        <div class="section_header">
            <div class="w-[87.5%] max-w-[1680px] mx-auto text-center mb-10 sm:mb-20">
                <h2
                    ref="heading"
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
                                <source media="(max-width: 480px)"
                                    srcset="/images/battery-magical/battery_detection_small.jpg">
                                <img src="/images/battery-magical/battery_detection_large.jpg" alt=""
                                    class="w-full h-full object-cover">
                            </picture>
                        </div>
                        <div class="mt-6 ps-2 pe-5 sm:pe-12">
                            <p
                                class="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                                <span class="text-[#1d1d1f]">Automatic Switching and on-head detection.</span> If you're
                                playing music
                                on
                                your Mac and take a call on
                                your iPhone, AirPods Max automatically switch over. And AirPods Max pause audio when you
                                take them off
                                and resume playback when you put them back on.
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide max-w-min min-w-[280px] sm:min-w-[373px]">
                        <div class="w-[280px] sm:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-[20px]">
                            <picture>
                                <source media="(max-width: 480px)"
                                    srcset="/images/battery-magical/battery_listen_small.jpg">
                                <img src="/images/battery-magical/battery_listen_large.jpg" alt=""
                                    class="w-full h-full object-cover">
                            </picture>
                        </div>
                        <div class="mt-6 ps-2 pe-5 sm:pe-12">
                            <p
                                class="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                                <span class="text-[#1d1d1f]">Audio Sharing.</span> With just a
                                tap to connect, you can easily share an audio stream between two sets of AirPods on your
                                iPhone, iPad,
                                Mac, or Apple TV.
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide max-w-min min-w-[280px] sm:min-w-[373px]">
                        <div
                            class="relative bg-[conic-gradient(from_45deg,#bb64ff,#ff2288,#ff8b00_28%,#f2416b,#e750de_60%,#0096ff,#bb64ff)] flex items-center w-[280px] sm:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-[20px] text-[#1d1d1f]  px-11 sm:px-5 before:content-[''] before:absolute before:block before:inset-[38px] before:bg-white before:shadow-[0_0_32px_40px_#fff] before:rounded-[9px]">
                            <h3
                                class="text-[32px] sm:text-5xl tracking-tight font-semibold text-center leading-[1.08] z-10">
                                <span
                                    class="text-transparent bg-[linear-gradient(108deg,#0894ff,#c959dd_34%,#ff2e54_68%,#ff9004)] bg-clip-text">Hey
                                    Siri,</span> what's&nbsp;
                                on my&nbsp;Calendar
                                today?
                            </h3>
                        </div>
                        <div class="mt-6 ps-2 pe-5 sm:pe-12">
                            <p
                                class="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                                <span class="text-[#1d1d1f]">Always-on Siri.</span> With
                                Announce Notifications, Siri can automatically read important notifications from
                                Messages, Phone,
                                Calendar, Reminders, and more as they arrive.
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide max-w-min min-w-[280px] sm:min-w-[373px]">
                        <div class="w-[280px] sm:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-[20px]">
                            <picture>
                                <source media="(max-width: 480px)"
                                    srcset="/images/battery-magical/battery_usbc_small.jpg">
                                <img src="/images/battery-magical/battery_usbc_large.jpg" alt=""
                                    class="w-full h-full object-cover">
                            </picture>
                        </div>
                        <div class="mt-6 ps-2 pe-5 sm:pe-12">
                            <p
                                class="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                                <span class="text-[#1d1d1f]">USB‑C charging.</span> The new USB‑C connector lets you
                                charge your
                                AirPods
                                Max with the same cable that charges your iPhone, iPad, Mac, or other Apple devices.
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide max-w-min min-w-[280px] sm:min-w-[373px]">
                        <div
                            class="relative w-[280px] sm:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-[20px]">
                            <div class="absolute inset-x-0 top-[47%]">
                                <h3
                                    class="text-[32px] sm:text-5xl tracking-tight font-semibold text-center leading-[1.08] z-10">
                                    Up to<br>20 hrs of<br>listening
                                </h3>
                            </div>
                            <img src="/images/battery-magical/battery_long_lasting_large.jpg" alt=""
                                class="w-full h-full object-cover">
                        </div>
                        <div class="mt-6 ps-2 pe-5 sm:pe-12">
                            <p
                                class="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                                <span class="text-[#1d1d1f]">Battery.</span> Up to 20 hours of listening, movie
                                watching, or talk time
                                —
                                with pro-level Active Noise Cancellation and Spatial Audio enabled. A quick 5‑minute
                                charge delivers
                                around 1.5 hours of listening.
                            </p>
                        </div>
                    </div>
                </div>
                <div ref="navigation" class="battery_details_swiper__navigation flex justify-end gap-4 pt-10 sm:pt-12 pb-20">
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
import { onMounted, useTemplateRef } from 'vue';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Keyboard, Navigation } from 'swiper/modules';
import Swiper from 'swiper';

const headingRef = useTemplateRef('heading');
const batteryDetailsSwiperEl = useTemplateRef('battery_details_swiper');
const navigationRef = useTemplateRef('navigation');

const batteryDetailsSwiperParams = {
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

const initAnimations = () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)
    
    // Get all slides dynamically
    const slides = batteryDetailsSwiperEl.value.querySelectorAll('.swiper-slide')
    
    // Set initial states - ensure elements start hidden
    gsap.set(headingRef.value, { opacity: 0, y: 30 })
    gsap.set(slides, { opacity: 0, y: 30 })
    gsap.set(navigationRef.value, { opacity: 0, y: 30 })

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

    // Create separate timeline for slides animation
    const slidesTl = gsap.timeline({
        scrollTrigger: {
            trigger: batteryDetailsSwiperEl.value,
            start: 'top 80%', // Start when 20% of swiper is in view
            end: 'bottom 20%',
            toggleActions: 'play none none none', // Play once, no reverse
        }
    })

    // Stagger animate slides
    slidesTl.to(slides, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out'
    })

    // Animate navigation
    slidesTl.to(navigationRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
    }, '-=0.3') // Start navigation animation before slides finish
}

const initBatteryDetailsSwiper = () => {
    new Swiper(batteryDetailsSwiperEl.value, batteryDetailsSwiperParams);
}

onMounted(() => {
    initBatteryDetailsSwiper();
    initAnimations();
})
</script>