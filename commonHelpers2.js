import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),a=e.elements.message,l=e.elements.email,o=()=>{const t={email:l.value.trim(),message:a.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))},r=()=>{const t=localStorage.getItem("feedback-form-state");if(t){const{email:s,message:m}=JSON.parse(t);e.elements.email.value=s,e.elements.message.value=m}};e.addEventListener("input",o);window.addEventListener("load",r);e.addEventListener("submit",t=>{t.preventDefault(),(l.value.trim()===""||a.value.trim()==="")&&alert("Please fill in all fields"),l.value!==""&&a.value!==""&&(localStorage.removeItem("feedback-form-state"),console.log({email:l.value.trim(),message:a.value.trim()}),e.reset())});
//# sourceMappingURL=commonHelpers2.js.map
