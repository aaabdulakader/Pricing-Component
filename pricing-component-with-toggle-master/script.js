let toggle = document.querySelector(".toggle");
let switchDot = document.getElementById("switch");
let planPrices = document.querySelectorAll(".plan-price");

let annually = [199.99, 249.99, 399.99];
let monthly = [19.99, 24.99, 39.99];

toggle.addEventListener("click", () => {
  planPrices.forEach((p, i) => {
    p.classList.toggle("annually");

    p.classList.contains("annually")
      ? ((p.textContent = annually[i]), (switchDot.style.left = "3px"))
      : ((p.textContent = monthly[i]), (switchDot.style.left = "27px"));
  });
});
