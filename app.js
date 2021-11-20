let imagePosition = 0
let images = document.getElementsByClassName('carousel-item')
let imageSize = images.length

let btnNext = document.getElementById('carousel-button-next')
let btnPrev = document.getElementById('carousel-button-previous')

btnNext.addEventListener('click', ()=> {
    nextImage()
})

btnPrev.addEventListener('click', ()=> {
    prevImage()
})

function nextImage(){
    if(imagePosition == imageSize - 1){
        imagePosition = 0
    }else{
        imagePosition ++
    }
    updatePosition()
}

function prevImage(){
    if(imagePosition == 0){
        imagePosition = imageSize - 1
    }else{
        imagePosition --
    }
    updatePosition()
}

function updatePosition(){
    for(let image of images){
        image.classList.remove('carousel-item-visible')
        image.classList.add('carousel-item-hidden')
    }
    images[imagePosition].classList.add('carousel-item-visible')
}
