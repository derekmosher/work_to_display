
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
var tl = new TimelineLite();

//add a from() tween at the beginning of the timline
tl.to(ad_cover, 1.5, {
    opacity:0
});

tl.from(text1, 1.5, {
    left:-200,
    ease:Expo.easeOut,
}, "-=1.5"  );
tl.from(book, 1.5, {
    left:336,
    ease:Expo.easeOut,
}, "-=1.5"  );

tl.from(text2, 1.5, {
    left:-200,
    ease:Expo.easeOut,
}, "-=1.3"  );

tl.from(logos, 1.0, {
    opacity:0
});
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



