document.addEventListener("DOMContentLoaded",()=>{
const f=document.getElementById("ff"),msg=document.getElementById("msg"),sp=document.getElementById("sp");let rating=5;
sp.innerHTML=[1,2,3,4,5].map(i=>`<span data-v="${i}" role="radio" tabindex="0">★</span>`).join("");
const paint=()=>[...sp.children].forEach((s,i)=>s.classList.toggle("on",i<rating));paint();
sp.onclick=e=>{if(e.target.dataset.v){rating=+e.target.dataset.v;paint()}};
f.onsubmit=e=>{e.preventDefault();const n=f.n.value.trim(),c=f.c.value.trim();msg.style.display="block";
if(!n||!c){msg.className="msg err";msg.textContent="Please enter your name and a comment.";return}
const r=store.get("reviews");r.unshift({name:n,rating,text:c});store.set("reviews",r);
msg.className="msg";msg.innerHTML='Thank you! Your review is saved. <a href="testimonials.html"><b>See it in Reviews →</b></a>';f.reset();rating=5;paint()}});
