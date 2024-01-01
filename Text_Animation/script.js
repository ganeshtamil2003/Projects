
const heading=document.querySelector(".heading");   //selecting the heading element
const text=heading.textContent;                     //text content of the heading element 
const alpha =text.split("");                        //splitting the single word to array
heading.textContent="";

//adding span element to each character
for(let i=0;i<alpha.length;i++){
    heading.innerHTML+=`<span>${alpha[i]}</span>`;
}

let count=0;
let timer=setInterval(onArrival,50);

//function to add fade animation to each character
function onArrival(){
    const span=heading.querySelectorAll("span")[count];
    span.classList.add("fade");
    count++;
}



