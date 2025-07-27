<template>
  <section class="product_stories relative bg-[rgb(245,245,247)] overflow-hidden">
    <div class="anc w-[87.5%] max-w-[1680px] mx-auto">
      <div class="section_header text-center mt-24 sm:mt-40 mb-12 sm:mb-24">
        <h2 ref="heading"
          class="text-[40px] sm:text-[110px] leading-tight sm:leading-[1.15] sm:tracking-[-3px] text-balance font-semibold">
          Unheard-of sound.</h2>
      </div>
      <div ref="proAncContainer" class="pro_anc_contianer sm:flex items-center mb-16 sm:mb-24">
        <div class="relative sm:max-w-[41.66%] sm:ms-[8.33%] overflow-hidden">
          <picture>
            <source media="(max-width: 480px)" srcset="/images/anc/anc_airpod_max_lifestyle_small_2x.jpg 2x">
            <img ref="ancImage" src="/images/anc/anc_airpod_max_lifestyle_large.jpg" alt=""
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
            you hear — and don't hear — you can immerse yourself in music and podcasts, or simply stay focused, like
            never before.
          </p>
        </div>
      </div>
      <div ref="transparencyContainer" class="transparency_mode_container flex flex-col sm:flex-row z-0">
        <div class="relative z-10 sm:max-w-[25%] sm:ms-[8.33%] sm:mt-60 sm:mb-20">
          <div ref="horizontalPin"
            class="horizontal_pin box-border flex items-end sm:items-center absolute -bottom-[156px] sm:bottom-auto left-[200px] sm:-top-9 sm:left-0 before:content-[''] before:z-10 before:absolute before:w-2 before:h-2 before:right-0 before:bg-[rgb(134,134,139)] before:m-[-3px] before:rounded before:scale-0 before:transition-transform before:duration-300 after:content-[''] after:w-[1.5px] sm:after:w-full after:h-[146px] sm:after:h-[1.5px] after:bg-[rgb(134,134,139)]"
            style="--before-scale: 0;">
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
        <div class="relative z-0 w-0 ms-[8.33%] sm:ms-0 mt-14 sm:mt-0">
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
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue'
import { gsap, ScrollTrigger } from 'gsap/all'

const headingRef = useTemplateRef('heading')
const proAncContainerRef = useTemplateRef('proAncContainer')
const transparencyContainerRef = useTemplateRef('transparencyContainer')
const ancImageRef = useTemplateRef('ancImage')
const horizontalPinRef = useTemplateRef('horizontalPin')

const initAnimations = () => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  // Set initial states - ensure elements start hidden
  gsap.set(headingRef.value, { opacity: 0, y: 30 })
  gsap.set(proAncContainerRef.value.children, { opacity: 0, y: 20 })
  gsap.set(transparencyContainerRef.value.children, { opacity: 0, y: 30 })
  gsap.set(horizontalPinRef.value, { right: '0px', opacity: 0 }) // Set initial position and hidden

  // Create timeline for heading animation
  const headingTl = gsap.timeline({
    scrollTrigger: {
      trigger: headingRef.value,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none',
    }
  })

  // Animate heading
  headingTl.to(headingRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out'
  })

  // Create timeline for pro_anc_container animations
  const proAncTl = gsap.timeline({
    scrollTrigger: {
      trigger: proAncContainerRef.value,
      start: 'top 70%',
      end: 'bottom 20%',
      toggleActions: 'play none none none',
    }
  })

  // Stagger animate pro_anc_container children
  proAncTl.to(proAncContainerRef.value.children, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: 'power2.out'
  })

  // Create timeline for transparency_mode_container animations
  const transparencyTl = gsap.timeline({
    scrollTrigger: {
      trigger: transparencyContainerRef.value,
      start: 'top 70%', // Start when 30% of container is in view
      end: 'bottom 20%',
      toggleActions: 'play none none none', // Play once, no reverse
    }
  })

  // Stagger animate transparency_mode_container children
  transparencyTl.to(transparencyContainerRef.value.children, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: 'power2.out'
  })

  // Animate horizontal pin at the same time as the image (second child)
  transparencyTl.to(horizontalPinRef.value, {
    right: '-540px',
    opacity: 1,
    duration: 1,
    ease: 'power2.out'
  }, 0.2) // Start at the same time as the second child (image) animation

  // Animate the before pseudo-element (dot) after horizontal pin animation
  transparencyTl.to(horizontalPinRef.value, {
    '--before-scale': 1, // Custom property for before pseudo-element scale
    duration: 0.3,
    ease: 'power2.out'
  }, 0.75)

  // Parallax effect for the ANC image
  gsap.to(ancImageRef.value, {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: proAncContainerRef.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.75,
    }
  })
}

onMounted(() => {
  initAnimations()
})
</script>

<style scoped>
.horizontal_pin::before {
  transform: scale(var(--before-scale, 0));
}
</style>