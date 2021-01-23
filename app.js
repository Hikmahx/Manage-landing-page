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
    cards.style.transform = `translateX(-${size * cardNumber}px)`;
    cards.style.transition = '0.4s ease-in-out';
  })
})