var imgs = document.querySelectorAll(".wrapper .image img")
var next = document.querySelector(".next")
var prev = document.querySelector(".prev")
var close = document.querySelector(".close")

var gallery = document.querySelector(".gallery");
var galleryImg = document.querySelector(".gallery-inner img")

let currentIndex = 0;


imgs.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showGallery();
    })
})

function showGallery(){
    currentIndex == imgs.length - 1 
    ? next.classList.add("hide")
    : next.classList.remove("hide");
    
    currentIndex == 0 
    ? prev.classList.add("hide")
    : prev.classList.remove("hide");

    gallery.classList.add("show");
    galleryImg.src = imgs[currentIndex].src
}

next.addEventListener("click", () => {
    currentIndex != imgs.length - 1 ? currentIndex++ : undefined;
    showGallery()
})

prev.addEventListener("click", () => {
    
    currentIndex != 0 ? currentIndex-- : undefined;
    showGallery()
})

close.addEventListener("click", () => {
    gallery.classList.remove("show");
})

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) gallery.classList.remove("show");
  });