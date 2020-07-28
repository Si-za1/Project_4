


function settingDate(date,day)
{
    date=new Date(date);
    date.setDate(day); //sets the numeric date for the given 
    date.setHours(23);//we want to display the date and the hour of the current time
    return date;
}

function getDateBetween(date1,date2)
{
    let range1= new Date(date1); 
    //converting the string into the numeric type
    let range2= new Date(date2);
    date1=settingDate(date1, 31); //setting the date from the month till date 31 if not it will display the other month
    date2=settingDate(date2, 31);
 //now to get the end date for the each month 
 let temp;
 let dates=[];
    while(date1<=date2){
        //for the loop to br runned till the specified date
       if(date1.getDate()!=31)
       {
           temp=settingDate(date1,0); //here what happens is , when the above condition is met, the date is changed and increased for the next
       
        if(temp>=range1 && temp<=range2) dates.push(temp);  
            date1= settingDate(date1,31);  
        //here the dates for the month gets changed 
       }
        else{
             //now for the month 
             temp=new Date(date1);
             if(temp>=range1 && temp<=range2) dates.push(temp);
             date1.setMonth(date1.getMonth() + 1);
        }
       
    }
    console.log(dates);
}









let constant = getDateBetween("2020/01/01", "2021/01/01"); //helps us to get the date between the starting and the ending .
document.getElementById("calendar").innerHTML=content; //we are calling the html portion and wanting it to be displayed as the content of the page.