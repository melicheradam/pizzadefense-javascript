///////////////////////////////////////////////////
///////////////HOW-TO OBRAZOVKA////////////////////
///////////////////////////////////////////////////
class AkoHrat{
	constructor(canvas){
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.canvas.onclick = this.Onclick.bind(this);
		this.tlacAudio = new Audio("zvuky/klik_tlacitko.wav");
		this.lbtnObr = document.getElementById("lbclick");
		this.pomObr = document.getElementById("pomocnik");
		this.stredObr = document.getElementById("stred100");
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
		this.ctx.fillText("Ako hrať?",210,125);
		this.ctx.font = "30px myFont";
		this.ctx.fillText("Nenasitní zlodejskí politici sa snažia ukradnúť tvoje peniaze!",40,200);
		this.ctx.fillText("Vydrž brániť čo najdlhšie!",250,230);
		this.ctx.drawImage(this.lbtnObr, 125, 250, 100,175);
		this.ctx.drawImage(this.stredObr, 350, 250, 200,200);
		this.ctx.drawImage(this.pomObr, 625, 250, 125,175);
		this.ctx.fillText("Kliknutím zneškodni",40,475);
		this.ctx.fillText("politikov",100,505);
		this.ctx.fillText("Tvoje peniaze",360,475);
		this.ctx.fillText("Dopĺňajú život!",600,475);
		this.ctx.fillText("Nezabíjať!",630,505);
		this.ctx.fillText("Späť", 30, 570);
		this.ctx.fillText("Chápem, už chcem hrať!", 555, 570);
		this.ctx.rect(545,535,325,50);
		this.ctx.rect(20,535,80,50);
		this.ctx.stroke();
		this.ctx.closePath();
	}
	Onclick(e){
		var mousex;
		var mousey;
		if (!e) e = window.event;
		mousex = e.clientX;
		mousey = e.clientY;
		if(mousex >= 30 && mousex <= 110 && mousey >= 535 && mousey <= 585)
			window.handler(1);
		if(mousex >= 575 && mousex <= 900 && mousey >= 535 && mousey <= 585){
			window.handler(2);
		}
	}
}