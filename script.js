//------------- Smooth Scroll Function for Down Arrow//
/** Smootly scrolls the page to the identified section */
function scrollToSection(sectionId) {
  // Get the DOM element with specified id
  var element = document.getElementById(sectionId);

  // Use the built-in scrollIntoView method with a smooth scroll
  element.scrollIntoView({ behavior: 'smooth' });
}

//-------Carousel Functionality
// Select the main container that slides (the "track" for carousel items)
const carouselSlide = document.querySelector('.carousel-slide');

//Select all individual carousel items
const carouselItems = document.querySelectorAll('.carousel-item');

//Select the "previous" and "next" buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

//Counter to keep track of current slide
let counter = 0;

// Updates the carousel position whenever window is resized or on intital load. It recalulates the width of the carousel items and adjusts the transform accordingly.
function updateCarousel() {
  //Get the width of the first carousel item
  const size = carouselItems[0].clientWidth;

  //Temporarily remove the transitions to prevent any jumping effects
  carouselSlide.style.transition = 'none';

  //Move the carousel to show the current slide based on the counter
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

//Listen to the window resize event and update the carousel position
window.addEventListener('resize', updateCarousel);

//Call updateCarousel() initially to set up correct position
updateCarousel();

//----Next Button - Moves the carousel to the next slide
nextBtn.addEventListener('click', () => {
  console.log('Next button clicked'); // Debugging line

  // Increment the counter to move to the next slide
  counter++;
  console.log('Counter incremented: ', counter); // Debugging line

  // Reset counter to go to the first slide
  if (counter >= carouselItems.length) { 
    counter = 0; 
    console.log('Counter reset to 0'); // Debugging line
  }

  // Enable transition for smooth slide effect
  carouselSlide.style.transition = "transform 0.5s ease-in-out";

  // Re-calculate size
  const size = carouselItems[0].clientWidth;
  console.log('Carousel item width: ', size); // Debugging line

  // Shift the carousel
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  console.log('Transform applied: ', carouselSlide.style.transform); // Debugging line

  // Ensure both buttons are visible
  prevBtn.style.display = 'block';
  nextBtn.style.display = 'block';
});

//-------Previous Button - Goes to previous slide, left
prevBtn.addEventListener('click', () => {
  console.log('Previous button clicked'); // Debugging line

  // Decrement the counter to move to the previous slide
  counter--;
  console.log('Counter decremented: ', counter); // Debugging line

  // If on first slide, make it go to last slide
  if (counter < 0) {
    counter = carouselItems.length - 1;
    console.log('Counter reset to last slide: ', counter); // Debugging line
  }

  // Enable transition for smooth slide effect
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';

  // Re-calculate size
  const size = carouselItems[0].clientWidth;
  console.log('Carousel item width: ', size); // Debugging line

  // Shift the carousel
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  console.log('Transform applied: ', carouselSlide.style.transform); // Debugging line

  // Ensure both buttons are visible
  prevBtn.style.display = 'block';
  nextBtn.style.display = 'block';
});
