# AirPods Max UI Clone

A visually stunning and responsive recreation of the Apple AirPods Max user interface, built using Vue 3 and Vite. This project demonstrates modern web development practices with a focus on performance, accessibility, and user experience.

## ✨ Features

- **Pixel-perfect Design**: Faithful recreation of Apple's design language
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Smooth animations and transitions
- **Performance Optimized**: Lazy loading, code splitting, and efficient bundling
- **Accessibility**: WCAG compliant with proper ARIA attributes
- **Modern Tech Stack**: Vue 3, Vite, Tailwind CSS, Swiper.js

## 🛠 Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Language:** JavaScript
- **Carousel:** Swiper.js
- **Icons:** Custom SVG icons
- **Fonts:** SF Pro Display (Apple's system font)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/airpods-max-clone.git
cd airpods-max-clone
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run analyze` - Analyze bundle size

## 🏗 Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── GlobalNavBar.vue
│   ├── HeroSection.vue
│   ├── LazyImage.vue
│   └── AccessibleButton.vue
├── composables/         # Vue 3 composables
│   └── useSwiper.js
├── data/               # Static data and constants
│   └── airpodsData.js
├── views/              # Page components
│   ├── HomeView.vue
│   └── AboutView.vue
├── router/             # Vue Router configuration
├── assets/             # Static assets
└── main.js            # App entry point
```

## 🎨 Design System

The project uses a custom Tailwind configuration that matches Apple's design system:

- **Colors**: Apple's official color palette
- **Typography**: SF Pro Display with proper font weights and sizes
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth transitions and micro-interactions
- **Backdrop Blur**: Apple-style glassmorphism effects

## ♿ Accessibility

- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px, 1440px
- Optimized images for different screen sizes
- Touch-friendly interactions

## 🚀 Performance

- Lazy loading of images and components
- Code splitting with dynamic imports
- Optimized bundle size
- Efficient asset loading
- Service worker ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes only. All Apple trademarks and copyrights belong to Apple Inc.

## 🙏 Acknowledgments

- Apple Inc. for the original design inspiration
- Vue.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Swiper.js for the carousel functionality

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.
