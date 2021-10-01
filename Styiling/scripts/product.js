  // import axios from "axios";



async function getAPI() {
    let data = await fetch("http://localhost:5000/api/products");
    let res = await data.json();
  console.log('res:', res)
  
  let display1 = document.getElementById("display");
  
  res.forEach(({ title, img, price}) => {

    let div = document.createElement("div");
    div.addEventListener("click", function ( ) {
      addIt(title, img,price)
    })
    
        let imge = document.createElement("img");
        let h5 = document.createElement("h5");
        let pric = document.createElement("p");
        imge.src = img;
        h5.innerHTML = `${title} </br>  <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-star"
        >
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-star"
        >
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-star"
        >
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-star"
        >
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-star"
        >
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          />
        </svg>`;
        pric.innerHTML = `$ ${price}`;
        div.append(imge,h5, pric,);
    display1.appendChild(div);

    })

}
getAPI();
function addIt(title, img, price) {
   setItm(title, img, price);
    totalcost(price);
}


function setItm(title, img, price) {
  
  let arr = [title, img, price];


  let items = JSON.parse(localStorage.getItem("productsInCart"));
  if (items == null) {
    items = [];
  }

  items.push(arr);
  localStorage.setItem("productsInCart", JSON.stringify(items));
}

function totalcost(price) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", JSON.stringify(cartCost + price))
  }
  else {
    localStorage.setItem("totalCost",price)
  }
}

function displayIt() {

  let cartitm = localStorage.getItem("productsInCart");
  cartitm = JSON.parse(cartitm);
  let prodcont = document.querySelector(".window");
  let cartCost = localStorage.getItem("totalCost");

  if (cartitm && prodcont) {
    prodcont.innerHTML = "";
    cartitm.map((item) => {

      prodcont.innerHTML += `<li> <div id="itm">
                <div class="photo"><img id="pics" src="${item[1]}" alt="img" /></div>
                <div class="details">
                  <h5>${item[0]}</h5>
                  <h5>$ ${item[2]}</h5>
                  <button>Remove</button>
                </div>
              </div></li>`
    });
    prodcont.innerHTML += `<div>${cartCost}</div>` 

  }

}
displayIt();



