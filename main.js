///////////////////////////////////////////////////
/////////////////HLAVNY PROGRAM////////////////////
///////////////////////////////////////////////////
var canvas;
var volumeM = 1;
var volumeE = 1;
var TopHraci = [];
var AktualneSkore;

var menuHudba = new Audio("zvuky/menu.mp3");

window.handler = function(volba){
	var obrazovka;
	if(volba == 1)
		obrazovka = new Menu(canvas);
	if(volba == 2){
		menuHudba.pause();
		menuHudba.currentTime = 0;
		obrazovka = new Hra(canvas);
	}
	if(volba == 3)
		obrazovka = new Nastavenia(canvas);
	if(volba == 4)
		obrazovka = new AkoHrat(canvas);
	if(volba == 5)
		obrazovka = new Tabulka(canvas);
	if(volba == 6)
		obrazovka = new GameOver(canvas);
	obrazovka.Start();
}

window.onload = function(){
	canvas = document.getElementById("myCanvas");
	menuHudba.play();
	window.handler(1);
	}