const moreSpeaker = [
  {
    imageUrl: 'images/kumbo9a (2).jpg',
    imageAlt: 'Portrait of Kumbo',
    name: 'Kumbo',
    description: 'Zambian script and songwriter',
    speakersLines: 'Kumbo is a young Zambian script and songwriter, well known for his single "Luapula nights"',
  },
  {
    imageUrl: 'images/jk-rowling.jpg',
    imageAlt: 'Portrait of J.K Rowling',
    name: 'J.K Rowling',
    description: 'British author',
    speakersLines: `J.K. Rowling is the author of the much-loved series of seven Harry Potter novels, originally published
    between 1997 and 2007`,
  },
  {
    imageUrl: 'images/montellfish.jpg',
    imageAlt: 'Portrait of Montell Fish',
    name: 'Montell Fish',
    description: 'Christian creative',
    speakersLines: 'Montell Fish is passionate about making music/art and glorifying God through it.',
  },
  {
    imageUrl: 'images/Miles Carter.jpg',
    imageAlt: 'Portrait of Miles Carter',
    name: 'Miles Carter',
    description: 'A gifted poet, composer, and orator',
    speakersLines: `Carter creates an emotionally raw and immersive experience that deep dives into the mental, emotional, and
    spiritual aspects of the human experience.`,
  },
];

const firstSpeakersContainer = document.getElementsByClassName('speakers')[0];

function firstSpeakers() {
  const htmlText = `<article class="speaker">
                    <div class="bgimage">
                      <img class="first" src="images/Group (1).png" alt="checked">
                      <img class="second" src="images/Paulo.jpg" alt="Portrait Paulo Coelho">
                    </div>

                    <div>
                      <h3>Paulo Coelho</h3>
                      <p class="description">Brazilian lyricist and novelist</p>
                      <hr class="speakers-line">
                      <p class="speakerDescription">Paulo Coelho is best known for his novel The Alchemist.</p>
                    </div>
                  </article>

                  <article class="speaker">
                    <div class="bgimage">
                      <img class="first" src="images/Group (1).png" alt="checked">
                      <img class="second" src="images/Lorde.jpg" alt="Portrait of Lorde">
                    </div>

                    <div>
                      <h3>Lorde</h3>
                      <p class="description">New Zealand Singer</p>
                        <hr class="speakers-line">
                      <p class="speakerDescription">
                        Lorde is known for employing unconventional musical styles and introspective songwriting.
                      </p>
                    </div>
                  </article>`;

  return htmlText;
}

function otherSpeakers() {
  const htmlText = `<article class="speaker otherSpeaker hideSpeaker">
                    <div class="bgimage">
                      <img class="first" src="images/Group (1).png" alt="checked">
                      <img class="second" src="${moreSpeaker[0].imageUrl}" alt="${moreSpeaker[0].imageAlt}">
                    </div>

                    <div>
                      <h3>${moreSpeaker[0].name}</h3>
                      <p class="description">${moreSpeaker[0].description}</p>
                      <hr class="speakers-line">
                      <p class="speakerDescription">${moreSpeaker[0].speakersLines}</p>
                    </div>
                  </article>
                  
                  <article class="speaker otherSpeaker hideSpeaker">
                    <div class="bgimage">
                      <img class="first" src="images/Group (1).png" alt="checked">
                      <img class="second" src="${moreSpeaker[1].imageUrl}" alt="${moreSpeaker[1].imageAlt}">
                    </div>

                    <div>
                      <h3>${moreSpeaker[1].name}</h3>
                      <p class="description">${moreSpeaker[1].description}</p>
                      <hr class="speakers-line">
                      <p class="speakerDescription">${moreSpeaker[1].speakersLines}</p>
                    </div>
                  </article>

                  <article class="speaker otherSpeaker hideSpeaker">
                    <div class="bgimage">
                      <img class="first" src="images/Group (1).png" alt="checked">
                      <img class="second" src="${moreSpeaker[2].imageUrl}" alt="${moreSpeaker[2].imageAlt}">
                    </div>

                    <div>
                      <h3>${moreSpeaker[2].name}</h3>
                      <p class="description">${moreSpeaker[2].description}</p>
                      <hr class="speakers-line">
                      <p class="speakerDescription">${moreSpeaker[2].speakersLines}</p>
                    </div>
                  </article>

                  <article class="speaker otherSpeaker hideSpeaker">
                    <div class="bgimage">
                      <img class="first" src="images/Group (1).png" alt="checked">
                      <img class="second" src="${moreSpeaker[3].imageUrl}" alt="${moreSpeaker[3].imageAlt}">
                    </div>

                    <div>
                      <h3>${moreSpeaker[3].name}</h3>
                      <p class="description">${moreSpeaker[3].description}</p>
                      <hr class="speakers-line">
                      <p class="speakerDescription">${moreSpeaker[3].speakersLines}</p>
                    </div>
                  </article>`;

  return htmlText;
}

function insertHtml() {
  firstSpeakersContainer.innerHTML += firstSpeakers();
  firstSpeakersContainer.innerHTML += otherSpeakers();
}

firstSpeakersContainer.onload = insertHtml();

const seeMore = document.querySelector('.more');
const moreSpeakers = document.querySelectorAll('.otherSpeaker');
let hide = true;

seeMore.addEventListener('click', (e) => {
  if (hide === true) {
    moreSpeakers.forEach((speaker) => {
      speaker.classList.add('hideSpeaker');
    });
    hide = false;
    e.target.innerText = 'See more';
  } else {
    moreSpeakers.forEach((speaker) => {
      speaker.classList.remove('hideSpeaker');
    });
    hide = true;
    e.target.innerText = 'See less';
  }
});