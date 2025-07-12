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
            <div class="sticky bottom-8 inset-x-0 max-w-max mx-auto mt-8 text-center h-14 z-10">
                <button @click="toggleModal"
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
                                            <span class="text-[#1d1d1f]">Digital Crown.</span> Press the Digital Crown
                                            to play and pause
                                            music or mute and unmute yourself on calls, and press twice to skip between
                                            tracks or end calls.
                                            Turn it to precisely control volume.
                                        </p>
                                        <div class="absolute bottom-0 z-0 flex justify-center">
                                            <picture>
                                                <source media="(max-width: 480px)"
                                                    srcset="/images/design/modal/design_bc_digital_crown_xsmall_2x.jpg 2x">
                                                <img src="/images/design/modal/design_bc_digital_crown_xlarge.jpg"
                                                    alt=""
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
                                            <span class="text-[#1d1d1f]">Canopy.</span> The canopy spanning the headband
                                            is made from a
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
                                            <span class="text-[#1d1d1f]">Cushions.</span> Crafted with acoustically
                                            engineered memory foam
                                            and a custom-designed mesh textile, the pillow-like softness of the ear
                                            cushions gently creates
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
                                            <span class="text-[#1d1d1f]">Cups.</span> The beautifully anodized aluminum
                                            cups feature a
                                            revolutionary mechanism that allows each cup to rotate independently and
                                            balance pressure.
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
                                            <span class="text-[rgb(245,245,247)]">Telescoping arms.</span> The
                                            telescoping arms smoothly
                                            extend from
                                            the stainless steel frame — staying where you set them for a consistent fit
                                            and seal.
                                        </p>
                                        <div class="absolute inset-0 z-0 flex justify-center">
                                            <picture>
                                                <source media="(max-width: 480px)"
                                                    srcset="/images/design/modal/design_bc_telescoping_arms_xsmall_2x.jpg 2x">
                                                <img src="/images/design/modal/design_bc_telescoping_arms_large.jpg"
                                                    alt=""
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
                                            <span class="text-[#1d1d1f]">Smart Case.</span> When stored in their soft,
                                            slim Smart Case,
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
                            <CloseButton @close="closeModal" class="text-white" />
                        </div>
                    </div>
                </Teleport>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useModal } from '@/composables/useModal'
import CloseButton from '@/components/CloseButton.vue'

const { isModalOpen: isProductDesignModalOpen, toggleModal, closeModal } = useModal()
</script>