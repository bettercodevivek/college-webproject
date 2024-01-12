function openNav(){
    document.getElementById("sidebar").style.width="50vw";
   }
   function closeNav(){
    document.getElementById("sidebar").style.width="0px";
   }
  
   function scrollup(){
    document.documentElement.scrollTop="0";
 }
 function openNavmobile(){
    document.getElementById("sidebar-mobile").style.width="60vw";
   }
   function closeNavmobile(){
    document.getElementById("sidebar-mobile").style.width="0px";
   }
  
   function scrollupmobile(){
    document.documentElement.scrollTop="0";
 }
const track=document.querySelector(".carousel__track");

const slides=Array.from(track.children);

const nextbutton=document.querySelector(".carousel__button--right");

const prevbutton=document.querySelector(".carousel__button--left");

const dotsNav=document.querySelector(".carousel__nav");

const dots=Array.from(dotsNav.children);

const slideWidth=slides[0].getBoundingClientRect().width;

//slides arrangement next to each other

// slides[0].style.left = slideWidth*0 + "px";
// slides[1].style.left =slideWidth*1 + "px";
// slides[2].style.left=slideWidth*2 + "px";

const setSlideposition = (slide,index) =>{
    slide.style.left=slideWidth*index + "px";
}
slides.forEach(setSlideposition);

const updateDots=(currentdot,targetDot)=>{
    currentdot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
}

//when i click on right,move slides to right
const moveToslide = (track,currentslide,targetslide) =>{
    track.style.transform="translateX(-"+ targetslide.style.left +")";
    currentslide.classList.remove("currentslide");
    targetslide.classList.add("currentslide");
    }
    
    nextbutton.addEventListener("click",e=>{
        const currentslide=track.querySelector(".currentslide");
        const nextslide=currentslide.nextElementSibling;
        moveToslide(track,currentslide,nextslide);
    })

    //when  i click on left,move slides to left

    prevbutton.addEventListener("click",e=>{
        const currentslide2=track.querySelector(".currentslide");
        const prevslide=currentslide2.previousElementSibling;
        moveToslide(track,currentslide2,prevslide);
    })

    //when i click nav indicator dots,move to that slide

    dotsNav.addEventListener("click",e=>{
        //what we have clicked on
        const targetDot=e.target.closest("button");
         
        if(!targetDot) return;
         
        const currentslide3=track.querySelector(".currentslide");
        const currentdot=dotsNav.querySelector(".currentslide");
        const targetIndex=dots.findIndex(dot => dot===targetDot);
        const targetslide=slides[targetIndex];

       moveToslide(track,currentslide3,targetslide);

       updateDots(currentdot,targetDot);
    })

    //typing effect on title

     var app=document.getElementById("typewriter-js");

     var type=new Typewriter(app,{
        loop:true,
        delay:70
     })
     
     type 
     .pauseFor(1000)
     .typeString("WELCOME TO JSSATE, NOIDA")
     .pauseFor(4500)
     .deleteAll()
     .start();
