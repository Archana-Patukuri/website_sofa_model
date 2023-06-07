"use strict";
module.exports=(e,t={})=>{
    let{container:n}=t;
    return n||(n="body"),"string"==typeof n&&(n=document.querySelector(n)),
    async(...t)=>{const r=(e=>{const t=document.createElement("div");
    t.classList.add("us-container top-50 start-50");
    const n=document.createElement("div");
    let strong1=document.createElement("strong");
    strong1.textContent="Loading...";    
    return n.classList.add("us-spinner"), 
      
    t.appendChild(n),e.appendChild(strong1),e.appendChild(t),t,strong1})(n),s=await e(...t);
    var d;    
    return d=r,n.removeChild(d),s,strong1
}};
