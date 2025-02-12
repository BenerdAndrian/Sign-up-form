const password=document.getElementById("passwrd")
const confirmPassword=document.getElementById("confirm")
const createBtn=document.querySelector(".accountCreate");
const note=document.querySelector(".note")
createBtn.addEventListener("click",(e)=>{
if(password.value!==confirmPassword.value){
   note.innerText=`Notification: password confirmation failed!.`
   note.style.display="block";
   e.preventDefault();
}
})

