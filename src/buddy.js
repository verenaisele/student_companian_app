//Buddy-Seite

const codeBuddies = [{
    buddy1: "André Willrich", 
    buddy2: "Emmanuel Losch"
}
, {
    buddy1: "Sophie Ketterer",
    buddy2: "Verena Isele"
}
, {
    buddy1: "Mickey Mouse",
    buddy2: "Miriam Brauer"
}
, {
    buddy1: "Marlina Ketterer",
    buddy2: "Verena Losch"
}
, {
    buddy1: "Sophie Willrich",
    buddy2: "André Isele"
}
]
const main = document.querySelector('main')

codeBuddies.forEach(BuddyList => {
    const section = document.createElement('section')
    main.appendChild(section)
    section.classList.add('team')
    
    const teamContainer = document.createElement('div')
    section.appendChild(teamContainer)
    teamContainer.classList.add('team__container')

    const ul = document.createElement('ul')
    teamContainer.appendChild(ul)
    ul.classList.add('team__list')
    
    const teamPlus = document.createElement('div')
    teamContainer.appendChild(teamPlus)
    teamPlus.classList.add('team__plus')

    ul.innerHTML += `<li>${BuddyList.buddy1}</li>`
    ul.innerHTML += `<li>${BuddyList.buddy2}</li>`
})