let currentScreenWidth = window.innerWidth;
// Lắng nghe sự kiện resize và cập nhật giá trị chiều rộng
window.addEventListener("resize", () => {
  currentScreenWidth = window.innerWidth;
});

// search
const formSearch = document.getElementById("form_search");
const formResult = document.getElementById("form_result");
const inputSearch = document.getElementById("input_search");
const searchElement = document.querySelector(".header_content-search");
const searchIcon = document.querySelector(".header_content-search svg");
const searchIcon2 = document.querySelector(".search_icon2");

function handleInputFocus() {
  if (currentScreenWidth > 1023) {
    console.log("focus");
    searchElement.classList.add("search_action");
    formResult.style.display = "block";
    formSearch.style.display = "block";
  }
}

function handleInputBlur() {
  // lớn hơn màn hình tab
  if (currentScreenWidth > 1023) {
    console.log("blur");
    searchElement.classList.remove("search_action");
    formResult.style.display = "none";
    formSearch.style.display = "none";
  }
}

function handleInputClick() {
  // nhỏ hon màn hình tab
  if (currentScreenWidth <= 1024) {
    searchElement.classList.add("search_mobile");
    searchIcon2.style.display = "block";
    searchIcon.style.display = "none";
    formResult.style.display = "none";
    formSearch.style.display = "none";
  }
}

function handleClickIcon() {
  if (currentScreenWidth <= 1024) {
    searchElement.classList.remove("search_mobile");
    searchIcon2.style.display = "none";
    searchIcon.style.display = "block";
  }
}

if (currentScreenWidth > 1023) {
  handleClickIcon();
}

inputSearch.addEventListener("focus", handleInputFocus);
inputSearch.addEventListener("blur", handleInputBlur);
searchIcon.addEventListener("click", handleInputClick);
searchIcon2.addEventListener("click", handleClickIcon);
// app
const cartBtn = document.querySelector(".btn_cart");
const overPlay = document.getElementById("overlay");
const iconClose = document.querySelector(".modalCart_header svg");
const iconCloseHeader = document.querySelector(".menu__btn");
const itemListNav = document.querySelectorAll(
  ".menu__item-content > .nav_icon > svg"
);

const subList = document.getElementById("sub_list");
const loginBtn = document.querySelector(".btn_login");
const dropdown_loggedIn = document.getElementById("dropdown_loggedIn");
const dropdown_signIn = document.getElementById("dropdown_signIn");

loginBtn.onclick = () => {
  dropdown_loggedIn.classList.toggle("open");
};
cartBtn.onclick = () => {
  overPlay.classList.toggle("openCart");
  if (overPlay.classList.contains("closeCart")) {
    overPlay.classList.remove("closeCart");
    overPlay.classList.add("openCart");
  }
};

iconClose.onclick = () => {
  overPlay.classList.remove("openCart");
};
//show sub_list
itemListNav.forEach((item, index) => {
  item.onclick = () => {
    subList.classList.toggle("open");
  };
});
iconCloseHeader.onclick = () => {
  subList.classList.remove("open");
};
