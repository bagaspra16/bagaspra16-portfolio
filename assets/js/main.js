

const textAnimated = document.querySelector('.textAnimated');
let letterIndex = -1;

function addLetter(){
  letterIndex++
  if(letterIndex < text.length){
    setTimeout(function(){
      textAnimated.textContent += text[letterIndex]
      addLetter()
    }, 100)
  } else{
    setTimeout(function(){removeLetter()}, 2000)
  }
}
// here letter index is equals to text.length
function removeLetter(){
  letterIndex --
  if(letterIndex >= 0){
    setTimeout(function(){
      textAnimated.textContent = text.slice(0, letterIndex)
      removeLetter()
    }, 100)
  }else{
    updateText()
  }
}


const textArr = ["Web Developer", "Java Engineer", "Freelancer"];
let currTextIndex = -1;
text = "";

function updateText(){
  currTextIndex++
  if (currTextIndex == textArr.length)
    currTextIndex = 0;
  text = textArr[currTextIndex]
  addLetter()
}
updateText();


/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', function() {
    this.classList.toggle('active');
});


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

/*===== CLEAR FORM BEFORE UNLOAD =====*/
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName("form")){
        form.reset();
    }
}



sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});


