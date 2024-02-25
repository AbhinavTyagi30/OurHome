let profileIcon = document.getElementById("profileIcon");
let loginBtn = document.getElementById("loginBtn");
let profile = document.getElementById("profile");

console.log(profileIcon, loginBtn, profile);

let currUser = JSON.parse(localStorage.getItem(`currUser`));

if(currUser){
    profileIcon.classList.add("hideLogin");
    loginBtn.classList.add("hideLogin");
    profile.classList.remove("hideLogin");
}
else{
    profileIcon.classList.remove("hideLogin");
    loginBtn.classList.remove("hideLogin");
    profile.classList.add("hideLogin");
    profile.classList.remove("profilePic");
}