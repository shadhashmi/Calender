const currentDate = document.querySelector(".current-date");
const dayTag = document.querySelector(".days"),
previousNextIcon = document.querySelectorAll(".icons span");

let date = new Date();
currYear = date.getFullYear(),
currMonth =date.getMonth();

const months = ['January','February','March','April','May','June','July'
,'August','September','October','November','December']
// console.log(date,currMonth,currYear);

const renderCalendar = () =>{
    let firstDayOfMonth = new Date(currYear,currMonth,1).getDay(),//getting first day of month
    lastDateOfMonth = new Date(currYear,currMonth+1,0).getDate(),//getting last date of month
    lastDayOfMonth = new Date(currYear,currMonth ,lastDateOfMonth).getDay(),//getting last date of month
    lastDateOfLastMonth = new Date(currYear,currMonth,0).getDate();//getting last date of last month
    // console.log(lastDateOfMonth);
    let liTag ="";
    
    for (let i = firstDayOfMonth; i > 0; i--){
        liTag +=`<li class="inactive">${lastDateOfLastMonth -i + 1}</li>`;
      
    }

    
for(i=1;i<=lastDateOfMonth; i++){
    liTag +=`<li>${i}</li>`;

}

for (let i = lastDayOfMonth;  i < 6; i++) {
    liTag +=`<li class="inactive">${i - lastDayOfMonth  + 1}</li>`;
    
}

   currentDate.innerText = `${months[currMonth]} ${currYear}`;
   dayTag.innerHTML = liTag;
}
renderCalendar();

previousNextIcon.forEach(icon =>{
    icon.addEventListener('click' ,()=>{
       currMonth = icon.id === "prev" ? currMonth-1 : currMonth +1 ;
       renderCalendar();
    });
})


