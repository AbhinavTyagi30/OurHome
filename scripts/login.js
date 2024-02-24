let loginButton = document.getElementById("login-button");

loginButton.addEventListener("click",()=>{
    handleLogin();
});

/* Allow user to login */

async function handleLogin(){
    try {
        let email = document.getElementById("Username").value;
        let password = document.getElementById("Password").value;

        let obj = {"email" : `${email}` , "password" : `${password}`};

        let response = await fetch(`https://ourhomeserver.onrender.com/login`,{
            method : "POST",
            headers : {
                "Content-type" : "application/json",
            },
            body : JSON.stringify(obj)
        });

        let data = await response.json();
        localStorage.setItem(`currUser`,JSON.stringify(data.user));

        if(data.user.isAdmin){
            window.location.href = "./adminDashBoard/adminDash.html";
        }
        else{
            /* addLoginCreds(); */
        }

    } catch (error) {
        console.log(error);
    }
}