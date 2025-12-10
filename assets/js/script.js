gsap.registerPlugin(ScrollTrigger);

// 固定
ScrollTrigger.create({
  trigger: ".Gsap__panel01",
  start: "top top",
  end: "+=500",
  scrub: true,
  pin: true,
  pinSpacing: false
});

// 背景変化
gsap.to(".Gsap__panel01", {
  backgroundColor: "#fff",
  color: "#000",
  ease: "none",
  scrollTrigger: {
    trigger: ".Gsap__panel01",
    start: "top top",
    end: "+=500",
    scrub: true
  }
});


gsap.to(".Lead__sub", {
  color: "#000",
  scrollTrigger: {
    trigger: ".Gsap__panel01",
    start: "top top",
    end: "+=500",
    scrub: true
  }
});

gsap.to(".Lead__title", {
  color: "#00168B",
  scrollTrigger: {
    trigger: ".Gsap__panel01",
    start: "top top",
    end: "+=500",
    scrub: true
  }
});
gsap.to(".Lead__bg", {
  opacity: 0.8,

  scrollTrigger: {
    trigger: ".Gsap__panel01",
    start: "top top",
    end: "+=500",
    scrub: true
  }
});
gsap.to(".CaseStudy", {
  backgroundColor: "#1C2A74",

  scrollTrigger: {
    trigger: ".CaseStudy",
    start: "top center",
    end: "+=500",
    scrub: true
  }
});

gsap.utils.toArray(".js-fadeIn").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    duration: 1,
    y: 0,
    scrollTrigger: {
      trigger: el,
      start: el.classList.contains("js-fadeIn-footer") ? "top bottom" : "top 80%",
      once: true,
    },
  });
});

gsap.utils.toArray(".js-zoomIn").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: el.classList.contains("js-zoomIn-footer") ? "top bottom" : "top 80%",
      once: true,
    },
  });
});


gsap.utils.toArray(".Bottom__slide").forEach((el, i) => {
  gsap.to(el, {
    x: "100%",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      once: true,
    },
    delay: i * 0.2, // 0.2秒ずつずらして順番にスライド
  });
});

// 見出し一文字ずつ
gsap.registerPlugin(SplitText, ScrollTrigger);

gsap.utils.toArray(".split").forEach((el) => {
  const split = new SplitText(el, { type: "chars, words" });

  gsap.from(split.chars, {
    opacity: 0,
    y: 20,
    stagger: 0.05,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,      // 個々の .split 要素で発火
      start: "top 80%", // 画面の80%位置で発火
      once: true,       // 一回だけ再生
    }
  });
});

// ローディング
document.addEventListener("DOMContentLoaded", () => {

   // #loading が存在しないページは処理しない！
  if (!document.getElementById("loading")) {
    return;
  }
  const tl = gsap.timeline();

  tl.fromTo(".loading-logo",
    { opacity: 0, scale: 1, filter: "blur(6px)" },
    { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" }
  )
    .to(".loading-logo", {
      opacity: 0,
      duration: 1,
      // ease: "power2.inOut"
    })

    .to("#loading", {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete() {
        document.getElementById("loading").style.display = "none";
      }
    })

    // ← ここ大事！！！
    .to([".mv__content", ".header"], {
      opacity: 1,
      duration: 5,
      ease: "power2.out",

    });
});


// new Splide(".splide", {
//  autoplay: true, // 自動再生
//   type: "loop", // ループさせる
//   perPage: 3, // 3枚表示
//   focus: 0,
// }).mount();

// document.addEventListener("DOMContentLoaded", function () {
//   const sliders = document.querySelectorAll(".splide");

//   sliders.forEach((slider) => {
//     new Splide(slider, {
//       type: "loop",
//       autoplay: true,
//       perPage: 3, // 3枚表示
//       gap:16,
//     }).mount();
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".splide");

  sliders.forEach((slider) => {
    let options = {
      type: "loop",
      // autoplay: true,
      perPage: 3,
      gap: 16,
      arrows: false,
      pagination: false, // ページネーションを非表示
      drag: false, // ドラッグ無効
      autoScroll: {
    speed: 0.5, // スクロール速度
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
  },
    };

    if (slider.classList.contains("splide--case")) {
      options.gap = 40;
      options.perPage = 3;
    }

    if (slider.classList.contains("splide--member")) {
      options.gap = 16;
    }

    // if (slider.classList.contains("splide--voice")) {
    //   options.perPage = 2;
    //   options.gap = 24;
    // }

    new Splide(slider, options).mount(window.splide.Extensions);
  });
});

MicroModal.init({
  disableScroll: true,
});
