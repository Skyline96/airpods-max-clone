<template>
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
                    designed for an uncompromising fit with unequalled comfort that creates the optimal acoustic seal
                    for many
                    different head shapes — fully immersing you in every sound.</p>
            </div>

        </div>
    </section>
</template>

<script setup>
// ProductDesignSection component - modal functionality moved to ProductDesignControls component
</script>