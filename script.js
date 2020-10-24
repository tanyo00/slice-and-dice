let slider = document.querySelectorAll('.slide')
let arrowRight = document.querySelector('.right')
let arrowLeft = document.querySelector('.left')
let current = 0

let dots = document.querySelectorAll('.dot')

//
const clear = () => {
  slider.forEach(image => {
    image.style.display = 'none'
  })
  dots.forEach(dot => {
    dot.style.backgroundColor = 'gray'
  })
}

// slider starting point
const start = () => {
  clear()
  slider[0].style.display = 'flex'
  dots[current].style.backgroundColor = 'white'
}

// show previous image
const slideLeft = () => {
  clear()
  slider[current - 1].style.display = 'flex'
  slider[current - 1].classList.add('fade')
  current--
  dots[current].style.backgroundColor = 'white'
}
// show next image
const slideRight = () => {
  clear()
  slider[current + 1].style.display = 'flex'
  slider[current + 1].classList.add('fade')
  current++
  dots[current].style.backgroundColor = 'white'
}

start()

// left arrow
arrowLeft.addEventListener('click', () => {
  if (current === 0) {
    current = slider.length
  }
  slideLeft()
})

// right arrow
arrowRight.addEventListener('click', () => {
  if (current === slider.length - 1) {
    current = -1
  }
  slideRight()
})
