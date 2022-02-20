///////////////////////////////////////////////////
////////////////////UTOCNICI///////////////////////
///////////////////////////////////////////////////
class Lopty{
	constructor(deadSrc, imgSrc, x, y, priemer, rychlost){
		this.killAudio = new Audio('zvuky/zabitie.wav');
		this.intervalis;
		this.dead = 0;
		this.toRemove = 0;
		this.imgSrc = imgSrc;
		this.deadSrc = deadSrc;
		this.priemer = priemer;
		this.pozx = x + (priemer / 2);
		this.pozy = y + (priemer / 2);
		this.rychlost = rychlost;
		this.smerY = ((canvas.height / 2) - this.pozy) / Math.sqrt((((canvas.width / 2) - this.pozx)*((canvas.width / 2) - this.pozx))+(((canvas.height / 2) - this.pozy)*((canvas.height / 2) - this.pozy)));
		this.smerX = ((canvas.width / 2) - this.pozx) / Math.sqrt((((canvas.width / 2) - this.pozx)*((canvas.width / 2) - this.pozx))+(((canvas.height / 2) - this.pozy)*((canvas.height / 2) - this.pozy)));
	}
	drawLopty(ctx){
		if(this.dead){
			ctx.beginPath();
			ctx.drawImage(this.deadSrc, this.pozx - (this.priemer / 2), this.pozy - (this.priemer / 2), this.priemer, this.priemer);
			ctx.closePath();
		}
		else{
			ctx.beginPath();
			ctx.drawImage(this.imgSrc, this.pozx - (this.priemer / 2), this.pozy - (this.priemer / 2), this.priemer, this.priemer);
			ctx.closePath();
			this.moveLopty();
		}
	}
	StartRemoveBall(){
		this.priemer -= 30;
		this.intervalis = setInterval(()=>this.RemoveBall(), 3000);
	}
	RemoveBall(Intervalis){
		clearInterval(this.intervalis);
		this.toRemove++;
	}
	detectMiddle(){
		if(this.pozx > canvas.width / 2 - 50 && this.pozx < canvas.width / 2 + 50 && this.pozy > canvas.height / 2 - 50 && this.pozy < canvas.height / 2 + 50)
			return 1;
		else return 0;
	}
	detectCollision(e){
		var mouseX;
		var mouseY;
		if (!e) e = window.event;
		mouseX = e.clientX;
		mouseY = e.clientY;
		if(((mouseX - this.pozx) * (mouseX - this.pozx)) + ((mouseY - this.pozy) * (mouseY - this.pozy)) <= ((this.priemer / 2) * (this.priemer / 2)))
		return 1;
		else return 0;
	}
	moveLopty(){
		this.pozx += (this.smerX * this.rychlost);
		this.pozy += (this.smerY * this.rychlost);
	};

}
