const toggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

//*------------------------------------------------*//

  let currentSlide = 0;
  const testimonials = document.querySelectorAll(".testimonial-card");

  function showSlide(index) {
    testimonials.forEach((card, i) => {
      card.classList.remove("active");
      if (i === index) {
        card.classList.add("active");
      }
    });
  }

  function slideTestimonial(direction) {
    currentSlide += direction;
    if (currentSlide >= testimonials.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = testimonials.length - 1;
    showSlide(currentSlide);
  }

  // Auto slide every 5s
  setInterval(() => {
    slideTestimonial(1);
  }, 5000);

  showSlide(currentSlide); // initial display

/*-----------------------------------------------*/


  function scrollGallery(direction) {
    const slider = document.getElementById('workSlider');
    const scrollAmount = 300 * direction;
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

