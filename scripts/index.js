const featuredWrapper = document.getElementById("featured");
const featuredItems = document.querySelectorAll(".featured_item");
const imgAll = document.querySelectorAll(".featured_item-img");
const mainAll = document.querySelectorAll(".featured_item-main");
const innerAll = document.querySelectorAll(".featured_item-inner");
const iconPlusAll = document.querySelectorAll(".icon_plus");
const iconMinusAll = document.querySelectorAll(".icon_minus");
let previousIndex = null;
var counter = 1;

featuredItems.forEach((element, currentIndex) => {
  const content = element.querySelector(".featured_item-content");
  const img = element.querySelector(".featured_item-img");
  const iconPlus = element.querySelector(".icon_plus");
  const iconMinus = element.querySelector(".icon_minus");
  const main = element.querySelector(".featured_item-main");
  const inner = element.querySelector(".featured_item-inner");
  const index = currentIndex;
  element.addEventListener("click", () => {
    content.classList.toggle("open_featured");
    if (currentScreenWidth > 768) {
      if (previousIndex !== null && previousIndex !== currentIndex) {
        counter = 1;
        const previousElement = featuredItems[previousIndex];
        const previousContent = previousElement.querySelector(
          ".featured_item-content"
        );
        previousContent.classList.remove("open_featured");
        imgAll.forEach((item) => {
          item.style.display = "block";
          item.style.textAlign = "center";
        });
        mainAll.forEach((item) => {
          item.style.display = "block";
        });
        innerAll.forEach((item) => {
          item.style.justifyContent = "space-between";
        });
        iconPlusAll.forEach((item) => {
          item.style.display = "block";
        });
        iconMinusAll.forEach((item) => {
          item.style.display = "none";
        });
      }

      if (content.classList.contains("open_featured")) {
        inner.style.justifyContent = "end";
        featuredItems.forEach((item) => {
          item.style.height = "100%";
        });
        img.style.display = "none";
        img.style.display = "none";
        main.style.display = "none";
        featuredWrapper.style.padding = "unset";
        featuredWrapper.style.display = "flex";
        featuredWrapper.style.gap = ".75rem";
        iconPlus.style.display = "none";
        iconMinus.style.display = "block";
        featuredItems.forEach((item) => {
          item.style.justifyContent = "center";
        });
        element.style.alignItems = "center";
        innerAll.forEach((item) => {
          element.style.justifyContent = "space-between";
          item.classList.add("open_inner");
        });
        mainAll.forEach((item) => {
          item.style.width = "12.5rem";
          item.style.rotate = "270deg";
        });
        content.style.marginRight = ".75rem";
      }
      // nếu toggle

      if (previousIndex === index) {
        counter++;
        console.log(counter, "counter");
        if (counter % 2 === 0) {
          featuredWrapper.style.display = "grid";
          content.classList.remove("open_featured");
          img.style.display = "flex";
          main.style.display = "block";
          mainAll.forEach((item) => {
            item.style.width = "";
            item.style.rotate = "";
          });
          featuredItems.forEach((item) => {
            item.style.height = "";
          });
          featuredWrapper.style.padding = "";
          featuredWrapper.style.display = "";
          featuredWrapper.style.gap = "";

          iconPlus.style.display = "";
          iconMinus.style.display = "";
          element.style.justifyContent = "";
          element.style.alignItems = "";
          innerAll.forEach((item) => {
            element.style.justifyContent = "";
            item.classList.remove("open_inner");
          });
        }
      }
    }
    if (currentScreenWidth < 768) {
      iconPlus.style.display = "block";
      iconMinus.style.display = "none";
      if (content.classList.contains("open_featured")) {
        featuredItems.forEach((item) => {
          item.classList.remove("open_featured");
        });
        iconPlus.style.display = "none";
        iconMinus.style.display = "block";
      }
    }
    previousIndex = currentIndex;
  });
});
