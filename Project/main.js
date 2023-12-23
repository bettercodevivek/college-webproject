function openNav(){
    document.getElementById("sidebar").style.width="50vw";
   }
   function closeNav(){
    document.getElementById("sidebar").style.width="0px";
   }

   const track=document.querySelector(".carousel__track");

const slides=Array.from(track.children);

const nextbutton=document.querySelector(".carousel__button--right");

const prevbutton=document.querySelector(".carousel__button--left");

const dotsNav=document.querySelector(".carousel__nav");

const dots=Array.from(dotsNav.children);

const slideWidth=slides[0].getBoundingClientRect().width;
