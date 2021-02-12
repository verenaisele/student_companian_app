const main = document.querySelector("main");
const section = document.createElement("section");
main.appendChild(section);
section.classList.add("team");

fetch("https://muc-2020-w1-student-api.vercel.app/api/buddies")
  .then((res) => res.json())
  //.then((data) => console.log(data))
  .then((data) => {
    console.log(data);
    data.forEach(renderBuddies);
  })
  .catch((err) => {
    console.log(err.message);
  });

function renderBuddies(buddies) {
  const teamContainer = document.createElement("div");
  const teamPlus = document.createElement("div");
  teamContainer.appendChild(teamPlus);
  teamPlus.classList.add("team__plus");
  section.appendChild(teamContainer);
  teamContainer.classList.add("team__container");

  buddies.forEach((buddy) => {
    const ul = document.createElement("ul");
    teamContainer.appendChild(ul);
    ul.classList.add("team__list");
    ul.innerHTML += `<li>${buddy}</li>`;
  });
}
