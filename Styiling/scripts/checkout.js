let total = localStorage.getItem("totalCost");
let total1 = parseInt(total)


let bill = document.getElementsByClassName("total")[0];
bill.innerHTML = ` <h1>Total:${total1} $</h1>`