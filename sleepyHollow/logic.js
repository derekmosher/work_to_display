
var creative = {};
var tlm = new TimelineMax();
var tlm_leaf = new TimelineMax();

function preInit() {
  setupDom();
  init();
}

//Initializes the ad components:
function setupDom() {
  creative.bg = document.getElementById('bg');
  creative.t1a = document.getElementById('t1a');
  creative.t1b = document.getElementById('t1b');
  creative.cta = document.getElementById('cta');
  creative.cta_on = document.getElementById('cta_on');
  creative.cta_off = document.getElementById('cta_off');
  creative.titleGroup = document.getElementById('titleGroup');
  creative.title_p1 = document.getElementById('title_p1');
  creative.title_p2 = document.getElementById('title_p2');
  creative.title_tag = document.getElementById('title_tag');
  creative.title_tag2 = document.getElementById('title_tag2');

  creative.dvdGroup = document.getElementById('dvdGroup');
  creative.dvd = document.getElementById('dvd');
  creative.text_onlyOn = document.getElementById('text_onlyOn');
  creative.text_onlyOn2 = document.getElementById('text_onlyOn2');
  creative.text_onlyOn3 = document.getElementById('text_onlyOn3');
  creative.t2a = document.getElementById('t2a');
  creative.t2b = document.getElementById('t2b');

  creative.manBox = document.getElementById('manBox');
  creative.girlBox = document.getElementById('girlBox');
  creative.man = document.getElementById('man');
  creative.girl = document.getElementById('girl');
  creative.t3Group = document.getElementById('t3Group');
  creative.t3_text = document.getElementById('t3_text');
  creative.t3_text2 = document.getElementById('t3_text2');
  creative.t3_text3 = document.getElementById('t3_text3');

  creative.bg2 = document.getElementById('bg2');
  creative.t4_text = document.getElementById('t4_text');
  creative.t4_dvd = document.getElementById('t4_dvd');
  creative.t4a = document.getElementById('t4a');
  creative.t4b = document.getElementById('t4b');
  creative.legal = document.getElementById('legal');

  creative.leafContainer = document.getElementById("leafContainer")
  //TOP
  creative.blackCover = document.getElementById('blackCover');
  creative.whiteFlash = document.getElementById('whiteFlash');
  creative.exit = document.getElementById('exit');
  creative.replay = document.getElementById('replay');

  //vars:
  creative.onEndframe = false;
  creative.rolloverAnimating = false;
}

 //init:
function init() {
  addListeners();
  goAnimation();
}


//-----------------------------------
// listeners 
//-----------------------------------
  function addListeners() {
    creative.exit.addEventListener('click', onClickBanner);
    creative.exit.addEventListener('mouseout', onOutBanner);
    creative.exit.addEventListener('mouseover', onOverBanner);
    // creative.replay.addEventListener("mouseenter", onOverHandler);//mouseEnter better than mouseOver
    // creative.replay.addEventListener('click', onReplayHandler, false);
    // creative.replay.addEventListener('mouseover', onOverReplay, false);

  }

  function onOverBanner() {

      if(creative.onEndframe == false)return;
    
    // if(creative.onEndframe == true && creative.rolloverAnimating == false){
      TweenMax.to(creative.cta_off, 0.4, { 
            opacity:0,
            ease:Power0.none
      });
      TweenMax.to(creative.cta_on, 0.4, { 
            opacity:1,
            ease:Power0.none
      });

      repeatMe = 1
      startfallLeaf()
 
  }

  function onOutBanner() {
      if(creative.onEndframe == false)return;

        TweenMax.to(creative.cta_on, 0.3, { 
              opacity:0,
              ease:Power0.none
        });
        TweenMax.to(creative.cta_off, 0.3, { 
              opacity:1,
              ease:Power0.none
        });
  }

  function rolloverAnimatingFalse() {
      creative.rolloverAnimating = false;
  }
  function setEndframeTrue(){
    creative.onEndframe = true;
  }

  function onClickBanner() {
    //Enabler.exit('BackgroundExit');
    console.log('Exit to' + clickTag);
    // window.open(clickTag, '_blank');
  }

function scaleMe(me,amt){
    TweenMax.to(me, 2, { 
          scaleX:amt,
          scaleY:amt,
              ease:Power1.none
        });
}

//-----------------------------------
//  Leaf
//-----------------------------------
  var leafContainer = document.getElementById("leafContainer"); 
  var total = 10;
  var w = 300;
  var h = 250;
  var repeatMe = -1;
  //TweenLite.set(document.getElementById("leafContainer"),{perspective:300})

  function R(min,max) {return min+Math.random()*(max-min)};

 function startfallLeaf(){
      
      console.log('fall')

     for (i=0; i<total; i++){ 
         var Div = document.createElement('div');
         TweenLite.set(Div,{
            attr:{class:'dot'},
            x:R(0,w),
            // y:R(-200,-150),
            z:R(-200,200)
          });

        // console.log(y:R(-200,-150));
         leafContainer.appendChild(Div);
         animm(Div);
     }
  }
 
 function animm(elm){   

    var tween1 = TweenMax.to(elm,R(6,15),{
          y:h+100,
          ease:Linear.easeNone,
          opacity:0.5,
          repeat:repeatMe,
          delay:-15
    });
    var tween2 = TweenMax.to(elm,R(4,8),{
          x:'+=100',
          rotationZ:R(0,180),
          repeat:repeatMe,
          yoyo:true,
          ease:Sine.easeInOut
    });
    var tween3 = TweenMax.to(elm,R(2,8),{
        rotationX:R(0,360),
        rotationY:R(0,360),
        repeat:repeatMe,
        yoyo:true,
        ease:Sine.easeInOut,
        delay:-5
    });

    TweenMax.delayedCall(6.5, logMe, ["param1", "param2"]);

    function logMe(){
        TweenMax.to(elm,0.2,{
            opacity:0,
            onComplete:killAllLeaf
        });
      }
    function killAllLeaf(){
        console.log("kill")
        tween1.kill();
        tween2.kill();
        tween3.kill();
      }

  };




//-----------------------------------
// Animation 
//-----------------------------------

function pauseMe(){
  tlm.pause();
}
  function goAnimation() {

    startfallLeaf();

    tlm.to(creative.blackCover, 0.2, {
            opacity:0
        })
        .from(creative.t1a, 6.0, {
            scaleX:1, 
            scaleY:1,
            ease:Power1.easeInOut
        },  
           "-=0.2"
        )
        .from(creative.t1b, 6.0, {
            scaleX:1, 
            scaleY:1,
            ease:Power1.easeInOut
        },  
           "-=6.0"
        )
        .from(creative.titleGroup, 3.0, {
            scaleX:0.7, 
            scaleY:0.7,
            opacity:0.5,
            ease:Power1.easeOut
        },  
           "-=6.0"
        )
        .from(creative.title_p1, 1.0, {
            x:200,
            opacity:0,
            ease:Power4.easeInOut
        },  
           "-=6.0"
        )
        .from(creative.title_p2, 1.0, {
            x:-200,
            opacity:0,
            ease:Power4.easeInOut
        },  
           "-=6.0"
        )
        .from(creative.title_tag, 1.0, {
            x:100,
            opacity:0,
            ease:Power4.easeInOut
        },  
           "-=5.5"
        )
        .from(creative.title_tag2, 1.0, {
            x:-100,
            opacity:0,
            ease:Power4.easeInOut
        },  
           "-=5.5"
        )

 // .call(pauseMe)

        ////////////PASUE:///////////////////
        .to(creative.titleGroup, 1.0, {
            scaleX:2, 
            scaleY:2,
            opacity:0,
            ease:Power1.easeInOut
        },  
           "-=3.7"
        )
        //////////// Enter Part 2 //////////////////
        .from(creative.t2a, 2.0, {
            scaleX:0.5, 
            scaleY:0.5, 
            opacity:0,
            ease:Power1.easeInOut
        },  
           "-=4.0"
        )

        .from(creative.t2b, 2.0, {
            scaleX:0.5,  
            scaleY:0.5, 
            opacity:0,
            ease:Power1.easeInOut
        },  
           "-=4"
        )
     
        .from(creative.dvdGroup, 2.0, {
            scaleX:0.5, 
            scaleY:0.5, 
            opacity:0,
            ease:Power1.easeOut

        },  
           "-=3.0"
        )
    
        .from(creative.dvd, 1.0, {
            x:200,
            opacity:0,
            ease:Power4.easeOut,
            onComplete:scaleMe,
            onCompleteParams:[creative.dvd, "+=0.07"]
        },  
           "-=3.0"
        )

        .from(creative.text_onlyOn, 1.0, {
            x:-200,
            opacity:0,
            ease:Power4.easeOut,
            onComplete:scaleMe,
            onCompleteParams:[text_onlyOn, "+=0.07"]
        },  
           "-=2.8"
        )
        .from(creative.text_onlyOn2, 1.0, {
            x:-200,
            opacity:0,
            ease:Power4.easeOut,
            onComplete:scaleMe,
            onCompleteParams:[text_onlyOn2, "+=0.07"]
        },  
           "-=2.7"
        )
        .from(creative.text_onlyOn3, 1.0, {
            x:-200,
            opacity:0,
            ease:Power4.easeOut,
            onComplete:scaleMe,
            onCompleteParams:[text_onlyOn3, "+=0.07"]
        },  
           "-=2.6"
        )


        ////////////////////PAUSE: Then exit
        .to(creative.dvdGroup, 2.0, {
            scaleX:3, 
            scaleY:3, 
            opacity:0,
            ease:Power1.easeInOut
        },  
           "-=0.5"
        )
        .to(creative.dvd, 2.0, {
            x:100,
            ease:Power1.easeInOut
        },  
           "-=2"
        )
        .to(creative.text_onlyOn, 1.0, {
            x:-100,
            ease:Power1.easeInOut
        },  
           "-=2"
        )
        .to(creative.text_onlyOn2, 1.0, {
            x:-100,
            ease:Power1.easeInOut
        },  
           "-=1.9"
        )
        .to(creative.text_onlyOn3, 1.0, {
            x:-100,
            ease:Power1.easeInOut
        },  
           "-=1.8"
        )
        .to(creative.t2a, 2.0, {
            y:300,
            x:-600,
            scaleX:3, 
            scaleY:3, 
            opacity:0,
            ease:Power1.easeInOut
        },  
           "-=2.0"
        )
        .to(creative.t2b, 2.0, {
            y:-300,
            x:600,
            scaleX:3,  
            scaleY:3, 
            opacity:0,
            ease:Power1.easeInOut
        },  
           "-=2"
        )
        ////////////////////Part 3 - Enter
        .from(creative.man, 2.0, {
            y:-150,
            // x:-600,
            scaleX:0.5, 
            scaleY:0.5,  
            opacity:0,
            ease:Power1.easeInOut,
            onComplete:scaleMe,
            onCompleteParams:[creative.man, "+=0.02"]
        },  
           "-=2.0"
        )
        .from(creative.girl, 2.0, {
            y:-150,
            // x:600,
            scaleX:0.5,   
            scaleY:0.5,  
            opacity:0,
            ease:Power1.easeInOut,
            onComplete:scaleMe,
            onCompleteParams:[creative.girl, "+=0.02"]
        },  
           "-=2"
        )
        .from(creative.t3Group, 2.0, {
            scaleX:0.5,   
            scaleY:0.5,  
            ease:Power1.easeOut
        },  
           "-=0.5"
        )
        .from(creative.t3_text, 0.8, {
            x:100, 
            opacity:0,
            ease:Power4.easeOut
        },  
           "-=2"
        )
        .from(creative.t3_text2, 0.8, {
            x:100,
            opacity:0,
            ease:Power4.easeOut
        },  
           "-=1.8"
        )
        .from(creative.t3_text3, 0.8, {
            x:100,
            opacity:0,
            ease:Power4.easeOut
        },  
           "-=1.6"
        )
        ///////////pause: and exit///////////
        .to(creative.man, 0.6, {
            y:650,
            x:200,
            scaleX:3, 
            scaleY:3,  
            ease:Power1.easeInOut
        },  
           "+=0.1"
        )
        .to(creative.girl, 0.6, {
            y:650,
            x:-200,
            scaleX:3,   
            scaleY:3,  
            ease:Power1.easeInOut
        },  
           "-=0.6"
        )
        .to(creative.t3_text, 0.6, {

            opacity:0,
            ease:Power1.easeOut
        },  
           "-=0.6"
        )
        .to(creative.t3_text2, 0.6, {
            opacity:0,
            ease:Power1.easeOut
        },  
           "-=0.6"
        )
        .to(creative.t3_text3, 0.6, {
            opacity:0,
            ease:Power1.easeOut
        },  
           "-=0.6"
        )
        //////////////////////Endframe//////////////////
        .from(creative.bg2, 2.0, {
            scaleX:2,   
            scaleY:2, 
            opacity:0,
            ease:Power3.easeOut
        },  
           "-=0"
        )
        .from(creative.t4a, 2, {
            // y:45,
            scaleX:0.5,   
            scaleY:0.5,  
            opacity:0,
            ease:Power3.easeOut
        },  
           "-=2.0"
        )
          .from(creative.t4b, 2, {
            y:-45,
            scaleX:0.5,   
            scaleY:0.5,  
            opacity:0,
            ease:Power3.easeOut
        },  
           "-=2.0"
        )
        .from(creative.t4_dvd, 0.6, {
            scaleX:0.5,   
            scaleY:0.5,  
            opacity:0,
            ease:Power3.easeOut
        },  
           "-=1.5"
        )
        .from(creative.t4_text, 0.6, {
            opacity:0
        },  
           "-=1.3"
        )
       .from(creative.cta, 0.6, {
            scaleX:0.5,   
            scaleY:0.5,  
            opacity:0,
            ease:Back.easeOut
        },  
           "-=1.1"
        )
       .from(creative.legal, 0.6, {
            opacity:0
        },  
           "-=0"
        )
       .call(setEndframeTrue)
        // .play(-1)


  }

  function onFinishTween() {
        console.log('fin part 1' );    
  }
 




//-----------------------------------
// ONLOAD WINDOW
//-----------------------------------
window.addEventListener('load', preInit);
