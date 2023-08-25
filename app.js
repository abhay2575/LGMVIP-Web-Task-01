let btn=document.querySelector("button");
let input=document.querySelector("input");
let ol=document.querySelector("ol");
btn.addEventListener("click",function(event){
    let newLi=document.createElement("li");
    ol.appendChild(newLi);
    newLi.innerText=input.value;
    console.log(input.value)
    let delBtn=document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText="Delete";
    newLi.appendChild(delBtn);
});

// let delBtns=document.querySelectorAll(".delete");
//     for ( delBtn of delBtns){
//         delBtn.addEventListener("click",function(event){
//             let pare=this.parentElement;
//             // console.log(pare);
//             pare.remove();
//             console.log("Task Deleted");
//     })}
    
ol.addEventListener("click",function(event){
    let item=event.target.nodeName=="BUTTON";
    let nav=event.target.parentElement;
    if(item){
        nav.remove();
        console.log("Deleted");
    }
})