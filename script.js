
setInterval(clock,1000);
function clock(){
    let time=new Date();
    let hour=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();
    let AMPM="AM";

    let digital=document.getElementById("clock");
      
    // hour=hour<10? `0${hour}`:hour;
    // minute=minute<10? `0${minute}`:minute;
    // second=second<10? `0${second}`:second;

    //  digital.innerHTML=`${hour}:${minute}:${second}`;


    if(hour>=12)
    {
        hour-=12;
        AMPM="PM";
    }
    else
    {
        AMPM="AM";
    }

    if(hour<10)
    {
        hour="0"+hour;
    }
    if(minute<10)
    {
        minute="0"+minute;
    }
    if(second<10)
    {
        second="0"+second;
    }

        digital.innerHTML=" "+hour+":"+" "+minute+":"+" "+second+" "+AMPM;

}

function change(){
    let text=document.getElementById("text");
    text.innerText="Welcome to Elevation academy";
    text.style.fontSize="40px";
    text.style.color="green";
    text.style.fontFamily="Arial, Helvetica, sans-serif";
}

function display(){
    let text2=document.getElementById("hello");
    text2.innerText="";
}

const h1=document.querySelectorAll("h1");
h1[0].style.color="cyan";
h1[3].style.backgroundColor="pink";
h1[3].style.fontFamily="Arial, Helvetica, sans-serif";
h1[3].style.fontSize="50px";



function show(){
    const show1=document.getElementById("show");
    show1.innerText="MERN stack";
    show1.style.fontFamily="Arial, Helvetica, sans-serif";
}