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
    {
      name: "Peach",
      role: "Waiter",
      phone: "555-555-5557",
      email: "peach@notFake.com",
    },
  ];

  staffData.forEach((staff) => {
    const staffMemberDiv = document.createElement("div");
    staffMemberDiv.classList.add("staff-member");

    const staffName = document.createElement("h4");
    staffName.textContent = staff.name;
    const roleEm = document.createElement("em");
    roleEm.textContent = staff.role;
    staffName.appendChild(roleEm);
    staffMemberDiv.appendChild(staffName);

    const phonePara = document.createElement("p");
    const phoneStrong = document.createElement("strong");
    phoneStrong.textContent = "Phone:";
    phonePara.appendChild(phoneStrong);
    phonePara.appendChild(document.createTextNode(` ${staff.phone}`));
    staffMemberDiv.appendChild(phonePara);

    const emailPara = document.createElement("p");
    const emailStrong = document.createElement("strong");
    emailStrong.textContent = "Email:";
    emailPara.appendChild(emailStrong);
    emailPara.appendChild(document.createTextNode(" "));

    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${staff.email}`;
    emailLink.textContent = staff.email;
    emailPara.appendChild(emailLink);

    staffMemberDiv.appendChild(emailPara);

    staffContactContainer.appendChild(staffMemberDiv);
  });

  content.appendChild(staffContactContainer);
}
