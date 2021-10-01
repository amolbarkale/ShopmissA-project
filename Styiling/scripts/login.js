let clicked = document.getElementById("click");
clicked.addEventListener("click", submitIt);
console.log("arrived!")
function submitIt() {
    let username1 = document.getElementById("username1").value;
    let pass = document.getElementById("pass1").value;
    let data = {
        username: username1,
        password: pass,
    }
    data = JSON.stringify(data);

    fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
           Accept: "application/json",
        "Content-Type": "application/json",
      },
        body: data,
    }).then((res) => {
        console.log("response:", res);
        if (res.ok === true) {
          alert("succed");
          window.location.href = "./index.html"
        }
       
      })
      

}