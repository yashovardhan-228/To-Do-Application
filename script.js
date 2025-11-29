let inputBox= document.getElementById("input-box");
let listContainer= document.getElementById("list-container");
let button= document.querySelector("button");

button.addEventListener("click", ()=>{
    if(inputBox.value==="") alert("No task to add!!!");
    else{
        const li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);

        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);

    }
    inputBox.value="";
})

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI")
        e.target.classList.toggle("checked");
    else if(e.target.tagName==="SPAN")
        e.target.parentElement.remove();
});