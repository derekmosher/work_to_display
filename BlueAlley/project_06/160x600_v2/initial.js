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

            text11 = [select('#text11')],
            text21 = select('#text21'), 
            text31 = select('#text31'), 
            text41 = select('#text41'), 
            text42 = select('#text42'), 

            student_arr = [
                select('#s1'),
                select('#s2'),
                select('#s3'),
                select('#s4'),
                select('#s5'),
            ],
            teacher_arr = [
                select('#teacher'),
                select('#teacher_chart'),
                select('#teacher_board'),
            ],
            idevices_arr = [
                select('#iphone'),
                select('#imac'),
                select('#ipad'),
            ],
            wire = select('#wire'),
            wire2 = select('#wire2'),
            logo_blueAlly = select('#logo_blueAlly'),
            logo_cisco = select('#logo_cisco'),
            //
            bgexit = select('#bgexit'),
            cta = select('#cta'), 
            // cta2 = select('#cta2'), 
            colors ={},
            tl = gsap.timeline();
            /************** Modify VARIABLES ********************/
            colors.cta_bg_over = "#f1f5f7";
            colors.cta_text_over = "#0A60FF"
            colors.cta_border_over ="#0A60FF"
            colors.cta_bg = "#0A60FF"
            colors.cta_text = "#f1f5f7";
            colors.cta_border = "#0A60FF"
/***************** //end of VARIABLES  *****************/
           
/******************  MAIN ANIMATION  ******************/ 
		function animate() { 
            tl
             // In P1
            .to(bannerCover, {duration:1, alpha:0, ease:"none"},">0.0")
            .staggerFrom(student_arr, 1.0, {alpha: 1, scale:"1",x:"-210px", ease:"power4.out"}, 0.1, ">0")
            .from(teacher_arr, 0.7, {alpha: 1, scale:"1",x:"300px", ease:"power4.out"}, "<0.2")
            .from(text11, 0.7, {alpha: 0, scale:"0.65", ease:"back.out(2.2)"}, "<0.3")
            // Out P1
            .to(text11, 0.7, {alpha: 0, scale:"0.65", ease:"back.in(2.2)"}, ">1.2")
            .to(teacher_arr, 0.8, {alpha: 1, scale:"1",x:"-300px", ease:"power4.out"}, ">0.0")
            .to(student_arr, 0.8, {alpha: 1, scale:"1",x:"-210px", ease:"power4.out"},  "<0.0")
            // .to(p1, 0.05, {alpha: 0, ease:"power4.out"},  ">0")
            

            // In P2
            .staggerFrom(idevices_arr, 0.7, {scale:"1",x:"200px", ease:"power4.out"}, 0.1, "<0.1")
            .from(network1, 0.7, {clip: "rect(600px,160px,600px,0px)", ease:"power1.out"},"<0.3")
            .from(text21, 0.7, {alpha: 0, scale:"0.65", ease:"back.out(2.2)"}, "<0.6")
           
            // Out P2 + In P3
            .to(text21, 0.7, {alpha: 0, scale:"0.65", ease:"back.in(2.2)"}, ">2")
            .from(wire2,0.5, { y:"100%", ease:"power4.out"}, "<0.6")
            .to([idevices_arr,guy, network1,network2,wire], 1.8, {y:"600px", ease:"power4.out"},"<0.4")
            .from(text31, 0.7, {alpha: 0, scale:"0.65", ease:"back.out(2.2)"}, ">-0.7")

            // Out P3
            .to([text31,guy,network2,wire], 0.4, {alpha:0, ease:"power1.out"},">1.7")
            .to([p3], 0.4, {alpha:0, ease:"power1.out"},"<0.4")

            // In P4
            .from(pic, 0.7, {alpha: 0, ease:"power1.out"}, "<0.2")
            .from(text41, 0.7, {alpha: 0, scale:"0.65", ease:"back.out(2.2)"}, "<0.2")
            .from(text42, 0.7, {alpha: 0, scale:"0.65", ease:"back.out(2.2)"}, "<0.1")
            .from(cta, 0.7, {alpha: 0, scale:"0.65", ease:"back.out(2.2)"}, "<0.1")

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
        });
        bgexit.addEventListener('mouseout', (e) => {
            console.log("out")
            gsap.to(cta, {duration:0.3, 
                background: colors.cta_bg,
                color: colors.cta_text, 
                borderColor: colors.cta_border,
                ease:"none"}  
            )  
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