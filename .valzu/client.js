function a(r){if(!r){console.error("\u274C Hydration failed: container not found");return}console.log("\u{1F6E0}\uFE0F Starting hydration...");function p(o){if(o.nodeType===Node.TEXT_NODE)return o.textContent;let t=o,n={};if(t.attributes)for(let e of Array.from(t.attributes))n[e.name]=e.value;let i=Array.from(t.childNodes).map(e=>p(e));return{type:t.nodeName.toLowerCase(),props:n,children:i}}function d(o,t){if(typeof t=="string")return;let n=o;t.props&&Object.entries(t.props).forEach(([e,s])=>{if(e.startsWith("on")&&typeof s=="function"){let c=e.slice(2).toLowerCase();n.addEventListener(c,s)}});let i=Array.from(n.childNodes);t.children&&t.children.forEach((e,s)=>{let c=i[s];c&&d(c,e)})}let f=p(r);d(r,f),window.addEventListener("popstate",()=>{console.log("\u{1F504} Popstate event: Rehydrating..."),a(r)}),document.body.addEventListener("click",o=>{let t=o.target;t.tagName==="A"&&t.href.startsWith(window.location.origin)&&(o.preventDefault(),window.history.pushState({},"",t.pathname),fetch(t.pathname).then(n=>n.text()).then(n=>{let e=new DOMParser().parseFromString(n,"text/html").querySelector("#app");e&&(r.innerHTML=e.innerHTML,a(r))}))}),console.log("\u2705 Hydration complete!")}document.addEventListener("DOMContentLoaded",()=>{let r=document.querySelector("#app");r&&a(r)});
