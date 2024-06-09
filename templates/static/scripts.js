const host = "http://44.209.223.74:8050";

const about = document.querySelector(".profile");
const sections = about.querySelectorAll("div");
const quickIconContainer = document.querySelector(".quick-icons");
const icons = quickIconContainer.querySelectorAll("li");

const homeIcon = icons[0].firstChild;
homeIcon.addEventListener("click", () => {
  icons.forEach((icon) => icon.classList.remove("icon-active"));
});

const options = {
  root: null, //default : viewport .. 부모컨테이너를 지정해줄 수 있다.
  rootMargin: `0px`, //마진을 주면, 내가 보는 화면보다 기준영역이 그 만큼 더 늘어나게된다.
  threshold: 0.5, //얼마만큼 보여져야 콜백함수를 호출할지 결정  0~1 줄 수 있다.
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      switch (entry.target.id) {
        case "profile":
            icons.forEach((icon) => icon.classList.remove("icon-active"));
            icons[1].classList.add("icon-active");
            break;
        case "tmi":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[2].classList.add("icon-active");
          break;
        case "tmi_job":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[3].classList.add("icon-active");
          break;
        case "tmi_hair":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[4].classList.add("icon-active");
          break;
        case "tmi_movie":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[5].classList.add("icon-active");
          break;
        case "tmi_food":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[6].classList.add("icon-active");
          break;
        default:
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          break;
      }
    } else {
      //   console.error(entry.target);
      switch (entry.target.id) {
        case "tmi":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          break;
      }
    }
  });
};

const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => observer.observe(section)); //section들을 관찰자가 관찰하도록 명령


//at header
const main = document.querySelector(".main");
const mainOptions = {
  threshold: 0.8,
};

const handleMain = (entries) => {
  if (entries[0].isIntersecting) {
    quickIconContainer.classList.add("show-off");
  } else {
    quickIconContainer.classList.remove("show-off");
  }
};

const headerObserver = new IntersectionObserver(handleMain, mainOptions);
headerObserver.observe(main);

// song 부분
document.querySelector('.tmi_song').addEventListener('wheel', (event) => {
  event.preventDefault();
  document.querySelector('.tmi_song').scrollLeft += event.deltaY;
});



