function myvalidForm(){
    var error = document.querySelector("#form-error");
    var isValid = true;
    var name = document.getElementById("email")
    if(!name.value.match(/^[A-Za-z\_\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error.innerHTML = "input you valid email";
        name.style.borderColor = "red";
        isValid = false;
    }
    var name = document.forms["myForm"]["eml"].value;
       if(name.length > 25){
        error.innerHTML = "your email is too long";
        isValid = false;
    }
    return isValid;
    
}