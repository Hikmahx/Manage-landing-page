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


// slider event (shorter) on scroll
// let slider = document.querySelector('.slider');
// cards.addEventListener('click', ()=>{
  // let counter = 1;
  // let left  = cards.getBoundingClientRect().right;
  // num = card.classList[1]; 
  // console.log(num)

  // card.forEach(card => {
  //   num = card.classList[1]; 
  //   console.log(num)
  // })
// })


// window default event
window.addEventListener('load', ()=>{
  manualNav(0);
})



// card.forEach(cardSingle=>{
//   cardSingle.addEventListener('click', ()=>{
//     let number = cardSingle.classList[1];
//     let right  = cards.getBoundingClientRect().right;
//     console.log(`right ${right}`)
//     console.log(number)
//     manualNav(number-1);
//     console.log(manualBtns[number-1])
//   })
// })


let slider = document.querySelector('.slider');
slider.addEventListener('scroll', ()=>{
  card.forEach(card =>{
      let right  = -1 * cards.getBoundingClientRect().left/ window.innerWidth;
      whole = right -Math.floor(right)
      if(right - Math.floor(right) == 0){{
        console.log(`right ${right}`)
        manualNav(right);
      }}
  })  
})