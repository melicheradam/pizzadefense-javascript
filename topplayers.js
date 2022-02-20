///////////////////////////////////////////////////
//////////////TOP HRACI OBRAZOVKA//////////////////
///////////////////////////////////////////////////
class Tabulka{
	constructor(canvas){
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.canvas.onclick = this.Onclick.bind(this);
		this.tlacAudio = new Audio("zvuky/klik_tlacitko.wav");
		this.imgSrc = document.getElementById("pozadie");
	}
	Start(){
		var pozx = 125;
		var pozy = 175;
		if(volumeE == 1)
			this.tlacAudio.play();
		this.ctx.beginPath();
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.ctx.drawImage(this.imgSrc, 0, 0, canvas.width, canvas.height);
		this.ctx.rect(380,535,80,50);
		this.ctx.font = "30px myFont";
		for(var j = 0; j < 2; j++, pozy-=(40*i), pozx+=300)
		for(var i = 0; i < TopHraci.length && i < 7; i++,pozy+=40){
			this.ctx.rect(pozx,pozy, 300, 40);
			if(j == 0)this.ctx.fillText((i+1) + ". " + TopHraci[i].meno, pozx+10, pozy+30); 
			if(j == 1)this.ctx.fillText(TopHraci[i].skore, pozx+10, pozy+30); 
		}
		this.ctx.stroke();
		this.ctx.font = "100px myFont";
		this.ctx.fillText("Top hráči",210,125);
		this.ctx.font = "30px myFont";
		this.ctx.fillStyle = "black";
		this.ctx.fillText("Späť", 390, 570);
		this.ctx.closePath();
	}
	Onclick(e){
		var mousex;
		var mousey;
		if (!e) e = window.event;
		mousex = e.clientX;
		mousey = e.clientY;
		if(mousex >= 390 && mousex <= 470 && mousey >= 535 && mousey <= 585){
			window.handler(1);
			}
	}
}