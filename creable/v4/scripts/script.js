
//******************************************************
//******************************************************
// AD VARIABLES
//******************************************************
//******************************************************

/* Intro Ad Elements */
var cta_1 = document.getElementById('cta_1');
var cta_2 = document.getElementById('cta_2');
var logos = document.getElementById('logos');
var ad_cover = document.getElementById('ad_cover');
var flash = document.getElementById('flash');



//******************************************************
//******************************************************
// INITIAL AD SETUP
//******************************************************
//******************************************************


/* Start Ad */
function startAd()
{
    adDiv = document.getElementById("ad");
    addEventListeners();
}

/* Init EventListeners */
function addEventListeners()
{
    document.getElementById("cta").addEventListener("mouseover", mouseover_cta);
    document.getElementById("cta").addEventListener("mouseout", mouseout_cta);   
    document.getElementById("ad_clickthrough").addEventListener("click", btn_clickTag1);
    document.getElementById("cta").addEventListener("click", btn_clickTag1);
}



//******************************************************
//******************************************************
// INTO ANIMATION
//******************************************************
//******************************************************

/* Intro Ad Animation */
function initAdAni()
{
    // unhide 'AD_COVER' after page loads
    // document.getElementById("AD_COVER").style.display = 'none';


   //instantiate a TimelineLite    

var yoyo2 = new TimelineMax({repeat:9, yoyo:true});  
yoyo2.to(floating, 2, {
     y:10,
     ease:Power1.easeInOut,
     delay:0
});
yoyo2.to(floating_text, 2, {
     y:10,
     ease:Power1.easeInOut,
     delay:0
}, "-=1.9"  );
yoyo2.to(water_text, 2, {
     y:10,
     ease:Power1.easeInOut,
     delay:0
}, "-=1.9"  );



var yoyo = new TimelineMax({repeat:9, yoyo:true});  
yoyo.to(buoy, 1.5, {
     rotation:15,
    // y:20,
     ease:Power3.easeInOut,
     delay:0
 });




var tl = new TimelineLite();

//add a from() tween at the beginning of the timline
tl.to(ad_cover, 1.5, {
    opacity:0,
    y:0,

    delay:0.2
});

tl.to(buoy_group, 1.5, {
    scale:0.5,
    delay:4.2,
    x:-35,
    y:-35,
    ease:Power3.easeInOut
});
tl.to(buoy, 1.5, {
    // x:-40,
    scale:0.8,
    x:15,
    y:-65,
    ease:Power3.easeInOut
}, "-=1.5"  );
tl.to(buoy_water, 1.5, {
    // x:-40,
    scale:0.8,
    x:20,
    y:-60,
    ease:Power3.easeInOut
}, "-=1.5"  );



 tl.from(floating_text, 1.5, {
    x:-336,
    ease:Expo.easeOut,
}, "-=0.1"  );
tl.from(water_text, 1.5, {
     x:336,
     ease:Expo.easeOut,
}, "-=1.4"  );


tl.to(flash, 0.01, {
    opacity:1,
    delay:4
});
tl.to(flash, 1.0, {
    opacity:0,
});

tl.to(floating, 0.05, {
    opacity:0,
}, "-=1.0"  );
tl.to(floating_text, 0.05, {
    opacity:0,
}, "-=1.0"  );
tl.to(water_text, 0.05, {
    opacity:0,
}, "-=1.0"  );
tl.to(aqua, 0.05, {
    opacity:0,
}, "-=1.0"  );



tl.from(book, 1.0, {
    opacity:0,
    top:-50,
    scale:2,
    left:-20,
    ease:Expo.easeOut,
}, "-=1.0"  );



tl.from(text1, 1.5, {
    left:-100,
    opacity:0,
    ease:Expo.easeOut,
}, "-=0.5"  );
tl.from(text2, 1.5, {
    opacity:0,
    left:-100,
    ease:Expo.easeOut,
}, "-=1.3"  );

tl.from(logos, 1.0, {
    opacity:0
}, "-=0.5"  );
tl.from(cta, 1.0, {
    opacity:0
}, "-=0.5"  );


// //add another tween immediately after
// tl.from(subhead, 0.5, {left:-100, opacity:0});

// //use position parameter "+=0.5" to schedule next tween 0.5 seconds after previous tweens end
// tl.from(feature, 0.5, {scale:.5, autoAlpha:0}, "+=0.5");

// //use position parameter "-=0.5" to schedule next tween 0.25 seconds before previous tweens end.
// //great for overlapping
// tl.from(description, 0.5, {left:100, autoAlpha:0}, "-=0.25");

// //add a label 0.5 seconds later to mark the placement of the next tween
// tl.add("stagger", "+=0.5")


}



//******************************************************
//******************************************************
function btn_clickTag1(event){
    window.open(window.clickTag1);
}


/* Main Click-through */
function clickthrough()
{
    // console.log("clickthrough")

}


function mouseover_cta()
{
     TweenMax.to( cta_2, 1, {
        opacity:1,
        ease:Expo.easeOut,
        delay:0
    });
      TweenMax.to( cta_1, 1, {
        opacity:0,
        ease:Expo.easeOut,
        delay:0
    });
}
function mouseout_cta()
{
     TweenMax.to( cta_2, 1, {
        opacity:0,
        ease:Expo.easeOut,
        delay:0
    });
      TweenMax.to( cta_1, 1, {
        opacity:1,
        ease:Expo.easeOut,
        delay:0
    });
}

//******************************************************
//******************************************************
// EXECUTE SCRIPT.JS WHEN WINDOW LOADS
//******************************************************
//******************************************************

window.addEventListener("load", startAd);



