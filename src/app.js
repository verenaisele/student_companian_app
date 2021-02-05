//Code Buddy Seite
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
const teamlist1 = document.querySelector('#teamlist1')
teamlist1.innerText = codeBuddies[0].buddy1

const teamlist2 = document.querySelector('#teamlist2')
teamlist2.innerText = codeBuddies[0].buddy2

//Team Seite - Dashboard
const teamMember = [["André Willrich", "Miriam Brauer", "Sophie Willrich", "Verena Isele", "Emmanuel Losch"], ["Sophie Ketterer", "Mickey Mouse", "Marlina Ketterer","Verena Losch", "André Isele"]]


const ulTeamMembers = document.querySelector('#teamMembers')
                          
teamMember[0].forEach(teamMembername => {

//Variante1:  
ulTeamMembers.innerHTML += `<li>${teamMembername}</li>`

//Variante2:
//const li = document.createElement('li')
//li.innerText = teamMembername
//ulTeamMembers.appendChild(li)
     })

const main = document.querySelector('main')
//Team Seite
teamMember.forEach(teamMemberList => {
    main.innerHTML += `<section class="team">
                                <h2>Team 1</h2>
                                <div class="team__container">
                                    <ul id="teamMembers" class="team__list">
                                    </ul>
                                </div>
                                </section>`
})