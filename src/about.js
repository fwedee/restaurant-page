export function displayAboutPage() {
  const content = document.querySelector("#content");

  const header = document.createElement("h1");
  header.innerText = "Contact Us";
  content.appendChild(header);

  const textUnderHeader = document.createElement("p");
  textUnderHeader.innerText =
    "Feel free to get in touch with our friendly staff:";
  content.appendChild(textUnderHeader);

  const staffContactContainer = document.createElement("div");
  staffContactContainer.classList.add("staff-contact");

  const staffData = [
    {
      name: "Mario",
      role: "Chef",
      phone: "555-555-5554",
      email: "mario@notFake.com",
    },
    {
      name: "Luigi",
      role: "Manager",
      phone: "555-555-5555",
      email: "luigi@notFake.com",
    },
    {
      name: "Bowser",
      role: "Waiter",
      phone: "555-555-5556",
      email: "bowser@notFake.com",
    },
  ];

  staffData.forEach((staff) => {
    const staffMemberDiv = document.createElement("div");
    staffMemberDiv.classList.add("staff-member");

    const staffName = document.createElement("h4");
    staffName.innerHTML = `${staff.name} <em>${staff.role}</em>`;
    staffMemberDiv.appendChild(staffName);

    const phonePara = document.createElement("p");
    phonePara.innerHTML = `<strong>Phone:</strong> ${staff.phone}`;
    staffMemberDiv.appendChild(phonePara);

    const emailPara = document.createElement("p");
    emailPara.innerHTML = `<strong>Email:</strong> <a href="mailto:${staff.email}">${staff.email}</a>`;
    staffMemberDiv.appendChild(emailPara);

    staffContactContainer.appendChild(staffMemberDiv);
  });

  content.appendChild(staffContactContainer);
}
