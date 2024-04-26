// index.js
const ramenAPI = "http://localhost:3000/ramens";
const ramenMenuDiv = document.getElementById("ramen-menu");

// Callbacks
const handleClick = (ramen) => {
  // Add code
  document.querySelector(".detail-image").src = ramen.image;
  document.querySelector(".name").textContent = ramen.name;
  document.querySelector(".restaurant").textContent = ramen.restaurant;
  document.getElementById("rating-display").textContent = ramen.rating;
  document.getElementById("comment-display").textContent = ramen.comment;
};

const addSubmitListener = (e) => {
  // Add code
  e.preventDefault();
  const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target["new-comment"].value,
  };
  displayRamen(newRamen);
  e.target.reset();
};

const updateRamenForm = document.getElementById("new-ramen");
updateRamenForm.addEventListener("submit", addSubmitListener);

function displayRamen(ramen) {
  const ramenImageEl = document.createElement("img");
  ramenImageEl.src = ramen.image;
  ramenMenuDiv.append(ramenImageEl);
  ramenImageEl.addEventListener("click", () => {
    handleClick(ramen);
  });
}

const displayRamens = (ramens) => {
  // Add code
  ramens.forEach(displayRamen);
};

fetch(ramenAPI)
  .then((res) => res.json())
  .then(displayRamens);

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
};

main();

// Export functions for testing
export { displayRamens, addSubmitListener, handleClick, main };
