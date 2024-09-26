// JavaScript File (script.js)

// Animate the header logo on page load
const headerLogo = document.querySelector('.headerlogo');
headerLogo.style.opacity = 0;
headerLogo.style.transform = 'translateX(-50px)';
headerLogo.style.transition = 'opacity 1s, transform 1s';
setTimeout(() => {
  headerLogo.style.opacity = 1;
  headerLogo.style.transform = 'translateX(0)';
}, 500);




  // DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed.
  addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded.');
  });

  // The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
  addEventListener('load', (event) => {
    console.log('The page is fully loaded.');
  });

  // The beforeunload event is fired when the window, the document and its resources are about to be unloaded.
  // addEventListener('beforeunload', (event) => {
  //     // show the confirmation dialog
  //     event.preventDefault();
  //     // Google Chrome requires returnValue to be set.
  //     event.returnValue = '';
  // });

  // The unload event is fired when the document or a child resource is being unloaded.
  addEventListener('unload', (event) => {
    // send analytic data
  });

  // add event listener to the logo
  let mainIcon = document.querySelector("#mainIcon");

  mainIcon.addEventListener('load', (event) => {
    console.log('Logo has been loaded!');
  });

  // set the source of the logo
  mainIcon.src = "images/Clear Vision.png";


  document.addEventListener('DOMContentLoaded', () => {
    const testimonialSection = document.querySelector('.testimonial-section');
    const testimonialContainer = testimonialSection.querySelector('.testimonial-container');

    let isScrolling;
    /**
     * Automatically scrolls the testimonials container to the right every 1.5 seconds,
     * wrapping around to the start when the end is reached.
     */
    function autoScrollTestimonials() {
      const scrollInterval = setInterval(() => {
        const container = testimonialSection.querySelector('.testimonial-container');

        // Scroll the container to the right by 300 pixels, smoothly
        container.scrollBy({ left: 200, behavior: 'smooth' });

        // If we've reached the end, wrap around to the start
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 1500); // Scroll every 1.5 seconds
    }

   

    autoScrollTestimonials();
  });



