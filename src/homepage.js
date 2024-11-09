export function displayHomePage() {
  const content = document.querySelector("#content");
  // Create header
  const header = document.createElement("h1");
  header.innerText = "Pasta Paradise";
  content.appendChild(header);

  // Create description container
  const description = document.createElement("div");
  description.classList.add("description");

  // Create description text
  const descriptionText = document.createElement("p");
  descriptionText.innerText =
    "Pasta Paradise serves the most delightful homemade pasta! The warm, \
          rustic atmosphere transports you straight to Italy, where each bite \
          feels like a hug from nonna. With friendly staff and an inviting \
          setting, it’s the perfect spot to indulge in your pasta cravings time \
          and time again.";

  description.appendChild(descriptionText);

  // Create description "signature"
  const signature = document.createElement("p");
  signature.innerText = "Marco";
  description.appendChild(signature);

  // Append description to content
  content.appendChild(description);

  // Create hours container
  const hoursDiv = document.createElement("div");
  hoursDiv.classList.add("hours");

  // Create title
  const hoursTitle = document.createElement("h2");
  hoursTitle.innerText = "Hours";
  hoursDiv.appendChild(hoursTitle);

  // Define hours for each day
  const hours = [
    "Sunday: 11am - 9pm",
    "Monday: 5pm - 9pm",
    "Tuesday: 5pm - 9pm",
    "Wednesday: 5pm - 9pm",
    "Thursday: 5pm - 10pm",
    "Friday: 5pm - 10pm",
    "Saturday: 11am - 10pm",
  ];

  // Create a paragraph for each day
  hours.forEach((day) => {
    const paragraph = document.createElement("p");
    paragraph.innerText = day;
    hoursDiv.appendChild(paragraph);
  });

  // Append hours to content
  content.appendChild(hoursDiv);

  // Create location div
  const location = document.createElement("div");
  location.classList.add("location");

  // Create title for location
  const titleLocation = document.createElement("h2");
  titleLocation.innerText = "Location";
  location.appendChild(titleLocation);

  // Create location text
  const textLocation = document.createElement("p");
  textLocation.innerText = "123 Forest Drive, Forestville, New York";
  location.appendChild(textLocation);

  // Append location div to content
  content.appendChild(location);
}
