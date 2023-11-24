AOS.init({
  once: true,
  duration: 800,
});

const hamEl = document.querySelector(".ham");
const navList = document.querySelector(".mobile-nav");
const closeBtn = document.querySelector("#btn_close");
hamEl.addEventListener("click", showNav);
closeBtn.addEventListener("click", showNav);
function showNav() {
  navList.classList.toggle("active");
}

// scroll menu
let flag = false;
const scrollParent = document.querySelector(".scroll-wrapper");
const scrollBtn = scrollParent.querySelectorAll(".btn");

scrollBtn.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    let width = scrollParent.scrollWidth;
    e.target.classList.add("active");
    if (width > window.innerWidth) {
      scrollParent.style.transform = `translateX(-${i * 130}px)`;
    }
    scrollBtn.forEach((btn) => {
      if (btn == e.target) {
        return;
      } else {
        btn.classList.remove("active");
      }
    });
  });
});
