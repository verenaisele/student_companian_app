fetch('https://muc-2020-w1-student-api.vercel.app/api/journals')

    .then((res) => res.json())
    .then((data) => console.log(data))

const mottoZitat = document.querySelector('.journal__motto--zitat')

const getRequest = {
    rating: 3,
    comprehension: 8,
    motto: "Oh dear",
    notes: "My coaches keep giving me Harry Potter exercises.",
};

const main = document.querySelector('.main__Journal')

const card = main.innerHTML += `<section class="journal">

      <div class="journal__container">
          <h2 class="journal__header">Yesterdays Journal:</h2>

          <div class="journal__rating mg-bt">
              <h3 class="journal__subheader">Rating:</h3>
              <div class="journal__star">
                  <div class="journal__star--act"></div>
                  <div class="journal__star--act"></div>
                  <div class="journal__star--act"></div>
                  <div class="journal__star--deact"></div>
                  <div class="journal__star--deact"></div>
              </div>
          </div>

          <div class="journal__comprehension mg-bt">
              <h3 class="journal__subheader">Comprehension:</h3>
              <div class="journal__rectangle">
                  <div class="journal__rect--act"></div>
                  <div class="journal__rect--act"></div>
                  <div class="journal__rect--act"></div>
                  <div class="journal__rect--act"></div>
                  <div class="journal__rect--act"></div>
                  <div class="journal__rect--act"></div>
                  <div class="journal__rect--act"></div>
                  <div class="journal__rect--act"></div>
                  <div class="journal__rect--deact"></div>
                  <div class="journal__rect--deact"></div>
                  <div class="journal__rect--deact"></div>
              </div>
          </div>

          <div class="journal__motto mg-bt">
              <h3 class="journal__subheader">Motto:</h3>
              <p class="journal__motto--zitat">„Thats life in the city“</p>
          </div>
          <div class="journal__notes">
              <h3 class="journal__subheader">Notes:</h3>
              <p class="journal__notes--text">Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
                  mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque.</p>
          </div>

      </div>
  </section>`