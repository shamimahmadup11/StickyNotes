const textarea=document.getElementById("textarea");
const colors=document.querySelector(".colors");
const btn=document.querySelector("#btn");
const AddNoteHere=document.querySelector(".AddNoteHere");


btn.addEventListener("click",function(){
    const vlaueOfTextArea=textarea.value;
    const color=colors.value;
if(!vlaueOfTextArea){
    alert("please write some contentd")
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
    var Canclebtn=document.createElement("button")
    newDiv.appendChild(Canclebtn);
    Canclebtn.textContent="cut"
}  
})