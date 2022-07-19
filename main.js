const bookForAdding = document.querySelectorAll(".book-to-be-added");
const addCardButton = document.querySelectorAll(".Add_to_cart");
const Shop=document.querySelector('.shop');
console.log(Shop)

for (let i = 0; i < addCardButton.length; i++) {
  addCardButton[i].addEventListener("click", function () {
    Shop.innerHTML=bookForAdding[i].innerHTML+ Shop.innerHTML
  });
}
