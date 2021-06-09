var labels = document.querySelectorAll("label")


for(var i = 0; i<labels.length; i++){
    labels[i].innerHTML = labels[i].innerText
    .split("")
    .map((cha,index) => `<span style = "transition-delay:${index*50}ms">${cha}</span>`)
    .join("")
}