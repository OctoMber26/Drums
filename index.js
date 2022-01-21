var buttons=document.querySelectorAll(".drum").length;
for(var i=0; i<buttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
     var buttonhtml=this.innerHTML;
     makesound(buttonhtml);
     Buttonanimation(buttonhtml);
    });
}

document.addEventListener("keypress", function(event){
    makesound(event.key);
    Buttonanimation(event.key);
});

function makesound(key){
    switch (key) {
        case "w":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "a":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "s":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "d":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default: console.log(buttonhtml);
            
    }
}

function Buttonanimation(colorkeys){
   var color_buttons= document.querySelector("."+ colorkeys);
   color_buttons.classList.add("pressed");

   setTimeout(function(){
       color_buttons.classList.remove("pressed");
   },100);

}
