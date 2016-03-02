function grafico(){
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      context.beginPath();
      context.moveTo(0 , 0);
      context.lineTo(800,0);
      context.lineTo(800,500);
      context.lineTo(0,500);
      context.lineTo(0,0);
      context.moveTo(400, 0);
      context.lineTo(400,500);
      context.moveTo(0, 250);
      context.lineTo(800,250);
      context.stroke();

}
function tacche(){
var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
	larghezza=800;
	altezza=500;
	maxx=eval(document.getElementById("maxx").value);
	Xcentro=400;
	Ycentro=250;
	unitacca=Math.floor(larghezza/(maxx*2));
	
	
if(maxx<21)
valoreTacca=1;
else
if(maxx<76)
valoreTacca=5;
if(maxx<151)
valoreTacca=10;
else
if(maxx<351)
valoreTacca=20;
else
valoreTacca=50;
//tacche grafico sinistra
	for (k=1;k<(1+maxx);k++){
      		context.beginPath();
      		context.moveTo(Xcentro-k*unitacca*valoreTacca ,Ycentro+3);
      		context.lineTo(Xcentro-k*unitacca*valoreTacca,Ycentro-3);
      		context.fillText(-k*valoreTacca, Xcentro-k*unitacca*valoreTacca-5, Ycentro+15);
      		context.stroke();
    }

//tacche grafico destra
	for (k=1;k<(1+maxx);k++){
      		context.beginPath();
      		context.moveTo(Xcentro+k*unitacca*valoreTacca ,Ycentro+3);
      		context.lineTo(Xcentro+k*unitacca*valoreTacca,Ycentro-3);
      		context.fillText(k*valoreTacca, Xcentro+k*unitacca*valoreTacca-5, Ycentro+15);
      		context.stroke();
    }
//tacche grafico sopra
	for (k=1;k<(1+maxx);k++){
      		context.beginPath();
      		context.moveTo(Xcentro+3 ,Ycentro-k*unitacca*valoreTacca);
      		context.lineTo(Xcentro-3 ,Ycentro-k*unitacca*valoreTacca);
      		context.fillText(k*valoreTacca, Xcentro-30 , Ycentro-k*unitacca*valoreTacca);
      		context.stroke();
    }
//tacche grafico sotto
	for (k=1;k<(1+maxx);k++){
      		context.beginPath();
      		context.moveTo(Xcentro+3 ,Ycentro+k*unitacca*valoreTacca);
      		context.lineTo(Xcentro-3 ,Ycentro+k*unitacca*valoreTacca);
      		context.fillText(-k*valoreTacca, Xcentro-30 , Ycentro+k*unitacca*valoreTacca);
      		context.stroke();
    }
}

function motoLinea(){
var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
npassi=eval(document.getElementById("passi").value);
  x=400;
 y=250;
for( i=0;i<npassi;i++){
var passox=10*Math.floor(Math.random()*10);
var passoy=10*Math.floor((Math.random()*10));
var segnox=10*Math.floor(Math.random()*10);
var segnoy=10*Math.floor(Math.random()*10);
if(segnox<50){
passox=-1*passox;
}
if(segnoy<50){
passoy=-1*passoy;
}

      context.beginPath();
      context.moveTo(x,y);
      context.lineTo(x+passox,y+passoy);
      context.stroke();
      context.closePath();

x=x+passox;
y=y+passoy;
}

}
function motoPallini(){

var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
npassi=eval(document.getElementById("passi").value);
  x=400;
 y=250;
for( i=0;i<npassi;i++){
var passox=10*Math.floor((Math.random()*10));
var passoy=10*Math.floor((Math.random()*10));
var segnox=10*Math.floor(Math.random()*10);
var segnoy=10*Math.floor(Math.random()*10);
if(segnox<50){
passox=-1*passox;
}
if(segnoy<50){
passoy=-1*passoy;
}

      context.beginPath();
      context.moveTo(x,y);
context.arc(x+passox,y+passoy,7,0,2*Math.PI,false);
context.fillStyle="rgba(255,0,0,1)";
context.fill();
      context.lineTo(x+passox,y+passoy);

      context.stroke();
      
      context.closePath();
      
x=x+passox;
y=y+passoy;
}

}
