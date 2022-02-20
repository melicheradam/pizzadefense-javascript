///////////////////////////////////////////////////
/////////////////MENU OBRAZOVKA////////////////////
///////////////////////////////////////////////////
class Menu{
	constructor(canvas){
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.canvas.onclick = this.Onclick.bind(this);
		this.tlacAudio = new Audio("zvuky/klik_tlacitko.wav");
		this.imgSrc = document.getElementById("pozadie");
	}
	Start(){
		if(volumeE == 1)
			this.tlacAudio.play();
		this.ctx.beginPath();
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.ctx.drawImage(this.imgSrc, 0, 0, canvas.width, canvas.height);
		this.ctx.font = "100px myFont";
		this.ctx.fillStyle = "black";
		this.ctx.fillText("ZACHRÁŇ SVOJE" , 120, 125);
		this.ctx.fillText("PRACHY" , 275, 210);
		this.ctx.font = "30px myFont";
		this.ctx.fillText("Klikni na obrazovku pre spustenie!", 195, 315);
		this.ctx.rect(20,535,165,50);
		this.ctx.rect(360,535,145,50);
		this.ctx.rect(720,535,150,50);
		this.ctx.stroke();
		this.ctx.fillText("Nastavenia", 30, 570);
		this.ctx.fillText("Top hráči", 370, 570);
		this.ctx.fillText("Ako hrať?", 730, 570);
		this.ctx.closePath();
	}
	Onclick(e){
		var mousex;
		var mousey;
		if (!e) e = window.event;
		mousex = e.clientX;
		mousey = e.clientY;
		if(mousex >= 30 && mousex <= 195 && mousey >= 535 && mousey <= 585)
			window.handler(3);
		else if(mousex >= 370 && mousex <= 515 && mousey >= 535 && mousey <= 585)
			window.handler(5);
		else if(mousex >= 730 && mousex <= 880 && mousey >= 535 && mousey <= 585)
			window.handler(4);
		else window.handler(2);
	}
	
}