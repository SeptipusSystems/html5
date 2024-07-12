document.addEventListener("DOMContentLoaded", () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => cargar(json));
});

function addStars(container, rate) {
  const fullStars = Math.floor(rate);
  const halfStars = rate % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  for (let i = 0; i < fullStars; i++) {
    const star = document.createElement("span");
    star.classList.add("class", "mif-star-full");
    container.appendChild(star);
  }

  if (halfStars > 0) {
    const star = document.createElement("span");
    star.classList.add("class", "mif-star-half");
    container.appendChild(star);
  }

  for (let i = 0; i < emptyStars; i++) {
    const star = document.createElement("span");
    star.classList.add("class", "mif-star-empty");
    container.appendChild(star);
  }
}

function cargar(json) {
  const body = document.getElementById("store");
  json.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const title = document.createElement("h3");
    title.innerText = product.title;

    const price = document.createElement("p");
    price.innerText = `$${product.price}`;

    const description = document.createElement("p");
    description.classList.add("description");
    const shortDescription = product.description.substring(0, 50) + '...';
    description.innerText = shortDescription;
    description.title = product.description; // Usar title para la descripción completa como tooltip

    // Cambiar descripción al pasar el mouse
    description.addEventListener("mouseenter", () => {
      description.innerText = product.description;
    });
    description.addEventListener("mouseleave", () => {
      description.innerText = shortDescription;
    });

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;

    const rating = document.createElement("div");
    rating.classList.add("rating");
    const { rate } = product.rating;

    // Añadir las estrellas
    addStars(rating, rate);

    // Añadir detalles al card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(description);
    card.appendChild(rating);

    body.appendChild(card);
  });
}
