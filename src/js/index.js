let amount = 1;
let totalAmount = 0;

const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const addToCart = document.querySelector("#add-to-cart");
const totalItems = document.querySelector("#total-items");


addBtn.addEventListener("click", () => {
    amount = amount + 1;
    document.querySelector("#amount").value = amount;
})


subtractBtn.addEventListener("click", () => {
    if (amount !=0) {
        amount = amount - 1;
        document.querySelector("#amount").value = amount;
    }
})

addToCart.addEventListener("click", (e) => {
  totalAmount = totalAmount + amount;
  e.preventDefault();
  totalItems.classList.remove("hidden");
  totalItems.textContent=totalAmount;

  totalItems.classList.remove("cart-pop"); 
  void totalItems.offsetWidth; 
  totalItems.classList.add("cart-pop");
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const slides = document.querySelectorAll(".carousel__track li");
const track = document.querySelector(".carousel__track");

const nextBtn = document.querySelector(".carousel__next");
const prevBtn = document.querySelector(".carousel__prev");
let index = 0;

function getVisibleSlides() {
    return window.innerWidth < 1000 ? 1 : 3;
}

function updateCarousel() {
    const visibleSlides =
        getVisibleSlides();

    const maxIndex =
        slides.length - visibleSlides;

    if(index > maxIndex) {
        index = maxIndex;
    }

    track.style.setProperty(
        "--index",
        index
    );
}

nextBtn.addEventListener("click", () => {

    const visibleSlides =
        getVisibleSlides();

    const maxIndex =
        slides.length - visibleSlides;

    if(index < maxIndex) {
        index++;
        updateCarousel();
    }
});

prevBtn.addEventListener("click", () => {

    if(index > 0) {
        index--;
        updateCarousel();
    }
});

window.addEventListener(
    "resize",
    updateCarousel
);

updateCarousel();