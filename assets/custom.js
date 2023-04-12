// classic product carousel
featureProductScroller(".citrus_blue_splide-classic");
featureProductScroller(".citrus_blue_splide-premier");

function featureProductScroller(idx) {
  var splides = document.querySelectorAll(idx);
  if (splides.length) {
    for (var i = 0; i < splides.length; i++) {
      var splideElement = splides[i];
      var splideDefaultOptions = {
        type: "slide",
        autoplay: false,
        rewindSpeed: 500,
        speed: 500,
        pauseOnHover: true,
        perPage: 2,
        perMove: 1,
        start: 0,
        focus: 0,
        pagination: false,
        omitEnd: true,
        breakpoints: {
          375: {
            perPage: 1,
          },
          576: {
            perPage: 1,
          },
          991: {
            perPage: 1,
          },
          992: {
            perPage: 1,
          },
          1024: {
            perPage: 2,
          },
          1200: {
            perPage: 2,
          },
          1440: {
            perPage: 2,
          },
        },
      };

      new Splide(splideElement, splideDefaultOptions).mount();
    }
  }
}
/**----------------------
 * product scroller js ---
 --------------------------*/
// tab carousal js
// initialize product scroller
advanceArrows("blue-WetFood-product");
function advanceArrows(idx) {
  var splideElement = "#" + idx;
  var splideDefaultOptions = {
    arrows: true,
    type: "slide",
    start: 0,
    focus: 0,
    pagination: false,
    rewindSpeed: 500,
    speed: 500,
    pauseOnHover: true,
    perPage: 6,
    perMove: 1,
    omitEnd: true,
    breakpoints: {
      375: {
        perPage: 1,
      },
      576: {
        perPage: 1,
      },
      991: {
        perPage: 3,
      },
      992: {
        perPage: 3,
      },
      1024: {
        perPage: 6,
      },
      1200: {
        perPage: 6,
      },
      1440: {
        perPage: 6,
      },
    },
  };
  new Splide(splideElement, splideDefaultOptions).mount();
}

/* ************************************************************************************** */
//for tab sweater & loader added
document.addEventListener("DOMContentLoaded", function () {
  filterProducts("blue-WetFood-product");
});
// for dog filter function
function filterProducts(c) {
  var x, i;
  x = document.getElementsByClassName("citrusBlue__Product");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "citrusTabShow");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusTabShow");
  }
  advanceArrows(c);
}
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
document.addEventListener("DOMContentLoaded", function () {
  // for dog active class filter
  var dogBtnContainer = document.getElementById("citrusBlueTabId");
  var dogBtns = dogBtnContainer.getElementsByClassName("citrusBlue__tab_item");
  addActiveClass(dogBtns, "citrusBlue__active_tab");
});
function addActiveClass(element, activeClass) {
  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function () {
      var current = document.getElementsByClassName(activeClass);
      current[0].className = current[0].className.replace(
        " " + activeClass,
        ""
      );
      this.className += " " + activeClass;
    });
  }
}
//for Dog best seller tab switcher

{
  /*-------------------------*
 custom coded hero slider 
 *---------------------------*/
}

let citrusBlue_carousel = document.querySelector(".citrusBlue_carousel");

let citrusBlue_carouselInner = document.querySelector(
  ".citrusBlue_carousel-inner"
);

let prev = document.querySelector(".citrusBlue_carousel-controls .prev");

let next = document.querySelector(".citrusBlue_carousel-controls .next");

let slides = document.querySelectorAll(
  ".citrusBlue_carousel-inner .citrusBlue_carousel-item"
);

let totalSlides = slides.length;

let step = 100 / totalSlides;

let activeSlide = 0;

let activeIndicator = 0;

let direction = -1;

let jump = 1;

let interval = 5000;

let time;

//Init citrusBlue_carousel
citrusBlue_carouselInner.style.minWidth = totalSlides * 100 + "%";
loadIndicators();
loop(true);

//citrusBlue_carousel events

next.addEventListener("click", () => {
  slideToNext();
});

prev.addEventListener("click", () => {
  slideToPrev();
});

citrusBlue_carouselInner.addEventListener("transitionend", () => {
  if (direction === -1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide++;
        citrusBlue_carouselInner.append(
          citrusBlue_carouselInner.firstElementChild
        );
      }
    } else {
      activeSlide++;
      citrusBlue_carouselInner.append(
        citrusBlue_carouselInner.firstElementChild
      );
    }
  } else if (direction === 1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide--;
        citrusBlue_carouselInner.prepend(
          citrusBlue_carouselInner.lastElementChild
        );
      }
    } else {
      activeSlide--;
      citrusBlue_carouselInner.prepend(
        citrusBlue_carouselInner.lastElementChild
      );
    }
  }

  citrusBlue_carouselInner.style.transition = "none";
  citrusBlue_carouselInner.style.transform = "translateX(0%)";
  setTimeout(() => {
    jump = 1;
    citrusBlue_carouselInner.style.transition = "all ease .5s";
  });
  updateIndicators();
});

document
  .querySelectorAll(".citrusBlue_carousel-indicators span")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      let slideTo = parseInt(e.target.dataset.slideTo);

      let indicators = document.querySelectorAll(
        ".citrusBlue_carousel-indicators span"
      );

      indicators.forEach((item, index) => {
        if (item.classList.contains("active")) {
          activeIndicator = index;
        }
      });

      if (slideTo - activeIndicator > 1) {
        jump = slideTo - activeIndicator;
        step = jump * step;
        slideToNext();
      } else if (slideTo - activeIndicator === 1) {
        slideToNext();
      } else if (slideTo - activeIndicator < 0) {
        if (Math.abs(slideTo - activeIndicator) > 1) {
          jump = Math.abs(slideTo - activeIndicator);
          step = jump * step;
          slideToPrev();
        }
        slideToPrev();
      }
      step = 100 / totalSlides;
    });
  });

citrusBlue_carousel.addEventListener("mouseover", () => {
  loop(false);
});

citrusBlue_carousel.addEventListener("mouseout", () => {
  loop(true);
});

//citrusBlue_carousel functions

function loadIndicators() {
  slides.forEach((slide, index) => {
    if (index === 0) {
      document.querySelector(
        ".citrusBlue_carousel-indicators"
      ).innerHTML += `<span data-slide-to="${index}" class="active"></span>`;
    } else {
      document.querySelector(
        ".citrusBlue_carousel-indicators"
      ).innerHTML += `<span data-slide-to="${index}"></span>`;
    }
  });
}

function updateIndicators() {
  if (activeSlide > totalSlides - 1) {
    activeSlide = 0;
  } else if (activeSlide < 0) {
    activeSlide = totalSlides - 1;
  }
  document
    .querySelector(".citrusBlue_carousel-indicators span.active")
    .classList.remove("active");
  document
    .querySelectorAll(".citrusBlue_carousel-indicators span")
    [activeSlide].classList.add("active");
}

function slideToNext() {
  if (direction === 1) {
    direction = -1;
    citrusBlue_carouselInner.prepend(citrusBlue_carouselInner.lastElementChild);
  }

  citrusBlue_carousel.style.justifyContent = "flex-start";
  citrusBlue_carouselInner.style.transform = `translateX(-${step}%)`;
}

function slideToPrev() {
  if (direction === -1) {
    direction = 1;
    citrusBlue_carouselInner.append(citrusBlue_carouselInner.firstElementChild);
  }
  citrusBlue_carousel.style.justifyContent = "flex-end";
  citrusBlue_carouselInner.style.transform = `translateX(${step}%)`;
}

function loop(status) {
  if (status === true) {
    time = setInterval(() => {
      slideToNext();
    }, interval);
  } else {
    clearInterval(time);
  }
}
// pov loader add. before full load js pov none.
document.addEventListener("DOMContentLoaded", function () {
  citrusBlue_carousel.style.display = "flex";
});

{
  /* ---------------------------*
  End custom codded hero carousal 
  *-------------------------------*/
}
