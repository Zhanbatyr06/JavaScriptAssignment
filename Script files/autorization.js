function validateForm(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var successMessage = document.getElementById("successMessage");
    var errorMessage = document.getElementById("errorMessage");

    successMessage.innerHTML = " ";
    errorMessage.innerHTML = " ";
     
    if(username == ""){
        errorMessage.innerHTML = "Please, input username!";
        return false;
    }

    if(!validateEmail(email)){
        errorMessage.innerHTML = "Please, input correct email!";
        return false;
    }

    if(password.length < 6){
        errorMessage.innerHTML = "The password must contain at least 6 characters.";
        return false;
    }

    successMessage.innerHTML = "Registration was successful!";
    return true;
}

function validateEmail(email){
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return  re.test(email);
}