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
            text11 = select('#text11'),
            text12 = select('#text12'),
            text21 = select('#text21'),
            text22 = select('#text22'),

            logo_blueAlly = select('#logo_blueAlly'),
            divider = select('#divider'),
            logo_fortinet = select('#logo_fortinet'),
            pic_box = select('#pic_box'), 
            pic1 = select('#pic1'), 
            pic2 = select('#pic2'), 
            bar1 = select('#bar1'),
            bar2 = select('#bar2'),
            bar3 = select('#bar3'),
            //
            bg = select('#bg'),
            bgexit = select('#bgexit'),
            cta = select('#cta'), 
            colors ={},
            tl = gsap.timeline();

            /************** Modify VARIABLES ********************/
            colors.cta_bg = "#DA291C";
            colors.cta_bg_over = "#fff";
            colors.cta_text = "#fff";
            colors.cta_text_over = "#DA291C";
            colors.border = "#DA291C";
            colors.border_over = "DA291C";

/***************** //end of VARIABLES  *****************/
    
/******************  MAIN ANIMATION  ******************/ 
		function animate() { 
            tl
            .to(bannerCover, {duration:1, alpha:0, ease:"none"},">0.5")

            .from([pic_box],{duration:1.1,x:"+=410px", alpha:1,ease:"power4.out"}, "<0.3")
            .from([pic1],{duration:1.1,x:"+=400px", alpha:1,ease:"power4.out"}, "<0.1")
            .from([bar1],{duration:1.1,x:"+=40px", alpha:0, ease:"power4.out"}, "<0.4")
            .from([bar2],{duration:1.1,x:"+=40px", alpha:0, ease:"power4.out"}, "<0.1")
            .from([bar3],{duration:1.1,x:"+=40px", alpha:0, ease:"power4.out"}, "<0.1")
            //
            .from(logo_fortinet, {duration:0.8, alpha: 0, scale:1,ease:"power1.out"}, "<0.4")
            .from(divider, {duration:0.8, alpha: 0, scale:1,ease:"power1.out"}, "<0.1")
            .from(logo_blueAlly, {duration:0.8, alpha: 0, scale:1,ease:"power1.out"}, "<0.1")
            //
            .from([text11],{duration:1.8,alpha:0,ease:"power1.out"}, "<0.3")
            .from([text12],{duration:1.8,alpha:0,ease:"power1.out"}, "<0.3")
            .from(cta, {duration:0.8, alpha: 0, scale:1,ease:"power1.out"}, "<0.3")
            //
            .to(pic1, {duration:1.1, alpha:0,x:"+=400px", scale:1,ease:"power1.out"}, "<4.0")
            .from(pic2, {duration:0.8, alpha:0, x:"+=400px", scale:1,ease:"power1.out"}, "<0.5")
            //
            .to(pic2, {duration:1.1, alpha:0,x:"+=400px", scale:1,ease:"power1.out"}, "<4.0")
            .to(pic1, {duration:0.8, alpha:1, x:"-=400px", scale:1,ease:"power1.out"}, "<0.5")

		}
        animate()
       
/******************  //end of MAIN ANIMATION  ******************/    
    
        
/********************  EVENTS  ********************/ 
        bgexit.addEventListener('mouseover', (e) => {
            console.log("over bgexit")
            gsap.to(cta, {duration:0.3, 
                color: colors.cta_text_over,
                borderColor: colors.cta_border_over,
                background: colors.cta_bg_over,
                ease:"none"}  
            ) ;
        });
        bgexit.addEventListener('mouseout', (e) => {
            console.log("out")
            gsap.to(cta, {duration:0.3, 
                color: colors.cta_text,
                 borderColor: colors.cta_border,
                 background: colors.cta_bg,
                ease:"none"}  
            ) ;
        });

        let type = 'click';
        // // ((Modernizr.touchevents)&&(!isChrome)) ? 'touchend' : 'click',
        let clickable = selectAll('.clickable');

        clickable.forEach(element => element.addEventListener(type, function(e) {
            console.log("click")
            return false;
        }, false));
	};
/****************** //end of  EVENTS  ******************/   
politeInit()
}