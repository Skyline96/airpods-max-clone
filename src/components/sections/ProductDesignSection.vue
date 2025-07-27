<template>
    <section class="product_design relative">
        <div class="max-w-[1680px] py-24 sm:py-40 flex flex-col justify-center items-center">
            <div class="section_header w-[87.5%] max-w-[1008px] mx-auto text-center mb-[18px] sm:mb-10">
                <h2
                    ref="heading"
                    class="text-[40px] sm:text-[110px] leading-tight sm:leading-[1.15] tracking-[-1px] sm:tracking-[-3px] font-semibold">
                    Everything designed in perfect harmony.
                </h2>
            </div>
            <div ref="productImageContainer" class="product_design_img relative">
                <picture>
                    <source media="(max-width: 480px)" srcset="/images/design/design_airpod_max_small_2x.png 2x">
                    <img ref="productImage" src="/images/design/design_airpod_max_large.png" alt="" class="sm:w-[1283px] sm:h-[1283px] z-10">
                </picture>
            </div>
            <div ref="description" class="product_design_description w-[87.5%] max-w-[1105px] mx-auto text-center text-[#707070]">
                <p class="text-[21px] sm:text-[28px] leading-[1.15] font-semibold">From cushion to canopy,
                    AirPods&nbsp;Max are
                    designed for an uncompromising fit with unequalled comfort that creates the optimal acoustic seal
                    for many
                    different head shapes — fully immersing you in every sound.</p>
            </div>

        </div>
    </section>
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue'
import { gsap, ScrollTrigger } from 'gsap/all'

const headingRef = useTemplateRef('heading')
const productImageContainerRef = useTemplateRef('productImageContainer')
const descriptionRef = useTemplateRef('description')
const productImageRef = useTemplateRef('productImage')

const initAnimations = () => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)
  
  // Set initial states - ensure elements start hidden
  gsap.set(headingRef.value, { opacity: 0, y: 30 })
  gsap.set(productImageContainerRef.value, { opacity: 0, y: 30 })
  gsap.set(productImageRef.value, { opacity: 1, y: -150 }) // Image should be visible initially
  gsap.set(descriptionRef.value, { opacity: 0, y: 30 })

  // Create timeline for staggered animations
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: headingRef.value,
      start: 'top 80%', // Start when 20% of heading is in view
      end: 'bottom 50%',
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

  // Animate product image
  tl.to(productImageContainerRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power2.out'
  }, '-=0.4') // Start image animation before heading finishes

  // Animate description
  tl.to(descriptionRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.2') // Start description animation before image finishes

  // Parallax effect for the design image
  gsap.to(productImageRef.value, {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: productImageContainerRef.value,
      start: 'top 80%',
      end: 'bottom -120%',
      scrub: 0.75,
    },
  })
}

onMounted(() => {
  initAnimations()
})
</script>