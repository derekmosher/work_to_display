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
            overmeCTA = 0,

            bannerAnimationDone = 0,
            tl = gsap.timeline();

            /************** Modify VARIABLES ********************/
            colors.cta_bg = "#479ad4";
            colors.cta_bg_over = "#36bf78";
            colors.cta_text = "#fff";
            colors.cta_text_over = "#fff";
            colors.border = "#479ad4";
            colors.border_over = "#36bf78";

/***************** //end of VARIABLES  *****************/
    
/******************  MAIN ANIMATION  ******************/ 
		function animate() { 
            tl
            .to(bannerCover, {duration:1, alpha:0, ease:"none"},">0.5")

            .from([pic1],{duration:1.1, alpha:1,ease:"power4.out"}, "<0.3")
            //
            .from(logo_cisco, {duration:0.8, alpha: 0, scale:1,ease:"power1.out"}, "<0.2")
            .from(divider, {duration:0.8, alpha: 0, scale:1,ease:"power1.out"}, "<0")
            .from(logo_blueAlly, {duration:0.8, alpha: 0, scale:1,ease:"power1.out"}, "<0")
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
    if(position< -1295) position = -615;
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
    console.log('over banner');
    if( bannerAnimationDone == 0)return;
    if(overmeCTA == 1) return;
    if(overme==1) return;
    overme=1;
    //
    scroll(true)
    gsap.to(cta, {duration:0.6, 
        y:"8px",
        ease:"power1.out"}  
    ) ;
    gsap.to([text_head,text_sub], {duration:0.6, 
        y:"-8px",
        ease:"power1.out"}  
    ) ;
    gsap.to(text1, 
        { alpha:1,
        duration:0.6, 
        ease:"none"}  
    ) ;
};

function goOut(){
    console.log('out banner');
    if( bannerAnimationDone == 0)return;
    if(overmeCTA == 1) return;
    if(overme == 0) return;
    overme=0;
    //
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


function goOverCTA(){
    overmeCTA = 1;
    bgexit.removeEventListener('mouseout', goOutDelay)
    bgexit.removeEventListener('mouseover', goOverDelay)
    // overme == 1;
    console.log('over cta');
    gsap.to(cta, {duration:0.3, 
        background: colors.cta_bg_over,
        color: colors.cta_text_over,
        borderColor: colors.cta_border_over,
        ease:"power1.out"}  
    ) ;
}
function goOutCTA(){
    overmeCTA = 0;
    console.log('out cta');
    gsap.to(cta, {duration:0.3, 
        background: colors.cta_bg,
        color: colors.cta_text,
        borderColor: colors.cta_border,
        ease:"power1.out"}  
    ) ;
    bgexit.addEventListener('mouseout', goOutDelay)
    bgexit.addEventListener('mouseover', goOverDelay)
}

function goOverDelay (){
    gsap.delayedCall(0.1, goOver);
}
function goOutDelay (){
    gsap.delayedCall(0.1, goOut);
}
bgexit.addEventListener('mouseout', goOutDelay)
bgexit.addEventListener('mouseover', goOverDelay)
cta.addEventListener('mouseover', goOverCTA)
cta.addEventListener('mouseout', goOutCTA)

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

cta.addEventListener('click', (e) => {   
    console.log("EXIT. clickTag = " + clickTag)
    window.open(clickTag, "_blank");
    return false;
});
bgexit.addEventListener('click', (e) => {   
    console.log("EXIT. clickTag = " + clickTag)
    window.open(clickTag, "_blank");
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