




let themeToggler = document.querySelector('.theme-toggler');

let toggleBtn = document.querySelector('.toggle-btn');



toggleBtn.onclick = () =>{

  themeToggler.classList.toggle('active');

}




document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{

  

  btn.onclick = () =>{

    let color = btn.style.background;

    document.querySelector(':root').style.setProperty('--main-color', color);

  }



});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


