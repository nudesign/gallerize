function Gallery(elements) {
  var slidesLength = elements.length,
      i = slidesLength,
      slides = [],
      slide,
      currentSlide,
      nextSlide,
      previousSlide;

  for (; i; i--) {
    slide = new Slide(elements[slidesLength - i], this);
    slides.push(slide);
  }

  // INITIALIZE
  slides[0].show();
  currentSlide = 0;

  function goToSlide(index) {
    console.log('index', index, currentSlide);
    if (index >= slidesLength || index <= 0) {
      return -1;
    }
    slides[currentSlide].hide();
    currentSlide = index;
    slides[currentSlide].show();
    console.log('index', index, currentSlide);
    return currentSlide;
  }
  function next() {
    if (currentSlide >= slidesLength) {
      nextSlide = slidesLength;
    }
    slide[currentSlide].hide();
    currentSlide = nextSlide;
    slide[currentSlide].show();
    return currentSlide;
  }
  function previous() {
    if (currentSlide <= 0) {
      previousSlide = 0;
    }
    slide[currentSlide].hide();
    currentSlide = previousSlide;
    slide[previousSlide].show();
    return currentSlide;
  }

  // reveal methods - public API
  this.slides = slides;
  this.goToSlide = goToSlide;
  this.next = next;
  this.previous = previous;
  this.currentSlide = function () { console.log('currentSlide', currentSlide); return slides[currentSlide]; };
};
