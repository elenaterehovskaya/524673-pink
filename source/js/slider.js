var next = document.querySelector(".reviews__button--next");
var prev = document.querySelector(".reviews__button--prev");
var reviews = document.querySelectorAll(".reviews__item");
var i = 0;

prev.addEventListener("click", function() {
  if (reviews[i].classList.contains("reviews__item--active")) {
    reviews[i].classList.remove("reviews__item--active");
    i--;
    if( i < 0){
      i = reviews.length - 1;
    }
    reviews[i].classList.add("reviews__item--active");
  }
});

next.addEventListener("click", function() {
  if (reviews[i].classList.contains("reviews__item--active")) {
    reviews[i].classList.remove("reviews__item--active");
    i++;
    if( i >= reviews.length){
      i = 0;
    }
    reviews[i].classList.add("reviews__item--active");
  }
});
