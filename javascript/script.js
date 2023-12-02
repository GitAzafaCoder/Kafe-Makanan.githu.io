// menu search
const NavbarNav = document.querySelector(".navbar-nav");

document.querySelector("#menu").onclick = () => {
  NavbarNav.classList.toggle("active");
};
const nb = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!nb.contains(e.target) && !NavbarNav.contains(e.target)) {
    NavbarNav.classList.remove("active");
  }
});

//klik luar serach
const sb1 = document.querySelector("#search");
document.addEventListener("click", function (e) {
  if (!sb1.contains(e.target) && !search.contains(e.target)) {
    search.classList.remove("active");
  }
});

// menu search
const search = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search").onclick = () => {
  search.classList.toggle("active");
};
//klik luar serach
const sb = document.querySelector("#search");
document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !search.contains(e.target)) {
    search.classList.remove("active");
  }
});

// cart klik
const cart = document.querySelector(".shopping-cart");

document.querySelector("#cart").onclick = () => {
  cart.classList.toggle("active");
};

// klik cart luar
const crt = document.querySelector("#cart");
document.addEventListener("click", function (e) {
  if (!crt.contains(e.target) && !cart.contains(e.target)) {
    cart.classList.remove("active");
  }
});

// modelbox1
const model1 = document.querySelector("#item-detail-model1");

document.querySelector("#item-eye-model1").onclick = () => {
  model1.classList.toggle("active");
};
// close
document.querySelector(".model #close1").onclick = () => {
  model1.classList.toggle("active");
};

// modelbox 2
const model2 = document.querySelector("#item-detail-model2");

document.querySelector("#item-eye-model2").onclick = () => {
  model2.classList.toggle("active");
};
// close
document.querySelector(".model #close2").onclick = () => {
  model2.classList.toggle("active");
};

// modelbox 3
const model3 = document.querySelector("#item-detail-model3");

document.querySelector("#item-eye-model3").onclick = () => {
  model3.classList.toggle("active");
};
// close
document.querySelector(".model #close3").onclick = () => {
  model3.classList.toggle("active");
};

// modelbox 4
const model4 = document.querySelector("#item-detail-model4");

document.querySelector("#item-eye-model4").onclick = () => {
  model4.classList.toggle("active");
};
// close
document.querySelector(".model #close4").onclick = () => {
  model4.classList.toggle("active");
};

// modelbox 5
const model5 = document.querySelector("#item-detail-model5");

document.querySelector("#item-eye-model5").onclick = () => {
  model5.classList.toggle("active");
};
// close
document.querySelector(".model #close5").onclick = () => {
  model5.classList.toggle("active");
};

// modelbox 6
const model6 = document.querySelector("#item-detail-model6");

document.querySelector("#item-eye-model6").onclick = () => {
  model6.classList.toggle("active");
};
// close
document.querySelector(".model #close6").onclick = () => {
  model6.classList.toggle("active");
};

// modelbox 7
const model7 = document.querySelector("#item-detail-model7");

document.querySelector("#item-eye-model7").onclick = () => {
  model7.classList.toggle("active");
};
// close
document.querySelector(".model #close7").onclick = () => {
  model7.classList.toggle("active");
};

// modelbox 8
const model8 = document.querySelector("#item-detail-model8");

document.querySelector("#item-eye-model8").onclick = () => {
  model8.classList.toggle("active");
};
// close
document.querySelector(".model #close8").onclick = () => {
  model8.classList.toggle("active");
};
