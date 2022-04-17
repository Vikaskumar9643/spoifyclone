console.log("let do it vikas");
let index=0;
let loop=0;
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg",duration:230.0604}, 
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg",duration:153.051429},
    {songName: "DEAF KEV - Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg",duration:273.072},
    {songName: "Different Heaven & EH!DE -", filePath: "songs/4.mp3", coverPath: "covers/4.jpg",duration:267.072},
    {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg",duration:208.117551},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg",duration:208.117551},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg",duration:273.072},
];
let audioelement=new Audio(songs[index].filePath);
console.log(audioelement.duration)
let playpuaseelemnt=document.querySelector("#play-pause-button");
console.log(playpuaseelemnt);

playpuaseelemnt.addEventListener("click",function(e){
    let element=e.target;
    let songitem=document.getElementById(`${index}`);
    console.log(songitem);
    if(audioelement.paused==true){
        audioelement.play();
        element.classList.remove("fa-play-circle");
        element.classList.add("fa-pause-circle");

        songitem.classList.remove("fa-play-circle");
        songitem.classList.add("fa-pause-circle");


    }
    else{
        audioelement.pause();
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
        songitem.classList.remove("fa-pause-circle");
        songitem.classList.add("fa-play-circle");
        
        
    }
}
)
let audio;

let songimgname= Array.from(document.querySelectorAll(".song-img-name"));
console.log(songimgname)

songimgname.forEach((element,i)=>{
    let image=element.querySelector(".song-img");
    let songname=element.querySelector(".songname");
    let parentelement=element.parentElement;
   let time=parentelement.querySelector(".time-duration");
time.textContent=durationtotime(songs[i].duration);
image.src=songs[i].coverPath;
    songname.textContent=songs[i].songName;

    
});
function songtoduration(e){
    
let o=new Audio(e);
console.log(o.duration);
}
console.log(songtoduration("songs/1.mp3"));

console.log(audioelement.duration)
let progressbar=document.querySelector(".progressbar");
console.log(progressbar);
progressbar.addEventListener("change",function(e){
    let element=e.target;
    
    audioelement.currentTime=element.value*audioelement.duration/100;

});
audioelement.addEventListener("timeupdate",function(){
    
 if(audioelement.currentTime==audioelement.duration){
     if(loop==1){
         audioelement.play();
     }
     else{
         next();
     }
 }
    
progressbar.value=audioelement.currentTime*100/audioelement.duration;
})
function makeAllPlays(e){
    Array.from(document.querySelectorAll(".play-pause-icon i")).forEach((element)=>{
        if(e.target==element){
console.log("match found");
        }
        else{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");}
    })
}
Array.from(document.querySelectorAll(".play-pause-icon i")).forEach((element)=>{
    element.addEventListener("click",function(e){
        makeAllPlays(e);
         index=e.target.id;
         let classs=e.target.className;
       audioelement.src=songs[index].filePath;
        audioelement.currentTime=0;
        if(classs.search("fa-pause-circle")<0){
            console.log(audioelement.paused);
        audioelement.play();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        document.querySelector("#play-pause-button").classList.remove("fa-play-circle");
        document.querySelector("#play-pause-button").classList.add("fa-pause-circle");}
        else{
            audioelement.pause();
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle");
        document.querySelector("#play-pause-button").classList.remove("fa-pause-circle");
        document.querySelector("#play-pause-button").classList.add("fa-play-circle");

        }
    })
})
document.querySelector("#next").addEventListener("click",next)



function next (){
    let songitem=document.getElementById(`${index}`);
    songitem.classList.remove("fa-pause-circle");
    songitem.classList.add("fa-play-circle"); 
    let songname=document.querySelector(".song-name marquee");
    if(index>=6){
        index=0;
        
    }
    else{
        index++;
    }
    songname.textContent=songs[index].songName;
    audioelement.src=songs[index].filePath;
    audioelement.currentTime=0;
   songitem=document.getElementById(`${index}`);
    songitem.classList.remove("fa-play-circle");
    songitem.classList.add("fa-pause-circle");  audioelement.play();
    
    document.querySelector("#play-pause-button").classList.remove("fa-play-circle");
        document.querySelector("#play-pause-button").classList.add("fa-pause-circle");
}
document.querySelector("#previous").addEventListener("click",function(){
    let songitem=document.getElementById(`${index}`);
    songitem.classList.remove("fa-pause-circle");
    songitem.classList.add("fa-play-circle"); 
    let songname=document.querySelector(".song-name marquee");
   
    if(index<=0){
        index=6;
        
    }
    else{
        index--;
    }
    songname.textContent=songs[index].songName;
    audioelement.src=songs[index].filePath;
    songitem=document.getElementById(`${index}`);
    songitem.classList.remove("fa-play-circle");
    songitem.classList.add("fa-pause-circle");
    audioelement.currentTime=0;
    audioelement.play();
    document.querySelector("#play-pause-button").classList.remove("fa-play-circle");
        document.querySelector("#play-pause-button").classList.add("fa-pause-circle");
})
let volume=Array.from(document.querySelectorAll(".volume"));
let volumetv=Array.from(document.querySelectorAll("#volume-tv"));
let volumeamount=0;
let audioamount=0;
volumetv.forEach((element)=>{
element.addEventListener("click",function(){
    console.log(window.innerWidth<700);
    if(window.innerWidth<700){
        let volumecontainer=document.querySelector(".volumecontainer");
        if(volumecontainer.style.display==="none"){
            volumecontainer.style.display="block";
        }
        else{
            volumecontainer.style.display="none";
        }

}
    

    if(element.className.search("fa-volume-up")>0){
        volumetv[0].classList.remove("fa-volume-up");
        volumetv[0].classList.add("fa-volume-mute");
        volumetv[1].classList.remove("fa-volume-up");
        volumetv[1].classList.add("fa-volume-mute");
        volumeamount=volume.value;
        audioamount=audioelement.volume;
        audioelement.volume=0;
        volume[0].value=0;
        volume[1].value=0;
    }
    else{
        volumetv[0].classList.remove("fa-volume-mute");
        volumetv[0].classList.add("fa-volume-up");
        volumetv[1].classList.remove("fa-volume-mute");
        volumetv[1].classList.add("fa-volume-up");
        volume[0].value=volumeamount;
        volume[1].value=volumeamount;
        audioelement.volume=audioamount;
        
    }

})
})
volume.forEach((element)=>{
element.addEventListener("change",function(e){
   let event=e.target;
   audioelement.volume=0.01*event.value;
   if(audioelement.volume>=0.5){
    if(volumetv[0].className.search("fa-volume-down")>0){volumetv[0].classList.remove("fa-volume-down");
   
    volumetv[1].classList.remove("fa-volume-down");
}
    else{volumetv[0].classList.remove("fa-volume-mute");
    volumetv[1].classList.remove("fa-volume-mute");}
       volumetv[0].classList.add("fa-volume-up");
       volumetv[1].classList.add("fa-volume-up");
}
else if(audioelement.volume<0.5&&audioelement.volume>0){
   if(volumetv[0].className.search("fa-volume-up")>0){ volumetv[0].classList.remove("fa-volume-up");volumetv[1].classList.remove("fa-volume-up")}
   else{volumetv[0].classList.remove("fa-volume-mute");volumetv[1].classList.remove("fa-volume-mute");}
       volumetv[0].classList.add("fa-volume-down");
       volumetv[1].classList.add("fa-volume-down");

}
else{
    if(volumetv[0].className.search("fa-volume-up")>0){volumetv[0].classList.remove("fa-volume-up");volumetv[0].classList.remove("fa-volume-up")}
    else{volumetv[1].classList.remove("fa-volume-down");volumetv[1].classList.remove("fa-volume-down");}
       volumetv[0].classList.add("fa-volume-mute");
       volumetv[1].classList.add("fa-volume-mute");
}


})
})

function durationtotime(duration){
let minute=parseInt(duration/60);
let second=parseInt(duration%60);
let minutestring=String(minute);
let secondstring=String(second);

if(minute<9){
    minutestring="0"+minutestring;
}
if(second<9){
    secondstring="0"+secondstring;
}
let time=minutestring+":"+secondstring;
return time;

}
let setting=document.querySelector("#setting");
setting.addEventListener("click",function(){
    let settingcontainer=document.querySelector(".settingcontainer");
if(settingcontainer.style.display==="none"){
    settingcontainer.style.display="block";
}
else{
    settingcontainer.style.display="none";
}
})
let speed=document.querySelector(".speed");
speed.addEventListener("click",function(){
    let speedcontainer=document.querySelector(".speedcontainer");
    let settingcontainer=document.querySelector(".settingcontainer");
    if(speedcontainer.style.display==="none"){
        speedcontainer.style.display="block";
        settingcontainer.style.display="none"
    }
    else{
        speedcontainer.style.display="none";
        
    }
})
let li=Array.from(document.querySelectorAll(".speedcontainer li"));
li.forEach((element,i)=>{
    let speedcontianer=document.querySelector(".speedcontainer");
    element.addEventListener("click",function(e){
        audioelement.playbackRate=1;
        let amount=e.target.value;
        amount=amount*0.25;
        console.log(amount);
        audioelement.playbackRate=audioelement.playbackRate*amount;
        speedcontianer.style.display="none";

    })
    
})

let Loop=document.querySelector(".loop");
Loop.addEventListener("click",function(){
    if(loop==0){
        loop=1;
    }
    else{
        loop=0;
    }
    let settingcontainer=document.querySelector(".settingcontainer");
    console.log(settingcontainer);
    settingcontainer.style.display="none";

})
window.addEventListener("load",function(){
    

let button=document.querySelector(".button");
console.log(button);
button.addEventListener("change",function(){
    let img=document.querySelector(".profilecontainerimgcontainer img");
    let img2=document.querySelector(".imgcontainer img");;
    console.log(img);
if(this.files&&this.files[0]){
img.src=URL.createObjectURL(this.files[0]);
img2.src=URL.createObjectURL(this.files[0]);}

})
});
let userfilechose=document.querySelector(".usernamecontainer i");
console.log(userfilechose);
userfilechose.addEventListener("click",function(){ console.log("vikas it was clicked")
    let searchfilecontainer=document.querySelector(".profilepicturecontainer");
    console.log(searchfilecontainer);
    if(searchfilecontainer.style.display=="none"){
        searchfilecontainer.style.display='block';

    }
    else{
        searchfilecontainer.style.display="none";
    }
})
let searchsongs=document.querySelector(".searchsongs");
console.log(searchsongs);
searchsongs.addEventListener("input",function(e){
    let event=e.target;
    event=event.value;
    event=event.toUpperCase();
    let songname=Array.from(document.querySelectorAll(".songname"));
    songname.forEach((element,i)=>{
        let text=element.textContent;
        text=text.toUpperCase();
        console.log(text.search(event));
        let parentElement=element.parentElement.parentElement;
        console.log(parentElement);
        
            
     if(text.search(event)>=0){
         parentElement.style.display="flex";
         }
     else{
         parentElement.style.display="none";

     }
    
   
    
})
   

})
let bars=document.querySelector("#bars");
console.log(bars);
bars.addEventListener("click",function(){
    let manucontainer=document.querySelector(".manucontainer");
    let searchcontainer=document.querySelector(".searchcontainer");

    if(manucontainer.style.display=="none"){
        manucontainer.style.display="block";
        searchcontainer.style.display="block";

    }
    else{
        manucontainer.style.display="none";
        searchcontainer.style.display="none";
    }
})