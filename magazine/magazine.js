

function anadirEventos (){
  let slider =  document.getElementById('mainSlider');
  slider.addEventListener ('wheel', scrollHorizontal);


  let showdiv = document.querySelector('.headershow__contentjs');
  showdiv.addEventListener('click', muestraDiv);
  showdiv.addEventListener('mouseover', muestraDiv);
  showdiv.addEventListener('mouseout', hideDiv);

  let boton = document.querySelector ('.boton__responsive');
  boton.addEventListener ('click', apareceMenu);

  let footer = document.getElementsByClassName("boton__footer");
  for (var i = 0; i < footer.length; i++) {    
  footer[i].addEventListener("click",  animaFooter);
  footer[i].addEventListener("mouseover",  animaFooter); 
  }
 
}




// MENU

function muestraDiv () {
  let showdiv = document.querySelector('.headershow__contentjs');
  showdiv.style.opacity = 0;
  let show = document.querySelector ('.header__hidden');
  show.style.width = '100%';
  

}

function hideDiv () {
  setTimeout(()=> {
  let show = document.querySelector ('.header__hidden');
  show.style.width = 0;
  let showdiv = document.querySelector('.headershow__contentjs');
  showdiv.style.opacity = 100;
}, 3000);

}

function apareceMenu() {
  let lista = document.querySelector ('.list__responsive');
    lista.classList.toggle ('list__responsive--aparece');

 let icono = document.getElementById ('b1')
  if (icono.className == "fa-solid fa-bars"){
   icono.className = "fa-regular fa-x";}
  else {
    icono.className = "fa-solid fa-bars"
  }

}


//SLIDER

function scrollHorizontal(e) {
    e.preventDefault();
    let slider =  document.getElementById('mainSlider');
    slider.scrollLeft += e.deltaY;
   
}


let slider = document.querySelector('.slider');
let isDown = false;
let startX;
let sLeft;


slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  sLeft = slider.scrollLeft;
});


slider.addEventListener('mouseleave', () => {
  isDown = false;
});


slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const dragged = x - startX;
  slider.scrollLeft = sLeft - dragged;
}); 



// FOOTER

function animaFooter(e)  {

  if (e.target.className == "fa-brands fa-twitter")
{e.target.className = "fa-brands fa-twitter fa-bounce";
e.target.style.color = " #d1edfa"}

if (e.target.className == "fa-brands fa-pinterest-p")
{e.target.className = "fa-brands fa-pinterest-p fa-bounce";
e.target.style.color = " #d1edfa"}

if (e.target.className == "fa-brands fa-tiktok")
{e.target.className = "fa-brands fa-tiktok fa-bounce";
e.target.style.color = " #d1edfa"}

  setTimeout(()=> {
  
  if (e.target.className == "fa-brands fa-twitter fa-bounce")
  {e.target.className = "fa-brands fa-twitter";
  e.target.style.color = "white"}
  
  if (e.target.className == "fa-brands fa-pinterest-p fa-bounce")
{e.target.className = "fa-brands fa-pinterest-p";
e.target.style.color = "white"}

if (e.target.className == "fa-brands fa-tiktok fa-bounce")
{e.target.className = "fa-brands fa-tiktok";
e.target.style.color = "white"}

  }, 900); }





const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const animation = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / animation;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / animation;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});

window.onload = anadirEventos;

