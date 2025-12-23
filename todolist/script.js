
let display=document.getElementById("enter");
let result=document.getElementById("tasklist");
let ip=document.getElementById("enter");

function append(){
    
    let data=display.value;
    let list=document.createElement("li");
    let textSpan = document.createElement("span");
    textSpan.innerText = data;
    list.appendChild(textSpan);
    result.appendChild(list);
    ip.value="";
    let but=document.createElement("button");
    but.innerText="remove";
    but.addEventListener("click",function(){
        list.remove();
    })
    
    list.appendChild(but); // we will add this button to the list so that when it is clicked the entire list is removed not to the ul
    let done=document.createElement("button");
    done.innerText="done";
    done.addEventListener("click",function(){
        list.classList.toggle("completed");
    })
    list.appendChild(done);

    let edit= document.createElement("button");
    edit.innerText="edit";
    edit.addEventListener("click",function(){
        let newText=prompt("edit  your task:",textSpan.innerText);
        if(newText!==null && newText.trim() !==""){
            textSpan.innerText=newText;
        }
        
    })
    list.appendChild(edit);
    

    
}