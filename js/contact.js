document.addEventListener("DOMContentLoaded",()=>{
const f=document.getElementById("cf"),msg=document.getElementById("msg");
f.onsubmit=e=>{e.preventDefault();const n=f.n.value.trim(),c=f.e.value.trim(),m=f.m.value.trim();msg.style.display="block";
if(!n||!c||!m){msg.className="msg err";msg.textContent="Please enter your name, an email or phone number, and a message.";return}
const l=store.get("messages");l.push({name:n,contact:c,message:m,date:new Date().toISOString()});store.set("messages",l);
msg.className="msg";msg.textContent="Message sent! We will get back to you soon.";f.reset()}});
