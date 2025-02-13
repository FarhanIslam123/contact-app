const form=document.querySelector('form');
const btn=document.querySelector('.save');

//! new window
const newWindow=()=>{
    setTimeout(()=>{
        window.location.href="../contact.html"
    },100)
    
}

// ! create unique id
const uniqueId=(fullName,phone)=>{
   const newId=Date.now().toString()
   storeLocal(newId,fullName,phone)
}
let store = JSON.parse(localStorage.getItem('info')) || []
// ! store value in local storage
const storeLocal=(newId,fullName,phone)=>{
    let userInfo={newId,fullName,phone}
    console.log(userInfo);
    store.push(userInfo)    
localStorage.setItem('info',JSON.stringify(store))
newWindow()
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
const fullName=form.querySelector('#name').value;
const phone=form.querySelector('#phone').value;
uniqueId(fullName,phone)
})



