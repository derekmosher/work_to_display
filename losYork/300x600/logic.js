var T = {};
var gdc = {};
//gsap.registerPlugin(SplitText);

function preInit() {
  console.log("preInit()");
  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener( studio.events.StudioEvent.INIT,init);
  }
}
function init() {
  // Polite loading
 // if (Enabler.isPageLoaded()) {
   startAd();
 // }else {
  // Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, startAd);
  //}
}
function startAd() {
   // getDynamicContent();
    setupDom();
    addListeners();
   // loadimages();
 }

//Initializes the ad components:
function setupDom() {
  T.banner = document.getElementById('main-container').getBoundingClientRect();
  console.log('banner = ' + T.banner.height, T.banner.width);
  T.bannerCover = document.getElementById('bannerCover');
  T.bg = document.getElementById('bg')

  // T.wall = document.getElementById('wall')
  T.motoDot = document.getElementById('motoDot');
  centerMeX(T.motoDot); 
  centerMeY(T.motoDot);
  T.motoLogo = document.getElementById('motoLogo')
  centerMeX(T.motoLogo); 
  centerMeY(T.motoLogo);

  T.smokeArr = [
      document.getElementById('canvas'),
      document.getElementById('canvasBlue')
  ]

  T.phone0 = document.getElementById('phone0')
  T.textCam = document.getElementById('textCam')
  centerMeX(T.textCam); 
  // centerMeY(T.textCam)
  T.split_txtCam = new SplitText(T.textCam,{type:"lines"});
  //
  T.txt_beast = document.getElementById('txt_beast')
  centerMeX(T.txt_beast); 
  centerMeY(T.txt_beast); 

  // T.txt_beastObj = document.getElementById('txt_beast').getBoundingClientRect();
  // T.txt_beastGrp = document.getElementById('txt_beastGrp')

  // centerMeX(T.txt_beast); 
  // centerMeY(T.txt_beast)
  // T.splitBeast = new SplitText(T.txt_beast,{type:"lines"});



  // TweenMax.set(T.motoDot, {transformOrigin:"50% 50%"});
  T.phoneGrp = document.getElementById('phone')
  T.phone1 = document.getElementById('phone1')
  T.phone2 = document.getElementById('phone2')

  T.motoLogo2 = document.getElementById('motoLogo2')
  //
  // T.txt_beast = document.getElementById('txt_beast')

  //
  goAnimation();
}
//-----------------------------------
// listeners 
//-----------------------------------
  function addListeners() {
    console.log("addListeners()");
    // T.exit.addEventListener('click', onExitClickHandler);
    // T.cta.addEventListener('click', onExitClickHandler);
    // T.cta.addEventListener('mouseout', onOutHandler);
    // T.cta.addEventListener('mouseover', onOverHandler);
  }
  function onOutHandler() {
     console.log('out' )
      // TweenLite.to(T.cta, 0.6, { 
      //       backgroundColor: T.color,
      //       color:T.white,
      //       borderColor: T.color
      // }) 
  }
  function onOverHandler() {
    console.log('over btn' )
      // TweenLite.to(T.cta, 0.6, { 
      //      backgroundColor: T.white,
      //      color:T.color,
      //      borderColor: T.color
      // }) 
  }
function onExitClickHandler() {
    console.log('exit btn')
    Enabler.exit('clickTag');
    //Enabler.exitOverride( "Click Through", gdc.exit_url) 
    // window.open(clickTag, '_blank');
    //console.log('Exit to ' + clickTag);
  }

//------------------------------------------------------------------------------
// helpers
//------------------------------------------------------------------------------
function centerMeX(div,myWidth,offset){
  var offset = offset || 0;
  var myWidth = myWidth || T.banner.width;
   var rect = div.getBoundingClientRect();
   var rectWidth = rect.right - rect.left;
   div.style.left = ((myWidth - rectWidth)/2+offset) +'px';
 }
function centerMeY(div,myH,offset){
    var offset = offset || 0;
    var myH = myH || T.banner.height;
    var rect = div.getBoundingClientRect();
    var rectHeight = rect.bottom - rect.top;
    div.style.top = ((myH - rectHeight)/2 )+ offset +'px';
 }

 //------------------------------------------------------------------------------
// Glitch
//------------------------------------------------------------------------------
var e = "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})";
var e2 = "rough({ template: none.out, strength: 2, points: 200, taper: 'none', randomize: true, clamp: true})";
var e3 = "rough({ template: power4.out, strength: 250, points: 40, taper: 'none', randomize: true, clamp: true})";
var e4 = "rough({ template: power1.out, strength: 50, points: 400, taper: 'out', randomize: false, clamp: true})";

function glitchMe(me,obj,d,e,thickness,scaleMe){
  var myEase = e
  var h =obj.height;
  var d2=d;
  var test=0;

  for(var x = 0;x<=h;x++){
      if(x >= test) {
          d2+=0.0009
          test += thickness
      }
      // d +=0.0009
      var c = me.childNodes[x]
      TweenMax.to(c,0.1, { 
            delay:d2,
            ease:myEase, 
            x: -10 ,
            scaleX:scaleMe,
            repeat: 1, 
            yoyo: true
      });
  }
}
//------------------------------------------------------------------------------
// Animation 
//------------------------------------------------------------------------------
function goAnimation() {
      /////////////////////////// //////Txt_BEAST
      //   for(var x = 0;x<=T.txt_beastObj.height;x++){
      //     //create multiple images
      //     var cln = T.txt_beast.cloneNode(true);
      //     T.txt_beastGrp.appendChild(cln);
      //     //get all kids and mask
      //     TweenMax.set( T.txt_beastGrp.childNodes[x] , { 
      //         clip:"rect("+ x +"px "+T.txt_beastObj.width+"px "+(x+1) +"px 0px)",
      //     })
      // }
      // T.txt_beast.remove();
      ////////////////////////////////////////////////
  TweenLite.to(T.bannerCover, 0.8, { opacity: 0}); 
  TweenLite.from(T.bg, 4, { scale: 1.5}); 
  var d =0.1;

  TweenMax.from( T.motoDot,1.0,{ // LogoDot IN
        delay:d,
        scale:0.8,
        alpha:0,
        // y:0,
        ease:Power1.easeOut
  })
  d+=1.2
  TweenMax.to( T.motoDot,0.8,{ // LogoDot Out
        delay:d,
        scale:0.97,
        alpha:0,
        // ease:Back.easeOut
  })
  /////// LOGO
  d+=0.4
  TweenMax.from( T.motoLogo,1,{ // Logo IN
        delay:d,
        scale:0.8,
        alpha:0,
        ease:Power1.easeOut
  })
  d+=1.3
  TweenMax.to( T.motoLogo,0.8,{ // Logo Out
        delay:d,
        scale:0.97,
        alpha:0,
        // ease:Back.easeOut
  })
 TweenMax.set( T.smokeArr,{ alpha:0.6})
  TweenMax.from( T.smokeArr,2.0,{ // Logo Out
    delay:d-0.1,
    scale:0.95,
    alpha:0,
    // ease:Back.easeOut
  })
  d+=0.3
  ///////////////////////////////Part 2 -  Text Camera
  ///////////////////////////////Part 2 -  Text Camera
  ///////////////////////////////Part 2 -  Text Camera
  TweenMax.from( T.phone0,1,{ // Logo IN
    delay:d,
    scale:2,
    x:300,
    alpha:0,
    ease:Power4.easeOut
})
d+=0.7
  TweenMax.staggerFrom(T.split_txtCam.lines, 1.4, {
    delay:d,
    // y:textSlideY, 
    autoAlpha:0, 
    scale:0.7,
    ease:Power2.easeOut
    }
    , 0.2
  );
  d+=2.5 // PAUSE
  TweenMax.staggerTo(T.split_txtCam.lines, 0.8, {
    delay:d,
    // y:textSlideY, 
    autoAlpha:0, 
    scale:0.95,
    ease:Power2.easeOut
    }
    , 0
  );
  TweenMax.to( T.phone0,0.6,{ // Logo IN
    delay:d,
    scale:1,
    x:0,
    alpha:0,
    ease:Power4.easeOut
  })
  d+=0.0
  ///////////////////////////////Part 3
  //// BEAST //////////////////////////
  // TweenMax.from(T.txt_beast, 1.2, {
  //   delay:d,
  //   autoAlpha:0, 
  //   scale:0.7,
  //   ease:Power2.easeOut
  // });
 TweenMax.from(T.txt_beast, 0.4, {
    delay:d,
    autoAlpha:0, 
    scale:20,
    ease:Power1.easeIn
  });
  d+=1.0
  // glitchMe(T.txt_beastGrp,T.txt_beastObj,d,e3,1,1);//delay, ease, thickness, scaleMe
  d+=1.0
  TweenMax.to(T.txt_beast, 1, {
    delay:d,
    // y:textSlideY, 
    autoAlpha:0, 
    scale:0.95,
    ease:Power2.easeOut
  });
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  d+=0

  TweenMax.set(T.phoneGrp,{scale:1.02})
  // TweenMax.to([textBox3],0.1,{delay:d,alpha:0})
  d+=0

  TweenMax.from(T.phoneGrp,2, { 
    delay:d, 
    scale:2.5,
    alpha:0,
    ease:Power3.easeOut
  });
    // d+=0.5
  TweenMax.from(T.phone2,2.0, { 
    delay:d,
    x:-400,
    alpha:0,
    ease:Power3.easeOut

  });
  TweenMax.from(T.phone1,2, { 
    delay:d,
    x:300,
    alpha:0,
    ease:Power3.easeOut

  });
  TweenMax.to(T.phoneGrp,7, { 
    delay:d+2.5, 
    scale:1,
    ease:Power1.easeOut
  });
  /////////////////////////////////////////////////
  d+=0;

  // TweenMax.from(T.phone2,4, { 
  //   delay:d,
  //   rotation:-2,
  //   ease:Power1.easeOut
  // });
  d+=1;
  TweenMax.from( T.motoLogo2,1.8,{ 
        delay:d,
        scale:0.95,
        alpha:0,
        ease:Power1.easeOut
  })
  d+=0.2;
  stopParty = function(){
    console.log('stop Party')
    //party.stop()
    //partyBlue.stop()
    //smoker = {}
    clearInterval(go)
  }
  TweenMax.delayedCall(d,stopParty)
  // TweenMax.from( T.txt_beastGrp,1.8,{ 
  //       delay:d,
  //       scale:0.95,
  //       alpha:0,
  //       ease:Power1.easeOut
  // })
  d+=0.9
  // glitchMe(T.txt_beastGrp,T.txt_beastObj,d,e4,2,1);//delay, ease, thickness, scaleMe
  d+=1.6
  // glitchMe(T.txt_beastGrp,T.txt_beastObj,d,e,4,1);//delay, ease, thickness, scaleMe
}
// Main onload handler
window.addEventListener('load', preInit);