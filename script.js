const initSlider = () => {
  // DOM element selection
  const slider = document.querySelector(".slider");

  // Ensure all background images are loaded
  imagesLoaded(slider, { background: true }, () => {
    // Loader animation
    const loader = document.querySelector(".loader");
    loader.classList.add("is-loaded");

    // Other variable and event listener initializations
    // It will be explained further in the text
    // ...

    // Start the magic
    init();
  });
};

// Initialize the slider
initSlider();
