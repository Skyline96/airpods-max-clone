<script setup>
import { ref, watch, nextTick } from "vue";
import { gsap } from "gsap";

const isMenuOpen = ref(false);
const isMenuVisible = ref(false);
const activeGlobalNavLinkIndex = ref(null);

const glabalNavLinks = [
    {
        text: 'Store',
        subMenuGroups: [
            {
                header: 'Shop',
                elevatedLinks: [
                    { text: 'Shop the Latest', href: '' },
                    { text: 'Mac', href: '' },
                    { text: 'iPad', href: '' },
                    { text: 'iPhone', href: '' },
                    { text: 'Apple Watch', href: '' },
                    { text: 'Apple Vision Pro', href: '' },
                    { text: 'Accessories', href: '' }
                ],
                links: []
            },
            {
                header: 'Quick Links',
                links: [
                    { text: 'Find a Store', href: '' },
                    { text: 'Order Status', href: '' },
                    { text: 'Apple Trade In', href: '' },
                    { text: 'Financing', href: '' },
                    { text: 'Personal Setup', href: '' }
                ]
            },
            {
                header: 'Shop Special Stores',
                links: [
                    { text: 'Certified Refurbished', href: '' },
                    { text: 'Education', href: '' },
                    { text: 'Business', href: '' },
                    { text: 'Veterans and Military', href: '' },
                    { text: 'Government', href: '' }
                ]
            }
        ]
    },
    {
        text: 'Mac',
        subMenuGroups: [
            {
                header: 'Explore Mac',
                elevatedLinks: [
                    { text: 'Explore All Mac', href: '' },
                    { text: 'MacBook Air', href: '' },
                    { text: 'MacBook Pro', href: '' },
                    { text: 'iMac', href: '' },
                    { text: 'Mac Mini', href: '' },
                    { text: 'Mac Studio', href: '' },
                    { text: 'Mac Pro', href: '' },
                    { text: 'Displays', href: '' }
                ],
                links: [
                    { text: 'Compare Mac', href: '' },
                    { text: 'Switch from PC to Mac', href: '' },
                ]
            },
            {
                header: 'Shop Mac',
                links: [
                    { text: 'Shop Mac', href: '' },
                    { text: 'Help Me Choose', href: '' },
                    { text: 'Mac Accessories', href: '' },
                    { text: 'Apple Trade In', href: '' },
                    { text: 'Financing', href: '' },
                ]
            },
            {
                header: 'More from Mac',
                links: [
                    { text: 'Mac Support', href: '' },
                    { text: 'AppleCare+ for Mac', href: '' },
                    { text: 'macOS Sequoia', href: '' },
                    { text: 'Apple Intelligence', href: '' },
                    { text: 'Apps by Apple', href: '' },
                    { text: 'Continuity', href: '' },
                    { text: 'iCloud+', href: '' },
                    { text: 'More for Business', href: '' },
                    { text: 'Education', href: '' },
                ]
            }
        ]
    },
    {
        text: 'iPad',
        subMenuGroups: [
            {
                header: 'Explore iPad',
                elevatedLinks: [
                    { text: 'Explore All iPad', href: '' },
                    { text: 'iPad Pro', href: '' },
                    { text: 'iPad Air', href: '' },
                    { text: 'iPad', href: '' },
                    { text: 'iPad Mini', href: '' },
                    { text: 'Apple Pencil', href: '' },
                    { text: 'Keyboards', href: '' }
                ],
                links: [
                    { text: 'Compare iPad', href: '' },
                    { text: 'Why iPad', href: '' },
                ]
            },
            {
                header: 'Shop iPad',
                links: [
                    { text: 'Shop iPad', href: '' },
                    { text: 'iPad Accessories', href: '' },
                    { text: 'Apple Trade In', href: '' },
                    { text: 'Financing', href: '' },
                ]
            },
            {
                header: 'More from iPad',
                links: [
                    { text: 'iPad Support', href: '' },
                    { text: 'AppleCare+ for iPad', href: '' },
                    { text: 'iPadOS 18', href: '' },
                    { text: 'Apple Intelligence', href: '' },
                    { text: 'Apps by Apple', href: '' },
                    { text: 'iCloud+', href: '' },
                    { text: 'Education', href: '' },
                ]
            }
        ]
    },
    {
        text: 'iPhone',
        subMenuGroups: [
            {
                header: 'Explore iPhone',
                elevatedLinks: [
                    { text: 'Explore All iPhone', href: '' },
                    { text: 'iPhone 16 Pro', href: '' },
                    { text: 'iPhone 16', href: '' },
                    { text: 'iPhone 16e', href: '' },
                    { text: 'iPhone 15', href: '' },
                ],
                links: [
                    { text: 'Compare iPhone', href: '' },
                    { text: 'Switch from Android', href: '' },
                ],
            },
            {
                header: 'Shop iPhone',
                links: [
                    { text: 'Shop iPhone', href: '' },
                    { text: 'iPhone Accessories', href: '' },
                    { text: 'Apple Trade In', href: '' },
                    { text: 'Carrier Deals at Apple', href: '' },
                    { text: 'Financing', href: '' },
                ]
            },
            {
                header: 'More from iPhone',
                links: [
                    { text: 'iPhone Support', href: '' },
                    { text: 'AppleCare+ for iPhone', href: '' },
                    { text: 'iOS 18', href: '' },
                    { text: 'Apple Intelligence', href: '' },
                    { text: 'Apps by Apple', href: '' },
                    { text: 'iPhone Privacy', href: '' },
                    { text: 'iCloud+', href: '' },
                    { text: 'Wallet, Pay, Card', href: '' },
                    { text: 'Siri', href: '' },
                ]
            }
        ]
    },
    {
        text: 'Watch',
        subMenuGroups: [
            {
                header: 'Explore Watch',
                elevatedLinks: [
                    { text: 'Explore All Apple Watch', href: '' },
                    { text: 'Apple Watch Series 10', href: '' },
                    { text: 'Apple Watch Ultra 2', href: '' },
                    { text: 'Apple Watch SE', href: '' },
                    { text: 'Apple Watch Nike', href: '' },
                    { text: 'Apple Watch Hermès', href: '' },
                ],
                links: [
                    { text: 'Compare Watch', href: '' },
                    { text: 'Why Apple Watch', href: '' },
                ],
            },
            {
                header: 'Shop Watch',
                links: [
                    { text: 'Shop Apple Watch', href: '' },
                    { text: 'Apple Watch Studio', href: '' },
                    { text: 'Apple Watch Bands', href: '' },
                    { text: 'Apple Watch Accessories', href: '' },
                    { text: 'Apple Trade In', href: '' },
                    { text: 'Financing', href: '' },
                ]
            },
            {
                header: 'More from Watch',
                links: [
                    { text: 'Apple Watch Support', href: '' },
                    { text: 'AppleCare+', href: '' },
                    { text: 'watchOS 11', href: '' },
                    { text: 'Apple Watch For Your Kids', href: '' },
                    { text: 'Apps by Apple', href: '' },
                    { text: 'Apple Fitness+', href: '' },
                ]
            }
        ]
    },
    {
        text: 'Vision',
        subMenuGroups: [
            {
                header: 'Explore Vision',
                elevatedLinks: [
                    { text: 'Explore Apple Vision Pro', href: '' },
                ],
                links: [
                    { text: 'Guided Tour', href: '' },
                    { text: 'Tech Specs', href: '' },
                ],
            },
            {
                header: 'Shop Vision',
                links: [
                    { text: 'Shop Apple Vision Pro', href: '' },
                    { text: 'Apple Vision Pro Accessories', href: '' },
                    { text: 'Book a Demo', href: '' },
                    { text: 'Financing', href: '' },
                ]
            },
            {
                header: 'More from Watch',
                links: [
                    { text: 'Apple Vision Pro Support', href: '' },
                    { text: 'AppleCare+', href: '' },
                    { text: 'visionOS 2', href: '' }
                ]
            }
        ]
    },
    {
        text: 'AirPods',
        subMenuGroups: [
            {
                header: 'Explore AirPods',
                elevatedLinks: [
                    { text: 'Explore All AirPods', href: '' },
                    { text: 'AirPods 4', href: '' },
                    { text: 'AirPods Pro 2', href: '' },
                    { text: 'AirPods Max', href: '' }
                ],
                links: [
                    { text: 'Compare AirPods', href: '' }
                ],
            },
            {
                header: 'Shop AirPods',
                links: [
                    { text: 'Shop AirPods', href: '' },
                    { text: 'AirPods Accessories', href: '' }
                ]
            },
            {
                header: 'More from AirPods',
                links: [
                    { text: 'AirPods Support', href: '' },
                    { text: 'AppleCare+ for Headphones', href: '' },
                    { text: 'Hearing Health', href: '' },
                    { text: 'Apple Music', href: '' }
                ]
            }
        ]
    },
    {
        text: 'TV & Home',
        subMenuGroups: [
            {
                header: 'Explore TV & Home',
                elevatedLinks: [
                    { text: 'Explore TV & Home', href: '' },
                    { text: 'Apple TV 4K', href: '' },
                    { text: 'HomePod', href: '' },
                    { text: 'HomePod Mini', href: '' },
                ],
                links: [],
            },
            {
                header: 'Shop TV & Home',
                links: [
                    { text: 'Shop Apple TV 4K', href: '' },
                    { text: 'Shop HomePod', href: '' },
                    { text: 'Shop HomePod Mini', href: '' },
                    { text: 'Shop Siri Remote', href: '' },
                    { text: 'TV & Home Accessories', href: '' }
                ]
            },
            {
                header: 'More from TV & Home',
                links: [
                    { text: 'Apple TV Support', href: '' },
                    { text: 'HomePod Support', href: '' },
                    { text: 'AppleCare+', href: '' },
                    { text: 'Apple TV App', href: '' },
                    { text: 'Apple TV+', href: '' },
                    { text: 'Home App', href: '' },
                    { text: 'Apple Music', href: '' },
                    { text: 'Siri', href: '' },
                    { text: 'AirPay', href: '' }
                ]
            }
        ]
    },
    {
        text: 'Accessories',
        subMenuGroups: [
            {
                header: 'Shop Accessories',
                elevatedLinks: [
                    { text: 'Shop All Accessories', href: '' },
                    { text: 'Mac', href: '' },
                    { text: 'iPad', href: '' },
                    { text: 'iPhone', href: '' },
                    { text: 'Apple Watch', href: '' },
                    { text: 'Apple Vision Pro', href: '' },
                    { text: 'AirPods', href: '' },
                    { text: 'TV & Home', href: '' }
                ],
                links: [],
            },
            {
                header: 'Explore Accessories',
                links: [
                    { text: 'Made by Apple', href: '' },
                    { text: 'Beats by Dr. Dre', href: '' },
                    { text: 'AirTag', href: '' }
                ]
            }
        ]
    },
    {
        text: 'Support',
        subMenuGroups: [
            {
                header: 'Explore Support',
                elevatedLinks: [
                    { text: 'iPhone', href: '' },
                    { text: 'Mac', href: '' },
                    { text: 'iPad', href: '' },
                    { text: 'Watch', href: '' },
                    { text: 'Apple Vision Pro', href: '' },
                    { text: 'AirPods', href: '' },
                    { text: 'Music', href: '' },
                    { text: 'TV', href: '' },
                ],
                links: [
                    { text: 'Explore Support', href: '' }
                ],
            },
            {
                header: 'Get Help',
                links: [
                    { text: 'Community', href: '' },
                    { text: 'Check Coverage', href: '' },
                    { text: 'Repair', href: '' }
                ]
            },
            {
                header: 'Helpful Topics',
                links: [
                    { text: 'Get AppleCare+', href: '' },
                    { text: 'Apple Account & Password', href: '' },
                    { text: 'Billing & Subscriptions', href: '' },
                    { text: 'Accessability', href: '' },
                    { text: 'iPhone Privacy', href: '' },
                    { text: 'iCloud+', href: '' },
                    { text: 'Wallet, Pay, Card', href: '' },
                    { text: 'Siri', href: '' },
                ]
            }
        ]
    }
]

// Animation refs for hamburger menu
const bottomOpen = ref(null);
const bottomClose = ref(null);
const topOpen = ref(null);
const topClose = ref(null);

// Desktop submenu animation refs
const desktopSubmenu = ref(null);
const submenuContent = ref(null);

// Toggle menu
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    activeGlobalNavLinkIndex.value = null;
    document.body.style.setProperty("overflow", isMenuOpen.value ? "hidden" : "auto");
};

// Hamburger icon animation (mobile)
watch(isMenuOpen, (newState) => {
    if (newState) {
        bottomOpen.value?.beginElement();
        topOpen.value?.beginElement();
    } else {
        bottomClose.value?.beginElement();
        topClose.value?.beginElement();
    }
});

// Animate desktop submenu height and fade on content change
let lastHeight = 0;
watch(activeGlobalNavLinkIndex, async (newIndex, oldIndex) => {
    if (
        desktopSubmenu.value &&
        submenuContent.value &&
        isMenuOpen.value &&
        newIndex !== null &&
        oldIndex !== null &&
        newIndex !== oldIndex
    ) {
        // 1. Set container height to current height
        lastHeight = desktopSubmenu.value.offsetHeight;
        desktopSubmenu.value.style.height = lastHeight + "px";

        // 2. Fade out current content first
        gsap.to(submenuContent.value, {
            opacity: 0,
            duration: 0.1,
            ease: "power2.in"
        });

        // 3. Wait for DOM update
        await nextTick();

        // 4. Measure new content height
        const newHeight = submenuContent.value.offsetHeight;

        // 5. Create timeline for coordinated animations
        const tl = gsap.timeline({
            onComplete: () => {
                desktopSubmenu.value.style.height = "auto";
            }
        });

        // 6. Animate height and fade in content
        tl.to(desktopSubmenu.value, {
            height: newHeight,
            duration: 0.3,
            ease: "power2.inOut"
        })
        .fromTo(submenuContent.value, 
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power2.out" },
            "-=0.2"
        ); // Start fade-in slightly before height animation completes
    }
});

// Animate fade/slide in on first open and out on close
watch(isMenuOpen, async (open, prevOpen) => {
    if (
        open &&
        desktopSubmenu.value &&
        submenuContent.value &&
        activeGlobalNavLinkIndex.value !== null &&
        !prevOpen
    ) {
        // Show the menu immediately
        isMenuVisible.value = true;
        
        // Set initial state
        gsap.set(desktopSubmenu.value, { opacity: 1, y: 0, height: 0 });
        gsap.set(submenuContent.value, { opacity: 0, y: -20 });

        // Wait for DOM update and measure height
        await nextTick();
        const newHeight = submenuContent.value.offsetHeight;

        // Animate height and content
        gsap.to(desktopSubmenu.value, {
            height: newHeight,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                desktopSubmenu.value.style.height = "auto";
            }
        });
        gsap.to(submenuContent.value, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    }
    // On close, animate height to 0 and fade out
    if (!open && prevOpen && desktopSubmenu.value) {
        const currentHeight = desktopSubmenu.value.offsetHeight;
        gsap.set(desktopSubmenu.value, { height: currentHeight });
        
        gsap.to(desktopSubmenu.value, {
            height: 0,
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                desktopSubmenu.value.style.height = "auto";
                isMenuVisible.value = false;
            }
        });
    }
});
</script>

<template>
    <nav id="global-nav" class="absolute top-0 z-10 w-full bg-[#fafafc]"
        @mouseleave="() => { isMenuOpen = false; activeGlobalNavLinkIndex = null }">
        <div class="hidden md:block container max-w-screen-lg px-6 mx-auto">
            <div class="flex justify-between text-xs text-black/80 font-medium">
                <a href="" class="leading-[44px] pr-2">
                    <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z">
                        </path>
                    </svg>
                </a>
                <a v-for="(glabalNavLink, index) in glabalNavLinks" :key="index" href="" class="leading-[44px] px-2"
                    @mouseenter="() => { activeGlobalNavLinkIndex = index; isMenuOpen = true; isMenuVisible = true }">
                    {{ glabalNavLink.text }}
                </a>
                <a href="" class="leading-[44px] px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44">
                        <path
                            d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z">
                        </path>
                    </svg>
                </a>
                <a href="" class="leading-[44px] pl-2">
                    <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
        <!-- Desktop Submenu: always rendered, only content changes -->
        <div
            class="hidden md:block absolute top-full left-0 w-full bg-white border-t border-gray-200 z-20"
            ref="desktopSubmenu"
            v-show="isMenuVisible"
            style="overflow: hidden"
        >
            <div
                :key="activeGlobalNavLinkIndex"
                ref="submenuContent"
            >
                <div v-if="activeGlobalNavLinkIndex !== null">
                    <div class="container max-w-screen-lg mx-auto px-6 py-10">
                        <div class="flex flex-row">
                            <div v-for="(subMenuGroup, index) in glabalNavLinks[activeGlobalNavLinkIndex].subMenuGroups" :key="index"
                                class="pe-[44px] last:pe-0">
                                <h2 class="text-xs text-[rgb(110,110,115)] leading-normal pb-4">
                                    {{ subMenuGroup.header }}
                                </h2>
                                <ul v-if="subMenuGroup.elevatedLinks" class="mb-4">
                                    <li v-for="(elevatedLink, index) in subMenuGroup.elevatedLinks" :key="index">
                                        <a href=""
                                            class="block text-2xl leading-snug font-semibold">{{
                                                elevatedLink.text }}</a>
                                    </li>
                                </ul>
                                <ul v-if="subMenuGroup.links">
                                    <li v-for="(groupLink, index) in subMenuGroup.links" :key="index"><a href=""
                                            class="text-xs leading-normal font-semibold">{{
                                                groupLink.text }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative w-full max-w-full h-fit bg-[#fafafc] z-[1]">
            <ul class="md:hidden absolute top-0 w-full flex pe-12 text-xs text-black/80 font-medium -z-[1]">
                <li class="flex-1">
                    <a href="" class="flex justify-center items-center h-12 w-12">
                        <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z">
                            </path>
                        </svg>
                    </a>
                </li>
                <li class="">
                    <a href="" class="flex justify-center items-center h-12 w-12">
                        <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z">
                            </path>
                        </svg>
                    </a>
                </li>
                <li class="">
                    <a href="" class="flex justify-center items-center h-12 w-12 px-2">
                        <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z">
                            </path>
                        </svg>
                    </a>
                </li>
            </ul>
            <div :class="{ 'bg-[#fafafc]': isMenuOpen }"
                class="md:hidden w-full flex items-center justify-between z-[10]">
                <button class="w-12 h-12 p-2 flex items-center justify-center"
                    :class="activeGlobalNavLinkIndex !== null ? 'visible' : 'invisible'" aria-label="Back to main menu"
                    @click="activeGlobalNavLinkIndex = null">
                    <svg height="48" viewBox="0 0 9 48" width="9" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m1.5618 24.0621 6.5581-6.4238c.2368-.2319.2407-.6118.0088-.8486-.2324-.2373-.6123-.2407-.8486-.0088l-7 6.8569c-.1157.1138-.1807.2695-.1802.4316.001.1621.0674.3174.1846.4297l7 6.7241c.1162.1118.2661.1675.4155.1675.1577 0 .3149-.062.4326-.1846.2295-.2388.2222-.6187-.0171-.8481z">
                        </path>
                    </svg>
                </button>
                <button class="w-12 h-12 p-2 flex items-center justify-center" aria-label="Toggle menu"
                    :aria-expanded="isMenuOpen" @click="toggleMenu">
                    <svg class="transition-transform duration-300" width="18" height="18" viewBox="0 0 18 18">
                        <polyline fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                            stroke-linejoin="round" points="2 12, 16 12">
                            <animate ref="bottomOpen" attributeName="points" keyTimes="0;0.5;1" dur="0.24s"
                                begin="indefinite" fill="freeze" keySplines="0.42,0,1,1;0,0,0.58,1"
                                values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5" />
                            <animate ref="bottomClose" attributeName="points" keyTimes="0;0.5;1" dur="0.24s"
                                begin="indefinite" fill="freeze" keySplines="0.42,0,1,1;0,0,0.58,1"
                                values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12" />
                        </polyline>
                        <polyline fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                            stroke-linejoin="round" points="2 5, 16 5">
                            <animate ref="topOpen" attributeName="points" keyTimes="0;0.5;1" dur="0.24s"
                                begin="indefinite" fill="freeze" keySplines="0.42,0,1,1;0,0,0.58,1"
                                values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15" />
                            <animate ref="topClose" attributeName="points" keyTimes="0;0.5;1" dur="0.24s"
                                begin="indefinite" fill="freeze" keySplines="0.42,0,1,1;0,0,0.58,1"
                                values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5" />
                        </polyline>
                    </svg>
                </button>
            </div>
            <div v-show="isMenuOpen" class="md:hidden bg-white pt-[50px] md:pt-0 px-12 overflow-auto">
                <div v-if="activeGlobalNavLinkIndex === null">
                    <button v-for="(glabalNavLink, index) in glabalNavLinks" :key="index"
                        class="block text-[28px] leading-[47px] font-semibold"
                        @click="activeGlobalNavLinkIndex = index">{{
                            glabalNavLink.text }}</button>
                </div>
                <div v-else-if="glabalNavLinks[activeGlobalNavLinkIndex].subMenuGroups && activeGlobalNavLinkIndex !== null"
                    class="flex flex-col md:flex-row md:max-w-screen-lg md:mx-auto md:pt-10 md:pb-[84px] md:px-6">
                    <div v-for="(subMenuGroup, index) in glabalNavLinks[activeGlobalNavLinkIndex].subMenuGroups" :key="index"
                        class="pb-[50px] md:pb-0 md:pe-[44px] last:pb-20 md:last:pb-0">
                        <h2 :class="{ 'hidden md:block': subMenuGroup.hasOwnProperty('elevatedLinks') }"
                            class="text-[rgb(110,110,115)] text-[17px] md:text-xs leading-tight md:leading-normal pb-4">
                            {{ subMenuGroup.header }}
                        </h2>
                        <ul v-if="subMenuGroup.elevatedLinks" class="mb-4">
                            <li v-for="(elevatedLink, index) in subMenuGroup.elevatedLinks" :key="index">
                                <a href=""
                                    class="block text-[28px] md:text-2xl leading-[47px] md:leading-snug font-semibold">{{
                                        elevatedLink.text }}</a>
                            </li>
                        </ul>
                        <ul v-if="subMenuGroup.links">
                            <li v-for="(groupLink, index) in subMenuGroup.links" :key="index"><a href=""
                                    class="text-lg md:text-xs leading-[35px] md:leading-normal font-semibold">{{
                                        groupLink.text }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>