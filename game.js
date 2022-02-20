///////////////////////////////////////////////////
////////////////HERNA OBRAZOVKA////////////////////
///////////////////////////////////////////////////
function Life(){
	this.x = 730;
	this.y = 565;
	this.width = 150;
	this.draw = function(ctx){
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.rect(this.x, this.y, 150, 20);
		ctx.stroke();
		ctx.fillRect(this.x, this.y, this.width, 20);
		ctx.closePath();
	}
}

function Score(){
    this.x = 10;
    this.y = 590;
	this.value = 0;
	this.draw = function(ctx){
		ctx.beginPath();
		ctx.font = "30px myFont";
		ctx.fillStyle = "black";
		this.text = "SKÓRE: " + this.value;
		ctx.fillText(this.text, this.x, this.y);
		ctx.closePath();
	}
}

function Timer(){
	this.x = 830;
	this.y = 40;
	this.seconds = 0;
	this.minutes = 0;
	this.difficulty = 0;
	this.draw = function(ctx) {
		this.seconds++;
		if((this.seconds / 100) % 10 == 0){
			this.difficulty++;
		}
		if(this.seconds == 6000){
			this.seconds = 0;
			this.minutes++;
		}
		ctx.beginPath();
		ctx.font = "40px myFont";
		ctx.fillStyle = "black";
		this.text = this.minutes + ":" + Math.floor(this.seconds/100);
		ctx.fillText(this.text, this.x, this.y);
		ctx.closePath();
	}
}

class Hra{
	constructor(canvas){
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.balls = [];
		this.pocetLopty = 0;
		this.canvas.onclick = this.Collision.bind(this);
		this.myScore = new Score();
		this.myLife = new Life();
		this.myTimer = new Timer();
		this.bgAudio = new Audio("zvuky/pozadie_hudba.mp3");
		this.stredObr100 = document.getElementById("stred100");
		this.stredObr70 = document.getElementById("stred70");
		this.stredObr40 = document.getElementById("stred40");
		this.stredObr20 = document.getElementById("stred20");
		this.pozadieObr = document.getElementById("gamebg");
		this.strednyU = document.getElementById("strednyU");
		this.malyU = document.getElementById("malyU");
		this.velkyU = document.getElementById("velkyU");
		this.pomocnik = document.getElementById("pomocnik");
		this.deadObr = document.getElementById("killImg");
	}
	Start(){
		if(volumeM == 1)
			this.bgAudio.play();
		this.addBallInterval = 1500;
		this.addBall(this.pocetLopty++);
		this.IntervalID = setInterval(()=>this.addBall(this.pocetLopty++), this.addBallInterval);
		this.IntervalID2 = setInterval(()=>this.Render(),10);
	}
	Render(){
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.ctx.drawImage(this.pozadieObr, 0, 0, canvas.width, canvas.height);
		if(this.myLife.width > 105)
			this.stredObr = this.stredObr100;
		if(this.myLife.width <= 105 && this.myLife.width > 60)
			this.stredObr = this.stredObr70;
		if(this.myLife.width <= 60 && this.myLife.width > 30)
			this.stredObr = this.stredObr40;
		if(this.myLife.width <= 30)
			this.stredObr = this.stredObr20;
		this.ctx.drawImage(this.stredObr,(canvas.width / 2) - 100, (canvas.height / 2) - 110, 200, 200);
		for(var i = 0; i < this.balls.length; i++){
			this.balls[i].drawLopty(this.ctx);
			if(this.balls[i].toRemove){				//odstranenie objektov
				this.balls.splice(i , 1);
				this.pocetLopty--;
				}
		}
		this.myScore.draw(this.ctx);
		this.myLife.draw(this.ctx);
		this.myTimer.draw(this.ctx);
		if(this.CheckMid())
			this.myLife.width -= 15;
		if(this.myLife.width == 0){
			this.End();
			}
		if(this.myTimer.difficulty){
			this.IncreaseDif();
		}
	}
	End(){
		this.bgAudio.pause();
		this.bgAudio.currentTime = 0;
		clearInterval(this.IntervalID);
		clearInterval(this.IntervalID2);
		AktualneSkore = this.myScore.value;
		window.handler(6);
	}
	IncreaseDif(){
		clearInterval(this.IntervalID);
		this.addBallInterval -= 250;
		this.IntervalID = setInterval(()=>this.addBall(this.pocetLopty++), this.addBallInterval);
		this.myTimer.difficulty = 0;
	}
	CheckMid(){
		this.err = 0;
		for(var i = 0; i < this.balls.length; i++){
			if(this.balls[i].detectMiddle()){
				if(this.balls[i].rychlost == 0.75){
					if(this.myLife.width < 150)
						this.myLife.width += 15;
					this.err--;
					}
				this.balls.splice(i, 1);
				this.pocetLopty--;
				this.err++;
				}
		}
		if(this.err > 0)return 1;
		return 0;
	}
	Collision(e){
		for(var i = 0; i < this.balls.length; i++){
			if(this.balls[i].detectCollision(e) && !this.balls[i].dead){
				if(this.balls[i].rychlost == 1)
					this.myScore.value += 50;
				if(this.balls[i].rychlost == 1.5)
					this.myScore.value += 100;
				if(this.balls[i].rychlost == 2)
					this.myScore.value += 150;
				this.balls[i].dead++;
				this.balls[i].StartRemoveBall();
				if(volumeE == 1)
					this.balls[i].killAudio.play();
				}
		}
	}
	addBall(pocet){
		var operacia = Math.round(Math.random()*8);
		switch (operacia){
			case 0:
			case 1:
			case 2:
			case 3:
				this.imgSrc = this.strednyU;
				this.deadSrc = this.deadObr;
				this.priemer = 70;
				this.rychlost = 1.5;
				break;
			case 4:
			case 5:
				this.imgSrc = this.malyU;
				this.deadSrc = this.deadObr;
				this.priemer = 60;
				this.rychlost = 2;
				break;
			case 6:
			case 7:
				this.imgSrc = this.velkyU;
				this.deadSrc = this.deadObr;
				this.priemer = 80;
				this.rychlost = 1;
				break;
			case 8:
				this.imgSrc = this.pomocnik;
				this.deadSrc = this.deadObr;
				this.priemer = 60;
				this.rychlost = 0.75;
				break;
		}
		operacia = Math.round(Math.random()*3);
		switch (operacia){
			case 0:
				this.x = -this.priemer;
				this.y = Math.round(Math.random() * 600);
				break;
			case 1:
				this.x = canvas.width;
				this.y = Math.round(Math.random() * 600);
				break;
			case 2:
				this.x = Math.round(Math.random() * 800);
				this.y = -this.priemer;
				break;
			case 3:
				this.x = Math.round(Math.random() * 800);
				this.y = canvas.height;
				break;
		}
		this.balls[pocet] = new Lopty(this.deadSrc, this.imgSrc ,this.x, this.y, this.priemer, this.rychlost);
	}
}
