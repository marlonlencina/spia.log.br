const observerWeb = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("intersect-show");
      entry.target.classList.remove("intersect-hidden");
    } else {
      entry.target.classList.add("intersect-hidden");
      entry.target.classList.remove("intersect-show");
    }
  });
});

const elementsObserver = document.querySelectorAll(".intersect");
elementsObserver.forEach((element) => observerWeb.observe(element));

const header = document.querySelector("#header");
console.log(header);
const handleScroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 96) {
    header.classList.add("header-minimal");
  } else {
    header.classList.remove("header-minimal");
  }
};

window.onscroll = function () {
  handleScroll();
};
