console.log("скрипт загрузился");

const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");

console.log("схема:", schemeSvg);
console.log("сумма:", totalPriceTag);
console.log("кнопка меню:", menuButton);

if (schemeSvg) {
   schemeSvg.addEventListener('click', (event) => {
      console.log("клик по:", event.target);
      if (event.target.classList.contains("booked")) return;

      event.target.classList.toggle("active");

      let totalSeats = schemeSvg.querySelectorAll(".active").length;
      let totalPrice = totalSeats * 800;
      totalPriceTag.textContent = totalPrice;
      console.log("выбрано кресел:", totalSeats);
   });
}
