// navbar--------------------------------
$('#showFilePanel').click(function(event) {
    if ($('.notification-container').hasClass('dismiss')) {
      $('.notification-container').removeClass('dismiss').addClass('selected').show();
    }
    event.preventDefault();
  });
  
  $('#closeFilePanel').click(function(event) {
    if ($('.notification-container').hasClass('selected')) {
      $('.notification-container').removeClass('selected').addClass('dismiss');
    }
    event.preventDefault();
  });
// navbar-----------------------------

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

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})