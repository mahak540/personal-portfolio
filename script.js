"use strict";

/* ------------------------------
   ELEMENT TOGGLE FUNCTION
------------------------------ */
const elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

/* ------------------------------
   SIDEBAR TOGGLE (MOBILE)
------------------------------ */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

/* ------------------------------
   CONTACT FORM VALIDATION
------------------------------ */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    formBtn.disabled = !form.checkValidity();
  });
});

/* ------------------------------
   PAGE NAVIGATION
------------------------------ */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", function () {
    pages.forEach((page) => page.classList.remove("active"));
    navigationLinks.forEach((nav) => nav.classList.remove("active"));

    pages[index].classList.add("active");
    this.classList.add("active");

    window.scrollTo(0, 0);
  });
});
