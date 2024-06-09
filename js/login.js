var emailLogInput = document.querySelector("#emailLogInput");
var passwordLogInput = document.querySelector("#passwordLogInput");


var btnLogin = document.querySelector(".BtnLog")



var emailError = document.querySelector("#emailLogError");
var passwordError = document.querySelector("#passwordLogError");


var usersInfo = [];


if (localStorage.getItem("User-Data"))
{
    usersInfo = JSON.parse(localStorage.getItem("User-Data"));
}


var currentUser;

function logValidate() {
    let flagEmail = false;
    let flagPassword = false;

    let flagReturn = false;

    for (i = 0; i < usersInfo.length; i++) {
        if (usersInfo[i].email == emailLogInput.value) {
            flagEmail = true;
            if (usersInfo[i].password == passwordLogInput.value) {
                currentUser = usersInfo[i];
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                flagPassword = true;
                flagReturn = true;
            }
        }
    }

    if (flagEmail) {
        emailError.classList.add("d-none");
        if (flagPassword) {
            passwordError.classList.add("d-none");
        }
        else {
            passwordError.classList.remove("d-none");
        }
    }
    else {
        emailError.classList.remove("d-none");
    }
    

    return flagReturn;
}


btnLogin?.addEventListener("click", function () {
    if (logValidate())
    {
        close();
        open("profile.html");

    }
    
})
