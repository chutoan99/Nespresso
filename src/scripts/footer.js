const footerElements = document.querySelectorAll(".footer_main-inner");

footerElements.forEach(function (element) {
  element.addEventListener("click", function () {
    const iconElement = element.querySelector(".footer_main-header svg");
    const contentElement = element.querySelector(".footer_main-content");
    const currentDisplay = getComputedStyle(contentElement).display;
    if (currentScreenWidth <= 768) {
      if (currentDisplay === "block") {
        contentElement.style.display = "none";
        iconElement.style.transform = "rotate(0deg)";
      } else {
        contentElement.style.display = "block";
        iconElement.style.transform = "rotate(180deg)";
      }
    }
  });
});
