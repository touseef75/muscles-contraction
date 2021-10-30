let video1= document.getElementById("video1");
let but1 = document.getElementById("but3");
let but2 = document.getElementById("but4");
let cont = document.getElementById("container");
let cont2 = document.getElementById("container2");
let main = document.getElementById("main");


let num = 1;
 but1.addEventListener("click",function(){
      video1.play();
     
 })
 but2.addEventListener("click",function(){
     if(num == 1){
         cont.style.display = "none";
         cont2.style.display = "";
         main.style.background = "#eff5fb";
         but1.style.display = "none";
         
         num = 0;
     }else{
         num = 1;
        cont.style.display = "";
         cont2.style.display = "none";
         main.style.background = "#f4eae4";
         but1.style.display = "";


     }
      
     
 })


