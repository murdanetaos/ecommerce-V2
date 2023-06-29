
// slideshow
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


// This is a JavaScript function that creates a slideshow for a webpage using buttons to navigate through the slides. The function selects all elements on the page with the attribute "data-carousel-button" and adds an event listener to each button that when clicked, calculates the offset and determines which slide to show next. It then selects the active slide and calculates the index of the next slide based on the offset. If the next slide index is less than 0 or greater than or equal to the number of slides, it wraps around to the first or last slide. Finally, it adds the "data-active" attribute to the next slide and removes it from the active slide, effectively changing the slide displayed.