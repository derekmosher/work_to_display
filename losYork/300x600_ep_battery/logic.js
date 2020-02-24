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

  T.motoDot = document.getElementById('motoDot');
  centerMeX(T.motoDot); 
  centerMeY(T.motoDot);
  T.motoLogo = document.getElementById('motoLogo')
  centerMeX(T.motoLogo); 
  centerMeY(T.motoLogo);

  T.phone0 = document.getElementById('phone0')
  T.phone0b = document.getElementById('phone0b')
  T.batGrp = document.getElementById('batGrp')

  T.txt_camArr = [
    document.getElementById('txt_cam1'),
    document.getElementById('txt_cam2'),
    document.getElementById('txt_cam3'),
  ]
  //
  T.txt_beast = document.getElementById('txt_beast')
  centerMeX(T.txt_beast); 
  // centerMeY(T.txt_beast); 

  T.phoneGrp = document.getElementById('phone')
  T.phone1 = document.getElementById('phone1')
  T.phone2 = document.getElementById('phone2')

  T.motoLogo2 = document.getElementById('motoLogo2')

  T.cta = document.getElementById('cta')
  T.cta_bg = document.getElementById('cta_bg')
  T.exit = document.getElementById('exit')
  centerMeX(T.cta); 
  //
  goAnimation();
  T.color = "#ff000"
  T.colorrgb = "rgb(255,0,0)";
  T.white = "#fff"

  // T.me = document.getElementsByClassName('.cls-2')
  // T.kiwi = document.getElementsById('kiwi')
  // T.kiwi2 = document.getElementsById('kiwi2')
  // T.kiwi2.style.fill = '#ff0000'
}
//-----------------------------------
// listeners 
//-----------------------------------
  function addListeners() {
    console.log("addListeners()");
    T.exit.addEventListener('click', onExitClickHandler);
    T.cta.addEventListener('click', onExitClickHandler);
    T.cta.addEventListener('mouseout', onOutHandler);
    T.cta.addEventListener('mouseover', onOverHandler);
  }
  function onOutHandler() {
      console.log('out' )
      // T.cta.style.left = '100px'
      TweenLite.to(T.cta, 0.4, { 
            // backgroundColor: T.color,
            // color:T.white,
            scale:1,
            // borderColor: T.color
      }) 
  }
  function onOverHandler() {
    // T.cta.style.fill = 'ff0000'
    // T.cta_bg.style.fill = 'ff0000'
    // T.me.style.fill = '#ff0000'
    // T.me[0].style.fill = 'red'
    // T.me[1].style.fill = 'red'
    // T.me[2].style.fill = 'red'
    // T.me.syle.top= '20px'
  

//     TweenLite.to(kiwi, 1, {fill:"red", delay:0.5})

//     TweenLite.to(T.cta, 0.6, { 
//       fill:'red' , 
//       backgroundColor: T.color,
//       color:T.white,
//       borderColor: T.white,
//       scale:1.52,
//  }) 

      console.log('over btn' )
  //     T.cta.style.left = '10px'
  //     T.cta.style.fill= "#ff0000"
  //     T.colorRGB = rgba(255,0,0,1)
      TweenLite.to(T.cta, 0.4, { 
            // fill:"#ff0000",
      //     // backgroundColor: T.color,
      //     // color:T.color,
          scale:1.1,
      //     // borderColor: T.color
      }) 
  //     TweenLite.to(T.cta_bg, 0.4, { 
  //       fill:"#ff0000",
  // //     // backgroundColor: T.color,
  // //     // color:T.color,
  // opacity:1,
  //     scale:2.52,
  // //     // borderColor: T.color
  // }) 
  }
function onExitClickHandler() {
    console.log('exit btn')
    // Enabler.exit('clickTag');
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
// countdown
//------------------------------------------------------------------------------
function goCountdown(){
  var startAt = 0
  var stopAt = 80;
  var delayBy = 0.06
  var type = ".svg";
  document.getElementById('num%').src ='./images/num%'+type;


  for(var i=startAt;i<=stopAt;i++){
      var d = i*delayBy
      TweenMax.delayedCall(d,updateCount,[i])
  }
}
function updateCount(num){
  var dec;
  var spacer = 2
  var type = ".svg";
  var hack = 0;
  if(num>99) {
    dec = Math.floor(num/100);
    dec = dec%100
    document.getElementById('num100').src = './images/num'+dec+type;
    // console.log('hit 100')
    hack = 7

  }
  if(num>9) {
    dec = Math.floor(num/10);
    dec = dec%10
    document.getElementById('num10').src =  './images/num'+dec+type;
    T.p3 = document.getElementById('num100').getBoundingClientRect()
  }
  document.getElementById('num1').src ='./images/num'+ num%10 +type;
  /////////////////////////////
  //// Now Position Stuff:////
  T.p3 = document.getElementById('num100').getBoundingClientRect()
  // console.log(T.p3.width)

  T.p3x = T.p3.width + spacer+hack;
  document.getElementById('num10').style.left =T.p3x+"px"

  T.p2 = document.getElementById('num10').getBoundingClientRect();
 // console.log(T.p2.width)

  T.p2x = T.p2.width + T.p3x + spacer
  document.getElementById('num1').style.left =T.p2x+"px";

  T.p1 = document.getElementById('num1').getBoundingClientRect();
  T.p1x = T.p1.width + T.p2x + spacer;
  document.getElementById('num%').style.left =T.p1x+"px";

}
//------------------------------------------------------------------------------
// Animation 
//------------------------------------------------------------------------------
function goAnimation() {
  TweenLite.to(T.bannerCover, 0.8, { opacity: 0}); 
  TweenLite.from(T.bg, 12, { scale: 1.5}); 
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
  d+=0.3
  ///////////////////////////////Part 2 -  Text Camera
  ///////////////////////////////Part 2 -  Text Camera
  ///////////////////////////////Part 2 -  Text Camera

 
  TweenMax.from( [T.batGrp],1,{ // Logo IN
    delay:d,
    scale:2,
    alpha:0,
    ease:Power4.easeOut,
    onComplete: function(){
          TweenMax.to([T.batGrp],6,{ 
            scale:1.1,
             ease:Power0.easeInOut,
           });
    }
  });
  TweenMax.set([T.phone0b], {
    // clip:"rect(0px,300px,600px,0px)"
    clip:"rect(521px,150px,526px,150px)"
  
  })
  d+=0.1
  TweenMax.delayedCall(d,goCountdown)
  TweenMax.staggerFrom(T.txt_camArr, 1.6, {
    delay:d+1.4,
    autoAlpha:0, 
    scale:0.8,
    ease:Power2.easeOut
    }
    , 0.2
  );
  TweenMax.to( T.phone0b,1.5,{ // Logo IN
    delay:d,
    clip:"rect(521px,232px,526px,80px)",
    ease:Power1.easeIn,
  });
  d+=1.51
  TweenMax.to( T.phone0b,4,{ // Logo IN
    delay:d,
    clip:"rect(234px,232px,526px,80px)",
    ease:Power2.easeOut,
  });

  d+=0.6

  d+=3.3 ///////// PAUSE
  TweenMax.staggerTo(T.txt_camArr, 0.8, {
    delay:d,
    autoAlpha:0, 
    ease:Power2.easeOut
    }
    , 0
  );
  TweenMax.to( [T.batGrp],0.8,{ // Logo IN
    delay:d,
    alpha:0,
    ease:Power2.easeOut
  })
  
  ///////////////////////////////Part 3 - phone
  TweenMax.set(T.phoneGrp,{scale:1.02})
  d+=0

  TweenMax.from(T.phoneGrp,2, { 
    delay:d, 
    scale:2.5,
    alpha:0,
    ease:Power3.easeOut,
    onComplete: function(){
      TweenMax.to( T.phoneGrp,2,{ 
        scale:1.04,
        y:-10,
         ease:Power1.easeIn,
       });
}
  });
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
  d+=3.8////pause
  TweenMax.to(T.phoneGrp,0.8, { 
    delay:d, 
    alpha:0,
    ease:Power1.easeOut
  });
  ///////////////////////////////Part 4
  d+=0.2

 TweenMax.from(T.txt_beast, 0.4, {
    delay:d,
    autoAlpha:0, 
    scale:20,
    ease:Power1.easeIn
  });
  d+=1.0


  TweenMax.from( T.motoLogo2,1.4,{ 
        delay:d,
        scale:0.95,
        alpha:0,
        ease:Power1.easeOut
  })
  d+=0.7;

  TweenMax.from( T.cta,1.2,{ 
    delay:d,
    scale:0.8,
    alpha:0,
    ease:Power3.easeOut
  })
}
window.addEventListener('load', preInit);