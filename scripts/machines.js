//Modal Filter
$(document).ready(function () {
  $("#filterButton").click(function () {
    var expanded = $(this).attr("aria-expanded");
    if (expanded === "false") {
      $(this).attr("aria-expanded", "true");
      // $("#modal").show();
      $("#modal").css("display", "flex");
    } else {
      $(this).attr("aria-expanded", "false");
      $("#modal").hide();
    }
  });
});

//Click filter color
const colorLabels = [...document.querySelectorAll(".filter-item__label")];

colorLabels.forEach(function (label) {
  label.addEventListener("click", function () {
    if (!label.classList.contains("filter-item__label--checked")) {
      colorLabels.forEach(function (otherLabel) {
        otherLabel.classList.remove("filter-item__label--checked");
      });
      label.classList.add("filter-item__label--checked");
    }
  });
});

//InputRange
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 100000;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
