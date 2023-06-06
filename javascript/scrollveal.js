const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  origin: "bottom",
  duration: 1000,
  desktop: true,
  mobile: true,
};
// Hero Section
ScrollReveal().reveal(".hero-title", {
  ...defaultProps,
  delay: 500,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});
ScrollReveal().reveal(".name", {
  ...defaultProps,
  distance: "0px",
  delay: 700,
  scale: 0,
});
ScrollReveal().reveal(".hero-language", {
  ...defaultProps,
  distance: "0px",
  delay: 900,
  scale: 0,
});
ScrollReveal().reveal(".hero-cta", {
  ...defaultProps,
  delay: 1200,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});
ScrollReveal().reveal(".scroll-down-link", {
  ...defaultProps,
  delay: 1500,
  origin: "top",
});

/* About Section */
ScrollReveal().reveal(".section-title", {
  ...defaultProps,
  delay: 400,
  distance: "0px",
});
ScrollReveal().reveal(".firstproject-wrapper__image", {
  ...defaultProps,
  delay: 600,
  scale: 0.5,
});

ScrollReveal().reveal(".firstproject-wrapper__text", {
  ...defaultProps,
  delay: 600,
  distance: "100px",
  origin: window.innerWidth > 768 ? "left" : "top",
});

/* Projects Section */
ScrollReveal().reveal(".project-wrapper__text", {
  ...defaultProps,
  delay: 600,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});

ScrollReveal().reveal(".project-wrapper__image", {
  ...defaultProps,
  delay: 600,
  scale: 0.9,
  origin: window.innerWidth > 768 ? "right" : "bottom",
});

/* Contact Section */
ScrollReveal().reveal(".lastproject-wrapper__image", {
  ...defaultProps,
  delay: 600,
  scale: 0.5,
});

ScrollReveal().reveal(".lastproject-wrapper__text", {
  ...defaultProps,
  delay: 600,
  distance: "100px",
  origin: window.innerWidth > 768 ? "left" : "top",
});

ScrollReveal().reveal(".fa", {
  ...defaultProps,
  delay: 500,
  interval: 100,
});
