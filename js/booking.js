document.addEventListener("DOMContentLoaded",()=>{
const $=id=>document.getElementById(id),g=$("guests"),d=$("date"),msg=$("msg");
d.min=new Date().toISOString().split("T")[0];
const calc=()=>{$("total").textContent=money(TOUR.price*Math.min(10,Math.max(1,parseInt(g.value)||1)))};g.oninput=calc;calc();
function list(){const b=store.get("bookings");$("empty").style.display=b.length?"none":"block";
$("list").innerHTML=b.length?"<tr><th>Date</th><th>Guests</th><th>Total</th><th></th></tr>"+b.map((x,i)=>`<tr><td>${esc(x.date)}</td><td>${x.guests}</td><td>${money(x.total)}</td><td><button class="x" data-i="${i}" aria-label="Delete booking">✕</button></td></tr>`).join(""):""}
$("list").onclick=e=>{const i=e.target.dataset.i;if(i===undefined)return;const b=store.get("bookings");b.splice(i,1);store.set("bookings",b);list()};
$("bf").onsubmit=e=>{e.preventDefault();const n=$("name").value.trim(),p=$("phone").value.trim(),q=parseInt(g.value);msg.style.display="block";
if(!n||!p||!d.value||!(q>=1&&q<=10)){msg.className="msg err";msg.textContent="Please enter your name, phone, a departure date and 1–10 guests.";return}
const b=store.get("bookings");b.push({name:n,phone:p,date:d.value,guests:q,total:TOUR.price*q,created:new Date().toISOString()});store.set("bookings",b);
msg.className="msg";msg.textContent=`Thank you, ${n}! Your booking for ${q} guest(s) on ${d.value} is saved. Total: ${money(TOUR.price*q)}.`;list()};
list()});
