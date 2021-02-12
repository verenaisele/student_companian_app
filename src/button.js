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


fetch('https://muc-2020-w1-student-api.vercel.app/api/journals', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postRequest),
})
  .then((res) => res.json())
  .then((data) => console.log(data))


/* post('https://muc-2020-w1-student-api.vercel.app/api/journals', postRequest)
 .then(todo => {
   renderTodo(todo)
 })
 .catch((err) => {
   console.log(err.message)
 })
}
*/


function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
}

//1. Post
//2. Sterne * Kästchen (auf jeden Stern + Kästchen einen eventListener, jedes mal wenn Stern ist click einen LocalStorage, button abschicken - was steht drin)
