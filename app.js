// UI for hamburger menu
const menu = document.querySelector('.hamburger-menu');
const nav  = document.querySelector('nav');

menu.addEventListener('click', ()=>{
  nav.classList.toggle('open');
  menu.classList.toggle('open');
})



// UI for carousel slider
const cards = document.querySelector('.cards'),
      card = document.querySelectorAll('.card'),
      manualBtns = document.querySelectorAll('.manual-btn'),
      slider = document.querySelector('.slider'),
      size = card[0].clientWidth + 40;


// window default event
window.addEventListener('load', ()=>{
  checkBtn(0);
  cardSize();
})

// card resize event
window.addEventListener('resize', ()=>{
  cardSize();
})

// click event (for bullet btns)
manualBtns.forEach(manualBtn =>{
  
  manualBtn.addEventListener('click', (e)=>{
    let cardNumber = manualBtn.getAttribute('id').charAt(3) -1;
    manualBtn.checked = true;
    cards.style.transform = `translateX(-${size * cardNumber}px)`;
    cards.style.transition = '0.4s ease-in-out';
    checkBtn(cardNumber);
  })
})


// Scroll event (checks bullet btn)
slider.addEventListener('scroll', ()=>{
  let right  = -1 * cards.getBoundingClientRect().left/ window.innerWidth;
  
  // checks if the card is fully moved
  if(right - Math.floor(right) == 0){{
    checkBtn(right);
  }}
})


function checkBtn(cardNumber){
  // removes all bg
  manualBtns.forEach(manualBtn =>{
    manualBtn.classList.remove('active');
  })
  // adds bg for only btn with this number
  manualBtns[cardNumber].classList.add('active');
}

function cardSize(){
  if(window.innerWidth > 375 && window.innerWidth < 650){
    console.log(window.innerWidth)

    card.forEach(card => {
      card.style.width = `${window.innerWidth - 40}px`;
      slider.style.scrollPadding  = ' 0';
      card.style.scrollSnapAlign = 'center';
      document.querySelector('.manual-navigation').style.display = 'flex';

    });  
  }

  if(window.innerWidth > 650  && window.innerWidth < 1000){
    card.forEach(card => {
      card.style.width = `${window.innerWidth/2 - 40}px`;
      slider.style.scrollPadding  = ' 0 3rem';
      card.style.scrollSnapAlign = 'start';
      document.querySelector('.manual-navigation').style.display = 'none';
    });  
  }

  if(window.innerWidth > 1000){
    card.forEach(card => {
      card.style.width = `${window.innerWidth/3}px`;
      if(window.innerWidth >1200){
        card.style.width = `${window.innerWidth/3 +55}px`;
      }
      slider.style.scrollPadding  = ' 0';
      card.style.scrollSnapAlign = 'center';
      document.querySelector('.manual-navigation').style.display = 'none';
    });    
  }
}


// Form Validation
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');
const input = document.getElementById('email');

form.addEventListener('submit', validateEmail);


function validateEmail(e) {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(input.value)){  
    e.target.parentElement.style.position = 'relative';
    const err = document.createElement('div');
    err.className = 'err';
    form.appendChild(err);
    form.style.position = 'relative';
    err.style.position = 'absolute';
    err.style.bottom = '13%';
    err.style.left = '5%';
    
    const p = document.createElement('p');
    p.className = 'error-p';
    p.appendChild(document.createTextNode('Please insert a valid email'));
    p.style.color = 'rgb(244, 98, 98)';
    p.style.fontStyle = 'italic';
    p.style.fontFamily = `'Be Vietnam', sans-serif`;
    err.appendChild(p);
    input.classList.add('error');


    setTimeout(clearText, 2000);
  } else{
    form.submit();
  }

  e.preventDefault();
}

function clearText(){
  document.querySelector('.error-p').remove();
  input.classList.remove('error');
}
