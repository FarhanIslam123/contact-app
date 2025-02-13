

var contacts=localStorage.getItem("info");
contacts=JSON.parse(contacts)
// const ids=contacts.map((contact)=>contact.newId)
// console.log(ids);
const ul=document.querySelector("ul");
const contact= contacts.map((contact)=>{
    let li=document.createElement("li");
    li.id=contact.newId;
    li.innerHTML=`<span> <i class="fa fa-address-card" aria-hidden="true"></i> </br> <strong> Name:</strong> ${contact.fullName} </br> <strong> Phone:</strong> ${contact.phone} </span>
    <span> <button class='dltBtn'>
    <i class="fa fa-trash fa-2x" aria-hidden="true" ></i>
    </button > </span>`
    ul.appendChild(li)}
)

// ! delete contsct
const dltBtn=document.querySelectorAll(".dltBtn");
const deleteContact=(e)=>{
    let dltCntct= e.target.closest("li");
    const dltCntctId=dltCntct.id;
    console.log(dltCntctId);
    let notDltCntct=contacts.filter((contact)=>contact.newId!==dltCntctId);
    localStorage.setItem('info',JSON.stringify(notDltCntct))
    ul.removeChild(dltCntct)
    setTimeout(()=>{
        alert("The contact is deleted")
    },100)
}
dltBtn.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
        let confirmation=confirm("You are sure?");
        confirmation==true?deleteContact(e) :console.log('not');
        })
});

// ! for new contact
document.querySelector('.fa-plus').addEventListener('click',()=>{
window.location='./newContact/newContact.html'
})

// ! search a contact
const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    let inp= form.querySelector('input').value;
    e.preventDefault()
    let searchContact=contacts.filter((contact)=>contact.fullName.toLowerCase().includes(inp.toLowerCase()))
    localStorage.setItem('searched',JSON.stringify(searchContact))
window.location='./search/search.html'

})
