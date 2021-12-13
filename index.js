const nextSlideEl = document.getElementById("right-arrow");
const prevSlideEl = document.getElementById("left-arrow");

let slideIndex = 0;

showSlides();

const nextSlide = () => {
  showSlides();
};
const prevSlide = () => {
  showSlides();
};

nextSlideEl.addEventListener("click", nextSlide);
prevSlideEl.addEventListener("click", prevSlide);

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  //setTimeout(showSlides, 5000); // Change image every 3 seconds
}
