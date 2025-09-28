// Sticky Navigation Bar
const heroSectionEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    rootMargin: "-86px",
    root: null,
    threshold: 0,
  }
);

obs.observe(heroSectionEl);

// Mobile Navigation
const mobileNavBtnEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");

mobileNavBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("mobile-nav");
});

// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //   Scroll to sections
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Closing menu bar
    if (link.classList.contains("nav-link")) {
      headerEl.classList.toggle("mobile-nav");
    }
  });
});

// Gallery Filter Menu
const sectionGalleryEl = document.querySelector(".section-gallery");
const filterNavBtnEl = document.querySelector(".filter-nav-btn");

filterNavBtnEl.addEventListener("click", function () {
  sectionGalleryEl.classList.toggle("hide-file");
});
