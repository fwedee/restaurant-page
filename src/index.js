import { displayHomePage } from "./homepage";
import { displayAboutPage } from "./about";
import { displayMenuPage } from "./menu";

import styles from "./styles.css";

console.log(styles);

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
  updateSortButtons("menuButton");
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
  const buttons = ["homeButton", "aboutButton", "menuButton"];

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
updateSortButtons("homeButton");
