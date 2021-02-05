//Journal_new Rectangle ersetzen

const rectangle = document.querySelector('.rectangle')

const getrect1container = document.createElement('div')
getrect1container.classList.add('retancle1')
getrect1container.id = "rect1id"
getrect1container.innerHTML = (getRectangle("rectEmpty"))
rectangle.appendChild(getrect1container)

const getrect2container = document.createElement('div')
getrect2container.classList.add('retancle1')
getrect2container.id = "rect2id"
getrect2container.innerHTML = (getRectangle("rectEmpty"))
rectangle.appendChild(getrect2container)

const getrect3container = document.createElement('div')
getrect3container.classList.add('retancle1')
getrect3container.id = "rect3id"
getrect3container.innerHTML = (getRectangle("rectEmpty"))
rectangle.appendChild(getrect3container)

const getrect4container = document.createElement('div')
getrect4container.classList.add('retancle1')
getrect4container.id = "rect4id"
getrect4container.innerHTML = (getRectangle("rectEmpty"))
rectangle.appendChild(getrect4container)

const getrect5container = document.createElement('div')
getrect5container.classList.add('retancle1')
getrect5container.id = "rect5id"
getrect5container.innerHTML = (getRectangle("rectEmpty"))
rectangle.appendChild(getrect5container)

const getrect6container = document.createElement('div')
getrect6container.classList.add('retancle1')
getrect6container.id = "rect6id"
getrect6container.innerHTML = (getRectangle("rectEmpty"))
rectangle.appendChild(getrect6container)

const getrect7container = document.createElement('div')
getrect7container.classList.add('retancle1')
getrect7container.id = "rect7id"
getrect7container.innerHTML = (getRectangle("rectEmpty"))
rectangle.appendChild(getrect7container)

const getrect8container = document.createElement('div')
getrect8container.classList.add('retancle1')
getrect8container.id = "rect8id"
getrect8container.innerHTML = (getRectangle("rectEmpty"))
rectangle.appendChild(getrect8container)

const getrect9container = document.createElement('div')
getrect9container.classList.add('retancle1')
getrect9container.id = "rect9id"
getrect9container.innerHTML = (getRectangle("rectEmpty"))
rectangle.appendChild(getrect9container)

const getrect10container = document.createElement('div')
getrect10container.classList.add('retancle1')
getrect10container.id = "rect10id"
getrect10container.innerHTML = (getRectangle("rectEmpty"))
rectangle.appendChild(getrect10container)

getrect1container.addEventListener('click', () => {
    getrect1container.innerHTML = (getRectangle("rectFull"))
    getrect2container.innerHTML = (getRectangle("rectEmpty"))
    getrect3container.innerHTML = (getRectangle("rectEmpty"))
    getrect4container.innerHTML = (getRectangle("rectEmpty"))
    getrect5container.innerHTML = (getRectangle("rectEmpty"))
    getrect6container.innerHTML = (getRectangle("rectEmpty"))
    getrect7container.innerHTML = (getRectangle("rectEmpty"))
    getrect8container.innerHTML = (getRectangle("rectEmpty"))
    getrect9container.innerHTML = (getRectangle("rectEmpty"))
    getrect10container.innerHTML = (getRectangle("rectEmpty"))
})
getrect2container.addEventListener('click', () => {
    getrect2container.innerHTML = (getRectangle("rectFull"))
    getrect1container.innerHTML = (getRectangle("rectFull"))
    getrect3container.innerHTML = (getRectangle("rectEmpty"))
    getrect4container.innerHTML = (getRectangle("rectEmpty"))
    getrect5container.innerHTML = (getRectangle("rectEmpty"))
    getrect6container.innerHTML = (getRectangle("rectEmpty"))
    getrect7container.innerHTML = (getRectangle("rectEmpty"))
    getrect8container.innerHTML = (getRectangle("rectEmpty"))
    getrect9container.innerHTML = (getRectangle("rectEmpty"))
    getrect10container.innerHTML = (getRectangle("rectEmpty"))
})
getrect3container.addEventListener('click', () => {
    getrect3container.innerHTML = (getRectangle("rectFull"))
    getrect2container.innerHTML = (getRectangle("rectFull"))
    getrect1container.innerHTML = (getRectangle("rectFull"))
    getrect4container.innerHTML = (getRectangle("rectEmpty"))
    getrect5container.innerHTML = (getRectangle("rectEmpty"))
    getrect6container.innerHTML = (getRectangle("rectEmpty"))
    getrect7container.innerHTML = (getRectangle("rectEmpty"))
    getrect8container.innerHTML = (getRectangle("rectEmpty"))
    getrect9container.innerHTML = (getRectangle("rectEmpty"))
    getrect10container.innerHTML = (getRectangle("rectEmpty"))
})
getrect4container.addEventListener('click', () => {
    getrect4container.innerHTML = (getRectangle("rectFull"))
    getrect3container.innerHTML = (getRectangle("rectFull"))
    getrect2container.innerHTML = (getRectangle("rectFull"))
    getrect1container.innerHTML = (getRectangle("rectFull"))
    getrect5container.innerHTML = (getRectangle("rectEmpty"))
    getrect6container.innerHTML = (getRectangle("rectEmpty"))
    getrect7container.innerHTML = (getRectangle("rectEmpty"))
    getrect8container.innerHTML = (getRectangle("rectEmpty"))
    getrect9container.innerHTML = (getRectangle("rectEmpty"))
    getrect10container.innerHTML = (getRectangle("rectEmpty"))
})
getrect5container.addEventListener('click', () => {
    getrect5container.innerHTML = (getRectangle("rectFull"))
    getrect4container.innerHTML = (getRectangle("rectFull"))
    getrect3container.innerHTML = (getRectangle("rectFull"))
    getrect2container.innerHTML = (getRectangle("rectFull"))
    getrect1container.innerHTML = (getRectangle("rectFull"))
    getrect6container.innerHTML = (getRectangle("rectEmpty"))
    getrect7container.innerHTML = (getRectangle("rectEmpty"))
    getrect8container.innerHTML = (getRectangle("rectEmpty"))
    getrect9container.innerHTML = (getRectangle("rectEmpty"))
    getrect10container.innerHTML = (getRectangle("rectEmpty"))
})
getrect6container.addEventListener('click', () => {
    getrect6container.innerHTML = (getRectangle("rectFull"))
    getrect5container.innerHTML = (getRectangle("rectFull"))
    getrect4container.innerHTML = (getRectangle("rectFull"))
    getrect3container.innerHTML = (getRectangle("rectFull"))
    getrect2container.innerHTML = (getRectangle("rectFull"))
    getrect1container.innerHTML = (getRectangle("rectFull"))
    getrect7container.innerHTML = (getRectangle("rectEmpty"))
    getrect8container.innerHTML = (getRectangle("rectEmpty"))
    getrect9container.innerHTML = (getRectangle("rectEmpty"))
    getrect10container.innerHTML = (getRectangle("rectEmpty"))
})
getrect7container.addEventListener('click', () => {
    getrect7container.innerHTML = (getRectangle("rectFull"))
    getrect6container.innerHTML = (getRectangle("rectFull"))
    getrect5container.innerHTML = (getRectangle("rectFull"))
    getrect4container.innerHTML = (getRectangle("rectFull"))
    getrect3container.innerHTML = (getRectangle("rectFull"))
    getrect2container.innerHTML = (getRectangle("rectFull"))
    getrect1container.innerHTML = (getRectangle("rectFull"))
    getrect8container.innerHTML = (getRectangle("rectEmpty"))
    getrect9container.innerHTML = (getRectangle("rectEmpty"))
    getrect10container.innerHTML = (getRectangle("rectEmpty"))
})
getrect8container.addEventListener('click', () => {
    getrect8container.innerHTML = (getRectangle("rectFull"))
    getrect7container.innerHTML = (getRectangle("rectFull"))
    getrect6container.innerHTML = (getRectangle("rectFull"))
    getrect5container.innerHTML = (getRectangle("rectFull"))
    getrect4container.innerHTML = (getRectangle("rectFull"))
    getrect3container.innerHTML = (getRectangle("rectFull"))
    getrect2container.innerHTML = (getRectangle("rectFull"))
    getrect1container.innerHTML = (getRectangle("rectFull"))
    getrect9container.innerHTML = (getRectangle("rectEmpty"))
    getrect10container.innerHTML = (getRectangle("rectEmpty"))
})
getrect9container.addEventListener('click', () => {
    getrect9container.innerHTML = (getRectangle("rectFull"))
    getrect8container.innerHTML = (getRectangle("rectFull"))
    getrect7container.innerHTML = (getRectangle("rectFull"))
    getrect6container.innerHTML = (getRectangle("rectFull"))
    getrect5container.innerHTML = (getRectangle("rectFull"))
    getrect4container.innerHTML = (getRectangle("rectFull"))
    getrect3container.innerHTML = (getRectangle("rectFull"))
    getrect2container.innerHTML = (getRectangle("rectFull"))
    getrect1container.innerHTML = (getRectangle("rectFull"))
    getrect10container.innerHTML = (getRectangle("rectEmpty"))
})
getrect10container.addEventListener('click', () => {
    getrect10container.innerHTML = (getRectangle("rectFull"))
    getrect9container.innerHTML = (getRectangle("rectFull"))
    getrect8container.innerHTML = (getRectangle("rectFull"))
    getrect7container.innerHTML = (getRectangle("rectFull"))
    getrect6container.innerHTML = (getRectangle("rectFull"))
    getrect5container.innerHTML = (getRectangle("rectFull"))
    getrect4container.innerHTML = (getRectangle("rectFull"))
    getrect3container.innerHTML = (getRectangle("rectFull"))
    getrect2container.innerHTML = (getRectangle("rectFull"))
    getrect1container.innerHTML = (getRectangle("rectFull"))
})

//Funktion
function getRectangle (rectStatus, id) {
const rectEmpty = `<svg width="26px" height="26px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Rectangle Copy 3</title>
    <g id="App" stroke="#7589A2" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="NF_CourseApp_Screen1" transform="translate(-106.000000, -745.000000)" fill="#fff">
            <g id="Card1" transform="translate(30.000000, 628.000000)">
                <g id="Comprehension" transform="translate(20.000000, 117.000000)">
                    <g id="Rectangle" transform="translate(56.000000, 0.000000)">
                        <rect id="Rectangle-Copy-6" transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) " x="0" y="0" width="22" height="22" rx="4"></rect>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`

const rectFull = `<svg width="26px" height="26px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Rectangle Copy 3</title>
<g id="App" stroke="#7589A2" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="NF_CourseApp_Screen1" transform="translate(-106.000000, -745.000000)" fill="rgb(20, 37, 64)">
        <g id="Card1" transform="translate(30.000000, 628.000000)">
            <g id="Comprehension" transform="translate(20.000000, 117.000000)">
                <g id="Rectangle" transform="translate(56.000000, 0.000000)">
                    <rect id="Rectangle-Copy-6" transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) " x="0" y="0" width="22" height="22" rx="4"></rect>
                </g>
            </g>
        </g>
    </g>
</g>
</svg>`

if (rectStatus == "rectEmpty") {
   return rectEmpty
} else {
    return rectFull
}
}