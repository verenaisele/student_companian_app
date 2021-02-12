const main = document.querySelector("main");

fetch("https://muc-2020-w1-student-api.vercel.app/api/teams")
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);
    data.forEach(renderTeam);
  })
  .catch((err) => {
    console.log(err.message);
  });

function renderTeam(teamMembers) {
  const section = document.createElement("section");
  main.appendChild(section);
  section.classList.add("team");
  const h2 = document.createElement("h2");
  section.appendChild(h2);
  h2.innerText = "Team " + i;
  i++;
  const div = document.createElement("div");
  section.appendChild(div);
  div.classList.add("team__container");
  const ul = document.createElement("ul");
  div.appendChild(ul);
  ul.classList.add("team__list");
  ul.id = "teamMembers";

  teamMembers.forEach((teamMemberName) => {
    ul.innerHTML += `<li>${teamMemberName}</li>`;
  });
}

let i = 1;
//Team Seite
/*teamMember.forEach((teamMemberList) => {
  const h2 = document.createElement("h2");
  section.appendChild(h2);
  h2.innerText = "Team " + i;
  i++;
  const div = document.createElement("div");
  section.appendChild(div);
  div.classList.add("team__container");
  const ul = document.createElement("ul");
  div.appendChild(ul);
  ul.classList.add("team__list");
  ul.id = "teamMembers";
  

  teamMemberList.forEach((teamMemberName) => {
    ul.innerHTML += `<li>${teamMemberName}</li>`;
  });
});
*/
