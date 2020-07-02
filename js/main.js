document.addEventListener("DOMContentLoaded",function(){
    let changeTheme = document.querySelectorAll(".change-theme");
    let mainContent = document.querySelector(".main-content");
    for(x of changeTheme){
        
        x.addEventListener("click",function(e){
            mainContent.classList.remove("bg-light","bg-dark");
            if(e.target.classList.value == "change-theme dark-btn"){
                mainContent.classList.add("bg-dark")
            }
            if(e.target.classList.value == "change-theme light-btn"){
                mainContent.classList.add("bg-light")
            }
        })
    }
    
    document.getElementById("pwdSubmit").addEventListener("click",function(){
        let rptPass = document.getElementById('RptPasswordCheck').value;
    let CurrPass = document.getElementById('passwordCheck').value;
        if(rptPass == CurrPass){
            validatePassword();
         }
         else{
            document.getElementById("pwdtype").innerHTML = "Password does not match";
         }
    })
    

 })



 function validatePassword() {
    let CurrPass = document.getElementById('passwordCheck').value;
        errors = [];
    if (CurrPass.length < 6) {
        errors.push("Must contain at least 6 characters");
        errors.push("<br>");
    }
    if (CurrPass.search(/[a-z]/) < 0) {
        errors.push("Must contain at least one lower letter"); 
        errors.push("<br>");
    }
    if (CurrPass.search(/[A-Z]/) < 0) {
        errors.push("Must contain at least one Upper letter"); 
        errors.push("<br>");
    }
    if (CurrPass.search(/[0-9]/) < 0) {
        errors.push("Must contain at least one digit");
        errors.push("<br>");
    }
    if (errors.length >= 0) {
        document.getElementById("pwdtype").innerHTML = errors.join("");
    }

}