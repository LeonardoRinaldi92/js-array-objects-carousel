const imagesArray = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let carosello = document.querySelector(".container")
let thumbnails = document.querySelector(".containerTunb")
//counter per immagini
let position = 0;

//ciclo l'array images
for (const indexImageArray in imagesArray) {
    //creo la variabile realativa per ogni array nell'array images
    let image = imagesArray[indexImageArray].image
    //stampo a schermo i thumbnail,usando l'index x numerare l'ID 
    thumbnails.innerHTML += `
     <div id="thumb${indexImageArray}" class="thumb bright">
         <img  class="thumbsmall" src="./assets/${image}" alt=""></img>    
     </div>` ;
}

//ciclo l'array images
for (const indexImageArray in imagesArray) {
    //creo la variabile usando l'id associato all'index 
    let thumb = document.getElementById("thumb" + indexImageArray)
    //al click la funzione set image crea le immagini 
    thumb.addEventListener('click', function () {
        SetImage(imagesArray[indexImageArray], indexImageArray)
        //setto il per il counter dell'imagine in base all'imagine che appare
        position = indexImageArray
    })
}

//funzione per cambiare le thumb attive
function removeThumb() {
    let thmub = document.querySelector(".is-active");
    // l'immagine contiene "is-active" (usato come controllore dell'ultima immagine attiva)
    if (thmub) {
        thmub.classList.remove("is-active")
        //rimuove l'opacità
        thmub.classList.add("bright")
    }
}

//funzione per creare l'immagine a schermo e associrgli titoli e testi relativi
function SetImage(ogetto, index) {
    carosello.innerHTML = `<img class="imgBig" src="./assets/${ogetto.image}" alt=""></img>`;
    carosello.innerHTML += `<div class="testi">
    <h1>${ogetto.title}
    </h1>
    <p>${ogetto.text}
    </p>
    </div>`
    //insieme all'imagine grande cambio anche la tab relativa
    removeThumb();
    //sfruttando l'index dell'array trovo la thumb relativa all'immagine grande
    let thumbattiva = document.getElementById("thumb" + index)
    thumbattiva.classList.add("is-active")
    thumbattiva.classList.remove("bright")

}

//avvio per la prima voltsa la funzione di immagine grande + thumb relativa
SetImage(imagesArray[position], position)

//variabili per i pulsanti up e down
let up = document.getElementById("up")
let down = document.getElementById("down")

function avanti() {
    if (position == imagesArray.length - 1) {
        position = 0
    } else {
        position++
    }
    SetImage(imagesArray[position], position) 
} 

function indietro () {
    if (position == 0) {
        position = imagesArray.length - 1
    } else {
        position--
    }
    SetImage(imagesArray[position], position)
}

//al click del pulsante up diminuisco il contatore o lo resetto a 0
up.addEventListener("click", function () {
    indietro()
})

//al click del pulsante down aumento il contatore o lo resetto a 0
down.addEventListener("click", function () {
    avanti()
})


let start = document.getElementById("start");
let stop = document.getElementById("stop");
let goUp = document.getElementById("versoAlto");

start.addEventListener("click", function(){
    clearInterval(stop)
    play = setInterval (function () {
        avanti()
    }, 3000);
})

stop.addEventListener("click", function(){
    clearInterval(play)
    clearInterval(stop)

})

goUp.addEventListener("click",function() {
    clearInterval(play)
    reverse = setInterval (function () {
        indietro()
        
        
    }, 3000);
})

