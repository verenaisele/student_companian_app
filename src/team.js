//Team Seite - Dashboard
const teamMember = [["André Willrich", "Miriam Brauer", "Sophie Willrich", "Verena Isele", "Emmanuel Losch"], ["Sophie Ketterer", "Mickey Mouse", "Marlina Ketterer","Verena Losch", "André Isele"]]

const main = document.querySelector('main')

//Team Seite
teamMember.forEach(teamMemberList => {
    const section = document.createElement('section')
    main.appendChild(section)
    section.classList.add('team')
    const h2 = document.createElement('h2')
    section.appendChild(h2)
    h2.innerText = "Team 1"
    const div = document.createElement('div')
    section.appendChild(div)
    div.classList.add('team__container')
    const ul = document.createElement('ul')
    div.appendChild(ul)
    ul.classList.add('team__list')
    ul.id = "teamMembers"

    teamMemberList.forEach(teamMemberName => {
    ul.innerHTML += `<li>${teamMemberName}</li>`
})
})