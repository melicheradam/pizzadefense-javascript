///////////////////////////////////////////////////
/////////////NASTAVENIA OBRAZOVKA//////////////////
///////////////////////////////////////////////////
class Nastavenia{
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
		this.ctx.rect(790,535,80,50);
		this.ctx.stroke();
		this.ctx.font = "100px myFont";
		this.ctx.fillText("Nastavenia",185,125);
		this.ctx.font = "30px myFont";
		this.ctx.fillStyle = "black";
		this.ctx.fillText("Späť", 800, 570);
		if(volumeM == 1)
			this.ctx.fillStyle = "green";
		else this.ctx.fillStyle = "black";
		this.ctx.fillText("Zapnutá", 220, 250);
		if(volumeM == 0)
			this.ctx.fillStyle = "red";
		else this.ctx.fillStyle = "black";
		this.ctx.fillText("Vypnutá", 220, 290);
		if(volumeE == 1)
			this.ctx.fillStyle = "green";
		else this.ctx.fillStyle = "black";
		this.ctx.fillText("Zapnuté", 500, 250);
		if(volumeE == 0)
			this.ctx.fillStyle = "red";
		else this.ctx.fillStyle = "black";
		this.ctx.fillText("Vypnuté", 500, 290);
		this.ctx.font = "40px myFont";
		this.ctx.fillStyle = "black";
		this.ctx.fillText("Hudba", 220, 200);
		this.ctx.fillText("Efekty", 495, 200);
		this.ctx.closePath();
	}
	Onclick(e){
		var mousex;
		var mousey;
		if (!e) e = window.event;
		mousex = e.clientX;
		mousey = e.clientY;
		if(mousex >= 220 && mousex <= 345 && mousey >= 275 && mousey <= 305){ //vypnutie hudby
			volumeM = 0;
			menuHudba.pause();
			this.Start();
			}
		if(mousex >= 220 && mousex <= 345 && mousey >= 235 && mousey <= 265){	//zapnutie 
			volumeM = 1;
			menuHudba.play();
			this.Start();
			}
		if(mousex >= 500 && mousex <= 625 && mousey >= 275 && mousey <= 305){	//v. efektov
			volumeE = 0;
			this.Start();
			}
		if(mousex >= 500 && mousex <= 625 && mousey >= 235 && mousey <= 265){	//zapnutie
			volumeE = 1;
			this.Start();
			}
		if(mousex >= 800 && mousex <= 880 && mousey >= 535 && mousey <= 585){
			window.handler(1);
			}
	}
}
