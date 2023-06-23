function gettotal(){
    var todaydate = new Date();
    var productname = prompt("Enter Product Name");
    var price = Number(prompt("Enter Price"));
    var taxrate= Number((0.075));
    var gettotal = price*taxrate+price;

    document.write
    (`
    <h1>Dottie's Cool Store </h1>
    <h2> Receipt </h2>
        <p>Date: ${todaydate}</p>
        <p>Product Name: ${productname}</p>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Tax Rate: ${taxrate}</p>
        <p>Total: ${gettotal.toFixed(2)}</p>
    <h3>Thank you, come again!</h3>
`)
}


