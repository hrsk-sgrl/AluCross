"use strict"

let boxlist= document.querySelectorAll(".box")
let heading = document.querySelector(".h")
console.log(heading.textContent)
let director = 0

const winner = function(){
    if((boxlist[0].innerHTML === boxlist[1].innerHTML)&& (boxlist[1].innerHTML === boxlist[2].innerHTML)&& (boxlist[0].innerHTML !==""))
{
   heading.innerHTML ="Winner:"+ boxlist[0].innerHTML
}
    else if((boxlist[0].innerHTML === boxlist[3].innerHTML)&& (boxlist[3].innerHTML === boxlist[6].innerHTML)&& (boxlist[0].innerHTML !==""))
{
   heading.innerHTML ="Winner:"+ boxlist[0].innerHTML
}
    else if((boxlist[0].innerHTML === boxlist[4].innerHTML)&& (boxlist[4].innerHTML === boxlist[8].innerHTML)&& (boxlist[0].innerHTML !==""))
{
   heading.innerHTML ="Winner:"+ boxlist[0].innerHTML
}
    else if((boxlist[1].innerHTML === boxlist[4].innerHTML)&& (boxlist[4].innerHTML === boxlist[7].innerHTML)&& (boxlist[1].innerHTML !==""))
{
   heading.innerHTML ="Winner:"+ boxlist[1].innerHTML
}
    else if((boxlist[2].innerHTML === boxlist[5].innerHTML)&& (boxlist[5].innerHTML === boxlist[8].innerHTML)&& (boxlist[2].innerHTML !==""))
{
   heading.innerHTML ="Winner:"+ boxlist[2].innerHTML
}
    else if((boxlist[3].innerHTML === boxlist[4].innerHTML)&& (boxlist[4].innerHTML === boxlist[5].innerHTML)&& (boxlist[3].innerHTML !==""))
{
   heading.innerHTML ="Winner:"+ boxlist[3].innerHTML
}
    else if((boxlist[6].innerHTML === boxlist[7].innerHTML)&& (boxlist[7].innerHTML === boxlist[8].innerHTML)&& (boxlist[6].innerHTML !==""))
{
   heading.innerHTML ="Winner:"+ boxlist[6].innerHTML
}
    else if((boxlist[2].innerHTML === boxlist[4].innerHTML)&& (boxlist[4].innerHTML === boxlist[6].innerHTML)&& (boxlist[2].innerHTML !==""))
{
   heading.innerHTML ="Winner:"+ boxlist[2].innerHTML
}
else
{
    heading.innerHTML ="Winner: Draw"
}

}
for(let box of boxlist)
{
    box.addEventListener("click",function()
    {
      if(director % 2 === 0)
      {
        box.innerHTML='<svg class="svg-icon" style="width: 1em; height: 0.85em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.996587 1020.586667C231.103147 1020.586667 3.413333 792.84224 3.413333 512 3.413333 231.154347 231.103147 3.413333 511.996587 3.413333 792.89344 3.413333 1020.586667 231.10656 1020.586667 512s-227.7376 508.586667-508.59008 508.586667z m0-940.885334C273.24416 79.691093 79.68768 273.24416 79.68768 512c0 238.752427 193.55648 432.295253 432.308907 432.295253 238.75584 0 432.295253-193.55648 432.295253-432.295253 0-238.742187-193.55648-432.308907-432.295253-432.308907v0.01024z"  /></svg>'
        box.style.cursor = "not-allowed"
        director +=1
      }
      else
      {
        box.innerHTML = '<svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  /></svg>'
        box.style.cursor = "not-allowed"
        director +=1
      }
  
      
     winner()
      
    }, {once : true})
}
