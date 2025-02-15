// start getting element 

// login form
const loginForm =document.querySelector('.loginForm');
const logEmail =loginForm.querySelector('.input[name=email]');
const logPass =loginForm.querySelector('.input[name=password]') 
// register from 
const registerForm =document.querySelector('.registerForm') ;
const registerUser = registerForm.querySelector('input[name=txt]')
const registerEmail =registerForm.querySelector('.input[name=email]')
const registerPass =document.querySelector('.input[name=pswd]') 

//end getting element 
// register 
document.querySelector('.registerButton').addEventListener('click',(e)=>{
  console.log('hi')
  e.preventDefault();
  if (!registerForm.checkValidity()) {
   registerForm.reportValidity();
   return
  }
  localStorage.setItem('username',registerUser.value)
  localStorage.setItem('email',registerEmail.value)
  localStorage.setItem('pass',registerPass.value)
  registerUser.value='',
  registerPass.value='',
  registerEmail.value=''
  saveRegisterData();
})


//add listener with login button
document.querySelector('.loginButton').addEventListener('click',(e)=>{
  e.preventDefault();
  if (!loginForm.checkValidity()) {
    loginForm.reportValidity()
    return
  }
  verifyData();
  logEmail.value='';
  logPass.value=''
})
const saveRegisterData =()=>{
  const container= document.querySelector('.container').classList.add('fade-out')
    setTimeout(()=>{
 window.location.href = './contact/contact.html';
    },1000)
}

const verifyData = () => {
  //getting data from localstorage
const username=localStorage.getItem('username')
const password=localStorage.getItem('pass')
const email=localStorage.getItem('email');
  const userInfo = {
    logEmail: logEmail.value,
    logPass: logPass.value
  }
 // Check if the email and password match
  if (userInfo.logEmail === 'ripon@gmail.com' && userInfo.logPass === '123456' ) {
    console.log('success');
    // Redirect to another folder or page
   const container= document.querySelector('.container').classList.add('fade-out')
    setTimeout(()=>{
 window.location.href = './contact/contact.html';
    },1000)
   
  }
  else if (userInfo.logEmail===email && userInfo.logPass===password) {
    console.log('yes')
    const container= document.querySelector('.container').classList.add('fade-out')
    setTimeout(()=>{
 window.location.href = './contact/contact.html';
    },1000)
   
  }
  else {
    alert('Invalid email or password');
    // Tab to edit or show error message
  }
}
  
  
 