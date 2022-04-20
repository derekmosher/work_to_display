"use strict";
window.onload = function() {
	 
    //gsap blur effectd
    (function() {
        const blurProperty = gsap.utils.checkPrefix("filter"),
                blurExp = /blur\((.+)?px\)/,
                getBlurMatch = target => (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];

        gsap.registerPlugin({
            name: "blur",
            get(target) {
                return +(getBlurMatch(target)[1]) || 0;
            },
            init(target, endValue) {
                let data = this,
                      filter = gsap.getProperty(target, blurProperty),
                      endBlur = "blur(" + endValue + "px)",
                      match = getBlurMatch(target)[0];
                if (filter === "none") {
                    filter = "";
                }
                if (match) {
                    endValue = filter.substr(0, match.index) + endBlur + filter.substr(match.index + endBlur.length);
                } else {
                    endValue = filter + endBlur;
                    filter += filter ? " blur(0px)" : "blur(0px)";
                }
                data.target = target; 
                data.interp = gsap.utils.interpolate(filter, endValue); 
            },
            render(progress, data) {
                data.target.style[blurProperty] = data.interp(progress);
            }
        });
    })();
    
    
/******************** ENABLER  ********************/     
	if (Enabler.isInitialized()) {
		init();
	} else {
	  	Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
	}
	function init() {
	  	if (Enabler.isPageLoaded()) {
	    	politeInit();
	  	} else {
	    	Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
	 	}
	};
/***************** //end ofENABLER  *****************/   
    
/******************** VARIABLES  ********************/ 
	function politeInit(){		
        console.log('polit load ')

       // Dynamic Content variables and sample values
           Enabler.setProfileId(10726400);
           var devDynamicContent = {};
       
           devDynamicContent.WLV_template_02_main = [{}];
           devDynamicContent.WLV_template_02_main[0]._id = 0;
           devDynamicContent.WLV_template_02_main[0].logoIntro = false;
           devDynamicContent.WLV_template_02_main[0].headline = "Winter Escape";
           devDynamicContent.WLV_template_02_main[0].subheadline = "Save up to 20% on resort accommodations and receive $30 in daily resort credit.";
           devDynamicContent.WLV_template_02_main[0].cta = "Book Now";
           devDynamicContent.WLV_template_02_main[0].flowerColor1 = "#B7B5A5";
           devDynamicContent.WLV_template_02_main[0].flowerColor2 = "#012169";
           devDynamicContent.WLV_template_02_main[0].numPicsToShow = 2;
           devDynamicContent.WLV_template_02_160x60 = [{}];
           devDynamicContent.WLV_template_02_160x60[0]._id = 0;
           devDynamicContent.WLV_template_02_160x60[0].headline = "";
           devDynamicContent.WLV_template_02_160x60[0].subheadline = "Save up to 20%<br />on resort accommodations and receive $30 in daily resort credit.";
           devDynamicContent.WLV_template_02_160x60[0].pic1 = {};
           devDynamicContent.WLV_template_02_160x60[0].pic1.Url = "https://drive.google.com/uc?id=16SIstbXySROxA9vS6nZT82SfUXtcsNNk";
           devDynamicContent.WLV_template_02_160x60[0].pic2 = {};
           devDynamicContent.WLV_template_02_160x60[0].pic2.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_160x60[0].pic3 = {};
           devDynamicContent.WLV_template_02_160x60[0].pic3.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_160x60[0].pic4 = {};
           devDynamicContent.WLV_template_02_160x60[0].pic4.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_300x250 = [{}];
           devDynamicContent.WLV_template_02_300x250[0]._id = 0;
           devDynamicContent.WLV_template_02_300x250[0].headline = "";
           devDynamicContent.WLV_template_02_300x250[0].subheadline = "";
           devDynamicContent.WLV_template_02_300x250[0].pic1 = {};
           devDynamicContent.WLV_template_02_300x250[0].pic1.Url = "https://drive.google.com/uc?id=16SIstbXySROxA9vS6nZT82SfUXtcsNNk";
           devDynamicContent.WLV_template_02_300x250[0].pic2 = {};
           devDynamicContent.WLV_template_02_300x250[0].pic2.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_300x250[0].pic3 = {};
           devDynamicContent.WLV_template_02_300x250[0].pic3.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_300x250[0].pic4 = {};
           devDynamicContent.WLV_template_02_300x250[0].pic4.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_300x600 = [{}];
           devDynamicContent.WLV_template_02_300x600[0]._id = 0;
           devDynamicContent.WLV_template_02_300x600[0].headline = "";
           devDynamicContent.WLV_template_02_300x600[0].subheadline = "Save up to 20% on resort accommodations and receive $30 in daily resort credit.";
           devDynamicContent.WLV_template_02_300x600[0].pic1 = {};
           devDynamicContent.WLV_template_02_300x600[0].pic1.Url = "https://drive.google.com/uc?id=16SIstbXySROxA9vS6nZT82SfUXtcsNNk";
           devDynamicContent.WLV_template_02_300x600[0].pic2 = {};
           devDynamicContent.WLV_template_02_300x600[0].pic2.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_300x600[0].pic3 = {};
           devDynamicContent.WLV_template_02_300x600[0].pic3.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_300x600[0].pic4 = {};
           devDynamicContent.WLV_template_02_300x600[0].pic4.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_728x90 = [{}];
           devDynamicContent.WLV_template_02_728x90[0]._id = 0;
           devDynamicContent.WLV_template_02_728x90[0].headline ="";
           devDynamicContent.WLV_template_02_728x90[0].subheadline = "Save up to 20% on resort accommodations and receive $30 in daily resort credit.";
           devDynamicContent.WLV_template_02_728x90[0].pic1 = {};
           devDynamicContent.WLV_template_02_728x90[0].pic1.Url = "https://drive.google.com/uc?id=16SIstbXySROxA9vS6nZT82SfUXtcsNNk";
           devDynamicContent.WLV_template_02_728x90[0].pic2 = {};
           devDynamicContent.WLV_template_02_728x90[0].pic2.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_728x90[0].pic3 = {};
           devDynamicContent.WLV_template_02_728x90[0].pic3.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_728x90[0].pic4 = {};
           devDynamicContent.WLV_template_02_728x90[0].pic4.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_970x250 = [{}];
           devDynamicContent.WLV_template_02_970x250[0]._id = 0;
           devDynamicContent.WLV_template_02_970x250[0].headline = "";
           devDynamicContent.WLV_template_02_970x250[0].subheadline = "Save up to 20% on resort accommodations and receive $30 in daily resort credit.";
           devDynamicContent.WLV_template_02_970x250[0].pic1 = {};
           devDynamicContent.WLV_template_02_970x250[0].pic1.Url = "https://drive.google.com/uc?id=16SIstbXySROxA9vS6nZT82SfUXtcsNNk";
           devDynamicContent.WLV_template_02_970x250[0].pic2 = {};
           devDynamicContent.WLV_template_02_970x250[0].pic2.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_970x250[0].pic3 = {};
           devDynamicContent.WLV_template_02_970x250[0].pic3.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_970x250[0].pic4 = {};
           devDynamicContent.WLV_template_02_970x250[0].pic4.Url = "https://drive.google.com/uc?id=1QH_n4BwWIULNaeDthkIDnqDntbiw04Wa";
           devDynamicContent.WLV_template_02_320x50 = [{}];
           devDynamicContent.WLV_template_02_320x50[0]._id = 0;
           devDynamicContent.WLV_template_02_320x50[0].headline = "";
           devDynamicContent.WLV_template_02_320x50[0].subheadline = "Save up to 20% & get a $30 credit.";
           Enabler.setDevDynamicContent(devDynamicContent);
     
        // * You may access the variables in the following manner
        // * AFTER the Studio Enabler is initialized.
        // * var logoIntro = dynamicContent.WLV_template_02_main[0].logoIntro;
        // * Note: be sure to use "dynamicContent", not "devDynamicContent"
        // * Note: be sure to use ExitOverride to create your exit URL dynamically; follow the instructions on our Help center: https://support.google.com/richmedia/answer/2664807
     


        var select = function(s) {
                return document.querySelector(s);
            },
            selectAll = function(s) {
                return document.querySelectorAll(s);
            },
            bannerCover = select('#bannerCover'),
            logo = select('#logo'), //logo
            letter_w = select('#w'),
            letter_y = select('#y'),
            letter_nn = select('#nn'),
            lasvegas = select('#lasvegas'),
            sign_r = select('#r'),
            text_head  = select('#textBox1'),
            text_subHead  = select('#textBox2'),
            imgs = [],
            pics = [],
            dc = dynamicContent.WLV_template_02_main[0] ,
            dcSize = dynamicContent.WLV_template_02_300x250[0],

            flowerWraps = selectAll('.flowerWrap'),
            plantWraps = selectAll('.plantWrap'),
            plants = selectAll('.plant'),
            flowers = selectAll('.flower'),
            cta = select('#cta'),
            ///
            numPicsToShow = dc.numPicsToShow,
            logoIntro = dc.logoIntro,
            headline = dc.headline,
            headline_bySize = dcSize.headline,
            subheadline = dc.subheadline,
            subheadline_bySize = dcSize.subheadline,

            img1 = dcSize.pic1.Url,
            img2 = dcSize.pic2.Url,
            img3 = dcSize.pic3.Url,
            img4 = dcSize.pic4.Url,
            tl = gsap.timeline();

            if ( numPicsToShow >=1 ) pics.push( img1 );
            if ( numPicsToShow >=2 ) pics.push( img2 ) ;
            if ( numPicsToShow >=3 ) pics.push( img3 ) ;
            if ( numPicsToShow >=4 ) pics.push( img4 ) ;

/***************** //end of VARIABLES  *****************/
 
        //Assign imported Text to HTML Divs:
        cta.innerHTML = dc.cta;
        text_head.innerHTML = ( doesValueExist(headline_bySize) ) ? headline_bySize : headline;
        text_subHead.innerHTML =  ( doesValueExist(subheadline_bySize) ) ? subheadline_bySize  : subheadline;
        //Set flower colors:
        gsap.set(flowers[0], {fill: dc.flowerColor1 });
        gsap.set(flowers[1], {fill: dc.flowerColor2 });
        
        /*******  PRELOADING IMAGES  *****/      
		function preloadImages(srcs, callback) {
		    var img;
		    var remaining = srcs.length;
		    for(var i = 0; i < srcs.length; i++) {
                
		        img = new Image();
		        img.onload = function() {
		            --remaining;
		            if (remaining <= 0) {
		                callback();
		            }
		        };
		        img.src = srcs[i];               
                imgs[i] = img;
		    }
		}
		preloadImages(pics, imagesPreloaded);

        function doesValueExist(me) {
            var myValue = me.replace(/^\s+/, '').replace(/\s+$/, '');
            var existStatus = (myValue === '')? false : true;
            return existStatus
        }   

		function imagesPreloaded() {
            for(var i = 0; i < imgs.length; i++) {
                var div = document.createElement('div');
                div.className = "imageDiv";
                div.style.background = "url(" + imgs[i].src + ") no-repeat";
                div.style.backgroundPosition = "50% 50%";
                //if (i === 1) div.style.backgroundPosition = "50% 34%";
                div.style.backgroundSize = "cover";
                imagesWrap.appendChild(div);
            }
            // animate()
            gsap.delayedCall(0.5,animate); 
		}
        function run (){  
            //fitBox.run(pad, centerOn, textRatio) 
            //something is not Always getting loaded quickly resulting in positioning errors. 
            //so the hack it slight delay before calling this function
            fitBox.run(3,0.6,65) ; //(pad, centerOn, textRatio) 
       }
        //// RUN ////
        gsap.delayedCall(0.4,run); 
        gsap.registerPlugin(DrawSVGPlugin);
       // fitBox.run(3,0.6,65) ; //(pad, centerOn, textRatio) 
        
        
/******************  MAIN ANIMATION  ******************/ 
		function animate() { 
            console.log('animate')
            
            gsap.registerEffect({
                name: "fadeIn",
                effect: (targets, config) => {
                    var tlEffect = gsap.timeline();
                    tlEffect.from(targets, {duration: config.duration, y:config.y, force3D:true, rotation: 0.01, stagger:config.stagger, ease:"power2"})
                    .from(targets, {duration: config.duration, stagger:config.stagger, alpha:0, ease:"none"}, "<")
                    return tlEffect;
                },
                defaults: {duration: 1.5, y:"-=7", stagger:4.5},
                extendTimeline: true,
            });
            
            gsap.to(plantWraps, {duration:25, rotation:"+=20", ease:"none"})
            gsap.to(flowerWraps, {duration:25, rotation:"+=100", ease:"none"})
            
            var imageDivs = selectAll('.imageDiv');
            // logoIntro = false;

			tl
            .to(bannerCover, {duration:0.7, alpha:0, ease:"none"})
            
            .from(plants, {duration:3, drawSVG:"50% 50%", ease:"sine.inOut"}, "<")
            .from(flowers, {duration:2, alpha:0, ease:"none"}, "<")
            
            if(logoIntro) {
                tl
                .from(letter_w, {duration:0.5, drawSVG: 0, ease:"sine.in"}, "<")
                .from(letter_y, {duration:0.3, drawSVG: 0, ease:"sine.in"}, ">")
                .from(letter_nn, {duration:0.8, drawSVG: 0, ease:"sine.inOut"}, ">")
                .from(lasvegas, {duration:0.7, y:"-=10", alpha: 0, ease:"sine"}, ">")
                .from(sign_r, {duration:0.5, alpha: 0, ease:"none"}, "<")

                .to(logo, {duration:0.7, alpha:0, ease:"none"}, ">1")
                .set(logo, {scale: 0.37, y:99, x:-60}, ">")
            } else {
                tl
                .set(logo, {scale: 0.37, alpha:0,y:99, x:-60}, "<")
            }
            
            tl
            .from(imageDivs, {duration:1.3, stagger:4, alpha:0, blur:10, force3D:true, rotation: 0.01, ease:"none"}, "<")
          
            .fadeIn(text_head, "<0.4")
            .fadeIn(text_subHead,{y:"0", duration: 1,},"<0.6")
            .to(logo, {duration:1, alpha:1, ease:"none"}, "<0.4")
            .from(cta, {duration:0.8, alpha: 0, ease:"none"}, "<")
            .from(cta, {duration:1.6, rotateX:90, ease:"power2"}, "<")  
		}

/******************  //end of MAIN ANIMATION  ******************/    
    
        
/********************  EVENTS  ********************/ 
        let type = ((Modernizr.touchevents)&&(!isChrome)) ? 'touchend' : 'click',
        clickable = selectAll('.clickable');

        clickable.forEach(element => element.addEventListener(type, function(e) {
        Enabler.exit('Exit');
        return false;
        }, false));
	};
/****************** //end of  EVENTS  ******************/   
   
}