// const scroll = new LocomotiveScroll({
//    el: document.querySelector('#main'),
//    smooth: true
// });


function lineElements(){
let allelements=document.querySelectorAll(".line-element")
let elements=document.querySelector("#elements-con")
let fixedscreen=document.querySelector(".screen")


elements.addEventListener('mouseenter',function(){
   fixedscreen.style.display="block"
   
})

 elements.addEventListener('mouseleave',function(){
    fixedscreen.style.display="none"
})

   allelements.forEach(function(allitems){
      allitems.addEventListener("mouseenter",function(){
       let imagesdata= allitems.getAttribute("data-bg")
         // console.log(imagesdata)
         fixedscreen.style.backgroundImage=`url(${imagesdata})`
   })
})



}
lineElements()




let menuscreen= document.querySelector(".drop-d-menu")
let navimg=document.querySelector("nav img")
let menuBtn = document.querySelector("nav .menu")
let flag=0
menuBtn.addEventListener("click",function(){
   if(flag === 0){
      menuscreen.style.top= 0
      navimg.style.opacity= 0
      flag=1
   }
   else{
      menuscreen.style.top="-100%"
      navimg.style.opacity= 1 
      flag=0
   }


})



