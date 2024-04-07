var deep = document.querySelector("#main") 
var crssr = document.querySelector(".cursor") 


deep.addEventListener("mousemove",function(dets){
     crssr.style.left = dets.x+"px" 
     crssr.style.top = dets.y+"px"
})