// All the Code for All Students Page Goes Here

var StudentData=JSON.parse(localStorage.getItem("admission"))||[];

// console.log(StudentData.length);

ShowStudentsData(StudentData);

function ShowStudentsData(stData){
    document.querySelector("tbody").innerText="";
    stData.map(function(info,ind){
        
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

        var td6=document.createElement("td");
        td6.innerText="Accepted";
        td6.style.backgroundColor="green";
     
        td6.setAttribute("class","accRej");
        td6.addEventListener("click",function(){AcceptS(ind)});

        var td7=document.createElement("td");
        td7.innerText="Rejected";
        td7.style.backgroundColor="red";
       
        td7.setAttribute("class","accRej");
        td7.addEventListener("click",function(){RejectS(ind)});

        row.append(td1,td2,td3,td4,td5,td6,td7);

        document.querySelector("tbody").append(row);


    })

}

var accepted=JSON.parse(localStorage.getItem("admission-accepted"))||[];

function AcceptS(ind){
    accepted.push(StudentData[ind]);
    localStorage.setItem("admission-accepted",JSON.stringify(accepted));

    StudentData.splice(ind,1);

    ShowStudentsData(StudentData);
    localStorage.setItem("admission",JSON.stringify(StudentData));

}



var rejected=JSON.parse(localStorage.getItem("admission-rejected"))||[];

function RejectS(ind){
    rejected.push(StudentData[ind]);
    localStorage.setItem("admission-rejected",JSON.stringify(rejected));

    StudentData.splice(ind,1);

    ShowStudentsData(StudentData);

    localStorage.setItem("admission",JSON.stringify(StudentData));

}

function showfilteredData(){
    var course=document.getElementById("filter").value;
    var filteredData= StudentData.filter(function(data){
        return data.course==course;
    })
    if(course=="all"){
        ShowStudentsData(StudentData);
    }else{
        ShowStudentsData(filteredData);

    }

}




