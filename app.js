// UI for hamburger menu
const menu = document.querySelector('.hamburger-menu');
const nav  = document.querySelector('nav');

menu.addEventListener('click', ()=>{
  nav.classList.toggle('open');
  menu.classList.toggle('open');
})


// UI for carousel slider
const cards = document.querySelector('.cards');
const  card = document.querySelectorAll('.card');
const manualBtns = document.querySelectorAll('.manual-btn');

// counter
let counter = 1;
const size = card[0].clientWidth + 40;

const radioCards = document.querySelectorAll(`#btn${counter} ~ .first`);

manualBtns.forEach(manualBtn =>{
  
  manualBtn.addEventListener('click', (e)=>{
    let cardNumber = manualBtn.getAttribute('for').charAt(3) -1;
    manualBtn.checked = true;
    cards.style.transform = `translateX(-${size + size * cardNumber}px)`;
    cards.style.transition = '0.4s ease-in-out';
    manualNav(cardNumber);
  })
})

function manualNav(cardNumber){
  // removes all bg
  manualBtns.forEach(manualBtn =>{
    manualBtn.classList.remove('active');
  })

  // adds bg for only btn with this number
  manualBtns[cardNumber].classList.add('active');
}



//clone variable
let cardsLength = cards.getElementsByClassName('card').length,
firstCard = cards.getElementsByClassName('card')[0],
lastCard = cards.getElementsByClassName('card')[cardsLength -1],

// clones first one, ensure u put true for the contents to be cloned
cloneFirst = firstCard.cloneNode(true);
cloneFirst.id = 'firstClone';

// clones last one
cloneLast = lastCard.cloneNode(true);
cloneLast.id = 'lastClone';        

  // Clone first and last slide
  cards.appendChild(cloneFirst);
  cards.insertBefore(cloneLast, firstCard);
auto();


// infinite slider event
cards.addEventListener('transitionend', ()=>{
  if(counter > cards.getElementsByClassName('card').length -1){
    // counter = cards.getElementsByClassName('card').length -4;
    counter = 1;
    // cloneFirst = firstCard;
    cards.style.transition = 'none';
    cards.style.transform = `translateX(-${size * counter}px)`;
    // counter = cards.getElementsByClassName('card')[cardsLength -2];
  }
  if(counter < 1){
    counter = cards.getElementsByClassName('card').length -1;
    cards.style.transition = 'none';
    cards.style.transform = `translateX(-${size * counter}px)`;
  }

})


// automatic slide
function auto(){
  setInterval(() => {
      cards.style.transform = `translateX(-${size * counter}px)`;
      cards.style.transition = '0.4s ease-in-out';
      console.log(counter);
      counter++
  }, 2000);
}
