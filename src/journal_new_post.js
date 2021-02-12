const button = document.querySelector(".button_save");
const mottoInput = document.querySelector(".today_motto");
const notesInput = document.querySelector(".today_notes");

const star1 = document.querySelector("#star1id");
const star2 = document.querySelector("#star2id");
const star3 = document.querySelector("#star3id");
const star4 = document.querySelector("#star4id");
const star5 = document.querySelector("#star5id");

star1.addEventListener("click", () => setItemLocalStorage("rect_selected", 1));
star2.addEventListener("click", () => setItemLocalStorage("rect_selected", 2));
star3.addEventListener("click", () => setItemLocalStorage("rect_selected", 3));
star4.addEventListener("click", () => setItemLocalStorage("rect_selected", 4));
star5.addEventListener("click", () => setItemLocalStorage("rect_selected", 5));

function setItemLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

const postRequest = {
  rating: 3,
  comprehension: 8,
  motto: "Oh dear",
  notes: "My coaches keep giving me Harry Potter exercises.",
};

button.addEventListener("click", () => {
  postRequest.motto = mottoInput.value;
  postRequest.notes = notesInput.value;
  postRequest.rating = localStorage.getItem("rect_selected");
  console.log(postRequest);
  postToServer(
    "https://muc-2020-w1-student-api.vercel.app/api/journals",
    postRequest
  );
});

function postToServer(url, data) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

//1. Post
//2. Sterne * Kästchen (auf jeden Stern + Kästchen einen eventListener, jedes mal wenn Stern ist click einen LocalStorage, button abschicken - was steht drin)
