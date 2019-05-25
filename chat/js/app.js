let chat=document.querySelector("#chat");
let chatMini=document.querySelector("#chat-mini")
let chatInput=document.querySelector('#chat-input')
chat.querySelector(".close-icon").addEventListener('click',function(){
    chat.classList.remove('active')
})
chatMini.onclick=function(){
    chat.classList.add("active")
}
chatInput.addEventListener("keyup",function(e){
if(e.KeyCode==13){
    
}
})
function addMessage(){
    let div =document.createElement('div');
    div.className='message';
    let textP=document.createElement('p');
    textP.innerText=a;
    let timeP=document.createElement('p')
    timeP.className="time";
    let now=new Date();
    timeP.innerText=now.getHours()+":"+now.getMinutes();
    div.appendChild(textP)
    div.appendChild(timeP)
    chat.querySelector("main").appendChild(div);
}