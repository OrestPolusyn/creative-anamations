const slides = [...document.querySelectorAll(".slide")]

slides.forEach(item => {
  item.addEventListener("click", e => {
    removeClasses()

    if (!e.target.matches(".active")) e.target.classList.add("active")
  })
})

function removeClasses() {
  slides.forEach(item => {
    item.classList.remove("active")
  })
}
