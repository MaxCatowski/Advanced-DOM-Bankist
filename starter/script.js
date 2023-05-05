'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/////////////Selecting elements/////////////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allsections = document.querySelectorAll('.section');
// console.log(allsections);
allsections;
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

///////////////////////////Scroling///////////////////////

const bntScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
bntScrollTo.addEventListener('click', function (e) {
  // const slcoords = section1.getBoundingClientRect();
  // // console.log(slcoords);

  // // console.log(e.target.getBoundingClientRect());
  // // console.log('current scroll (x/y)', window.pageXOffset, pageYOffset);

  // // window.scrollTo(
  // //   slcoords.left + window.pageXOffset,
  // //   slcoords.top + window.pageYOffset
  // // );

  // window.scrollTo({
  //   left: slcoords.left + window.pageXOffset,
  //   top: slcoords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

///1. Add event listner to common parent element
///2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();
  //Mathing strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute(`href`);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
  // if (e.target.classList.contains('nav__links'))
  //   header.classList.toggle('nav-open');
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute(`href`);
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

////////////////////////////////////////////////////////////////////

/////////////Creating and inserting elements///////////////
// .insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');

// // message.textContent =
// //   ' We use cookies for improved functionality and analytics';
// message.innerHTML =
//   ' We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie"> Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.append(message);

// const btnCloseCookie = document.querySelector('.btn--close-cookie');
// btnCloseCookie.addEventListener('click', function () {
//   message.remove();
// });

// ///////////////Styles////////////
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// /////////////////atributes/////////////////

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// // console.log(logo.getAttribute());
// logo.alt = 'minimalist logo';
// console.log(logo.alt);
// logo.setAttribute('company', 'Bankist');

// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));
// //////////Date atributes////////////
// console.log(logo.dataset.versionNumber);
// ////classses ////////

// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();
/////////////////////smooth scrolling//////////////////////////////
// const bntScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
// bntScrollTo.addEventListener('click', function (e) {
//   // const slcoords = section1.getBoundingClientRect();
//   // // console.log(slcoords);

//   // // console.log(e.target.getBoundingClientRect());
//   // // console.log('current scroll (x/y)', window.pageXOffset, pageYOffset);

//   // // window.scrollTo(
//   // //   slcoords.left + window.pageXOffset,
//   // //   slcoords.top + window.pageYOffset
//   // // );

//   // window.scrollTo({
//   //   left: slcoords.left + window.pageXOffset,
//   //   top: slcoords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });
//   //////Scroling//////////
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListner: Great! You are reading the heading');
//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListner: Great! You are reading the heafing');
// });

// h1.onmouseenter = function (e) {
//   alert('addEventListner: Great! You are reading the heading');
// };

//rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min - 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());
// // document.querySelector('.nav__link').addEventListener('click', function (e) {
// //   this.style.backgroundColor = randomColor();
// //   //Stop propagation///
// //   // e.stopPropagation();
// // });

// // document.querySelector('.nav__links').addEventListener('click', function (e) {
// //   this.style.backgroundColor = randomColor();
// // });

// // document.querySelector('.nav').addEventListener('click', function (e) {
// //   this.style.backgroundColor = randomColor();
// // });

// const random = () => Math.floor(Math.random() * 255 + 1);
// console.log(random());

// const randomColor1 = () => `rgb(${random()},${random()},${random()})`;
// console.log(randomColor1());

//////Page navigation ////////

////Going downwards: child

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// ////Going sideways: siblings
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = `scale(0.5)`;
// });

//////Tabbed component ///////////////

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //Guard clause
  if (!clicked) return;
  //Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //Active content area
  console.log(clicked.dataset.tab);
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
////////////////////////////////////////////
//Menu fade animation

const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//Passing argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////STICKY NAV///////////////////

// const initialCords = section1.getBoundingClientRect();
// console.log(initialCords);

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
// const obsrverCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsrverCallback, observerOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;

  if (entry.intersectionRatio === 0) nav.classList.add('sticky');
  else nav.classList.remove('sticky');

  /////////////Another variant////////////
  // if (entry.isIntersecting === false) nav.classList.add('sticky');
  // else nav.classList.remove('sticky');
  ///////////////////////////////////////////
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
//////////////////////////////////////////////////////////////////

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  // if(entry.isIntersecting===true)
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

////////////////////////Lazy loading img/////////////////////////

const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTrgets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  ///Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));
////////////////////////////////////////////////////////////
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
// console.log(slides);
const dotContainer = document.querySelector('.dots');
let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

const activeDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activeDot(slide);
  }
});

/////Next slide////////////////
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
};

btnRight.addEventListener('click', nextSlide);

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  }
  curSlide--;
  goToSlide(curSlide);
  activeDot(curSlide);
};

btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  // console.log(e);
  if (e.key === 'ArrowLeft') prevSlide();

  e.key === 'ArrowRight' && nextSlide();
});
///////////////////////create dots///////////////////////////
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();
activeDot(0);
//////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('dom tree built', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');

btnNavEl.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // closemobile nav

    if (link.classList.contains('nav__link'))
      header.classList.toggle('nav-open');
  });
});
