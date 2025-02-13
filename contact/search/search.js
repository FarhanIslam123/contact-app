
var contacts=localStorage.getItem("info");
var searched=localStorage.getItem("searched");
contacts=JSON.parse(contacts)

// const ids=contacts.map((contact)=>contact.newId)
// console.log(ids);
const ul=document.querySelector("ul");
if (searched=[]||null) {
    document.querySelector(".noItem").innerHTML="There are no contact available this name. "
}else{
    searched=JSON.parse(searched)
    const search= searched.map((search)=>{
        let li=document.createElement("li");
        li.id=searched.newId;
        li.innerHTML=`<span> <i class="fa fa-address-card" aria-hidden="true"></i> </br> <strong> Name:</strong> ${search.fullName} 
        </br> <strong> Phone:</strong> ${search.phone} </span>
        <span> <button class='dltBtn'>
        <i class="fa fa-trash fa-2x" aria-hidden="true" ></i>
        </button > </span>`
        ul.appendChild(li)
    })
}

// // ! delete contsct
// const dltBtn=document.querySelectorAll(".dltBtn");
// const deleteContact=(e)=>{
//     let dltCntct= e.target.closest("li");
//     const dltCntctId=dltCntct.id;
//     console.log(dltCntctId);
//     let notDltCntct=contacts.filter((contact)=>contact.newId!==dltCntctId);
//     localStorage.setItem('info',JSON.stringify(notDltCntct))
//     ul.removeChild(dltCntct)
//     setTimeout(()=>{
//         alert("The contact is deleted")
//     },100)
// }
// dltBtn.forEach((btn) => {
//     btn.addEventListener("click",(e)=>{
//         let confirmation=confirm("You are sure?");
//         confirmation==true?deleteContact(e) :console.log('not');
//         })
// });
