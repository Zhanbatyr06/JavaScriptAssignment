
function validateForm(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var successMessage = document.getElementById("successMessage");
    var errorMessage = document.getElementById("errorMessage");
    var registrationPage = document.getElementById("Signup");
    var loginpage = document.getElementById("login-page");

    successMessage.innerHTML = " ";
    errorMessage.innerHTML = " ";
     
    //local storage
    if(validateExistingUser(username)){
        errorMessage.textContent = "Username already exists!";
    }
    else{ 
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
        else{
            const userData = { username, password };
            localStorage.setItem(username, JSON.stringify(userData));
            alert("Registration successful! Please log in.");
            registrationPage.style.display = "none";
            loginpage.style.display = "block";
        }
    }


    
    
    
}

function validateEmail(email){
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return  re.test(email);
}
function validateExistingUser(username){
    if(localStorage.getItem(username)){
        return true;
    }
}
//local storage

function gotologin(){
    event.preventDefault();
    const registrationPage = document.getElementById("Signup");
    const loginpage = document.getElementById("login-page");

    registrationPage.style.display = "none";
    loginpage.style.display = "block";

}
function gotoregister(){
    const registrationPage = document.getElementById("Signup");
    const loginpage = document.getElementById("login-page");
    loginpage.style.display = "none";
    registrationPage.style.display = "block";
    

}
function login(){

    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const storedData = localStorage.getItem(username);
    if (!storedData) {
        alert("Username not found!");
    } 
    else {
        const userData = JSON.parse(storedData);
        if (userData.password === password) {
          displayProfile(userData);
        } 
        else {
          loginError.textContent = "Incorrect password!";
        }
    }
}
 // Profile functionality
 function displayProfile(userData) {
    const profileUsername = document.getElementById("profile-username");
    const profileUserinfo = document.getElementById("profile-userinfo");
    const loginpage = document.getElementById("login-page");
    const profilePage = document.getElementById("profile-page"); 
    loginpage.style.display = "none";
    profilePage.style.display = "block";
    profileUsername.textContent = userData.username;
    profileUserinfo.textContent = userData.username;
}
function Logout(){
    const loginpage = document.getElementById("login-page");
    const profilePage = document.getElementById("profile-page");
    profilePage.style.display = "none";
    loginpage.style.display = "block";

}
