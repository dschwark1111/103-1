function calculate(){
    var num1 = Number (document.getElementById("EnterFirstNumber").value);
    var op = document.getElementById("EnterOperation").value;
    var num2 = Number (document.getElementById("EnterSecondNumber").value);

    if(op =="+"){
        var sum = num1 + num2;
        document.getElementById("results").innerHTML=`
    <p> ${num1} + ${num2} = ${sum}</p>`;
    }
    if(op =="-"){
        var sub = num1 - num2;
        document.getElementById("results").innerHTML=`
    <p> ${num1} - ${num2} = ${sub}</p>`;
    }
    if(op =="*"){
        var mul = num1 * num2;
        document.getElementById("results").innerHTML=`
    <p> ${num1} x ${num2} = ${mul}</p>`;
    }
    if(op =="/"){
        var div = num1 / num2;
        document.getElementById("results").innerHTML=`
    <p> ${num1} / ${num2} = ${div}</p>`;
    }

    //document.getElementById("results").innerHTML=`
    //<p> ${num1} + ${num2} = ${sum}</p>
    //<p> ${num1} - ${num2} = ${sub}</p>
    //<p> ${num1} x ${num2} = ${mul}</p>
   // <p> ${num1} / ${num2} = ${div}</p>
    //`;

}