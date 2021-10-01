 let regi = document.getElementById("regi");
  regi.addEventListener("click", check);

  function check() {
    let fname = document.getElementById("fName").value;
    let lname = document.getElementById("lName").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("password").value;

    let data = {
      username: fname + " " + lname,
      email: mail,
      password: pass,
    };
    data = JSON.stringify(data);
    console.log("data:", data);

    fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("response:", res.ok);
        if (res.ok === true) {
          alert("succed");
          window.location.href = "./login.html"
        }
       
      })
      .then((el) => {
        console.log("el:", el);
      });
  }