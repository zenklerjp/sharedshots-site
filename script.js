(function () {
  var root = document.documentElement;

  function revealHero() {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        root.classList.add('motion-ready');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealHero, { once: true });
  } else {
    revealHero();
  }

  document.querySelectorAll('.screen-frame img, .product-proof img, .proof-sleeve img').forEach(function (image) {
    image.addEventListener('error', function () {
      var frame = image.closest('figure, .proof-sleeve');
      if (frame) frame.classList.add('image-missing');
    }, { once: true });
  });
})();
