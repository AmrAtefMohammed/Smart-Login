var nameProfileInput = document.querySelector("#nameProfileInput");
var phoneProfileInput = document.querySelector("#phoneProfileInput");
var ageProfileInput = document.querySelector("#ageProfileInput");
var emailProfileInput = document.querySelector("#emailProfileInput");
var passwordProfileInput = document.querySelector("#passwordProfileInput");
var genderProfileInput = document.querySelector("#genderProfileInput");




var navbar = document.querySelector(".navbar a");
var photoProfile = document.querySelector(".photoProfile");

var currentUser = JSON.parse(localStorage.getItem("currentUser"));


var logoutIcon = document.querySelector("#logout");


function profileData()
{
    navbar.innerText = currentUser.username;

    photoProfile.style.backgroundImage = `url('images/websiteBody/${currentUser.imagePath}')`;
    nameProfileInput.value = currentUser.username;
    phoneProfileInput.value = currentUser.phone;
    ageProfileInput.value = currentUser.age;
    emailProfileInput.value = currentUser.email;
    passwordProfileInput.value = currentUser.password;
    genderProfileInput.value = currentUser.gender;
}

profileData();


function logout() {
    localStorage.removeItem("currentUser");
    close();
    open("index.html")
}


logoutIcon.addEventListener("click", function () {
    logout();
})