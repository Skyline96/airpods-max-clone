<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GlobalNavBar from './components/GlobalNavBar.vue';
</script>

<template>
  <header class="">
    <GlobalNavBar />
    <!-- <nav id="product-nav" class="sticky top-0 z-20 bg-white/80 backdrop-saturate-[180%] backdrop-blur-[20px]">
      <div class="container max-w-screen-lg px-6 mx-auto">
        <div class="flex justify-between border-b border-black/15">
          <div class="brand">
            <a href="" class="text-xl font-semibold leading-[52px]">AirPods Max</a>
          </div>
          <div class="nav-links text-xs">
            <a href="" class="leading-[52px] pr-7">Overview</a>
            <a href="" class="leading-[52px] pr-7">Tech Specs</a>
            <a href="" class="leading-[52px] pr-7">Compare</a>
            <a href="" class="text-white bg-blue-600 px-3 pt-[3px] pb-1 rounded-full">Buy</a>
          </div>
        </div>
      </div>
    </nav> -->
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="container max-w-screen-lg mx-auto px-4 sm:px-[22px] text-xs text-[#0000008f]">
      <div class="footnotes pt-4 pb-3">
        <ol class="list-decimal px-4 sm:px-5 *:pb-[9.6px]">
          <li>
            Up to 2x more Active Noise Cancellation compared with AirPods Pro (1st generation) and AirPods 4 with Active
            Noise Cancellation.
          </li>
          <li>
            Charging requires a compatible USB‑C charger.
          </li>
          <li>Compatible hardware and software required. Works with compatible content in supported apps. Not all
            content
            available in Dolby Atmos. iPhone with TrueDepth camera required to create a personal profile for Spatial
            Audio, which will sync across Apple devices running the latest operating system software, including iOS,
            iPadOS, macOS, and tvOS.</li>
          <li>
            Requires an Apple Account and a compatible Apple device running the latest operating system software.
          </li>
          <li>
            Requires a compatible Apple device running the latest operating system software.
          </li>
          <li>
            Siri may not be available in all languages or in all areas, and features may vary by area. Compatible device
            and internet access required. Cellular data charges may apply.
          </li>
          <li>
            Testing conducted by Apple in July and August 2024 using preproduction AirPods Max paired with preproduction
            iPhone 16 Pro Max units, all with prerelease software. Testing consisted of full AirPods Max battery
            discharge
            while playing one of the following: a music playlist consisting of 358 unique audio tracks purchased from
            the
            iTunes Store (256-Kbps AAC encoding), a cellular phone call, or a 2-hour 23-minute movie purchased from the
            iTunes Store until the AirPods Max stopped playback. Volume was set to 50%, Active Noise Cancellation on,
            and
            Spatial Audio set to fixed. For movie playback only, Spatial Audio was set to head tracking. Battery life
            depends on device settings, environment, usage, and many other factors.
          </li>
          <li>
            Testing conducted by Apple in July and August 2024 using preproduction AirPods Max paired with preproduction
            iPhone 16 Pro Max units, all with prerelease software. The playlist consisted of 358 unique audio tracks
            purchased from the iTunes Store (256-Kbps AAC encoding). Volume was set to 50%, Active Noise Cancellation
            on,
            and Spatial Audio set to fixed. 5-Minute charge testing conducted with drained AirPods Max that were charged
            for 5 minutes, then audio playback was started until the AirPods Max stopped playback. Battery life depends
            on
            device settings, environment, usage, and many other factors.
          </li>
          <li>
            Battery life depends on device settings, environment, usage, and many other factors.
          </li>
          <li>
            Adaptive Audio is available on compatible devices running iOS 18, iPadOS 18, or macOS Sequoia and later when
            paired with AirPods 4 with Active Noise Cancellation or AirPods Pro 2 with the latest firmware. Device
            performance and noise control features like Active Noise Cancellation, Adaptive Audio, and Transparency can
            be
            affected by debris or earwax buildup. Clean the device regularly to maintain performance and full feature
            functionality. Refer to <a href="https://" target="_blank" rel="noopener noreferrer"
              class="text-[#000000b8] underline">support.apple.com/102672</a> for AirPods 4 cleaning instructions. Refer
            to
            <a href="https://" target="_blank" rel="noopener noreferrer"
              class="text-[#000000b8] underline">support.apple.com/120409</a> for AirPods Pro 2 cleaning instructions.
          </li>
          <li>
            The Hearing Aid feature has received FDA authorization. The Hearing Test and Hearing Aid features are
            supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or
            iPadOS 18 and later and are intended for people 18 years old or older. The Hearing Aid feature is also
            supported on a compatible Mac with macOS Sequoia and later. It is intended for people with perceived mild to
            moderate hearing loss.
          </li>
          <li>
            The Hearing Protection feature works with AirPods Pro 2 with the latest firmware when paired with a
            compatible
            iPhone, iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and later. Feature is only available in the
            U.S.
            and Canada. See <a href="https://" target="_blank" rel="noopener noreferrer"
              class="text-[#000000b8] underline">support.apple.com/120850</a> for total attenuation and more
            information. The Hearing Protection
            feature is not suitable for protection against extremely loud impulse sounds, such as gunfire, fireworks, or
            jackhammers, or against sustained sounds louder than 110 dBA.
          </li>
          <li>
            Available on compatible devices running iOS 18, iPadOS 18, or macOS Sequoia and later when paired with
            AirPods
            4, AirPods 4 with Active Noise Cancellation, or AirPods Pro 2 with the latest firmware.
          </li>
          <li>
            MagSafe charging requires a compatible MagSafe charger. Wireless charging requires a Qi‑certified wireless
            charger. AirPods Pro 2 charging case also works with the Apple Watch charger or USB‑C connector.
          </li>
          <li>
            Precision Finding requires a U1-equipped iPhone; availability varies by region.
          </li>
          <li>
            AirPods 4, AirPods 4 with Active Noise Cancellation, and AirPods Pro 2 are dust, sweat, and water resistant
            for non-water sports and exercise. Products including charging case were tested under controlled laboratory
            conditions, and have a rating of IP54 under IEC standard 60529. Dust, sweat, and water resistance are not
            permanent conditions and resistance might decrease as a result of normal wear. Do not attempt to charge when
            wet; refer to <a href="https://" target="_blank" rel="noopener noreferrer"
              class="text-[#000000b8] underline">support.apple.com/kb/HT210711</a> for cleaning and drying
            instructions.
          </li>
        </ol>
        <p class="pb-[9.6px]">
          † Apple Card Monthly Installments (ACMI) is a 0% APR payment option that is only available if you select it at
          checkout in the U.S. for eligible products purchased at Apple Store locations, <a href="https://"
            target="_blank" rel="noopener noreferrer" class="text-[#000000b8] underline">apple.com</a>, the Apple Store
          app,
          or by calling 1‑800‑MY‑APPLE, and is subject to credit approval and credit limit. See <a href="https://"
            target="_blank" rel="noopener noreferrer" class="text-[#000000b8] underline">support.apple.com/102730</a>
          for more information about eligible products. Existing customers: See your Customer Agreement for your
          variable APR. As of December 1, 2024, the variable APR on new Apple Card accounts ranges from 18.49% to
          28.74%. You must elect to use ACMI at checkout. If you buy an ACMI‑eligible product with a one-time payment on
          Apple Card at checkout, that purchase is subject to your Apple Card’s variable APR, not the ACMI 0% APR. Taxes
          and shipping on items purchased using ACMI are subject to your Apple Card’s variable APR, not the ACMI 0% APR.
          In order to buy an iPhone with ACMI, you must select one of the following carriers: AT&T, Boost Mobile,
          T‑Mobile, or Verizon. An iPhone purchased with ACMI is always unlocked, so you can switch carriers at any
          time, subject to your carrier’s terms. ACMI is not available for purchases made online at the following
          special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at
          Work for small businesses; Government and Veterans and Military Purchase Programs; or on refurbished devices.
          The last month’s payment for each product will be the product’s purchase price, less all other payments at the
          monthly payment amount. ACMI is subject to change at any time for any reason, including but not limited to
          installment term lengths and eligible products. See the <a href="https://" target="_blank"
            rel="noopener noreferrer" class="text-[#000000b8] underline">Apple Card Customer Agreement</a> for more
          information
          about ACMI.</p>
        <p class="pb-[9.6px]">
          To access and use all Apple Card features and products available only to Apple Card users, you must add Apple
          Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is
          subject to credit approval, available only for qualifying applicants in the United States, and issued by
          Goldman Sachs Bank USA, Salt Lake City Branch.</p>

        <p class="pb-[9.6px]">If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with
          questions about Apple
          Card.</p>
      </div>
      <div class="border-y border-[#00000029] pb-4 sm:py-5">
        <div class="sm:hidden">
          <details class="group border-b border-[#00000029]">
            <summary
              class="text-[#000000e0] text-sm flex items-center justify-between cursor-pointer py-[10px] marker:[font-size:0px]">
              Shop and Learn
              <svg class="h-4 w-4 rotate-0 transform group-open:rotate-180 transition-transform duration-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <ul
              class="[&>*:not(:last-child)]:mb-2 [&>*]:ps-2 [&>*]:pe-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline pt-1 pb-4">
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Store</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Mac</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">iPad</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">iPhone</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Watch</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Vision</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">AirPods</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">TV & Home</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">AirTag</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Accessories</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Gift Cards</a></li>
            </ul>
          </details>
          <details class="group border-b border-[#00000029]">
            <summary
              class="text-[#000000e0] text-sm flex items-center justify-between cursor-pointer py-[10px] marker:[font-size:0px]">
              Apple Wallet
              <svg class="h-4 w-4 rotate-0 transform group-open:rotate-180 transition-transform duration-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <ul
              class="[&>*:not(:last-child)]:mb-2 [&>*]:ps-2 [&>*]:pe-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline pt-1 pb-4">
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Wallet</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Card</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Pay</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Cash</a></li>
            </ul>
          </details>
          <details class="group border-b border-[#00000029]">
            <summary
              class="text-[#000000e0] text-sm flex items-center justify-between cursor-pointer py-[10px] marker:[font-size:0px]">
              Account
              <svg class="h-4 w-4 rotate-0 transform group-open:rotate-180 transition-transform duration-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <ul
              class="[&>*:not(:last-child)]:mb-2 [&>*]:ps-2 [&>*]:pe-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline pt-1 pb-4">
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Manage Your Apple Account</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Store Account</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">iCloud.com</a></li>
            </ul>
          </details>
          <details class="group border-b border-[#00000029]">
            <summary
              class="text-[#000000e0] text-sm flex items-center justify-between cursor-pointer py-[10px] marker:[font-size:0px]">
              Entertainment
              <svg class="h-4 w-4 rotate-0 transform group-open:rotate-180 transition-transform duration-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <ul
              class="[&>*:not(:last-child)]:mb-2 [&>*]:ps-2 [&>*]:pe-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline pt-1 pb-4">
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple One</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple TV+</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Music</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Arcade</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Fitness+</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple News+</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Podcasts</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Books</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">App Store</a></li>
            </ul>
          </details>
          <details class="group border-b border-[#00000029]">
            <summary
              class="text-[#000000e0] text-sm flex items-center justify-between cursor-pointer py-[10px] marker:[font-size:0px]">
              Apple Store
              <svg class="h-4 w-4 rotate-0 transform group-open:rotate-180 transition-transform duration-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <ul
              class="[&>*:not(:last-child)]:mb-2 [&>*]:ps-2 [&>*]:pe-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline pt-1 pb-4">
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Find a Store</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Genius Bar</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Today at Apple</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Group Reservations</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Camp</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Store App</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Certified Refurbished</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Trade In</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Financing</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Carrier Deals at Apple</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Order Status</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Shopping Help</a></li>
            </ul>
          </details>
          <details class="group border-b border-[#00000029]">
            <summary
              class="text-[#000000e0] text-sm flex items-center justify-between cursor-pointer py-[10px] marker:[font-size:0px]">
              For Business
              <svg class="h-4 w-4 rotate-0 transform group-open:rotate-180 transition-transform duration-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <ul
              class="[&>*:not(:last-child)]:mb-2 [&>*]:ps-2 [&>*]:pe-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline pt-1 pb-4">
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple and Business</a></li>
              <li><a href="https://" target="_blank" rel="noopener noreferrer">Shop for Business</a></li>
            </ul>
          </details>
          <details class="group border-b border-[#00000029]">
            <summary
              class="text-[#000000e0] text-sm flex items-center justify-between cursor-pointer py-[10px] marker:[font-size:0px]">
              For Education
              <svg class="h-4 w-4 rotate-0 transform group-open:rotate-180 transition-transform duration-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <ul
              class="[&>*:not(:last-child)]:mb-2 [&>*]:ps-2 [&>*]:pe-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline pt-1 pb-4">
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Apple and Education</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Shop for K-12</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Shop for College</a></li>
            </ul>
          </details>
          <details class="group border-b border-[#00000029]">
            <summary
              class="text-[#000000e0] text-sm flex items-center justify-between cursor-pointer py-[10px] marker:[font-size:0px]">
              For Healthcare
              <svg class="h-4 w-4 rotate-0 transform group-open:rotate-180 transition-transform duration-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <ul
              class="[&>*:not(:last-child)]:mb-2 [&>*]:ps-2 [&>*]:pe-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline pt-1 pb-4">
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Apple in Healthcare</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Mac in Healthcare</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Health on Apple Watch</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Health Records on iPhone and iPad</a></li>
            </ul>
          </details>
          <details class="group border-b border-[#00000029]">
            <summary
              class="text-[#000000e0] text-sm flex items-center justify-between cursor-pointer py-[10px] marker:[font-size:0px]">
              For Government
              <svg class="h-4 w-4 rotate-0 transform group-open:rotate-180 transition-transform duration-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <ul
              class="[&>*:not(:last-child)]:mb-2 [&>*]:ps-2 [&>*]:pe-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline pt-1 pb-4">
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Shop for Government</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Shop for Veterans and Military</a></li>
            </ul>
          </details>
          <details class="group border-b border-[#00000029]">
            <summary
              class="text-[#000000e0] text-sm flex items-center justify-between cursor-pointer py-[10px] marker:[font-size:0px]">
              Apple Values
              <svg class="h-4 w-4 rotate-0 transform group-open:rotate-180 transition-transform duration-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <ul
              class="[&>*:not(:last-child)]:mb-2 [&>*]:ps-2 [&>*]:pe-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline pt-1 pb-4">
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Accessibility</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Education</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Entertainment</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Inclusion and Diversity</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Privacy</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Racial Equity and Justice</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Supply Chain</a></li>
            </ul>
          </details>
          <details class="group border-b border-[#00000029]">
            <summary
              class="text-[#000000e0] text-sm flex items-center justify-between cursor-pointer py-[10px] marker:[font-size:0px]">
              About Apple
              <svg class="h-4 w-4 rotate-0 transform group-open:rotate-180 transition-transform duration-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <ul
              class="[&>*:not(:last-child)]:mb-2 [&>*]:ps-2 [&>*]:pe-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline pt-1 pb-4">
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Newsroom</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Apple Leadership</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Career Oppurtunities</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Investors</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Ethics & Compliance</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Events</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Contact Apple</a></li>
            </ul>
          </details>
        </div>
        <div class="hidden sm:grid sm:grid-cols-5 gap-5">
          <div class="[&>*:not(:first-child)]:pt-6">
            <div class="">
              <h3 class="text-[#000000e0] font-semibold mb-2">Shop and Learn</h3>
              <ul
                class="[&>*:not(:last-child)]:mb-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline">
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Store</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Mac</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">iPad</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">iPhone</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Watch</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Vision</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">AirPods</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">TV & Home</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">AirTag</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Accessories</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Gift Cards</a></li>
              </ul>
            </div>
            <div class="">
              <h3 class="text-[#000000e0] font-semibold mb-2">Apple Wallet</h3>
              <ul
                class="[&>*:not(:last-child)]:mb-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline">
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Wallet</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Card</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Pay</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Cash</a></li>
              </ul>
            </div>
          </div>
          <div class="[&>*:not(:first-child)]:pt-6">
            <div class="">
              <h3 class="text-[#000000e0] font-semibold mb-2">Account</h3>
              <ul
                class="[&>*:not(:last-child)]:mb-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline">
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Manage Your Apple Account</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Store Account</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">iCloud.com</a></li>
              </ul>
            </div>
            <div class="">
              <h3 class="text-[#000000e0] font-semibold mb-2">Entertainment</h3>
              <ul
                class="[&>*:not(:last-child)]:mb-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline">
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple One</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple TV+</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Music</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Arcade</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Fitness+</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple News+</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Podcasts</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Books</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">App Store</a></li>
              </ul>
            </div>
          </div>
          <div class="[&>*:not(:first-child)]:pt-6">
            <div class="">
              <h3 class="text-[#000000e0] font-semibold mb-2">Apple Store</h3>
              <ul
                class="[&>*:not(:last-child)]:mb-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline">
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Find a Store</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Genius Bar</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Today at Apple</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Group Reservations</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Camp</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Store App</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Certified Refurbished</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple Trade In</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Financing</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Carrier Deals at Apple</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Order Status</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Shopping Help</a></li>
              </ul>
            </div>
          </div>
          <div class="[&>*:not(:first-child)]:pt-6">
            <div class="">
              <h3 class="text-[#000000e0] font-semibold mb-2">For Business</h3>
              <ul
                class="[&>*:not(:last-child)]:mb-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline">
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Apple and Business</a></li>
                <li><a href="https://" target="_blank" rel="noopener noreferrer">Shop for Business</a></li>
              </ul>
            </div>
            <div class="">
              <h3 class="text-[#000000e0] font-semibold mb-2">For Education</h3>
              <ul
                class="[&>*:not(:last-child)]:mb-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline">
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Apple and Education</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Shop for K-12</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Shop for College</a></li>
              </ul>
            </div>
            <div class="">
              <h3 class="text-[#000000e0] font-semibold mb-2">For Healthcare</h3>
              <ul
                class="[&>*:not(:last-child)]:mb-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline">
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Apple in Healthcare</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Mac in Healthcare</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Health on Apple Watch</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Health Records on iPhone and iPad</a>
                </li>
              </ul>
            </div>
            <div class="">
              <h3 class="text-[#000000e0] font-semibold mb-2">For Government</h3>
              <ul
                class="[&>*:not(:last-child)]:mb-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline">
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Shop for Government</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Shop for Veterans and Military</a></li>
              </ul>
            </div>
          </div>
          <div class="[&>*:not(:first-child)]:pt-6">
            <div class="">
              <h3 class="text-[#000000e0] font-semibold mb-2">Apple Values</h3>
              <ul
                class="[&>*:not(:last-child)]:mb-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline">
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Accessibility</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Education</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Entertainment</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Inclusion and Diversity</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Privacy</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Racial Equity and Justice</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Supply Chain</a></li>
              </ul>
            </div>
            <div class="">
              <h3 class="text-[#000000e0] font-semibold mb-2">About Apple</h3>
              <ul
                class="[&>*:not(:last-child)]:mb-2 text-[#000000b8] [&>*>a:hover]:underline [&>*>a:focus-visible]:underline">
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Newsroom</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Apple Leadership</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Career Oppurtunities</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Investors</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Ethics & Compliance</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Events</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Contact Apple</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="pt-9">
          <p>More ways to shop: <a href="" class="underline text-[#0066cc]">Find an Apple Store</a> or <a href=""
              class="underline text-[#0066cc]">other retailer</a> near you. Or call <a href=""
              class="underline text-[#0066cc]">1-800-MY-APPLE</a>.</p>
        </div>
      </div>
      <div class="flex justify-between py-4">
        <span class="text-[#0000008f]">Copyright &copy; 2024 Apple Inc. All rights reserved.</span>
        <span class="text-[#000000b8]">India</span>
      </div>
    </div>
  </footer>
</template>