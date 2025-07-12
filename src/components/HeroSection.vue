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
</template>

<script setup>
// Component logic can be added here if needed
</script> 