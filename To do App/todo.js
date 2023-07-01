var tasks = []
const DIV = document.getElementById("tasklist");
function registerTask(){
    DIV.innerHTML = ""
    var task = document.getElementById("txttask").value;
    tasks.push(task);
    for(i=0;i<tasks.length;i++){
          DIV.innerHTML+=`<p> ${i+1}. ${tasks[i]} </p>`;
     }
     document.getElementById("totaltasks").innerHTML= `<p> Tasks Completed: ${tasks.length}</p>`;
}
//document.write(`<p> ${i+1}. ${tasks[i]}</p>}`)