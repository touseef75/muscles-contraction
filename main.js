let video1= document.getElementById("video1");
let but1 = document.getElementById("but3");
let but2 = document.getElementById("but4");
let cont = document.getElementById("container");
let cont2 = document.getElementById("container2");
let main = document.getElementById("main");
let next = document.getElementById("next");



let num = 1;
 but1.addEventListener("click",function(){
      video1.play();
      audio.play();
     
 })
 but2.addEventListener("click",function(){
 
         cont.style.display = "none";
         cont2.style.display = "";
         main.style.background = "white";
         but1.style.display = "none";
         
 });


 let arr = [
     {
         head1: "Concentric Contraction",
         head2: "Concentric:",
         p : " Concentric contraction is a type of muscle activation that causes tension on your muscle as it shortens. As your muscle shortens, it generates enough force to move an object. This is the most popular type of muscle contraction.",
         img:"./images/con1.png"
     },
     {
         head1: "Eccentric Contraction",
         head2: "Eccentric:",
         p : " Eccentric contraction occurs when the total length of the muscle increases as tension is produced. For example, the lowering phase of a biceps curl constitutes an eccentric contraction.",
         img:"./images/ecen2.png"
     },
     {
         head1: "Isometric Contraction",
         head2: "Isometric:`",
         p : " An isometric contraction is a muscle contraction without motion. Isometric contractions are used to stabilize a joint, such as when a weight is held at waist level neither raising nor lowering it.",
         img:"./images/iso3.gif"
     }
 ]

 let h1 = document.getElementById("h1");
 let h2 = document.getElementById("h2");
 let p = document.getElementById("p");
 let img = document.getElementById("img");

 let next2 = document.getElementById("next2");

 let num1 = -1;

 but2.addEventListener("click",function(){
     if(num1 == 3){
         num1 = 0;
     h1.innerHTML = arr[num1].head1;
     h2.innerHTML = arr[num1].head2;
     p.innerHTML = arr[num1].p;
     img.src = arr[num1].img;
     }else{
         num1++;
     h1.innerHTML = arr[num1].head1;
     h2.innerHTML = arr[num1].head2;
     p.innerHTML = arr[num1].p;
     img.src = arr[num1].img;
     }
     
     

 })
 
 





