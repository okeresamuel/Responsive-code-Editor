function showPreview(){
    let htmlcode = document.getElementById("htmlCode").value;
    let csscode = "<style>" +document.getElementById("cssCode").value +"</style>";
    let jscode = "<scri"+"pt>"+document.getElementById("jsCode").value+"</scri"+"pt>";
    let frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlcode+csscode+jscode);
    frame.close();
 
 }
 //first button function here (onclick one() ) is coming from html layer button 1
 const btnhtml = document.querySelector(".htmlCode")
 let texbdy = document.querySelector("#htmlCode")
 function one(){
   texbdy.style.height="74vh"
 }
 btnhtml.addEventListener("click", one)
 // first button execution of exit button here -->
 
 const btntwo = document.querySelector("#exitone")
 function change(){
    if(texbdy !== "74px"){
        texbdy.style.height= "auto"
    }
}
 btntwo.addEventListener("click", change)
 
 
 //second layer fullscreen button function here -->

const btncss = document.querySelector(".cssCode")
 let texbdytwo = document.querySelector("#cssCode")
 function two(){
   texbdytwo.style.height="74vh"
 }
 btncss.addEventListener("click", two)
 
 //second  layer exit button function here --> 
 const cssbtntwo = document.querySelector("#exittwo")
 function changetwo(){
    if(texbdytwo !== "74px"){
        texbdytwo.style.height= "auto"
    }
}
 cssbtntwo.addEventListener("click", changetwo)

 //third layer fullscreen button function here -->

 const btnjs = document.querySelector(".jsCode")
 let texbdythree = document.querySelector("#jsCode")
 function three(){
   texbdythree.style.height="74vh"
 }
 btnjs.addEventListener("click", three)

 //third layer exit button function here -->
 const jsbtnthree = document.querySelector("#exitthree")
 function changethree(){
    if(texbdythree !== "74px"){
        texbdythree.style.height= "auto"
    }
}
 jsbtnthree.addEventListener("click", changethree)
 


 
 
 
 
 
 //function color change background.
 let button = document.querySelector("#background")
 function color(){
     let bdy = document.querySelector("body")
     const r = Math.floor(Math.random()* 255)
     const g = Math.floor(Math.random()* 255)
     const b = Math.floor(Math.random()* 255)
     let colorRation = `rgb(${r},${g},${b})`
     bdy.style.backgroundColor=colorRation
 
 }
  background.addEventListener("click", color)