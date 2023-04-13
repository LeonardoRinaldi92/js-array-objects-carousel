const images = [
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
let position = 0;

for (const immagini in images) {
    let image = images[immagini].image
    thumbnails.innerHTML += `
     <div id="thumb${immagini}" class="thumb bright">
         <img  class="thumbsmall" src="./assets/${image}" alt=""></img>    
     </div>` ;

    let thumb = document.getElementById("thumb" + immagini)

    thumb.addEventListener('click', function () {
        SetImage(images[immagini], immagini)
    })
}

function removeThumb() {
    let thmub = document.querySelector(".is-active");
    if (thmub) {
        thmub.classList.remove("is-active")
        thmub.classList.add("bright")
    }
}

function SetImage(ogetto, index) {
    carosello.innerHTML = `<img class="imgBig" src="./assets/${ogetto.image}" alt=""></img>`;

    removeThumb();

    let thumbattiva = document.getElementById("thumb" + index)
    thumbattiva.classList.add("is-active")
    thumbattiva.classList.remove("bright")

}

SetImage(images[position], position)

let up = document.getElementById("up")
let down = document.getElementById("down")

up.addEventListener("click", function () {
    if (position == 0) {
        position = images.length - 1
    } else {
        position--
    }
    SetImage(images[position], position)
})

down.addEventListener("click", function () {
    if (position == images.length - 1) {
        position = 0
    } else {
        position++
    }
    SetImage(images[position], position)
})

// let thumbArray = document.querySelectorAll(".thumbsmall")
// console.log(thumbArray)

// for (const immagini in thumbArray) {
//     console.log(immagini)
// }
