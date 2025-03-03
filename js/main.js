"use strict";

/* ----------- opening ----------- */
function textAnime() {
  const textElement = document.querySelector(".top_kv_copy");
  const text = textElement.textContent;
  const characters = text.split("");
  textElement.innerHTML = "";

  characters.forEach((char, index) => {
    const span = document.createElement("span");
    span.innerText = char;

    span.style.opacity = 0; // 最初は透明に設定

    textElement.appendChild(span);

    gsap.to(span, {
      opacity: 1,
      duration: 0.5,
      delay: index * 0.1,
    });
  });

  // アニメーションが始まったら、全体を表示させる
  gsap.to(textElement, {
    autoAlpha: 1,
    duration: 0.5,
    delay: characters.length * 0.1, // 最後の文字の遅延時間
  });
}

const body = document.querySelector(".js_body");
const jsCopy = document.querySelector(".js_copy");

function openingAnime() {
  document.body.classList.toggle("no-scroll");

  const tl = gsap.timeline();

  tl.from(".js_opening-txt", {
    autoAlpha: 0,
    duration: 1.2,
  })
    .to(".js_opening", {
      autoAlpha: 0,
      duration: 1.2,
      onComplete: function () {
        jsCopy.classList.add("is-active");
        textAnime();
      },
    })
    .from([".js_header-logo", ".js_hamburger"], {
      delay: 2,
      autoAlpha: 0,
      duration: 1,
    })
    .from(".js_cta-btn", {
      autoAlpha: 0,
      duration: 0.5,
      onComplete: function () {
        document.body.classList.remove("no-scroll");
      },
    });
}

const opening = document.querySelector(".js_opening");

function webStorage() {
  if (sessionStorage.getItem("access")) {
    //2回目以降アクセス時の処理には関数を実行しない
    opening.classList.add("is-active");
    jsCopy.classList.add("is-active");
  } else {
    //初回アクセス時の処理
    sessionStorage.setItem("access", 0);
    openingAnime();
  }
}
webStorage();

/* ----------- header logo ----------- */

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".l_header-logo");
  const slider = document.querySelector(".top_kv");

  window.addEventListener("scroll", function () {
    const sliderHeight = slider.offsetHeight;

    // ロゴの色変更
    if (sliderHeight - 10 < window.scrollY) {
      header.style.color = "var(--black-color)";
    } else {
      header.style.color = "var(--white-color)";
    }
  });
});

/* ----------- hamburger menu ----------- */

const ham = document.querySelector(".js_hamburger");
const nav = document.querySelector(".js_nav");
const barElements = document.querySelectorAll(".m_hamburger_bar");

ham.addEventListener("click", () => {
  ham.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  body.classList.toggle("is-active");
  document.body.classList.toggle("no-scroll");

  barElements.forEach((bar) => {
    bar.classList.toggle("change-color");
  });
});

const jsNavLinks = document.querySelectorAll(".js_nav_link");
jsNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // ハンバーガーメニューを非表示にするための処理
    ham.classList.remove("is-active");
    nav.classList.remove("is-active");
    body.classList.remove("is-active");
    document.body.classList.remove("no-scroll");

    barElements.forEach((bar) => {
      bar.classList.remove("change-color");
    });
  });
});

/* ----------- cta ----------- */

// document.addEventListener('DOMContentLoaded', function() {
//   const footer = document.querySelector(".l_footer");
//   const ctaPc = document.querySelector(".m_cta-btn__pc");
//   const ctaSp = document.querySelector(".m_cta-btn__sp");

//   if (footer && (ctaPc || ctaSp)) {
//     window.onscroll = function() {
//       const point = window.pageYOffset;
//       const docHeight = document.documentElement.scrollHeight;
//       const dispHeight = window.innerHeight;

//       if (point > docHeight - dispHeight - footer.clientHeight) {
//         ctaPc.classList.add("is-active");
//         ctaSp.classList.add("is-active");
//       } else {
//         ctaPc.classList.remove("is-active");
//         ctaSp.classList.remove("is-active");
//       }
//     };
//   }
// });

/* -----------modal ----------- */
const modalOpen = document.querySelectorAll(".js_modalOpen");

modalOpen.forEach((element) => {
  const targetModalId = element.getAttribute("data-modal-target");
  const targetModal = document.getElementById(targetModalId);

  element.addEventListener("click", (event) => {
    event.preventDefault();
    targetModal.classList.add("is-open");
    document.body.classList.add("no-scroll");
  });
});

// モーダルの外側（背景部分）をクリックしたときにモーダルを閉じるようにする
document.querySelectorAll(".js_modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (!event.target.closest(".m_modal-content")) {
      modal.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    }
  });
});

const swiper = new Swiper(".js_swiper", {
  loop: true,
  effect: "fade",
  slidesPerView: "auto",
  pagination: {
    el: ".m_swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* ----------- page top ----------- */

// const pageTop = document.querySelector(".m_page-top");

// pageTop.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// // スクロールされたら表示
// window.addEventListener("scroll", scroll_event);

// function scroll_event() {
//   if (window.pageYOffset > 300) {
//     pageTop.classList.add("is-active");
//   } else {
//     pageTop.classList.remove("is-active");
//   }
// }
