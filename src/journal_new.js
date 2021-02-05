//journal_new Symbole ersetzen

const star = document.querySelector('.star')

const getstar1container = document.createElement('div')
getstar1container.classList.add('star1')
getstar1container.id = "star1id"
getstar1container.innerHTML = (getStar("starEmpty"))
star.appendChild(getstar1container)

const getstar2container = document.createElement('div')
getstar2container.classList.add('star1')
getstar2container.id = "star2id"
getstar2container.innerHTML = (getStar("starEmpty"))
star.appendChild(getstar2container)

const getstar3container = document.createElement('div')
getstar3container.classList.add('star1')
getstar3container.id = "star3id"
getstar3container.innerHTML = (getStar("starEmpty"))
star.appendChild(getstar3container)

const getstar4container = document.createElement('div')
getstar4container.classList.add('star1')
getstar4container.id = "star4id"
getstar4container.innerHTML = (getStar("starEmpty"))
star.appendChild(getstar4container)

const getstar5container = document.createElement('div')
getstar5container.classList.add('star1')
getstar5container.id = "star5id"
getstar5container.innerHTML = (getStar("starEmpty"))
star.appendChild(getstar5container)

getstar1container.addEventListener('click', () => {
    getstar1container.innerHTML = (getStar("starFull"))
    getstar2container.innerHTML = (getStar("starEmpty"))
    getstar3container.innerHTML = (getStar("starEmpty"))
    getstar4container.innerHTML = (getStar("starEmpty"))
    getstar5container.innerHTML = (getStar("starEmpty"))
})
getstar2container.addEventListener('click', () => {
    getstar2container.innerHTML = (getStar("starFull"))
    getstar1container.innerHTML = (getStar("starFull"))
    getstar3container.innerHTML = (getStar("starEmpty"))
    getstar4container.innerHTML = (getStar("starEmpty"))
    getstar5container.innerHTML = (getStar("starEmpty"))
})
getstar3container.addEventListener('click', () => {
    getstar3container.innerHTML = (getStar("starFull"))
    getstar2container.innerHTML = (getStar("starFull"))
    getstar1container.innerHTML = (getStar("starFull"))
    getstar4container.innerHTML = (getStar("starEmpty"))
    getstar5container.innerHTML = (getStar("starEmpty"))
})
getstar4container.addEventListener('click', () => {
    getstar4container.innerHTML = (getStar("starFull"))
    getstar3container.innerHTML = (getStar("starFull"))
    getstar2container.innerHTML = (getStar("starFull"))
    getstar1container.innerHTML = (getStar("starFull"))
    getstar5container.innerHTML = (getStar("starEmpty"))
})
getstar5container.addEventListener('click', () => {
    getstar5container.innerHTML = (getStar("starFull"))
    getstar4container.innerHTML = (getStar("starFull"))
    getstar3container.innerHTML = (getStar("starFull"))
    getstar2container.innerHTML = (getStar("starFull"))
    getstar1container.innerHTML = (getStar("starFull"))
})


function getStar (starStatus, id) {
    const starEmpty = `<svg width="35.75px" height="34.46px" viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Star Copy 8</title>
    <g id="App" stroke="#7589A2" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="NF_CourseApp_Screen1" transform="translate(-230.000000, -674.000000)" fill="#fff">
            <g id="Card1" transform="translate(30.000000, 628.000000)">
                <g id="Rating" transform="translate(20.000000, 46.000000)">
                    <g id="Star" transform="translate(180.000000, 0.000000)">
                        <path d="M8.23458443,7.2288 L0.825542795,8.30177333 L0.715980417,8.32378638 C0.00767592863,8.50741356 -0.252463118,9.41029168 0.291855842,9.93923898 L5.65288072,15.14976 L4.3876206,22.5059207 L4.37507497,22.6116336 C4.32751461,23.3425174 5.11048682,23.8713631 5.78483118,23.5179301 L12.4119178,20.0448 L19.0390043,23.5179301 L19.1359768,23.5624921 C19.8185371,23.833441 20.5650032,23.2545037 20.4362149,22.5059207 L19.1699918,15.14976 L24.5319797,9.93923898 L24.6076386,9.85722905 C25.0724025,9.29362162 24.750523,8.41074247 23.9982927,8.30177333 L16.5882881,7.2288 L13.2754414,0.535136917 C12.9222134,-0.178378972 11.9016221,-0.178378972 11.5483941,0.535136917 L8.23458443,7.2288 Z" id="Path"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`

const starFull = `<svg width="35.75px" height="34.46px" viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Star Copy 8</title>
<g id="App" stroke="#7589A2" stroke-width="1" fill="none" fill-rule="evenodd">
<g id="NF_CourseApp_Screen1" transform="translate(-230.000000, -674.000000)" fill="rgb(20, 37, 64)">
    <g id="Card1" transform="translate(30.000000, 628.000000)">
        <g id="Rating" transform="translate(20.000000, 46.000000)">
            <g id="Star" transform="translate(180.000000, 0.000000)">
                <path d="M8.23458443,7.2288 L0.825542795,8.30177333 L0.715980417,8.32378638 C0.00767592863,8.50741356 -0.252463118,9.41029168 0.291855842,9.93923898 L5.65288072,15.14976 L4.3876206,22.5059207 L4.37507497,22.6116336 C4.32751461,23.3425174 5.11048682,23.8713631 5.78483118,23.5179301 L12.4119178,20.0448 L19.0390043,23.5179301 L19.1359768,23.5624921 C19.8185371,23.833441 20.5650032,23.2545037 20.4362149,22.5059207 L19.1699918,15.14976 L24.5319797,9.93923898 L24.6076386,9.85722905 C25.0724025,9.29362162 24.750523,8.41074247 23.9982927,8.30177333 L16.5882881,7.2288 L13.2754414,0.535136917 C12.9222134,-0.178378972 11.9016221,-0.178378972 11.5483941,0.535136917 L8.23458443,7.2288 Z" id="Path"></path>
            </g>
        </g>
    </g>
</g>
</g>
</svg>`

if (starStatus == "starEmpty") {
   return starEmpty
} else {
    return starFull
}
}