
var contacts=localStorage.getItem("info");
var searched=localStorage.getItem("searched");
contacts=JSON.parse(contacts)

// const ids=contacts.map((contact)=>contact.newId)
// console.log(ids);
const ul=document.querySelector("ul");
if (searched==='[]'||searched===null) {
    document.querySelector(".noItem").innerHTML="There are no contact available this name. "
}else{
    searched=JSON.parse(searched)
    const search= searched.map((search)=>{
        let li=document.createElement("li");
        li.id=search.newId;
        li.innerHTML=`<span> <i class="fa fa-address-card" aria-hidden="true"></i> </br> <strong> Name:</strong> ${search.fullName} 
        </br> <strong> Phone:</strong> ${search.phone} </br> <strong>Email:</strong> ${search.email} </span>
        <span> <button class='dltBtn'>
        <i class="fa fa-trash fa-2x" aria-hidden="true" ></i>
        </button > </span>`
        ul.appendChild(li)
    })
}

// ! delete contsct
const dltBtn=document.querySelectorAll(".dltBtn");
const deleteContact=(e)=>{
    let dltCntct = e.target.parentElement.parentElement.parentElement;
    const dltCntctId=dltCntct.id;
    console.log(dltCntct);
    let notDltCntct=contacts.filter((contact)=>contact.newId!==dltCntctId);
    console.log("Updated contacts array:", notDltCntct);
    localStorage.setItem('info',JSON.stringify(notDltCntct))
    contacts = notDltCntct;
    localStorage.removeItem("searched")
    ul.removeChild(dltCntct)
    setTimeout(()=>{
        alert("The contact is deleted")
    },100)
}
dltBtn.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
        let confirmation=confirm("You are sure?");
        confirmation===true?deleteContact(e) :console.log('not');
        })
});
