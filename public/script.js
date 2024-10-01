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

  const mediaQuery = window.matchMedia("(max-width: 800px)");
  function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
      // Then log enabled
      // Change the text of the h1 element (you can change this to whatever element you want)
      document.querySelector('#FCS').textContent = "FullClear";
    } else {
      // Change the text back to the original text
      document.querySelector('#FCS').textContent = "FullClear Solutions";
    }
  }

  // Add a listener for when the media query changes
  mediaQuery.addEventListener("change", handleTabletChange);

  // Call the function once to set the initial state
  handleTabletChange(mediaQuery);

  console.log("HELLO");

  import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kilkykmryiwkmahvfjdy.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

localStorage ()

