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

let slider = document.querySelector('.slider');
// let left  = cards.getBoundingClientRect().right;
cards.addEventListener('click', ()=>{
  let left  = cards.getBoundingClientRect().right;
  // let num = cards.getElementsByClassName('card').classList[1];
  card.forEach(card => {
    num = card.classList[1]; 
    if(num == 1 && left == 1500){
      manualNav(num-1);
      console.log(num);
    }
    if(num == 2 && left == 1125){
      manualNav(num-1);
      console.log(num);
    }
    if(num == 3 && left == 750){
      manualNav(num-1);
      console.log(num);
    }
    if(num == 4 && left == 375){
      manualNav(num-1);
      console.log(num);
    }
  });  
  console.log(left);
})

