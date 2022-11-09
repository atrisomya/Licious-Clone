let slidePostion  = 0;
const slides = document.getElementsByClassName("carousel_item");
const totalslides = slides.length;

document.getElementById('carousel-button-Next').addEventListener("click",function(){
    moveToNextSlide();
})

document.getElementById('carousel-button-Previous').addEventListener("click",function(){
    moveToPrevSlide();
})

function updateSlidePosition(){
    for(let slide of slides)
    {
        slide.classList.remove('carousel_item_visible')
        slide.classList.add('carousel_item_hidden')
    }
    slides[slidePostion].classList.add('carousel_item_visible');
}

function moveToNextSlide(){
    
    if(slidePostion == totalslides - 1)
    {
        slidePostion = 0;
    }
    else{
        slidePostion++;
    }
    updateSlidePosition();
}

function moveToPrevSlide(){
    
    if(slidePostion === 0)
    {
        slidePostion = totalslides - 1;
    }
    else{
        slidePostion--;
    }
    updateSlidePosition();
}