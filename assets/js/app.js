let = loop_line.querySelector("#loop_line")
for(let x=1, y=0;x,y<31;x=x*=2,y++){console.log(x)
let text=document.createElement("p")
text.innerHTML=x
document.querySelector('#loop_line').appendChild(text)}