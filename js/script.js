var imageInput = document.querySelector("#imgInput");


var photoProfile = document.querySelector(".photoProfile");


var nameSignInput = document.getElementById("nameSignInput");
var phoneSignInput = document.getElementById("phoneSignInput");
var ageSignInput = document.getElementById("ageSignInput");
var emailSignInput = document.getElementById("emailSignInput");
var passwordSignInput = document.getElementById("passwordSignInput");
var confirmSignInput = document.getElementById("confirmSignInput");
var genderInput;


var btnSignup = document.querySelector(".BtnSignup");
var btnChangePhoto = document.querySelector(".BtnChangePhoto");



var passwordVisible = document.getElementById("passwordVisible");
var passwordNonVisible = document.getElementById("passwordNonVisible");
var confPasswordVisible = document.getElementById("confPasswordVisible");
var confPasswordNonVisible = document.getElementById("confPasswordNonVisible");


var usersInfo = [];


if (localStorage.getItem("User-Data"))
{
    usersInfo = JSON.parse(localStorage.getItem("User-Data"));
}




function validations(input) {
    let validateInputs = {
        nameSignInput: /^([A-Z]|[a-z]|[0-9]|\s){3,15}$/,
        phoneSignInput: /^(02|\+02)?(01)(0|1|2|5)[0-9]{8}$/,
        ageSignInput: /^([2-5][0-9]|1[5-9]|6[0-5])$/,
        emailSignInput: /^(\w|\d|\-){1,}@gmail\.com$/,
        passwordSignInput: /^[A-Z][\w\d]{7,}$/
    }
    if (validateInputs[`${input.id}`].test(input.value))
    {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        if (input == passwordSignInput)
        {
            input.parentElement.nextElementSibling.classList.add("d-none");
            return true;
        }
        input.nextElementSibling.classList.add("d-none")
        return true;
    }
    else
    {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        if (input == passwordSignInput)
        {
            input.parentElement.nextElementSibling.classList.remove("d-none");
            return false;
        }
        input.nextElementSibling.classList.remove("d-none")
        return false;
    }

}

nameSignInput.addEventListener("input", function () {
    validations(nameSignInput);
})

phoneSignInput.addEventListener("input", function () {
    validations(phoneSignInput);
})

ageSignInput.addEventListener("input", function () {
    validations(ageSignInput);
})

emailSignInput.addEventListener("input", function () {
    validations(emailSignInput);
})

passwordSignInput.addEventListener("input", function () {
    validations(passwordSignInput);
})

function validateConfPass()
{
    if (confirmSignInput.value == passwordSignInput.value &&
        passwordSignInput.classList.contains("is-valid"))
    {
        confirmSignInput.classList.remove("is-invalid");
        confirmSignInput.classList.add("is-valid");
        confirmSignInput.parentElement.nextElementSibling.classList.add("d-none");
        return true;
    }
    else {
        confirmSignInput.classList.remove("is-valid");
        confirmSignInput.classList.add("is-invalid");
        confirmSignInput.parentElement.nextElementSibling.classList.remove("d-none");
        return false;
    }
}

confirmSignInput.addEventListener("input", function () {
    validateConfPass();
})



passwordVisible.addEventListener("click", function () {
    showPassword(passwordSignInput);
})

passwordNonVisible.addEventListener("click", function () {
    showPassword(passwordSignInput);
})

confPasswordVisible.addEventListener("click", function () {
    showConfPassword(confirmSignInput);
});

confPasswordNonVisible.addEventListener("click", function () {
    showConfPassword(confirmSignInput);
});





function showImage() {
    if (imageInput.files[0]) {
        photoProfile.style.backgroundImage = `
        url('images/websiteBody/${imageInput.files[0].name}')
    `}
}

function showPassword(input) {
    if (input.type == "password")
    {
        input.type = "text";
        passwordVisible.classList.remove("d-none")
        passwordNonVisible.classList.add("d-none");
    }
    else {
        input.type = "password";
        passwordNonVisible.classList.remove("d-none");
        passwordVisible.classList.add("d-none");
    }
}

function showConfPassword(input) {
    if (input.type == "password")
    {
        input.type = "text";
        confPasswordVisible.classList.remove("d-none")
        confPasswordNonVisible.classList.add("d-none");
    }
    else {
        input.type = "password";
        confPasswordNonVisible.classList.remove("d-none");
        confPasswordVisible.classList.add("d-none");
    }
}


function checkAll()
{
    if( validations(nameSignInput) && validations(phoneSignInput)
        && validations(ageSignInput) && validations(emailSignInput)
        && validations(passwordSignInput) && validateConfPass(confirmSignInput)
        && genderInput != "")
    {
        return true;
    }
    else {
        return false;
    }
}


btnChangePhoto.addEventListener("click", function () {
    showImage();
})


btnSignup.addEventListener("click", function () {
    genderInput = document.querySelector("input[name=gender]:checked")?.value;
    let modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    if (isEmpty())
    {
        modal.show();
    }
    else {
        if (checkAll())
        {
            btnSignup.nextElementSibling.classList.remove("d-none");
            let obj = {
                imagePath: imageInput.files[0]?.name,
                username: nameSignInput.value,
                phone: phoneSignInput.value,
                age: ageSignInput.value,
                email: emailSignInput.value,
                password: passwordSignInput.value,
                gender: genderInput,
            }
            usersInfo.push(obj)
            localStorage.setItem("User-Data", JSON.stringify(usersInfo));
            /* clearAll(); */
        }
        else {
            btnSignup.nextElementSibling.classList.add("d-none");
        }
    }
})



function isEmpty() {
    if (nameSignInput.value.trim() == ''
        && phoneSignInput.value == '' &&
        ageSignInput.value == '' &&
        emailSignInput.value == '' &&
        passwordSignInput.value.trim() == ''&&
        confirmSignInput.value.trim() == '') {
        
        return true;
    }
    else {
        return false;
    }
}


function clearAll()
{
    nameSignInput.value = '';
    phoneSignInput.value = '';
    ageSignInput.value = '';
    emailSignInput.value = '';
    passwordSignInput.value = '';
    confirmSignInput.value = '';
}