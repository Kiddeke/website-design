  const mediaQuery = window.matchMedia("(max-width: 800px)");
  function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
      // Then log enabled
      // Change the text of the h1 element (you can change this to whatever element you want)
      document.querySelector('#FCS').innerHTML = '<img class="max-w-10" src="images/Clear Vision.png" alt="FCS" />FullClear';
    } else {
      // Change the text back to the original text
      document.querySelector('#FCS').innerHTML = '<img class="max-w-10" src="images/Clear Vision.png" alt="FCS" />FullClear Solutions';
    }
  }

  // Add a listener for when the media query changes
  mediaQuery.addEventListener("change", handleTabletChange);

  // Call the function once to set the initial state
  handleTabletChange(mediaQuery);





