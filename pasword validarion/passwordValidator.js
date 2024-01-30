
function validate(){
    var password = document.getElementById("password");
    var uper = document.getElementById("uper");
    var lowor = document.getElementById("lowor");
    var Special = document.getElementById("Special");
    var number = document.getElementById("number"); 
    var len = document.getElementById("len");

       // cheak is password is cantain a number 

if(password.value.match(/[0-9]/)){
    // pasword contain 0 to 9
    number.style.color="green";
}
else{
    number.style.color="red";
}
  // cheak is password is cantain a lower case charactor
if(password.value.match(/[a-z]/)){
    // pasword contain a to z
  
    lowor.style.color="green";
}
else{
    lowor.style.color="red";
}
    // cheak is password is cantain a upper case charactor
if(password.value.match(/[A-Z]/)){
    // pasword contain A to Z
    uper.style.color="green";
}
else{
    uper.style.color="red";
}
    // cheak is password is cantain a special charactor
if(password.value.match(/[!@#$%^&*]/)){
    // pasword contain !@#$%^&*
    Special.style.color="green";
}
else{
    Special.style.color="red";
}

    // cheak is password is cantain a 8 charactor
if(password.value.length >= 8){
    // pasword contain 8 charactor
    len.style.color="green";
}
else{
    len.style.color="red";
}
}


function conforn(){
 let password = document.getElementById("password");
 let conforn = document.getElementById("confirmPassword");
  if(password.value==conforn.value){
    document.getElementById("uper").style.display="none";
    document.getElementById("lowor").style.display="none";
    document.getElementById("Special").style.display="none";
    document.getElementById("number").style.display="none";
    document.getElementById("len").style.display="none";


  }
    else{
        document.getElementById("uper").style.display="block";
        document.getElementById("lowor").style.display="block";
        document.getElementById("Special").style.display="block";
        document.getElementById("number").style.display="block";
        document.getElementById("len").style.display="block";
    }s



}

function submit(){
    let password = document.getElementById("password");
    let conforn = document.getElementById("confirmPassword");
    if(password.value==conforn.value){
        alert("login successfull");
    }
    else{
        alert("password not match");
    }
}