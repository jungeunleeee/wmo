document
  .querySelectorAll('.menu > li > a[href^="#"]')
  .forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // 여기로 이동하면 안돼!!

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        // scrollIntroView : 그곳으로 가라
        behavior: "smooth", //그냥 애니메이션이
      });
    });
  });

const sections = document.querySelectorAll("section");
console.log(sections);
const menus = document.querySelectorAll(".menu > li > a");
const h1Elem = document.querySelector("h1");

window.addEventListener("scroll", function () {
  let current = "";
  sections.forEach(function (section) {
    const sectionTop = window.scrollY + section.getBoundingClientRect().top; //offsetTop
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
    h1Elem.className = "";
    menus.forEach(function (menu, i) {
      menu.className = ""; // classNAme을 다 지워버림
      const href = menu.getAttribute("href").substring();
      console.log(href);

      if (href == current) {
        if (i == 2 || i == 4) {
          menu.classList.add("white");
        } else {
          menu.classList.add("black");
        }
        if (i == 0 || i == 1 || i == 3 || i == 5) {
          h1Elem.classList.add("red");
        } else {
          h1Elem.classList.add("white");
        }
      }
    });
  });
});

sections.forEach(function (section, i) {
  section.addEventListener("wheel", function (event) {
    event.preventDefault(); //반복되는  stop animation과 같다고 생각하면 됨/jquery
    console.log(event);
    if (!event) {
      eevent = window.event;
    }

    if (event.wheelDelta) {
      // 아래로 넘어가는지 위로 넘어가는지
      delta = event.wheelDelta;
    }

    let moveTop = window.scrollY;
    let currentSection = sections[i];

    if (delta < 0) {
      moveTop =
        window.pageYOffset +
        currentSection.nextElementSibling.getBoundingClientRect().top;
    } else {
      moveTop =
        window.pageYOffset +
        currentSection.previousElementSibling.getBoundingClientRect().top;
    }

    const body = document.querySelector("html");
    window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
  });
});
