"use strict";
window.onload = function() {
   
/******************** VARIABLES  ********************/ 
function politeInit(){		
        /************** Create VARIABLES ********************/
        var select = function(s) {
                return document.querySelector(s);
            },
            selectAll = function(s) {
                return document.querySelectorAll(s);
            },
            bannerCover = select('#bannerCover'),
            border = select('#border'),
            wrapper = select('#wrapper'),
            text_sub = select('#text_sub'),
            text_head = select('#text_head'),
            text1 = select('#text1'),

            logo_blueAlly = select('#logo_blueAlly'),
            divider = select('#divider'),
            logo_cisco = select('#logo_cisco'),
            pic1 = select('#pic1'), 
            //
            bg = select('#bg'),
            bgexit = select('#bgexit'),
            cta = select('#cta'), 
            colors ={},
            overme = 0,
            bannerAnimationDone = 0,
            tl = gsap.timeline();

            /************** Modify VARIABLES ********************/
            
            colors.cta_bg = "#479ad4";
            colors.cta_bg_over = "#fff";
            colors.cta_text = "#fff";
            colors.cta_text_over = "#479ad4";
            colors.border = "#479ad4";
            colors.border_over = "479ad4";

/***************** //end of VARIABLES  *****************/
    
/******************  MAIN ANIMATION  ******************/ 
		function animate() { 
            tl
            .to(bannerCover, {duration:1, alpha:0, ease:"none"},">0.5")

            .from([pic1],{duration:1.1, alpha:1,ease:"power4.out"}, "<0.3")
            //
            .from(logo_cisco, {duration:0.8, alpha: 0, scale:1,ease:"power1.out"}, "<0.2")
            .from(divider, {duration:0.8, alpha: 0, scale:1,ease:"power1.out"}, "<0.0")
            .from(logo_blueAlly, {duration:0.8, alpha: 0, scale:1,ease:"power1.out"}, "<0.0")
            //
            .from([text_sub],{duration:1.8,alpha:0,ease:"power1.out"}, "<0.3")
            .from([text_head],{duration:1.8,alpha:0,ease:"power1.out"}, "<0.3")
            .from(
                cta, {
                    duration:0.8, 
                    alpha: 0, 
                    scale:1,
                    ease:"power1.out",
                    onComplete: function(){ bannerAnimationDone = 1},
                }, "<0.3")
		}
        animate()
       
/******************  //end of MAIN ANIMATION  ******************/    
    
/********************  Scroller  ********************/ 
    let myTimer;
    let speed = 1;
    let position = 0;

    function gogo() {
        position -= speed; // Move left by speed pixels
        gsap.set(text1,{
            x: position + "px",
        })
        if(position< -1756) position = -848;
        // starts 46  .  loop to -848 . loop if -1756
    }

    function scroll(go){
        if (go) {
            myTimer = setInterval(gogo, 15)
        } else{
            clearInterval(myTimer);
            // console.log('stop scroll ')
        }
    }

/********************  EVENTS  ********************/ 
function goOver(){
    if( bannerAnimationDone == 0)return;
    if(overme==1) return;
    overme=1;
    scroll(true)
    gsap.to(cta, {duration:0.6, 
        y:"8px",
        ease:"power1.out"}  
    ) ;
    gsap.to([text_head,text_sub], {duration:0.6, 
        y:"-8px",
        ease:"power1.out"}  
    ) ;
    gsap.fromTo(text1, 
        { alpha: 0 }, 
        { alpha:1,
        duration:0.6, 
        ease:"none"}  
    ) ;
};
bgexit.addEventListener('mouseover', goOver)


function goOut(){
    if( bannerAnimationDone == 0)return;
    if(overme == 0) return;
    overme=0;
    scroll(false)
    gsap.to(cta, {duration:0.4, 
        y:"0px",
        ease:"power1.out"}  
    ) ;
    gsap.to([text_head,text_sub], {duration:0.3, 
        y:"0px",
        overwrite:true,
        ease:"power1.out"}  
    ) ;
    gsap.to([text1], { duration:0.3, alpha:0, });
};

bgexit.addEventListener('mouseout', goOut)

/********************  Mobile?  ********************/ 
let isMobile = false;
function isMobileUserAgent() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
        isMobile = true;
        bgexit.removeEventListener('mouseover', goOver)
        bgexit.removeEventListener('mouseout', goOut)
        console.log('removed mouseover, mouseout')
        return true;
    }
    return false;
}

console.log("Is mobile (User Agent):", isMobileUserAgent());
/******************** ********************/ 


bgexit.addEventListener('click', (e) => {
    console.log("click")
    return false;
});

// let type = 'click';
// // ((Modernizr.touchevents)&&(!isChrome)) ? 'touchend' : 'click',
// let clickable = selectAll('.clickable');

// clickable.forEach(element => element.addEventListener(type, function(e) {
//     console.log("click")
//     return false;
// }, false));
};
/****************** //end of  EVENTS  ******************/   
politeInit()
}