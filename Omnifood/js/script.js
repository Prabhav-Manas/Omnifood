// const h1 = document.querySelector(".primary-heading");

// h1.addEventListener("click", function () {
//   h1.textContent = "Prabhav Manas";
//   h1.style.backgroundColor = "aqua";
// });

// console.log("I am Prabhav Manas.");

// *******************************************************************************************************
// *******************************************************************************************************
// *******************************************************************************************************
// *******************************************************************************************************
// *******************************************************************************************************

// ********** FOR FIXING THE YEAR IN COPYRIGHT IN FOOTER***********
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// *********FOR MOBILE NAVIGATION (MENU BAR IN TOP-RIGHT CORNER)**********
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// ********** FOR SCROLLING BECAUSE SCROLL-BEHAVIOUR PROPERTY DOES NOT WORK IN SAFARI BROWSER*********
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const hrefEl = link.getAttribute("href");

    // SCROLL BACK TO THE TOP
    if (hrefEl === "#") {
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });
    }

    // SCROLL THE OTHER LINK
    if (hrefEl !== "#" && hrefEl.startsWith("#")) {
      const sectionEl = document.querySelector(hrefEl);
      sectionEl.scrollIntoView({ behaviour: "smooth" });
      // console.log(sectionEl);
    }

    // CLOSE THE main-nav
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// ********** FOR STICKY-NAV*********
// const sectionHeroEl = document.querySelector(".section-hero");
// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);
//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }
//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);
