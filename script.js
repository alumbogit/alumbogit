const body = document.querySelector("body"),
 sidebar=body.querySelector(".sidebar"),
 mode= body.querySelector(".mode"),
 modeText=body.querySelector(".mode-text")
 mode.addEventListener('click',()=>{
    body.classList.toggle("dark")
 })