"use strict";
window.onload = function() {
/******************** VARIABLES  ********************/ 
function politeInit(){		
        // Enabler.setProfileId(10839664);
        var devDynamicContent = {};
        devDynamicContent.WLV_multiText_concours_main = [{}];
        devDynamicContent.WLV_multiText_concours_main[0]._id = 0;
        devDynamicContent.WLV_multiText_concours_main[0].color_bg = "#fff";
        devDynamicContent.WLV_multiText_concours_main[0].color_border = "#000";
        devDynamicContent.WLV_multiText_concours_main[0].color_headline = "#F9F7E8";
        devDynamicContent.WLV_multiText_concours_main[0].color_subheadline = "#F9F7E8";
        devDynamicContent.WLV_multiText_concours_main[0].cta = "LEARN MORE";
        devDynamicContent.WLV_multiText_concours_main[0].color_ctaText = "#775C3D";  //brown
        devDynamicContent.WLV_multiText_concours_main[0].color_ctaText_over = "#fff"; //pearl
        devDynamicContent.WLV_multiText_concours_main[0].color_ctaBG = "#fac400";   // pearl
        devDynamicContent.WLV_multiText_concours_main[0].color_ctaBG_over = "#fac400";  //brown
        devDynamicContent.WLV_multiText_concours_main[0].color_ctaBorder = "#fac400";
        devDynamicContent.WLV_multiText_concours_main[0].numPicsToShow = 1;
        devDynamicContent.WLV_multiText_concours_300x250 = [{}];
        devDynamicContent.WLV_multiText_concours_300x250[0]._id = 0;
        devDynamicContent.WLV_multiText_concours_300x250[0].headline_1 = "";
        devDynamicContent.WLV_multiText_concours_300x250[0].subheadline_1 =  "";
        devDynamicContent.WLV_multiText_concours_300x250[0].headline_2 = "";
        devDynamicContent.WLV_multiText_concours_300x250[0].subheadline_2 = "";
        devDynamicContent.WLV_multiText_concours_300x250[0].headline_3 = "";
        devDynamicContent.WLV_multiText_concours_300x250[0].subheadline_3 = "";
        devDynamicContent.WLV_multiText_concours_300x250[0].headline_4 = "";
        devDynamicContent.WLV_multiText_concours_300x250[0].subheadline_4 = "";
        devDynamicContent.WLV_multiText_concours_300x250[0].text_offsetY = 0;
        devDynamicContent.WLV_multiText_concours_300x250[0].text_gap_offsetY = 0;
        devDynamicContent.WLV_multiText_concours_300x250[0].pic1 = {};
        devDynamicContent.WLV_multiText_concours_300x250[0].pic1.Url = "";
        devDynamicContent.WLV_multiText_concours_300x250[0].pic2 = {};
        devDynamicContent.WLV_multiText_concours_300x250[0].pic2.Url = "";
        devDynamicContent.WLV_multiText_concours_300x250[0].pic3 = {};
        devDynamicContent.WLV_multiText_concours_300x250[0].pic3.Url = ""; 
        devDynamicContent.WLV_multiText_concours_300x250[0].pic4 = {};
        devDynamicContent.WLV_multiText_concours_300x250[0].pic4.Url = "";

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
            p1 = select('#p1'),
            p2 = select('#p2'),
            p3 = select('#p3'),

            text1_arr = [select('#text11'),select('#text12'),select('#text13'),select('#text14'),select('#text15')],
            text21 = select('#text21'), 
            text22 = select('#text22'),    
            text23 = select('#text23'),   
            mail_arr = [
                select('#icon_mail1'),
                select('#icon_mail2'),
                select('#icon_mail3'),
            ],
            bug_box1 = select('#bug_box1'),
            bug_box2 = select('#bug_box2'),
            text3_arr = [select('#text32'),select('#text33'),select('#text34'),select('#divider'),select('#text35')],
            logo_blueAlly = select('#logo_blueAlly'),
            logo_barracuda = select('#logo_barracuda'),
            //
            bgexit = select('#bgexit'),
            cta = select('#cta'), 
            cta2 = select('#cta2'), 
            colors ={},
            glowNow = false,
            tl = gsap.timeline();
            /************** Modify VARIABLES ********************/
            colors.cta_bg_over = "#fff";
            colors.cta_text_over = "#4a8b2c";
            colors.cta_border_over = "#4a8b2c";
            colors.cta_bg = "#4a8b2c";
            colors.cta_text = "#fff";
            colors.cta_border = "#82c341"; 
/***************** //end of VARIABLES  *****************/
           
/******************  MAIN ANIMATION  ******************/ 
		function animate() { 
            tl
            .to(bannerCover, {duration:1, alpha:0, ease:"none"},">0.0")
            .staggerFrom(text1_arr, 0.5, {alpha: 0, scale:"0.65", ease:"back.out(4.2)"}, 0.1, "<0.4")
            .to(p1, {duration:0.6, alpha: 1,x:"-=300" ,ease:"power4.out"}, ">0.4")
            //// exit ////
            .from(text21, 0.5, {alpha: 0, scale:"0.65", ease:"back.out(4.2)"}, ">-0.15")
            .from(icon_fish, {duration:0.5,y:"-=550" ,ease:"back.out(1.7)"}, ">-0.2")
            .to(icon_fish, {duration:1.2,y:"-=10" }, ">0.1")
            .to(icon_fish, {duration:0.4,y:"-=550" ,ease:"back.in(1.7)"}, ">0.1")
            //// spam ////
            .from(text22, 0.5, {alpha: 0, scale:"0.65", ease:"back.out(4.2)"}, ">0")
            .staggerFrom(mail_arr, 0.5, {alpha: 0, scale:"0.65", ease:"back.out(4.2)"}, 0.1, ">0")
            .staggerTo(mail_arr, 0.4, {alpha: 0, scale:"0", ease:"back.in(2.8)"}, 0.07, ">0.0")
            //// malware ////
            .staggerFrom(text23, 0.5, {alpha: 0, scale:"0.65", ease:"back.out(4.2)"}, 0.1, ">0")
            .from(bug_box1, 0.5, {rotate:"+=90", ease:"none"}, ">0")
            .from(bug_box2, 0.5, {rotate:"+=90", ease:"none"}, "<0.1")
            .to(p2, {duration:0.6, alpha: 1,x:"-=300" ,ease:"power4.out"}, ">0.2")
            // part 3 //
            .from(logo_barracuda, {duration:0.9, alpha: 0,ease:"none"}, "<0.4")
            .staggerFrom(text3_arr, 0.5, {alpha: 0, scale:"0.65", ease:"back.out(4.2)"}, 0.1, "<0.1")
            .from(cta, {duration:0.9, alpha: 0, scale:0.7,onComplete: function(){ glowNow=true}, ease:"back.out(2.2)"}, "<0.8")
            .from(logo_blueAlly, {duration:0.9, alpha: 0,ease:"none"}, "<0.5")
		}
        animate()
       
/******************  //end of MAIN ANIMATION  ******************/    
    
        
/********************  EVENTS  ********************/ 
        bgexit.addEventListener('mouseover', (e) => {
            console.log("over bgexit")
            gsap.to(cta, {duration:0.3, 
                background: colors.cta_bg_over,
                color: colors.cta_text_over,
                borderColor: colors.cta_border_over,
                ease:"none"}  
            );
            if(glowNow){
                gsap.to(cta2, {duration:0.3, opacity: 1} );
            }
        });
        bgexit.addEventListener('mouseout', (e) => {
            console.log("out")
            gsap.to(cta, {duration:0.3, 
                background: colors.cta_bg,
                color: colors.cta_text, 
                borderColor: colors.cta_border,
                ease:"none"}  
            )  
            if(glowNow){
                gsap.to(cta2, {duration:0.3,  opacity: 0} );
            }
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