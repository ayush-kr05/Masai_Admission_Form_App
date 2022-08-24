// All the Code for the Admitted page goes here


var accepted=JSON.parse(localStorage.getItem("admission-accepted"))||[];


ShowStudentsData(accepted)


function ShowStudentsData(stData){
    stData.map(function(info){
        var row=document.createElement("tr");


        var td1=document.createElement("td");
        td1.innerText=info.name;

        var td2=document.createElement("td");
        td2.innerText=info.email;

        var td3=document.createElement("td");
        td3.innerText=info.course;

        var td4=document.createElement("td");
        td4.innerText=info.gender;

        var td5=document.createElement("td");
        td5.innerText=info.phone;

        
        row.append(td1,td2,td3,td4,td5);

        document.querySelector("tbody").append(row);


    })

}
