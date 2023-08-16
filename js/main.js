document.addEventListener("DOMContentLoaded", () => {
  const benefitsCells = document.querySelectorAll(".benefits__cells-item")
  const catalog = document.querySelector(".catalog")
  const about = document.querySelector(".about")
  const contacts = document.querySelector(".main-contacts")
  const notFound = document.querySelector(".not-found")
  const header = document.querySelector(".header")
  const footer = document.querySelector(".footer")
  const catalogProducts = [...document.querySelectorAll(".catalog__product-btn")]
  const aboutInfoItem = document.querySelector(".about__info-item")

  aboutInfoItem && aboutInfoItem.classList.add("main-wrapper")

  if (catalog || about || contacts) {
    header.style.backgroundColor = "#28261F"
    header.firstElementChild.classList.remove("header__border--hide")

    const btnWithLine = catalogProducts.find((item, index, array) => {
      if (catalogProducts.length % 2 === 0) {
        return index === array.length - 1
      } else {
        return index === array.length - 2
      }
    })

    btnWithLine && btnWithLine.classList.add("btn-line")
  }

  if (notFound) {
    header.style.display = "none"
    footer.style.display = "none"
    document.body.style.backgroundColor = "#181818"
  }

  benefitsCells.forEach((item, index) => {
    if (item.firstElementChild.nextElementSibling.textContent.length > 0) {
      item.firstElementChild.firstElementChild.textContent = index + 1
    }
  })
})

var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 1,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 5000,
  // },
  keyboard: {
    enabled: true,
  },
  simulateTouch: false,
  navigation: {
    nextEl: ".benefits__button-next",
    prevEl: ".benefits__button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  }
});

var swiper2 = new Swiper(".swiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 5000,
  // },
  keyboard: {
    enabled: true,
  },
  simulateTouch: false,
  navigation: {
    nextEl: ".clients__button-next",
    prevEl: ".clients__button-prev",
  },
});

var swiper3 = new Swiper(".swiper3", {
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 5000,
  // },
  keyboard: {
    enabled: true,
  },
  simulateTouch: false,
  navigation: {
    nextEl: ".production__button-next",
    prevEl: ".production__button-prev",
  },
});

var swiper4 = new Swiper(".swiper4", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  simulateTouch: false,
  navigation: {
    nextEl: ".production2__button-next",
    prevEl: ".production2__button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
  }
});


const overflowToggle = (arg) => {
  if (arg) {
    document.documentElement.style.overflow = "hidden auto"
    document.body.style.overflow = "hidden auto"
  } else {
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
  }
}

const popUpOpen = (window, wrapper, overlay) => {
  overflowToggle(false)
  window.style.display = "block"

  setTimeout(() => {
    overlay.style.opacity = ".5"
    wrapper.style.opacity = "1"
    wrapper.style.top = "50%"
  },0)
}

const popUpClose = (window, wrapper, overlay) => {
  window.style.display = ""
  overlay.style.opacity = ""
  wrapper.style.opacity = ""
  wrapper.style.top = ""

  overflowToggle(true)
}

const setPopUpVisibility = (visibility, window, wrapper, overlay) => {
  if (visibility) {
    popUpOpen(window, wrapper, overlay)
  } else {
    popUpClose(window, wrapper, overlay)
  }
}

const popupThanks = document.querySelector(".popup-thanks")
const popupThanksWrapper = document.querySelector(".popup-thanks__wrapper")
const overlayThanks = document.querySelector(".popup-thanks__overlay")

document.querySelectorAll(".submit-btn").forEach(item => {
  item.addEventListener("click", () => setPopUpVisibility(true, popupThanks, popupThanksWrapper, overlayThanks))
})

document.querySelector(".popup-thanks__close").addEventListener("click", () => setPopUpVisibility(false, popupThanks, popupThanksWrapper, overlayThanks))
overlayThanks.addEventListener("click", () => setPopUpVisibility(false, popupThanks, popupThanksWrapper, overlayThanks))

//

const popupApplication = document.querySelector(".popup-application")
const popupApplicationWrapper = document.querySelector(".popup-application__wrapper")
const overlayApplication = document.querySelector(".popup-application__overlay")

document.querySelectorAll(".catalog__product-btn > .btn").forEach(item => {
  item.addEventListener("click", () => setPopUpVisibility(true, popupApplication, popupApplicationWrapper, overlayApplication))
})
document.querySelector(".popup-application__close").addEventListener("click", () => setPopUpVisibility(false, popupApplication, popupApplicationWrapper, overlayApplication))
overlayApplication.addEventListener("click", () => setPopUpVisibility(false, popupApplication, popupApplicationWrapper, overlayApplication))

//

const popupView = document.querySelector(".popup-view")
const popupViewImg = document.querySelector(".popup-view__img")
const overlayView = document.querySelector(".popup-view__overlay")

document.querySelectorAll(".production__img-wrapper").forEach(item => {
  item.addEventListener("click", () => {
    const imgSrs = item.firstElementChild.src
    const img = document.querySelector(".popup-view__img")
    img.src = imgSrs
    setPopUpVisibility(true, popupView, popupViewImg, overlayView)
  })
})

document.querySelectorAll(".benefits-swiper .swiper-slide").forEach(item => {
  item.addEventListener("click", () => {
    const imgSrs = item.firstElementChild.src
    const img = document.querySelector(".popup-view__img")
    img.src = imgSrs
    setPopUpVisibility(true, popupView, popupViewImg, overlayView)
  })
})
document.querySelector(".popup-view__close").addEventListener("click", () => setPopUpVisibility(false, popupView, popupViewImg, overlayView))
overlayView.addEventListener("click", () => setPopUpVisibility(false, popupView, popupViewImg, overlayView))

document.querySelector('.footer__btn').addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})
