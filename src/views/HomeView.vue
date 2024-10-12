<script setup>
</script>

<template>
  <main>
    <section class="hero relative mb-28">
      <div class="video-wrapper h-[103vh]">
        <video src="/videos/hero.mp4" loop muted autoplay class="w-full h-full object-cover"></video>
      </div>
      <div class="absolute w-full bottom-0 z-0">
        <div class="absolute w-full h-full top-0 -z-10 bg-white/50 backdrop-blur-[20px] backdrop-saturate-100" style="mask-image: linear-gradient(180deg, transparent 25%, black 100%);"></div>
        <div class="w-[87.5%] max-w-[1680px] mx-auto pb-20 z-10">
          <div class="product flex justify-between items-end">
            <div class="product-details">
              <h1 class="product-name text-3xl mt-2 font-semibold">AirPods Max</h1>
              <h2 class="product-desc text-[80px] leading-none tracking-tighter mt-2 font-semibold">Symphonic boom.</h2>
            </div>
            <div class="product-price flex items-center gap-5 p-3 ps-6 rounded-[100vmax] bg-[rgba(232,232,232,.5)] backdrop-blur-lg">
              <p class="text-lg leading-tight tracking-wider font-semibold mb-[2px]">₹59900.00*</p>
              <a href="http://" target="_blank" rel="noopener noreferrer" class="text-lg leading-tight tracking-tight bg-blue-600 text-white px-5 py-2 rounded-[100vmax]"><p class="mb-[2px]">Buy</p></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
