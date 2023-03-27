{
  /*-------------------------*
 custom coded hero slider 
 *---------------------------*/
}

let citrus_blue_carousel = document.querySelector(".citrus_blue_carousel");

let citrus_blue_carouselInner = document.querySelector(
  ".citrus_blue_carousel-inner"
);

let prev = document.querySelector(".citrus_blue_carousel-controls .prev");

let next = document.querySelector(".citrus_blue_carousel-controls .next");

let slides = document.querySelectorAll(
  ".citrus_blue_carousel-inner .citrus_blue_carousel-item"
);

let totalSlides = slides.length;

let step = 100 / totalSlides;

let activeSlide = 0;

let activeIndicator = 0;

let direction = -1;

let jump = 1;

let interval = 5000;

let time;

//Init citrus_blue_carousel
citrus_blue_carouselInner.style.minWidth = totalSlides * 100 + "%";
loadIndicators();
loop(true);

//citrus_blue_carousel events

next.addEventListener("click", () => {
  slideToNext();
});

prev.addEventListener("click", () => {
  slideToPrev();
});

citrus_blue_carouselInner.addEventListener("transitionend", () => {
  if (direction === -1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide++;
        citrus_blue_carouselInner.append(
          citrus_blue_carouselInner.firstElementChild
        );
      }
    } else {
      activeSlide++;
      citrus_blue_carouselInner.append(
        citrus_blue_carouselInner.firstElementChild
      );
    }
  } else if (direction === 1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide--;
        citrus_blue_carouselInner.prepend(
          citrus_blue_carouselInner.lastElementChild
        );
      }
    } else {
      activeSlide--;
      citrus_blue_carouselInner.prepend(
        citrus_blue_carouselInner.lastElementChild
      );
    }
  }

  citrus_blue_carouselInner.style.transition = "none";
  citrus_blue_carouselInner.style.transform = "translateX(0%)";
  setTimeout(() => {
    jump = 1;
    citrus_blue_carouselInner.style.transition = "all ease .5s";
  });
  updateIndicators();
});

document
  .querySelectorAll(".citrus_blue_carousel-indicators span")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      let slideTo = parseInt(e.target.dataset.slideTo);

      let indicators = document.querySelectorAll(
        ".citrus_blue_carousel-indicators span"
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

citrus_blue_carousel.addEventListener("mouseover", () => {
  loop(false);
});

citrus_blue_carousel.addEventListener("mouseout", () => {
  loop(true);
});

//citrus_blue_carousel functions

function loadIndicators() {
  slides.forEach((slide, index) => {
    if (index === 0) {
      document.querySelector(
        ".citrus_blue_carousel-indicators"
      ).innerHTML += `<span data-slide-to="${index}" class="active"></span>`;
    } else {
      document.querySelector(
        ".citrus_blue_carousel-indicators"
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
    .querySelector(".citrus_blue_carousel-indicators span.active")
    .classList.remove("active");
  document
    .querySelectorAll(".citrus_blue_carousel-indicators span")
    [activeSlide].classList.add("active");
}

function slideToNext() {
  if (direction === 1) {
    direction = -1;
    citrus_blue_carouselInner.prepend(
      citrus_blue_carouselInner.lastElementChild
    );
  }

  citrus_blue_carousel.style.justifyContent = "flex-start";
  citrus_blue_carouselInner.style.transform = `translateX(-${step}%)`;
}

function slideToPrev() {
  if (direction === -1) {
    direction = 1;
    citrus_blue_carouselInner.append(
      citrus_blue_carouselInner.firstElementChild
    );
  }
  citrus_blue_carousel.style.justifyContent = "flex-end";
  citrus_blue_carouselInner.style.transform = `translateX(${step}%)`;
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
  citrus_blue_carousel.style.display = "flex";
});

{
  /* ---------------------------*
  End custom codded hero carousal 
  *-------------------------------*/
}
