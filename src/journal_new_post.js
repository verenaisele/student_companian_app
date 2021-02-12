const button = document.querySelector(".button_save");
const mottoInput = document.querySelector(".today_motto");
const notesInput = document.querySelector(".today_notes");

const star1 = document.querySelector("#star1id");
const star2 = document.querySelector("#star2id");
const star3 = document.querySelector("#star3id");
const star4 = document.querySelector("#star4id");
const star5 = document.querySelector("#star5id");

const rect1 = document.querySelector("#rect1id");
const rect2 = document.querySelector("#rect2id");
const rect3 = document.querySelector("#rect3id");
const rect4 = document.querySelector("#rect4id");
const rect5 = document.querySelector("#rect5id");
const rect6 = document.querySelector("#rect6id");
const rect7 = document.querySelector("#rect7id");
const rect8 = document.querySelector("#rect8id");
const rect9 = document.querySelector("#rect9id");
const rect10 = document.querySelector("#rect10id");

star1.addEventListener("click", () => setItemLocalStorage("star_selected", 1));
star2.addEventListener("click", () => setItemLocalStorage("star_selected", 2));
star3.addEventListener("click", () => setItemLocalStorage("star_selected", 3));
star4.addEventListener("click", () => setItemLocalStorage("star_selected", 4));
star5.addEventListener("click", () => setItemLocalStorage("star_selected", 5));

rect1.addEventListener("click", () => setItemLocalStorage("rect_selected", 1));
rect2.addEventListener("click", () => setItemLocalStorage("rect_selected", 2));
rect3.addEventListener("click", () => setItemLocalStorage("rect_selected", 3));
rect4.addEventListener("click", () => setItemLocalStorage("rect_selected", 4));
rect5.addEventListener("click", () => setItemLocalStorage("rect_selected", 5));
rect6.addEventListener("click", () => setItemLocalStorage("rect_selected", 6));
rect7.addEventListener("click", () => setItemLocalStorage("rect_selected", 7));
rect8.addEventListener("click", () => setItemLocalStorage("rect_selected", 8));
rect9.addEventListener("click", () => setItemLocalStorage("rect_selected", 9));
rect10.addEventListener("click", () =>
  setItemLocalStorage("rect_selected", 10)
);

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
  postRequest.rating = localStorage.getItem("star_selected");
  postRequest.comprehension = localStorage.getItem("rect_selected");
  console.log(postRequest);
  postToServer(
    "https://muc-2020-w1-student-api.vercel.app/api/journals",
    postRequest
  );

  setItemLocalStorage("star_selected", 0);
  setItemLocalStorage("rect_selected", 0);
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
