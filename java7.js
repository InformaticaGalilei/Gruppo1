﻿// funzione che da Xre va a Xgr
function fx(xre,xmin,xmax){
var dx=xmax-xmin;
var xgr=800*(xre-xmin)/dx;
return xgr;
}

// funzione che da Yre va a Ygr
function fy(yre,ymin,ymax){
var dy=ymax-ymin;
var ygr=500*(yre-ymin)/dy;
return ygr;
}

//moto particelle
function motoPallini(){

	//creazione array che contiene tutti i passi
	npassi=document.getElementById("passi").value;
	var px=[];
	var py=[];
	var Xmax,Xmin,Ymax,Ymin;
	var passox;
	var passoy;
	var segnox;
	var segnoy;
		
	px.push(0);
	py.push(0);
	var x = 0, y = 0, i, Rxmax , Rymax , Rxmin, Rymin ;
	for( i=0;i<npassi;i++){
		var passox=10*Math.floor(Math.random()*10);
		var passoy=10*Math.floor(Math.random()*10);
		var segnox=10*Math.floor(Math.random()*10);
		var segnoy=10*Math.floor(Math.random()*10);

		if(segnox<50){
		passox=-1*passox;
		}
		if(segnoy<50){
		passoy=-1*passoy;
		}
		x=x+passox;
		y=y+passoy;
		px.push(x);
		py.push(y);
	}
	//trova i massimi e i minimi
	Xmax=px[0];
	Xmin=px[0];
	Ymax=py[0];
	Ymin=py[0];
 for(i=1;i<npassi;i++){
	if(px[i]>Xmax)
		Xmax=px[i];
	if(px[i]<Xmin)
		Xmin=px[i];
	if(py[i]>Ymax)
		Ymax=py[i];
	if(py[i]<Ymin)
		Ymin=py[i];
}



Rxmax=Xmax;
Rxmin=Xmin;
Rymax=Ymax;
Rymin=Ymin;


	//calcolo relazioni
	var dx,dy;
	dx=Rxmax-Rxmin;
	dy=Rymax-Rymin;
	if(dx>(8/5*dy)){
			dy=Math.floor(5/8*dx);
			if(Rymax>(-Rymin)){
				Rymin=Rymax-dy;}
			else{
			Rymax=Rymin+dy;}
	}
	else{
		dx=Math.floor(8/5*dy);
		if(Rxmax>(-Rxmin)){
			Rxmin=Rxmax-dx;}
		else{
			Rxmax=Rxmin+dx;}
	}
	Rxmax=Rxmax+Math.floor(dx/10);
	Rxmin=Rxmin-Math.floor(dx/10);
	Rymin=Rymin-Math.floor(dy/10);
	Rymax=Rymax+Math.floor(dy/10);
	for( i=0;i<npassi;i++){
		px[i]=fx(px[i],Rxmin,Rxmax);
		py[i]=fy(py[i],Rymin,Rymax);
	}
//Xc=fx(0,Rxmin,Rxmax);
 //Yc=fy(0,Rymin,Rymax);
//px[0]=Xc;
//py[0]=Yc;
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
//pulisce
context.clearRect(0, 0, canvas.width, canvas.height);
window.clearInterval(myCanvas);
		  context.beginPath();
		  context.moveTo(px[0],py[0]);
		  context.lineTo(px[1],py[1]);
		  context.arc(px[0],py[0],7,0,2*Math.PI,false);
		  context.fillStyle="rgba(255,0,0,1)";
		  context.fill();
		  context.arc(px[1],py[1],7,0,2*Math.PI,false);
		  context.fillStyle="rgba(255,0,0,1)";
		  context.fill();
		  context.stroke();		  
		  context.closePath();


		for(i=2;i<npassi;i++){
		
		context.beginPath();
		//pallini
		context.arc(px[i],py[i],7,0,2*Math.PI,false);
		context.fillStyle="rgba(255,0,0,1)";
		context.fill();
		//linea
		context.moveTo(px[i-1],py[i-1]);
		  context.lineTo(px[i],py[i]);
		  context.stroke();		  
		  context.closePath();
	}

grafico(Rxmax,Rxmin,Rymax,Rymin);
}





//disegna grafico
function grafico(Rxmax,Rxmin,Rymax,Rymin){



//disegna riquadro
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      context.beginPath();
      context.moveTo(0,0);
      context.lineTo(800,0);
      context.lineTo(800,500);
      context.lineTo(0,500);
      context.lineTo(0,0);
//da coordinate reali a coordinate grafiche
 
 Xc=fx(0,Rxmin,Rxmax);
 Yc=fy(0,Rymin,Rymax);


// disegno assey
      context.moveTo(Xc, 0);
      context.lineTo(Xc,500);
//disegno assex
      context.moveTo(0,Yc);
      context.lineTo(800,Yc);
      context.stroke();
dx=Rxmax-Rxmin;
tacche(Xc,Yc,dx);

}
function tacche(Xcentro,Ycentro,dx){
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var	larghezza=800;
var	altezza=500;
	unitacca=Math.floor(larghezza/20);

var valoreTacca;
valoreTacca=Math.floor(dx/20);

//tacche grafico sinistra
	for (k=1;k<(1+dx);k++){
      		context.beginPath();
      		context.moveTo(Xcentro-k*unitacca ,Ycentro+3);
      		context.lineTo(Xcentro-k*unitacca,Ycentro-3);
      		context.fillText(-k*valoreTacca, Xcentro-k*unitacca, Ycentro+15);
      		context.stroke();
    }

//tacche grafico destra
	for (k=1;k<(1+dx);k++){
      		context.beginPath();
      		context.moveTo(Xcentro+k*unitacca ,Ycentro+3);
      		context.lineTo(Xcentro+k*unitacca,Ycentro-3);
      		context.fillText(k*valoreTacca, Xcentro+k*unitacca-5, Ycentro+15);
      		context.stroke();
    }
//tacche grafico sopra
	for (k=1;k<(1+dx);k++){
      		context.beginPath();
      		context.moveTo(Xcentro+3 ,Ycentro-k*unitacca);
      		context.lineTo(Xcentro-3 ,Ycentro-k*unitacca);
      		context.fillText(k*valoreTacca, Xcentro-30 , Ycentro-k*unitacca);
      		context.stroke();
    }
//tacche grafico sotto
	for (k=1;k<(1+dx);k++){
      		context.beginPath();
      		context.moveTo(Xcentro+3 ,Ycentro+k*unitacca);
      		context.lineTo(Xcentro-3 ,Ycentro+k*unitacca);
      		context.fillText(-k*valoreTacca, Xcentro-30 , Ycentro+k*unitacca);
      		context.stroke();
    }
}

function passopasso(){

	//creazione array che contiene tutti i passi
	npassi=document.getElementById("passi").value;
	var px=[];
	var py=[];
	var Xmax,Xmin,Ymax,Ymin;
	var passox;
	var passoy;
	var segnox;
	var segnoy;
		
	px.push(0);
	py.push(0);
	var x = 0, y = 0, i, Rxmax , Rymax , Rxmin, Rymin ;
	for( i=0;i<npassi;i++){
		var passox=10*Math.floor(Math.random()*10);
		var passoy=10*Math.floor(Math.random()*10);
		var segnox=10*Math.floor(Math.random()*10);
		var segnoy=10*Math.floor(Math.random()*10);

		if(segnox<50){
		passox=-1*passox;
		}
		if(segnoy<50){
		passoy=-1*passoy;
		}
		x=x+passox;
		y=y+passoy;
		px.push(x);
		py.push(y);
	}
	//trova i massimi e i minimi
	Xmax=px[0];
	Xmin=px[0];
	Ymax=py[0];
	Ymin=py[0];
 for(i=1;i<npassi;i++){
	if(px[i]>Xmax)
		Xmax=px[i];
	if(px[i]<Xmin)
		Xmin=px[i];
	if(py[i]>Ymax)
		Ymax=py[i];
	if(py[i]<Ymin)
		Ymin=py[i];
}



Rxmax=Xmax;
Rxmin=Xmin;
Rymax=Ymax;
Rymin=Ymin;


	//calcolo relazioni
	var dx,dy;
	dx=Rxmax-Rxmin;
	dy=Rymax-Rymin;
	if(dx>(8/5*dy)){
			dy=Math.floor(5/8*dx);
			if(Rymax>(-Rymin)){
				Rymin=Rymax-dy;}
			else{
			Rymax=Rymin+dy;}
	}
	else{
		dx=Math.floor(8/5*dy);
		if(Rxmax>(-Rxmin)){
			Rxmin=Rxmax-dx;}
		else{
			Rxmax=Rxmin+dx;}
	}
	Rxmax=Rxmax+Math.floor(dx/10);
	Rxmin=Rxmin-Math.floor(dx/10);
	Rymin=Rymin-Math.floor(dy/10);
	Rymax=Rymax+Math.floor(dy/10);
	for( i=0;i<npassi;i++){
		px[i]=fx(px[i],Rxmin,Rxmax);
		py[i]=fy(py[i],Rymin,Rymax);
	}
Xc=fx(0,Rxmin,Rxmax);
 Yc=fy(0,Rymin,Rymax);
px[0]=Xc;
py[0]=Yc;
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);

grafico(Rxmax,Rxmin,Rymax,Rymin);
var i=1

context.arc(px[0],py[0],7,0,2*Math.PI,false);
		context.fillStyle="rgba(255,0,0,1)";
		context.fill();
window.clearInterval(myCanvas);
myCanvas=window.setInterval(function(){		
//pulisce
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		grafico(Rxmax,Rxmin,Rymax,Rymin);
		context.beginPath();
		//pallini
		context.arc(px[i],py[i],7,0,2*Math.PI,false);
		context.fillStyle="rgba(255,0,0,1)";
		context.fill();
		//linea
		//context.moveTo(px[i-1],py[i-1]);
		 // context.lineTo(px[i],py[i]);
		  //context.stroke();		  
		  //context.closePath();
i++
},1000);

	
}