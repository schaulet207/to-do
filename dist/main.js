(()=>{"use strict";let e=[];const o=(o,t,i,n,l)=>(console.log("Called toDo module... creating now"),console.log({Title:o,Description:t,DueDate:i,Priority:n,CheckList:l}),console.log("Pushing this to the array"),e.push({Title:o,Description:t,DueDate:i,Priority:n,CheckList:l}),console.log(e),{Title:o,Description:t,DueDate:i,Priority:n,CheckList:l}),t=()=>{console.log("Loading default project into array");let e=[];console.log("Pushing title into the array");let o="Default";return e.push({projectTitle:o}),console.log(e),{projects:e,projectTitle:o}};t(),function(){const e=document.querySelector("#content"),o=document.createElement("h1");o.textContent="To-Do List",e.appendChild(o);const i=document.createElement("div");i.textContent=t().projectTitle,e.appendChild(i)}();const i=o("Get Essentials","Go buy water","7/16/2023","High","Water, Food, Clothes"),n=o("Work","Finish Odin Project course work","7/16/2023","High","Complete Intermediate Javascript, Complete Advanced HTML & CSS");console.log("Show me properties from myToDo1",i),console.log("Show me properties from myToDo2",n)})();