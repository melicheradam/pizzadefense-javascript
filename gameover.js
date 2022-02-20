///////////////////////////////////////////////////
////////////////PREHRA OBRAZOVKA///////////////////
///////////////////////////////////////////////////
class GameOver{
	constructor(canvas){
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.canvas.onclick = this.Onclick.bind(this);
		this.koniecAudio = new Audio("zvuky/koniec_hry.wav");
		this.imgSrc = document.getElementById("pozadie");
		this.img2Src = document.getElementById("goverbg");
	}
	Start(){
		var meno = prompt("Zadaj svoje meno,\nAby bolo vložené do tabuľky rekordov:");
		var i = 0;
		while(!meno && i++ < 10)meno = prompt("Nezadal si svoje meno,\nMôžeš to skúsiť znova:");
		if(meno)this.VlozDoTab(meno);
		else meno = "";
		if(volumeM == 1)
			this.koniecAudio.play();
		this.ctx.beginPath();
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.ctx.drawImage(this.imgSrc, 0, 0, canvas.width, canvas.height);
		this.ctx.drawImage(this.img2Src, 500, 250, 400, 250);
		this.ctx.rect(20,535,230,50);
		this.ctx.rect(720,535,165,50);
		this.ctx.stroke();
		this.ctx.fillStyle = "black";
		this.ctx.font = "100px myFont";
		this.ctx.fillText("Prehral si!",200,125);
		this.ctx.font = "30px myFont";
		this.ctx.fillText("Tvoje skóre bolo: " + AktualneSkore, 120, 280);
		this.ctx.fillText("Čo je dosť chabé,", 120, 310);
		this.ctx.fillText("Mal by si sa viac snažiť " + meno + "!", 120, 340);
		this.ctx.fillText("Návrat do menu", 30, 570);
		this.ctx.fillText("Hrať znova", 730, 570);
		this.ctx.closePath();
	}
	VlozDoTab(_meno){
		var i;
		if(TopHraci.length == 0)TopHraci.splice(0,0, {meno: _meno,skore: AktualneSkore})
		else {
			for(i = 0; i < TopHraci.length && AktualneSkore < TopHraci[i].skore; i++);
			TopHraci.splice(i,0,{meno: _meno,skore: AktualneSkore});
		}
	}
	Onclick(e){
		var mousex;
		var mousey;
		if (!e) e = window.event;
		mousex = e.clientX;
		mousey = e.clientY;
		if(mousex >= 30 && mousex <= 260 && mousey >= 535 && mousey <= 585){
			if(volumeM == 1)  menuHudba.play();
			window.handler(1);
			}
		if(mousex >= 730 && mousex <= 895 && mousey >= 535 && mousey <= 585){
			window.handler(2);
			}
	}
}
