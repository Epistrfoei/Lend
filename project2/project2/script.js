let mainSections = document.querySelectorAll(".main-section");

for (let section of mainSections) {
  let showButton = section.querySelector(".show");
  showButton.onclick = function () {
    if (section.classList.contains("short")) {
      section.classList.remove("short");
      showButton.textContent = "Скрыть";
    } else {
      section.classList.add("short");
      showButton.textContent = "Показать";
    }
  };
}
