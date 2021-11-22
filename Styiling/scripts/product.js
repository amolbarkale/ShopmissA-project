let toIndex = document.getElementById("redirect").addEventListener("click", () => {
  window.location.href="./index.html"
})


async function getAPI() {
    let data = await fetch("http://localhost:5000/api/products");
    let res = await data.json();
  console.log('res:', res)
  
  let display1 = document.getElementById("display");
  
  res.forEach(({ title, img, price}) => {

    let div = document.createElement("div");
    div.addEventListener("click", function () {
      postIt( title, price, img)
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

async function postIt(title, price, img) {
  let dataa = {
    title,
    price,
    img,
  }
  dataa = JSON.stringify(dataa)

  let data = fetch("http://localhost:5000/api/carts", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },body: dataa,
  })
    .then(response => response.json())
    .then((json) => {
      displayIt(),
      console.log("JSON:", json)
    })
}



async function displayIt() {
  let totals = document.getElementById("totals");
  let data = await fetch("http://localhost:5000/api/carts");
  let res = await data.json();
 
  let prodcont = document.querySelector(".window");

   if (res && prodcont) {
     prodcont.innerHTML = "";
     let total = 0;
     res.map((item) => {
       let bill = (total += item.price).toFixed(2);
       localStorage.setItem("bill", bill)
       totals.innerHTML = `<p>Cart Total :${bill}</p>`;
       prodcont.innerHTML += `<li> <div id="itm">
                <div class="photo"><img id="pics" src="${item.img}" alt="img" /></div>
                <div class="details">
                  <h5>${item.title}</h5>
                  <h5>$ ${item.price}</h5>
                  <button class="dlted">Remove</button>
                </div>
              </div></li>`
     });
    
     for (let i = 0; i < res.length; i++) {
       document.querySelectorAll(".dlted")[i].addEventListener("click", () => {       
         get(res[i]._id);
         displayIt();
       })

     }
  }

}
displayIt();

async function get(id) {
  let data = await fetch(`http://localhost:5000/api/carts/${id}`, {
    method: "DELETE",
     headers: {
  'Content-type': 'application/json; charset=UTF-8'
    },
  });
  let res = await data.json();
  console.log('res:', res)
}
