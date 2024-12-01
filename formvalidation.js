document.getElementById('test').addEventListener('submit',function(event){
    event.preventDefault();
var isValid=true;
document.getElementById('nameError').textContent = '';
const name = document.getElementById('name').value.trim();
const phone=document.getElementById('phone').value.trim();
const pwd =document.getElementById('pwd').value.trim();

if(name.length<5){
    isValid=false;
    document.getElementById('nameError').textContent='name must have at least 5 characters';
}

    const phoneRegEx=/^\d{8}$/;
    if(!phoneRegEx.test(phone)){
        isValid=false;
        document.getElementById('phoneError').textContent='phone must be exactly 8 numbers';
    }

    const passwordRegEx= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$ / ;
    if(!passwordRegEx.test(pwd)){
        isValid= false;
        document.getElementById('pwdError').textContent="Au moins huit caractères, au moins une lettre et un numéro";
    } 
    if(isValid){
        alert("all conditions are met congrats!");
    }


});