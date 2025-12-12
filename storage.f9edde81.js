let e=null;function t(){let e=JSON.parse(localStorage.getItem("contacts")||"[]"),t=document.getElementById("contacts");t.innerHTML="",e.forEach((e,n)=>{let u=document.createElement("div");u.className="contact",u.innerHTML=`
<strong>${e.firstName} ${e.lastName}</strong><br>
\u{422}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}: ${e.phone}<br>
Email: ${e.email}<br><br>
<button onclick="editContact(${n})">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
<button onclick="deleteContact(${n})">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
`,t.appendChild(u)})}document.getElementById("saveBtn").addEventListener("click",function(){let n=document.getElementById("firstName").value,u=document.getElementById("lastName").value,l=document.getElementById("phone").value,a=document.getElementById("email").value,m=JSON.parse(localStorage.getItem("contacts")||"[]");null!==e?(m[e]={firstName:n,lastName:u,phone:l,email:a},e=null):m.push({firstName:n,lastName:u,phone:l,email:a}),localStorage.setItem("contacts",JSON.stringify(m)),document.getElementById("firstName").value="",document.getElementById("lastName").value="",document.getElementById("phone").value="",document.getElementById("email").value="",t()}),t();
//# sourceMappingURL=storage.f9edde81.js.map
