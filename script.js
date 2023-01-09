// Mobile Menu

const hamburger = document.querySelector('#hamburger');
const closeMenu = document.querySelector('#glyphicon-remove');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu li');

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');
}

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});

// Dynmaic Creation

const speakers = document.querySelector('#speakers');
const FeaturedSpeaker = document.createElement('div');
const ulList = document.createElement('ul');

FeaturedSpeaker.innerHTML = `
        <h2 class="text-dark">Featured Speakers</h2>
        <div class="orange-line"></div>
    `;

speakers.appendChild(FeaturedSpeaker);
speakers.appendChild(ulList);

const presentation = document.querySelector('#speakers ul');

const presenters = [
  {
    id: 1,
    name: 'Kanyi Victor',
    qualification: 'Professor of Physical health and Biology at Harvard Law School',
    profession: 'Kanyi Victor studies and practices static fitness, and published his seminal book The Wealth of fitness in 2006.',
    image: 'images/profile.jpg',
  },
  {
    id: 2,
    name: 'Oguzie-Ibeh Richard',
    qualification: 'Director of Art Centre Nabi and a board member of CC Korea',
    profession: 'As the main venue for new media art production in Korea, Richard promotes cross-disiplinary collaboration and understanding in physical health, humanities, and the arts.',
    image: 'images/profile.jpg',
  },
  {
    id: 3,
    name: 'Ebolom Mcsaint',
    qualification: 'Executive director of the Wikimedia Foundation',
    profession: 'Ebolom is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikimedia. Wikimedia is a freely available news article on health matters and all things health, written in 290 languages and is used by nearly half a billion people around the world every month.',
    image: 'images/profile.jpg',
  },
  {
    id: 4,
    name: 'John Collins',
    qualification: 'Internationally reknown and successful Physician and physical wellness activist',
    profession: 'Collins studies Physical wellness, and published his seminal book The Fit Body & Mind in 2011.',
    image: 'images/profile.jpg',
  },
  {
    id: 5,
    name: 'Edom Nancy',
    qualification: 'Berkman Professor of Enterpreneurial Legal Studies at Strathmore University',
    profession: 'Nancy studies Biology and Advanced Genetics, and published the most sought after fitness educational article, The Power of Fitness in 2021',
    image: 'images/profile.jpg',
  },
  {
    id: 6,
    name: 'Akachukwu Smart',
    qualification: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    profession: 'Smart is an established and successful proactive body builder who has his career set on body building and is thus one of the best candidates to discuss matters physical health',
    image: 'images/profile.jpg',
  },
];
presenters.forEach((presenter) => {
  const list = document.createElement('li');
  list.classList.add(`presenter${presenter.id}`);
  list.innerHTML = `
        <div class="speaker-image">
            <div class="speaker-bg"></div>
            <img src="${presenter.image}" alt="">
        </div>
        <div class="speaker-info">
            <h3>${presenter.name}</h3>
            <h5>${presenter.qualification}</h5>
            <div></div>
            <p>${presenter.profession}</p>
        </div>
    `;
  presentation.appendChild(list);
});

// See Program

const seeLess = document.querySelector('#see-less');
const seeMore = document.querySelector('#see-more');
const partners = document.querySelector('#partners');
const footer = document.querySelector('#footer');
const seeDesktop = document.querySelector('#see-program');
// const speakersList = document.querySelectorAll('#speakers-list');

function toggleHideMobile() {
  speakers.classList.add('hidden');
  partners.classList.add('hidden');
  footer.classList.add('hidden');
  seeLess.classList.add('hidden');
  seeMore.classList.remove('hidden');
  // speakersList.forEach((list) => {
  //     list.classList.add('hidden');
  // });
}

function toggleSeeMobile() {
  speakers.classList.remove('hidden');
  partners.classList.remove('hidden');
  footer.classList.remove('hidden');
  seeLess.classList.remove('hidden');
  seeMore.classList.add('hidden');
  // speakersList.forEach((list) => {
  //     list.classList.remove('hidden');
  // });
}

function toggleSeeDesktop() {
  // speakersList.forEach((list) => {
  //     list.classList.toggle('hidden');
  // });
  speakers.classList.remove('hidden');
  partners.classList.remove('hidden');
  footer.classList.remove('hidden');
  // seeDesktop.classList.add('hidden');
}

seeLess.addEventListener('click', toggleHideMobile);
seeMore.addEventListener('click', toggleSeeMobile);
seeDesktop.addEventListener('click', toggleSeeDesktop);