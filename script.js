var audio = new Audio('http://soundbible.com/grab.php?id=1377&type=mp3');

function beep() {

  audio.play();
}
var dCountm = 25;
var dCounts = 59;
var bCountm = 5;
var bCounts = 59;
var x;
var y;
var z;
var a
var b;
$(".bans").html(bCountm + ":" + bCounts);
$(".wans").html(dCountm + ":" + dCounts);
z = dCountm;
  y = dCounts;
  a = bCountm;
  b = bCounts;

function countw(){
  
  if(dCountm > 0 || dCounts > 0){
    dCounts = dCounts - 1;
    update();
    if (dCounts == 0 && dCountm >= 1){
      dCountm = dCountm - 1;
      dCounts = 59;
      update();
    }
  

  }
if(dCountm == 0 && dCounts == 0){
    beep();
    countb();
    
}  
  
 }
function countb(){
   if(bCountm > 0 || bCounts > 0){
    bCounts = bCounts - 1;
     update();
    if (bCounts == 0 && bCountm >= 1){
      bCountm = bCountm - 1;
      bCounts = 59;
      update();
      
      
    }
     
       
     }
  if (bCounts == 0 && bCountm == 0){
          dCountm = z;
          dCounts = y;
           bCountm = a;
           bCounts = b;
            beep();
            countw();
          
  }
  
}
function update(){
$(".bans").html(bCountm + ":" + bCounts);
$(".wans").html(dCountm + ":" + dCounts);
}
$("#start").on("click", function(){
  x = setInterval(function() {
countw();
}, 1000);
});
$(".pb").on("click", function(){
  bCountm = bCountm + 1;
  update();
});
$(".sb").on("click", function(){
  bCountm = bCountm - 1;
  update();
});
$(".sw").on("click", function(){
  dCountm = dCountm - 1;
  update();
});
$(".pw").on("click", function(){
  dCountm = dCountm + 1;
  update();
});
$("#stop").on("click", function(){
  clearInterval(x);
});
$("#reset").on("click",function(){
  clearInterval(x);
  dCountm = 25;
  dCounts = 59;
  bCountm = 05;
  bCounts = 59;
  update();
  
});