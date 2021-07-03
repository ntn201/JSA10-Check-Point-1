document.addEventListener("DOMContentLoaded", ()=>{
    let font_size = getComputedStyle(document.getElementsByTagName("p")[0]).fontSize.slice(0,-2)
    document.getElementById("input-size").value = font_size
})

document.getElementById("input-size").addEventListener("input",()=>{
    let font_size = document.getElementById("input-size").value
    let text = document.getElementsByClassName("content-text")
    let title = document.getElementsByClassName("content-title")
    for (let i=0; i < text.length;i ++){
        text[i].style.fontSize = font_size + "px"
    }
    for (let i=0; i < title.length;i ++){
        title[i].style.fontSize = 2*font_size + "px"
    }
})

document.getElementById("light-switch").addEventListener("input",()=>{
    if (document.getElementById("light-switch").checked==true){
        document.getElementById("main").classList = ["dark-mode"]
    }
    else{
        document.getElementById("main").classList = ["light-mode"]
    }
})