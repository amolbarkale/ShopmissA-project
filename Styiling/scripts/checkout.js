let total = localStorage.getItem("bill");
console.log('total:', total)
let total1 = JSON.parse(total)


let bill = document.getElementsByClassName("total")[0];
bill.innerHTML = ` <h1>Total:${total1} $</h1>`