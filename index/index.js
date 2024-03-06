

function handleEvents () {
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



// FOOTER

function animaFooter(e)  {

  if (e.target.className == "fa-brands fa-twitter")
{e.target.className = "fa-brands fa-twitter fa-bounce";}

if (e.target.className == "fa-brands fa-pinterest-p")
{e.target.className = "fa-brands fa-pinterest-p fa-bounce";}

if (e.target.className == "fa-brands fa-tiktok")
{e.target.className = "fa-brands fa-tiktok fa-bounce";}

  setTimeout(()=> {
  
  if (e.target.className == "fa-brands fa-twitter fa-bounce")
  {e.target.className = "fa-brands fa-twitter";}
  
  if (e.target.className == "fa-brands fa-pinterest-p fa-bounce")
{e.target.className = "fa-brands fa-pinterest-p";}

if (e.target.className == "fa-brands fa-tiktok fa-bounce")
{e.target.className = "fa-brands fa-tiktok";}

  }, 900); }

  

//CURSOR

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
    cursor.style.filter = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});






window.onload = handleEvents;
