$("#cards-container a").on('click', function (e) {

  console.log("this.hash FIRST", this.hash);

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    console.log("this.hash SECOND", this.hash);

    // animate
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      window.location.hash = hash;
    });
  }
});