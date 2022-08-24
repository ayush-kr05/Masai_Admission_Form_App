// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit",AddtoDatabase);

var StudentData=JSON.parse( localStorage.getItem("admission"))||[];

function AddtoDatabase(){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    var gender = document.querySelector("#gender").value;
    var course = document.querySelector("#course").value;

    var obj={
        name:name,
        email:email,
        phone:phone,
        gender:gender,
        course:course
    }

    StudentData.push(obj);

    localStorage.setItem("admission",JSON.stringify(StudentData));


    // console.log(obj);

    // console.log(name,email,phone,gender,course);
   
}