var modal = document.querySelector(".modal-form");
var button = document.querySelector(".hotel-search-btn");
var form = modal.querySelector("form");
var checkIn = modal.querySelector("[name=check-in]");
var checkOut = modal.querySelector("[name=check-out]");
var adult = modal.querySelector("[name=adult]");
var children = modal.querySelector("[name=children]");
var storageAdult = "";
var storageChildren = "";
var isStorageSupport = true;

try {
  storageAdult = localStorage.getItem("adult");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

modal.classList.add("modal-form-hide");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-form-show");
  modal.classList.remove("modal-form-error");
  checkIn.focus();
  if (storageAdult) {
    adult.value = storageAdult;
  }
  if (storageChildren) {
    children.value = storageChildren;
  }
});

form.addEventListener("submit", function (evt) {
  if (!checkIn.value || !checkOut.value || !adult.value || !children.value) {
    evt.preventDefault();
    modal.classList.remove("modal-form-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("children", children.value);
    }
  }
});