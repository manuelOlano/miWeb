let images = ["img/programacion.jpg","img/informatica.jpg","img/sistemas.png","img/reparacion.png","img/dataanalitic.jpg"]

let slider = document.getElementById("slider__images")

let sliderContainer = document.getElementById("slider")

slider.style.width = images.length * 100 + "%"

let sliderNav = document.getElementById("slider__navegatior")

let active = true

sliderContainer.addEventListener('mouseover', ()=>{
    if(active) active = false
        
    
})

sliderContainer.addEventListener('mouseout', ()=>{
    if(!active) active = true
        
})

sliderNav.addEventListener('click', (e)=>{
    slideImage(e.target.id.slice(-1))
})

for (let img in images) {
   slider.innerHTML += `<img src="${images[img]}" class="slider__imag" style="width:${100/images.length}%">`
//    slider.innerHTML += `<img src="${images[img]}" class="slider__images" style="width:400px">`

   sliderNav.innerHTML += `<span class="slider-nav" id="slider-nav-${img}">`
}

let cont=0

const startInterval = ()=> setInterval(counter, 2000)

startInterval()

function counter(){
    if(active){
        cont++;
        if(cont>=images.length) cont=0;
        setInterval(slideImage(cont), 2000);
        setInterval(setActive(cont), 2000);
        
    }
}
function slideImage(id){
    if(!active && !isNaN(id)){
        cont=id;
        setActive(id);
    }
    slider.style.left = "-" + id  + "00%";
}

let navIcons = [...document.getElementsByClassName("slider-nav")];

function setActive(id){
    // for(let icon in navIcons){
    //     if(icon < navIcons.length){
    //         if(navIcons[icon].id === "slider-nav-"+id){
    //             document.getElementById(navIcons[icon].id).classList.add("slider-nav--active")
    //         }else{
    //             document.getElementById(navIcons[icon].id).classList.remove("slider-nav--active")
    //         }
    //     }
    // }
    navIcons.map(idValue => idValue.attributes.id.nodeValue.slice(-1) == id ?
                idValue.classList.add("slider-nav--active") : 
                idValue.classList.remove("slider-nav--active") 
    
    ) 
}

const iconMenu = document.getElementById('icon-menu')
const mainMenu = document.getElementById('main-menu__list')

iconMenu.addEventListener('click', ()=>mainMenu.classList.toggle('menu--show'));
// iconMenu.addEventListener('click', ()=>console.log('Tito'));