document.querySelector(".toggle").addEventListener("click",()=>{
    document.querySelector(".navigation").classList.toggle("active")
})

// Scroler
let el= document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll",()=>{
    let scrolTop = document.documentElement.scrollTop;
    el.style.width = `${(scrolTop / height) * 100}%`

})


