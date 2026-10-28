
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Mobile navigation menu
menuToggle.addEventListener("click", () => {
  const opened = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.setAttribute(
    "aria-label",
    opened ? "Close menu" : "Open menu"
  );
  menuToggle.textContent = opened ? "✕" : "☰";
});

// Close navigation after clicking a link
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Filter dishes by category
const filterButtons = document.querySelectorAll(".filter");
const dishes = document.querySelectorAll(".dish-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    dishes.forEach((dish) => {
      dish.hidden =
        category !== "all" && dish.dataset.category !== category;
    });
  });
});

// Open WhatsApp with the selected dish
document.querySelectorAll(".order-button").forEach((button) => {
  button.addEventListener("click", () => {
    const dish = button.dataset.dish;

    // Replace this with the restaurant's real WhatsApp number.
    const phone = "";

    const message = `Hello Flavor Haven! I would like to order ${dish}. Please share the ordering details.`;
    const url = phone
      ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
      : `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
