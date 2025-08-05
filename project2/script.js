let mainSections = document.querySelectorAll(".main-section");
let showButton = document.querySelector(".show");

for (let section of mainSections) {
  showButton.onclick = function () {
    section.classList.remove("short");
  };
}
