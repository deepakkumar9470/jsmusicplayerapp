
var divlength=document.querySelectorAll('.song').length;


for (var i=0; i<divlength ;i++){
 let demo1=document.querySelectorAll('.song')[i].addEventListener('click',playMusic);   
 let demo2=document.querySelectorAll('.song')[i].addEventListener('dblclick',pauseMusic);   
}


var song1=new Audio();
song1.src="Music/arrival.mp3";
var song2=new Audio();
song2.src="Music/vibe.mp3";
var song3=new Audio();
song3.src="Music/heaven.mp3";
var song4=new Audio();
song4.src="Music/feel.mp3";
var song5=new Audio();
song5.src="Music/good.mp3";
var song6=new Audio();
song6.src="Music/happy.mp3";
var song7=new Audio();
song7.src="Music/mbb.mp3";
var song8=new Audio();
song8.src="Music/spectre.mp3";
var song9=new Audio();
song9.src="Music/alan.mp3";
var song10=new Audio();
song10.src="Music/electro.mp3";
var song11=new Audio();
song11.src="Music/robin.mp3";
var song12=new Audio();
song12.src="Music/evan.mp3";

function playMusic(){
    
    
    var songId=this.innerHTML;
    switch(songId){
            case "a":
            song1.play();
            break;
            case "b":
            song2.play();
            break;
            case "c":
            song3.play();
            break;
            case "d":
            song4.play();
            break;
            case "e":
            song5.play();
            break;
            case "f":
            song6.play();
            break;
            case "g":
            song7.play();
            break;
            case "h":
            song8.play();
            break;
            case "i":
            song9.play();
            break;
            case "j":
            song10.play();
            break;
            case "k":
            song11.play();
            break;
            case "l":
            song12.play();
            break;
        default:
            console.log('Wrong Input');
            break;
    }
}

function pauseMusic(){
    var songId=this.innerHTML;
    switch(songId){
            case "a":
            song1.pause();
            break;
            case "b":
            song2.pause();
            break;
            case "c":
            song3.pause();
            break;
            case "d":
            song4.pause();
            break;
            case "e":
            song5.pause();
            break;
            case "f":
            song6.pause();
            break;
            case "g":
            song7.pause();
            break;
            case "h":
            song8.pause();
            break;
            case "i":
            song9.pause();
            break;
            case "j":
            song10.pause();
            break;
            case "k":
            song11.pause();
            break;
            case "l":
            song12.pause();
            break;
        default:
            console.log('Wrong Input');
            break;
    }
}