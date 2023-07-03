const inputPrivate = document.getElementById("Private");
const inputCompany = document.getElementById("Company");
const form_Private = document.getElementById("form_Private");
const form_Company = document.getElementById("form_Company");

inputPrivate.addEventListener("click", () => {
  form_Company.style.display = "none";
  form_Private.style.display = "block";
  inputCompany.checked = false;
});

inputCompany.addEventListener("click", () => {
  form_Company.style.display = "block";
  form_Private.style.display = "none";
  inputPrivate.checked = false;
});

const inputSame = document.getElementById("Same");
const inputDifferent = document.getElementById("Different");
const form_Different = document.getElementById("form_Different");

inputSame.addEventListener("click", () => {
  form_Different.style.display = "none";
  inputDifferent.checked = false;
});

inputDifferent.addEventListener("click", () => {
  form_Different.style.display = "block";
  inputSame.checked = false;
});

const input_Different_Company = document.getElementById("different_Company");
const input_Different_Private = document.getElementById("different_Private");

const form_Different_Private = document.getElementById(
  "form_Different_Private"
);
const form_Different_Company = document.getElementById(
  "form_Different_Company"
);

input_Different_Private.addEventListener("click", () => {
  form_Different_Company.style.display = "none";
  form_Different_Private.style.display = "block";
  input_Different_Company.checked = false;
});

input_Different_Company.addEventListener("click", () => {
  form_Different_Company.style.display = "block";
  form_Different_Private.style.display = "none";
  input_Different_Private.checked = false;
});
