# Sumire's Portfolio & Web Experiments

A collection of interactive web experiences and experiments, featuring scroll-triggered animations, minimalist design, and engaging storytelling.

## 🌟 Featured Projects

### Karpathy Study Tips - Interactive Scroll Website

An immersive single-page scroll website showcasing AI pioneer Andrej Karpathy's battle-tested study strategies and exam tips.

**Live Demo**: [karpathy_study_tips_scroll_website.html](./karpathy_study_tips_scroll_website.html)

#### Features

- **10 Structured Sections**: From sleep optimization to life wisdom beyond grades
- **Minimalist Black & White Design**: High-contrast, distraction-free reading experience
- **GSAP ScrollTrigger Animations**: 7 types of smooth scroll-triggered effects
  - Section number pinning with subtle scaling
  - Staggered content fade-in with slide effects
  - Mask reveal animations for quotes
  - Automatic navigation highlighting
  - CTA button shine sweep effect
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Adaptive Content**: Balanced information density with visual flow

#### Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern layouts with Flexbox, Grid, and custom animations
- **Vanilla JavaScript**: No framework dependencies
- **GSAP 3.x**: Industry-standard animation library
  - ScrollTrigger plugin for scroll-based animations
  - ScrollToPlugin for smooth navigation

#### Content Highlights

The website covers Karpathy's proven strategies including:

1. **Sleep as a Superpower**: Why 7.5 hours beats all-nighters
2. **Strategic Planning**: The big-picture approach to exam prep
3. **Active Recall**: The gap between "understanding" and "reproducing"
4. **Collaboration Tactics**: When to study solo vs. with peers
5. **Exam Day Optimization**: Coffee timing, food intake, last-minute cramming
6. **Test-Taking Psychology**: Skip strategies, question scanning, never leave early
7. **Grader Mindset**: How to communicate effectively on paper
8. **Life Beyond Grades**: The ultimate wisdom on real-world skills

## 📁 Project Structure

```
sumire.github.io/
├── README.md                                    # Project documentation
├── karpathy_study_tips_scroll_website.html     # Karpathy study tips website
└── [other projects to be added]
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/howjerry/sumire.github.io.git
   cd sumire.github.io
   ```

2. **Open any HTML file in your browser**:
   ```bash
   # macOS
   open karpathy_study_tips_scroll_website.html

   # Linux
   xdg-open karpathy_study_tips_scroll_website.html

   # Windows
   start karpathy_study_tips_scroll_website.html
   ```

3. **Or serve with a local server** (optional):
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (with http-server)
   npx http-server
   ```

## 🎨 Design Philosophy

### Minimalism First

- Pure black (#000000) and white (#FFFFFF) color palette
- Maximum whitespace for breathing room
- Typography as the primary visual element
- Content over decoration

### Performance Optimized

- Single-file architecture (no external dependencies except CDN libraries)
- GPU-accelerated animations using `transform` and `opacity`
- Responsive media queries with simplified mobile animations
- Lazy loading of animation effects

### Accessibility Considerations

- Semantic HTML5 structure
- Proper heading hierarchy
- High contrast ratios (21:1 for black on white)
- Keyboard navigation support
- Reduced motion support (can be enhanced further)

## 📝 Development Notes

### Animation Architecture

All animations use GSAP's ScrollTrigger with the following patterns:

- **Pin Effects**: Large section numbers stay fixed during scroll
- **Stagger Animations**: Sequential reveals with 0.15s delays
- **Responsive Animations**: Desktop gets full effects, mobile gets simplified versions
- **Easing Functions**: Carefully chosen for weight and naturalness
  - `power4.out` for headings (heavier feel)
  - `power3.out` for content (lighter feel)
  - `power2.inOut` for transitions

### Browser Compatibility

- **Modern Browsers**: Full support for Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Fallbacks**: Graceful degradation for older browsers (no animations, but content remains accessible)

## 🙏 Credits

### Content

- **Original Content**: [Andrej Karpathy](https://karpathy.ai/) - AI researcher, educator, and former Tesla AI Director
- **Content Adaptation**: Curated and structured for web presentation

### Technologies

- **GSAP**: [GreenSock Animation Platform](https://greensock.com/gsap/)
- **Fonts**: System UI fonts for optimal performance and native feel

### Tools

- **Development**: Claude Code (AI-assisted development)
- **Design Framework**: Custom Master Design Framework for scroll websites

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/howjerry/sumire.github.io/issues).

### Development Workflow

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📧 Contact

**Sumire** - [@howjerry](https://github.com/howjerry)

**Project Link**: [https://github.com/howjerry/sumire.github.io](https://github.com/howjerry/sumire.github.io)

---

**Built with ❤️ using HTML, CSS, JavaScript, and GSAP**

*Last updated: 2025-10-21*
