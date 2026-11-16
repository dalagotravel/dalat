const TOUR={name:"Đà Lạt Tour",price:7500000,group:"8–10 guests"};
const money=n=>n.toLocaleString("vi-VN")+"đ";
const store={get:(k,d=[])=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const PAGES=[["index.html","Home"],["tour.html","Tour"],["itinerary.html","Itinerary"],["experience.html","Experience"],["gallery.html","Gallery"],["testimonials.html","Reviews"],["contact.html","Contact"]];
document.addEventListener("DOMContentLoaded",()=>{
const cur=location.pathname.split("/").pop()||"index.html",h=document.getElementById("site-header");
if(h)h.outerHTML=`<header><div class="wrap nav"><a class="logo" href="index.html" aria-label="DALAGO Travel"><img src="images/logo-round.png" alt="DALAGO Travel"><span><b>DALAGO</b><small>Travel</small></span></a><button class="burger" aria-label="Menu">☰</button><ul>${PAGES.map(p=>`<li><a href="${p[0]}" class="${cur===p[0]?"on":""}">${p[1]}</a></li>`).join("")}<li><a class="btn" href="booking.html">Book Now</a></li></ul></div></header>`;
const f=document.getElementById("site-footer");
if(f)f.outerHTML=`<footer><img class="hy" src="images/hydrangea.svg" alt=""><div class="script">Đà Lạt, always a good idea ♡</div><nav><a href="feedback.html">Leave feedback</a><a href="booking.html">Book your tour</a><a href="contact.html">Contact</a></nav><p>© 2026 DALAGO Travel · dalagotravel@gmail.com · 0796291656</p></footer>`;
const b=document.querySelector(".burger");if(b)b.onclick=()=>document.querySelector(".nav ul").classList.toggle("open");
});
