describe("Slide", function () {
  var el,
      el2,
      gallery,
      slide;

  beforeEach(function() {
    el = document.createElement('div');
    el2 = document.createElement('div');
    gallery = new Gallery([el, el2]),
    slide = gallery.slides[1];
  });

  describe("when initialized", function () {
    it("has a linked DOM element", function () {
      expect(slide.element).toBe(el2);
    });

    it("has a Gallery as parent", function () {
      expect(slide.gallery).toBe(gallery);
    });

    it("hides itself", function () {
      expect(slide.element.style.visibility).toEqual('hidden');
    });
  });

  describe("user interaction", function () {
    it("displays itself when requested - #show", function () {
      slide.show();

      expect(slide.element.style.visibility).toBe('visible');
      // expect(slide.style.visibility).toBe('visible');
    });

    it("hides itself when requested", function () {
    });
  });
});
