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
  opacity:0.4,

  scrollTrigger: {
    trigger: ".Gsap__panel01",
    start: "top top",
    end: "+=500",
    scrub: true
  }
});
gsap.to(".CaseStudy", {
  backgroundColor:"#1C2A74",

  scrollTrigger: {
    trigger: ".CaseStudy",
    start: "top center",
    end: "+=500",
    scrub: true
  }
});

gsap.utils.toArray(".fade-in").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    duration: 1,
    y: -50,
    scrollTrigger: {
      trigger: el,
      start: "top 80%", // 画面の80%位置にきたら開始
      toggleActions: "play none none reverse",
    },
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.fromTo(".loading-logo",
    { opacity: 0, scale: 0.8, filter: "blur(6px)" },
    { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" }
  )
    .to(".loading-logo", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut"
    })

    .to("#loading", {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete() {
        document.getElementById("loading").style.display = "none";
      }
    })

    // ← ここ大事！！！
    .to([".mv__content", ".header"], {
      opacity: 1,
      duration: 1,
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
      autoplay: true,
      perPage: 3,
      gap: 16,
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

    new Splide(slider, options).mount();
  });
});