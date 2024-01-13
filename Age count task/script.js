"use strict"
    
let input = document.getElementById('date');
input.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result")

let btn = document.getElementById("calculate");
btn.addEventListener("click",calculateAge);

function calculateAge(){
    var birthDate = new Date(input.value);

    var day1 = birthDate.getDate();
    var month1 = birthDate.getMonth()+1;
    var year1 = birthDate.getFullYear();

    var today = new Date();

    var day2 = today.getDate();
    var month2 = today.getMonth()+1;
    var year2 = today.getFullYear();


 var year3,month3,day3;

    year3 = year2-year1;
    // console.log(year3)

    if(month2 >= month1){
        month3 =month2-month1;
        // console.log(month3)
    }
    else{
        year3--;
        month3 = 12 + month2-month1;
    }
    if(day2 >= day1){
        day3 = day2-day1;
    }
    else{
        month3--;
        day3 = age(year1,month1)+ day2-day1
    }
    if(month3 < 0){
        month3 = 11;
        year3--;
      
    }
    console.log(month3)
    result.innerHTML = year3+"years"+" "+month3+"months"+" "+day3+"days";
    
}

function age(year,month){
    return new Date(year,month,0).getDate();
}






