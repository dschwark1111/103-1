//simulate th DB
var passwordDB = "Test1234";

function login(){
    var password = document.getElementById("txtpassword").value;

    if(password == passwordDB){
        //if you get here, the answer was yes
        console.log("Welcome");
        window.location="index.html";
    }else{
        document.getElementById("error").innerHTML=`
        <p class="error"> Invalid Password </P>
        ;`
    }
}