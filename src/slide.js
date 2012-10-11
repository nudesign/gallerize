function Slide(el, gallery) {
  // single var declarations
  // private var
  var element,
      gallery;
      

  // INITIALIZE
  // return -1 if no DOM element and gallery Object are both given
  if (el === undefined || gallery === undefined) {
    return -1;
  }
  // assign arguments as vars
  element = el;
  // hides the DOM element
  // element.style.visibility = "hidden";
  hide();

  // private methods
  function show() {
    element.style.visibility = "visible";
  }
  function hide() {
    element.style.visibility = "hidden";
  }

  // reveal methods - public API
  this.element = element;
  this.gallery = gallery;
  this.show = show;
  this.hide = hide;
};
