const baseUrl = import.meta.env.BASE_URL

export const colorVariants = [
  { colorName: 'midnight', colorShadeLight: '#2a3139', colorShadeDark: '#22252a' },
  { colorName: 'starlight', colorShadeLight: '#ccbeb1', colorShadeDark: '#e9e1d4' },
  { colorName: 'blue', colorShadeLight: '#91a9b5', colorShadeDark: '#64727d' },
  { colorName: 'purple', colorShadeLight: '#afa6bb', colorShadeDark: '#dad7e0' },
  { colorName: 'orange', colorShadeLight: '#e2a48d', colorShadeDark: '#ffc09d' }
]

export const highlightsSlides = [
  {
    id: 1,
    title: 'The ultimate over-ear personal listening experience — now in fresh new colors.',
    image: {
      mobile: '/images/colors_static_xsmall_2x.jpg',
      desktop: '/images/colors_static_xlarge.jpg'
    },
    position: 'center'
  },
  {
    id: 2,
    title: 'High-fidelity sound. Exhilarating audio with deep bass, expansive mids, and crisp highs.',
    image: {
      mobile: '/images/hifi_static_xsmall_2x.jpg',
      desktop: '/images/hifi_static_xlarge.jpg'
    },
    position: 'left'
  },
  {
    id: 3,
    title: 'Pro-level Active Noise Cancellation. Removes unwanted noise so you can immerse yourself in the music.',
    image: {
      mobile: '/images/anc_endframe_xsmall_2x.jpg',
      desktop: '/images/anc_startframe_xlarge.jpg'
    },
    position: 'right'
  },
  {
    id: 4,
    title: 'Over-ear design. From canopy to cushion, built for unequaled fit and comfort.',
    image: {
      mobile: '/images/design_static_xsmall_2x.jpg',
      desktop: '/images/design_static_xlarge.jpg'
    },
    position: 'right'
  },
  {
    id: 5,
    title: 'USB‑C. Charging is fast and easy with the one‑cable convenience of USB‑C.',
    image: {
      mobile: '/images/usbc_static_xsmall_2x.jpg',
      desktop: '/images/usbc_static_xlarge.jpg'
    },
    position: 'center'
  }
]

export const hifiDetailsTabs = [
  {
    id: 'microphones',
    title: 'Microphones',
    description: 'To cancel unwanted external noise, AirPods Max use six outward-facing microphones to detect noise in your environment, and two inward-facing microphones to measure what you\'re hearing. Beamforming microphones help isolate your voice on phone calls, so it\'s heard clearly — even in windy situations.',
    imgSrc: `${baseUrl}images/hifi-sound/modal/audio_bc_microphone_large.png`
  },
  {
    id: 'driver',
    title: 'Driver',
    description: 'The Apple-designed dynamic driver produces an extended frequency range that uncovers the rich details of every sound — delivering your favorite songs with previously unheard texture and accuracy.',
    imgSrc: `${baseUrl}images/hifi-sound/modal/audio_bc_driver_large.png`
  },
  {
    id: 'playback',
    title: 'Distortionless Playback',
    description: 'Modeled after those in high-end floor-standing speakers, the driver\'s dual-neodymium ring magnet motor minimizes total harmonic distortion across the entire audible range. The result is consistently clear playback, even at full volume.',
    imgSrc: `${baseUrl}images/hifi-sound/modal/audio_bc_distortionless_playback_large.png`
  }
]

export const whyAppleSlides = [
  {
    id: 1,
    icon: `${baseUrl}images/why-apple/icon_emoji_face_grinning_large.png`,
    title: 'Personalize your AirPods for free.',
    description: 'Engrave your AirPods with your initials or favorite emoji — free. Only at Apple.',
    modalContent: {
      topic: 'Engraving',
      headline: 'Add a message that lasts.',
      summary: 'Choose from new engraving options. It\'s the perfect way to personalize your AirPods. Add a special message, name, or birthday. Even combine text and numbers with your favorite emoji.',
      linkText: 'Learn more',
      link: ''
    }
  },
  {
    id: 2,
    icon: `${baseUrl}images/why-apple/icon_truck_box_large.png`,
    title: 'Get flexible delivery and easy pickup.',
    description: 'Choose 2‑hour delivery from an Apple Store, free delivery, or easy pickup options.',
    modalContent: {
      topic: 'Delivery and Pickup',
      headline: 'Flexible delivery and pickup options.',
      summary: 'Get your new Apple products quickly and easily with 2‑hour delivery from an Apple Store, free next‑day delivery, or convenient Apple pickup options.',
      linkText: 'Learn more',
      link: ''
    }
  },
  {
    id: 3,
    icon: `${baseUrl}images/why-apple/icon_applecard_large.png`,
    title: 'Pay over time, interest‑free.',
    description: 'When you choose to check out with Apple Card Monthly Installments.',
    modalContent: {
      topic: 'Ways to Buy',
      headline: 'Apple Card Monthly Installments',
      summary: 'Pay for your new AirPods over time, interest‑free with Apple Card.† Simply choose to check out with Apple Card Monthly Installments as your payment option when you make your purchase. And enjoy 3% Daily Cash back, all up front. Terms apply.',
      linkText: 'Learn more',
      link: ''
    }
  },
  {
    id: 4,
    icon: `${baseUrl}images/why-apple/icon_message_and_message_large.png`,
    title: 'Shop live with a Specialist.',
    description: 'Let us guide you live over video and answer all of your questions.',
    modalContent: {
      topic: 'Guided Video Shopping',
      headline: 'Shop live with a Specialist.',
      summary: 'We can help you choose the product you need while guiding you through the online Apple Store. You won\'t appear on camera. Available 7 a.m.–7 p.m. PT.',
      linkText: 'Shop together with a Specialist',
      link: ''
    }
  },
  {
    id: 5,
    icon: `${baseUrl}images/why-apple/icon_app_applestore_large.png`,
    title: 'Explore a shopping experience designed around you.',
    description: 'Use the Apple Store app to get a more personal way to shop.',
    modalContent: {
      topic: 'Apple Store App',
      headline: 'Shop in the Apple Store app, tailored specifically for you.',
      summary: 'Get personalized product recommendations, compare models, access your Saved Items, and track your orders. Plus, opt in today to get updates on new products, promotions, flexible payment options, and store events.',
      extra: 'Scan the QR code to get started.',
      extraImage: `${baseUrl}images/why-apple/boc_qr_code_large.jpg`,
      linkText: '',
      link: ''
    }
  }
] 