
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
if(menuBtn) menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks?.classList.remove("open")));

document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

const contactForm=document.querySelector("#contactForm");
if(contactForm){
  contactForm.addEventListener("submit",e=>{
    e.preventDefault();
    document.querySelector("#formMessage").textContent="Thank you. Your message has been recorded on this page. Connect this form to Google Forms or a backend before publishing it for real submissions.";
    contactForm.reset();
  });
}

// Simple demo-only admin gate.
// Do NOT treat this as secure authentication.
// Replace with Firebase/Supabase authentication when a real private dashboard is required.
const loginForm=document.querySelector("#loginForm");
if(loginForm){
  loginForm.addEventListener("submit",e=>{
    e.preventDefault();
    const user=document.querySelector("#username").value.trim();
    const pass=document.querySelector("#password").value;
    const msg=document.querySelector("#loginMessage");
    if(user==="admin" && pass==="samithi123"){
      document.querySelector("#loginPanel").classList.add("hidden");
      document.querySelector("#dashboard").classList.remove("hidden");
    }else{
      msg.textContent="Demo login: username admin / password samithi123";
      msg.className="notice";
    }
  });
}
