const G=[["church","Da Lat Cathedral"],["lakepines","Lake and pine hills"],["xuanhuong","Xuan Huong Lake"],["forest","Pine forest path"],["sunset","Sunset on Tuyen Lam Lake"],["clouds","Sea of clouds"],["langbiang","Langbiang"],["mist","Misty hills"],["street","City center"]];
const mo=document.getElementById("mo"),lb=document.getElementById("lb");
mo.innerHTML=G.map(g=>`<button data-i="${g[0]}" aria-label="Open ${g[1]}"><img src="images/${g[0]}.jpg" alt="${g[1]}" loading="lazy"></button>`).join("");
mo.onclick=e=>{const b=e.target.closest("button");if(b){lb.querySelector("img").src=`images/${b.dataset.i}.jpg`;lb.classList.add("on")}};
lb.onclick=()=>lb.classList.remove("on");document.onkeydown=e=>{if(e.key==="Escape")lb.classList.remove("on")};
