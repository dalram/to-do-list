// Mygtukos sukūrimas Javascript 
// let btn = document.createElement("button")
// btn.innerHTML = "Clear List";
// document.li.appendChild(deleteBtn);

let submitBtn = document.getElementById("submit");
console.log(submitBtn);


//1. Noriu kad irasytas zodis atsirastu apacioje, 
// paspaudus submit tekstas turi eiti i ol
function submit() {
    let list = document.getElementById("input").value;
    let taskList = document.getElementById("task-list");
    let taskNode = document.createElement('li');
    let textNode = document.createTextNode(list);
    
    taskNode.appendChild(textNode);
    taskList.appendChild(taskNode);
    
     
     const olDeleteEl = document.createElement('button');
     olDeleteEl.classList.add('x');
     olDeleteEl.innerText = 'x';
     taskNode.appendChild(olDeleteEl);
    

     const olDoneEl = document.createElement('button');
     olDoneEl.classList.add('Done');
     olDoneEl.innerText = 'Done';
     taskNode.appendChild(olDoneEl);

     olDeleteEl.addEventListener('click', (e) => {

        taskList.removeChild(taskNode); 

     });
     olDoneEl.addEventListener('click', (e) => {
       taskNode.style.color = "green";
       taskNode.style.textDecoration = "line-through";
         
     });

     document.getElementById("input").value  = null;
}

function clearList() {
   document.getElementById("task-list").innerHTML = "";

}


