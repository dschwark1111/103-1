var tasks = ["Clean Chicken Coop", "Do coding Homework", "Make grocery list" ,"Laundry", "Clean office"]
function registerTask(){
    var task = document.getElementById("txttask").value;
    tasks.push(task);
}

for(i=0;i<tasks.length;i++){
    document.write(`<p> ${i+1}. ${tasks[i]} </p>`);
}