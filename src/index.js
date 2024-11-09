import { displayHomePage } from "./homepage";
import { displayAboutPage } from "./about";
import { displayMenuPage } from "./menu";

const homepageButton = document.getElementById("homeButton");
homepageButton.addEventListener("click", () => {
  clearContent();
  displayHomePage();
  updateSortButtons("homeButton");
});

const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", () => {
  clearContent();
  displayMenuPage();
  updateSortButtons("homeButton");
});
const aboutButton = document.getElementById("aboutButton");
aboutButton.addEventListener("click", () => {
  clearContent();
  displayAboutPage();
  updateSortButtons("aboutButton");
});

function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

function updateSortButtons(activeButtonId) {
  const buttons = ["homeButton", "aboutButton", "menueButton"];

  buttons.forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.classList.remove("active");
      button.classList.add("homeButton");
      if (buttonId === activeButtonId) {
        button.classList.add("active");
        button.classList.remove("homeButton");
      }
    }
  });
}

displayHomePage();
