let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //get the whole slide
  let dots = document.getElementsByClassName("dot"); //get the dot
  if (n > slides.length) {slideIndex = 1} //if larger than 5 set slideIndex = 1
  if (n < 1) {slideIndex = slides.length} //if smaller than 1 set slideIndex = 5
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //make everything display none
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", ""); //remove dot:status = "active"
  }
  slides[slideIndex-1].style.display = "block"; //display block the image
  dots[slideIndex-1].className += " active"; //dot:status = "active"
}

/*
This javascript defines three functions - plusSlides, currentSlide, and showSlides - to handle slide navigation and display. 
The showSlides function takes a parameter n which is used to determine which slide to display. It first checks 
whether n is greater than the total number of slides or less than 1, and resets slideIndex accordingly to ensure that 
the slide index remains within the range of available slides. It then hides all the slides and removes the "active" class 
from all the dots. Finally, it displays the slide at the slideIndex-1 index (since arrays are zero-indexed) and adds the 
"active" class to the corresponding dot to indicate the current slide.
*/