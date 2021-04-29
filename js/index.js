const mySiema = new Siema({
    perPage: 1,
    duration: 600,
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
});
// SIEMA slider script variables
const prevButton = document.querySelector(".testimonial-carousel-prev-ctrl");
const nextButton = document.querySelector(".testimonial-carousel-next-ctrl");

// EVENTLISTENER actions
prevButton.addEventListener("click", () => mySiema.prev());
nextButton.addEventListener("click", () => mySiema.next());
