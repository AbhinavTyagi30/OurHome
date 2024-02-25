let regBtn = document.getElementById("signup-button");

regBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    handleRegister();
})


/* Allow user to register */

async function handleRegister(){
    let name = document.getElementById("reg-name");
    let country = document.getElementById("reg-country");
    let email = document.getElementById("reg-email");
    let password = document.getElementById("reg-password");

    let obj = {
        name: name.value,
        country: country.value,
        email: email.value,
        password: password.value,
        isAdmin: false
    }

    let response = await fetch(`https://ourhomeserver.onrender.com/register`,{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
    });

    let data = await response.json();
    console.log(data);

    localStorage.setItem(`currUser`,JSON.stringify(data.user));

    if(localStorage.getItem(`currUser`).isAdmin){
        window.location.href = "./adminDashBoard/adminDash.html";
    }
    else{
        window.location.href = "./home.html";
    }
    
}