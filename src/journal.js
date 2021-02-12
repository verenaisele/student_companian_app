const main = document.querySelector(".main__Journal");

fetch("https://muc-2020-w1-student-api.vercel.app/api/journals")
  .then((res) => res.json())
  .then((data) => {
    data.forEach(renderCard);
  });

/*const getRequest = {
  rating: 0,
  comprehension: 0,
  motto: "",
  notes: "",
};*/

function renderCard(journal) {
  main.innerHTML += `<section class="journal">

      <div class="journal__container">
          <h2 class="journal__header">Yesterdays Journal:</h2>

          <div class="journal__rating mg-bt">
              <h3 class="journal__subheader">Rating:</h3>
              <div class="journal__star">
                  ${getStars(journal.rating)}
              </div>
          </div>

          <div class="journal__comprehension mg-bt">
              <h3 class="journal__subheader">Comprehension:</h3>
              <div class="journal__rectangle">
                  ${getRectangles(journal.comprehension)}
              </div>
          </div>

          <div class="journal__motto mg-bt">
              <h3 class="journal__subheader">Motto:</h3>
              <p class="journal__motto--zitat">„${journal.motto}“</p>
          </div>
          <div class="journal__notes">
              <h3 class="journal__subheader">Notes:</h3>
              <p class="journal__notes--text">${journal.notes}</p>
          </div>

      </div>
  </section>`;
}

function getStars(anzahl) {
  let html = "";

  for (let i = 0; i < anzahl; i++) {
    html += getSymbolAct("star");
  }

  for (let i = 0; i < 5 - anzahl; i++) {
    html += getSymbolDeAct("star");
  }

  return html;
}

function getRectangles(anzahl) {
  let html = "";

  for (let i = 0; i < anzahl; i++) {
    html += getSymbolAct("rect");
  }

  for (let i = 0; i < 10 - anzahl; i++) {
    html += getSymbolDeAct("rect");
  }

  return html;
}

function getSymbolAct(symbol) {
  return `<div class="journal__${symbol}--act"></div>`;
}

function getSymbolDeAct(symbol) {
  return `<div class="journal__${symbol}--deact"></div>`;
}
