const button = document.querySelector(".button_save");

const mottoInput = document.querySelector(".today_motto");

const notesInput = document.querySelector(".today_notes");

const postRequest = {
  rating: 3,
  comprehension: 8,
  motto: "Oh dear",
  notes: "My coaches keep giving me Harry Potter exercises.",
};
button.addEventListener("click", () => {
  postRequest.motto = mottoInput.value;
  postRequest.notes = notesInput.value;
  console.log(postRequest);
});

//1. Post
//2. Sterne * Kästchen (auf jeden Stern + Kästchen einen eventListener, jedes mal wenn Stern ist click einen LocalStorage, button abschicken - was steht drin)