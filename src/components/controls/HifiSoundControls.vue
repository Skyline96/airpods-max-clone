<template>
  <BaseControls :visible="visible" bg-color="bg-[rgba(66,66,69,0.7)] text-white">
    <div class="h-full flex items-center justify-center">
      <button @click="toggleModal"
        class="h-full inline-flex items-center gap-4 ms-5 me-2 focus:outline-none">
        <span class="text-sm sm:text-[17px] font-semibold">Learn more about high-fidelity audio</span>
        <span class="relative h-9 w-9 rounded-[100vmax] bg-blue-500">
          <svg class="icon_control_plus fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path
              d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z">
            </path>
          </svg>
        </span>
      </button>
    </div>
  </BaseControls>

  <!-- Modal -->
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
          <CloseButton @close="closeModal" bg-color="bg-white" class="text-[rgb(29,29,31)]" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, useTemplateRef, watch, nextTick } from 'vue'
import { useModal } from '@/composables/useModal'
import CloseButton from '@/components/ui/CloseButton.vue'
import BaseControls from '@/components/controls/BaseControls.vue'

defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const { isModalOpen: isHifiSoundModalOpen, toggleModal, closeModal } = useModal()

const hifiDetailsTabs = [
  {
    id: 'microphones',
    title: 'Microphones',
    description: 'To cancel unwanted external noise, AirPods Max use six outward-facing microphones to detect noise in your environment, and two inward-facing microphones to measure what you\'re hearing. Beamforming microphones help isolate your voice on phone calls, so it\'s heard clearly — even in windy situations.',
    imgSrc: '/images/hifi-sound/modal/audio_bc_microphone_large.png'
  },
  {
    id: 'driver',
    title: 'Driver',
    description: 'The Apple-designed dynamic driver produces an extended frequency range that uncovers the rich details of every sound — delivering your favorite songs with previously unheard texture and accuracy.',
    imgSrc: '/images/hifi-sound/modal/audio_bc_driver_large.png'
  },
  {
    id: 'playback',
    title: 'Distortionless Playback',
    description: 'Modeled after those in high-end floor-standing speakers, the driver\'s dual-neodymium ring magnet motor minimizes total harmonic distortion across the entire audible range. The result is consistently clear playback, even at full volume.',
    imgSrc: '/images/hifi-sound/modal/audio_bc_distortionless_playback_large.png'
  }
]

const hifiDetailsTabRefs = useTemplateRef('hifi_details_tabs')
const activeTabIndex = ref(0)
const tabHighlightWidth = ref(0)
const tabHighlightLeft = ref(0)

const setTabPosition = () => {
  if (hifiDetailsTabRefs.value) {
    const currentTab = hifiDetailsTabRefs.value[activeTabIndex.value]
    tabHighlightLeft.value = currentTab?.offsetLeft || 0
    tabHighlightWidth.value = currentTab?.clientWidth || 0
  }
}

watch([hifiDetailsTabRefs, activeTabIndex], () => {
  nextTick(() => {
    setTabPosition()
  })
})

const setActiveTab = (index) => {
  activeTabIndex.value = index
}

const isTabActive = (index) => {
  return activeTabIndex.value === index
}
</script> 