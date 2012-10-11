describe("Gallery", function () {
  var el1,
      el2,
      el3,
      gallery;

  beforeEach(function () {
    el1 = document.createElement('div');
    el2 = document.createElement('div');
    el3 = document.createElement('div');
    gallery = new Gallery([el1, el2, el3]);
  });

  it("initialize all slides", function () {
    expect(gallery.slides[0].element).toBe(el1);
    expect(gallery.slides[1].element).toBe(el2);
    expect(gallery.slides[2].element).toBe(el3);
  });
  
  it("expose all slides at #slides", function () {
    expect(gallery.slides.length).toEqual(3);
  });

  it("display the first slide", function () {
    expect(gallery.slides[0].element.style.visibility).toBe('visible');
  });

  // it("display the next slide", function () {
  //   expect(gallery.slides[0].element.style.visibility).toBe('visible');
  // });
  // 
  // it("display the previous slide", function () {
  //   
  // });
  it("display the specified slide", function () {
    gallery.goToSlide(2);
    expect(gallery.currentSlide().element).toBe(el3);
  });
});
