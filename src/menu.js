export function displayMenuPage() {
  // Data for the menu
  const menu = {
    beverages: [
      {
        name: "Golden Honey Tea",
        description:
          "A warm, sweet tea made with the finest honey and a hint of lemon. Perfect for sipping before your pasta feast!",
        price: "$2",
      },
      {
        name: "Berry Bliss Iced Tea",
        description:
          "Refreshing iced tea infused with a blend of fresh berries. Best served cold, but can be enjoyed hot too.",
        price: "$3",
      },
    ],
    sides: [
      {
        name: "Garlic Breadsticks",
        description:
          "Soft, buttery breadsticks seasoned with a garlic herb blend. A must-have companion to any pasta dish.",
        price: "$3",
      },
      {
        name: "Caprese Salad",
        description:
          "A fresh medley of ripe tomatoes, mozzarella, basil, and a drizzle of balsamic glaze. Light, refreshing, and the perfect start.",
        price: "$5",
      },
      {
        name: "Pasta Chips",
        description:
          "Crispy pasta bites dusted with parmesan and herbs. A crunchy snack to munch on while you wait for your main dish!",
        price: "$4",
      },
    ],
    mainDishes: [
      {
        name: "Spaghetti Pomodoro",
        description:
          "A classic! Spaghetti tossed with a simple yet rich tomato sauce made from vine-ripened tomatoes, garlic, and basil.",
        price: "$8",
      },
      {
        name: "Fettuccine Alfredo",
        description:
          "Creamy, dreamy fettuccine in a velvety parmesan sauce. Served with a sprinkle of fresh parsley for extra flair.",
        price: "$10",
      },
      {
        name: "Penne Arrabbiata",
        description:
          "Penne pasta in a spicy tomato sauce with garlic, red pepper flakes, and a touch of olive oil. A fiery treat for heat lovers!",
        price: "$9",
      },
      {
        name: "Pasta Primavera",
        description:
          "A rainbow of fresh veggies (seasonal, of course) tossed in a light olive oil and garlic sauce. Perfect for a vegetarian delight!",
        price: "$9",
      },
      {
        name: "Lasagna Bolognese",
        description:
          "Layers of fresh pasta, rich beef and pork ragu, creamy béchamel, and melted mozzarella. A classic Italian comfort dish!",
        price: "$12",
      },
      {
        name: "Pasta Paradise Special",
        description:
          "Our signature pasta: rigatoni served in a decadent creamy tomato-basil sauce with a touch of parmesan and fresh basil.",
        price: "$11",
      },
    ],
    desserts: [
      {
        name: "Tiramisu",
        description:
          "A luscious, coffee-flavored dessert with layers of mascarpone and a dusting of cocoa powder. A sweet way to end your meal.",
        price: "$5",
      },
      {
        name: "Cannoli",
        description:
          "Crispy pastry shells filled with sweet ricotta cheese, chocolate chips, and a hint of vanilla. Crunchy, creamy, perfect!",
        price: "$4",
      },
      {
        name: "Lemon Ricotta Cheesecake",
        description:
          "A creamy, tangy cheesecake made with ricotta and a touch of lemon. Light, refreshing, and oh so satisfying!",
        price: "$6",
      },
    ],
    kidsMenu: [
      {
        name: "Mini Pasta & Sauce",
        description:
          "A smaller portion of pasta with your choice of marinara or butter sauce. Kid-friendly and delicious!",
        price: "$5",
      },
      {
        name: "Mac 'n' Cheese Bites",
        description:
          "Little bites of macaroni and cheese, crispy on the outside and gooey on the inside. Perfect for little hands!",
        price: "$4",
      },
    ],
  };

  function generateMenu() {
    const contentDiv = document.getElementById("content");

    const title = document.createElement("h1");
    title.textContent = "Pasta Paradise Menu";
    contentDiv.appendChild(title);

    function generateSection(title, items) {
      const sectionTitle = document.createElement("h2");
      sectionTitle.textContent = title;
      contentDiv.appendChild(sectionTitle);

      // Create and append items list
      const itemsList = document.createElement("ul");

      items.forEach((item) => {
        const listItem = document.createElement("li");

        // Add item name
        const nameElement = document.createElement("strong");
        nameElement.textContent = item.name;
        listItem.appendChild(nameElement);

        // Add line break
        listItem.appendChild(document.createElement("br"));

        // Add description
        const descElement = document.createElement("em");
        descElement.textContent = item.description;
        listItem.appendChild(descElement);

        // Add line break
        listItem.appendChild(document.createElement("br"));

        // Add price
        const priceSpan = document.createElement("span");
        priceSpan.className = "price";
        priceSpan.textContent = item.price;
        listItem.appendChild(priceSpan);

        itemsList.appendChild(listItem);
      });
      contentDiv.appendChild(itemsList);
    }

    // Generate all menu sections
    generateSection("Beverages", menu.beverages);
    generateSection("Sides", menu.sides);
    generateSection("Main Dishes", menu.mainDishes);
    generateSection("Desserts", menu.desserts);
    generateSection("Kids' Menu", menu.kidsMenu);
  }

  generateMenu();
}
