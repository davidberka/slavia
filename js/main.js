function menuHandler() {
  const burger = document.querySelector(".burger");
  const navigation = document.querySelector(".navigation");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    navigation.classList.toggle("active");
    body.classList.toggle("overflow");
  });

  function scrollToSection(event) {
    if (body.classList.contains("overflow")) {
      body.classList.remove("overflow");
    }

    if (navigation.classList.contains("active")) {
      navigation.classList.remove("active");
    }

    document
      .getElementById(`s_${event.target.id.split("_")[1]}`)
      .scrollIntoView({ behavior: "smooth" });
  }

  document
    .getElementById("sl_1")
    .addEventListener("click", scrollToSection, false);
  document
    .getElementById("sl_2")
    .addEventListener("click", scrollToSection, false);
  document
    .getElementById("sl_3")
    .addEventListener("click", scrollToSection, false);
  document
    .getElementById("sl_4")
    .addEventListener("click", scrollToSection, false);
  document
    .getElementById("sl_5")
    .addEventListener("click", scrollToSection, false);
  document
    .getElementById("sl_6")
    .addEventListener("click", scrollToSection, false);
}

function accordionHandler() {
  const accordionBtns = document.querySelectorAll(".accordion-button");

  accordionBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      const accordionItem = btn.parentElement;
      const open = document.querySelector(".accordion-item.open");

      if (open && open !== accordionItem) {
        open.classList.remove("open");
      }

      accordionItem.classList.toggle("open");
    })
  );
}

function jerseyCarouselHandler() {
  // const images = document.querySelectorAll(".jersey-img");
  // const texts = document.querySelectorAll(".jersey-desc");
  const dates = document.querySelectorAll(".jersey-date");
  const prevBtn = document.querySelector(".arrow-carousel.prev");
  const nextBtn = document.querySelector(".arrow-carousel.next");

  let index = 0;

  prevBtn.addEventListener("click", () => {
    if (index === 0) {
      index = dates.length - 1;
    } else {
      index -= 1;
    }

    if (window.innerWidth < 768) {
      showMobileImage(index);
    } else {
      showImage(index);
    }
    showText(index);
    showDate(index);
  });

  nextBtn.addEventListener("click", () => {
    if (index === dates.length - 1) {
      index = 0;
    } else {
      index += 1;
    }

    if (window.innerWidth < 768) {
      showMobileImage(index);
    } else {
      showImage(index);
    }
    showText(index);
    showDate(index);
  });
}

function showImage(index) {
  const currentImg = document.querySelector(".jersey-img.active");
  currentImg.classList.remove("active");

  document.querySelector(`#i_${index}`).classList.add("active");
}

function showMobileImage(index) {
  const currentImg = document.querySelector(".jersey-img-mobile.active");
  currentImg.classList.remove("active");

  document.querySelector(`#im_${index}`).classList.add("active");
}

function showText(index) {
  const currentText = document.querySelector(".jersey-desc.active");
  currentText.classList.remove("active");

  document.querySelector(`#t_${index}`).classList.add("active");
}

function showDate(index) {
  const currentDate = document.querySelector(".jersey-date.active");
  currentDate.classList.remove("active");

  document.querySelector(`#d_${index}`).classList.add("active");
}

function heroVideoHandler() {
  const playBtn = document.querySelector(".play-btn");
  const video = document.querySelector(".hero-video");
  const videoModal = document.querySelector(".video-modal");
  const body = document.querySelector("body");
  const backdrop = document.querySelector(".backdrop");
  const closeBtn = document.querySelector(".close-btn");

  playBtn.addEventListener("click", () => {
    video.setAttribute("src", "https://www.youtube.com/embed/jQik1pyAAqs");
    videoModal.classList.add("active");
    body.classList.toggle("overflow");
  });

  backdrop.addEventListener("click", () =>
    closeVideoModal(videoModal, video, body)
  );
  closeBtn.addEventListener("click", () =>
    closeVideoModal(videoModal, video, body)
  );
}

function closeVideoModal(videoModal, video, body) {
  body.classList.remove("overflow");
  videoModal.classList.remove("active");
  video.removeAttribute("src");
}

menuHandler();
accordionHandler();
jerseyCarouselHandler();
heroVideoHandler();
