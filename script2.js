function getuserage(bornyear){
    var userbirthyear= Number(prompt("enter your birth year"));
    var todaydate= new Date();
    var currentyear = todaydate.getFullYear();
    var age = currentyear-userbirthyear;
    document.write(`User Age: ${age}`);
    errormsg("unspecified","We are not considering the birth month");
    return age;
}

function calculatesum(){
    var num1 = Number (prompt("enter first number"));
    var num2 = Number (prompt("enter second number"));
    var sum = num1+num2;
    errormsg ("Math Error", "The prompt values were not numbers");
    document.write(`Sum of Numbers: ${sum}`);
}

//------parameters---------
