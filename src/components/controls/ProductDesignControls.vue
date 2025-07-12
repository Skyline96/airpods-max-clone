<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div v-if="visible" class="fixed bottom-7 left-1/2 transform -translate-x-1/2 z-50">
      <div class="h-14 bg-[rgba(232,232,232,0.7)] backdrop-blur rounded-[100vmax] px-1 overflow-hidden focus-within:focus-visible:ring-2 focus-within:focus-visible:ring-blue-500 focus-within:focus-visible:ring-offset-2">
        <button @click="toggleModal"
          class="group h-full inline-flex items-center gap-4 ms-5 me-2 focus:outline-none">
          <span class="text-sm sm:text-[17px] font-semibold">Dive deeper into design</span>
          <span class="relative h-9 w-9 rounded-[100vmax] bg-blue-500">
            <svg class="icon_control_plus fill-white opacity-80 group-hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path
                d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z">
              </path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </Transition>

  <!-- Modal -->
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
</template>

<script setup>
import { useModal } from '@/composables/useModal'
import CloseButton from '@/components/ui/CloseButton.vue'

defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const { isModalOpen: isProductDesignModalOpen, toggleModal, closeModal } = useModal()
</script> 