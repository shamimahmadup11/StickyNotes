const textarea=document.getElementById("textarea");
const colors=document.querySelector(".colors");
const btn=document.querySelector("#btn");
const AddNoteHere=document.querySelector(".AddNoteHere");


btn.addEventListener("click",function(){
    const vlaueOfTextArea=textarea.value;
    const color=colors.value;
if(!vlaueOfTextArea){
    alert("must write something!")
}else{
    

    var newDiv=document.createElement("div");
    newDiv.style.height="200px"
    newDiv.style.width="200px"
    newDiv.style.color="white"
    newDiv.style.backgroundColor="colors.value"; 
    var newPara=document.createElement("p");
    newPara.style.padding="30px"
    newPara.style.color="white"
    AddNoteHere.appendChild(newDiv);
    newDiv.appendChild(newPara);
    newDiv.style.backgroundColor=color;
    newPara.textContent=vlaueOfTextArea;
    var span=document.createElement("span");
    span.className ="spanTag"
    span.textContent="\u00d7";
    newDiv.appendChild(span)
   
}  
textarea.value="";

})

AddNoteHere.addEventListener("click", function(e) {
    if(e.target.tagName==="SPAN"){
       e.target.parentElement.remove();
    }
  
});

function saveData(){
    localStorage.setItem("data", AddNoteHere.innerHTML)
}
function showTask(){
    AddNoteHere.innerHTML=localStorage.getItem("data")
}
showTask();