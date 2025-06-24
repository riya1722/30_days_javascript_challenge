let hr=document.getElementById('hour');
let mn=document.getElementById("min");
let sc=document.getElementById('sec');

function display(){
    let date = new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss= date.getSeconds();
    let hRotation=30*hh+mm/2;
    let mRotation=6*mm;
    let sRotation=6*ss;
    hr.style.transform=`rotate(${hRotation}deg)`;
    mn.style.transform=`rotate(${mRotation}deg)`;
    sc.style.transform=`rotate(${sRotation}deg)`;
    }