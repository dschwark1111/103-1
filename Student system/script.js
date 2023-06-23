function calculateGPA(){
var studentname = prompt("Enter Student Name:");
var grade1 = Number (prompt ("Enter Your Grade for Class 1"));
var grade2 = Number (prompt ("Enter Your Grade for Class 2"));
var grade3 = Number (prompt ("Enter You Grade for Class 3"));

var gpa = (grade1 + grade2 + grade3)/3;

DisplayInfo(studentname,gpa)

}

function DisplayInfo(sName,gpa){
    document.getElementById("studentInfo").innerHTML+=`
    <li class="student-item">
        Name: ${sName}
        GPA: ${gpa.toFixed(2)}
    </i>
    `;
}