function updateStudentList() {
    var html = "";

    for (var i = 0; i < students.length; i++) {
        html += "<li><button type='button' class='studentButton'" + "id=" + students[i].name +">" + students[i].name + "</button></li>";
    }

    $('#studentList').html(html);

    for (var i = 0; i < students.length; i++) {
        document.getElementById(students[i].name).addEventListener('click', openStudentInfo(students[i].name));
    }
}

function openStudentInfo(studentName) {
    console.log("Opening " + studentName + " info.");

    var studentInfo = requestStudentByName(studentName);

    if (studentInfo != null) {
        var studentInfoForm = $("#studentInfoForm");
        var html = "";

        html += "<h3>Student Name: " + studentInfo.name + "</h3>";
        html += "<h3>Student ID: " + studentInfo.studentID + "</h3>";

        studentInfoForm.html(html);

        $("#studentInfoModal").show();
    } 
}
// $(document).ready(function() {
//     $("#studentList").on("click", ".studentButton", function() {
//         var studentId = $(this).data("studentid");
//         openStudentInfo(studentId);
//     });
// });
// document.getElementById('studentList').addEventListener('click', function(event) {
//     var clickedEl = event.target;
//     if(clickedEl.className === 'studentButton') {
//         var studentId = clickedEl.dataset.studentId;
//         openStudentInfo(studentId);
//     }
// });
