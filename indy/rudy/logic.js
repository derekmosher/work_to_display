var T = {};

function init() {
  T.autoplay = false; //Has to be true. Figure out why later.
  setupDom();
  addListeners();
  goIntroAnimation();
}

function setupDom() {
  // P1 ///////////////////////////////////////////
  T.p1 = document.getElementById('p1');
  T.bg = document.getElementById('bg');
  T.nav_container = document.getElementsByClassName('nav_container');
  T.btn_nav1 = document.getElementById('btn_nav1');
  T.btn_nav2 = document.getElementById('btn_nav2');
  T.btn_nav3 = document.getElementById('btn_nav3');
  T.btn_nav4 = document.getElementById('btn_nav4');
  T.btn_nav5 = document.getElementById('btn_nav5');
  T.btn_nav1.myNum = 1;
  T.btn_nav2.myNum = 2;
  T.btn_nav3.myNum = 3;
  T.btn_nav4.myNum = 4;
  T.btn_nav5.myNum = 5;
  //P2 /////////////////////////////////////////////
  T.p2 = document.getElementById('p2');
  T.btn_home = document.getElementById('btn_home');
  T.btn_back = document.getElementById('btn_back');
  T.btn_next = document.getElementById('btn_next');
  T.text_back = document.getElementById('text_back');
  T.text_next = document.getElementById('text_next');
  T.aboutMeClass = document.getElementsByClassName('aboutMe')

  for (var i = 0; i < T.aboutMeClass.length; i++) {
      centerOnY(T.aboutMeClass[i], 100)
  }

  T.playerArr = [
      document.getElementById("player1"),
      document.getElementById("player2"),
      document.getElementById("player3"),
      document.getElementById("player4"),
  ]
  ///////////////
  T.myVideo = {};
  T.myVideo.vidControls = document.getElementById('vid-btns-container');
  T.myVideo.player1 = document.getElementById('player1');
  T.myVideo.player2 = document.getElementById('player2');
  T.myVideo.player3 = document.getElementById('player3');
  T.myVideo.player4 = document.getElementById('player4');
  ////
  T.bannerCover = document.getElementById('bannerCover');
  //vars:
  T.videoPlaying = false;
  T.play_thumb_alpha = 0.7;
  T.currentPage = 0;
  T.section = document.getElementById('section');
  T.title = document.getElementById('title');
  T.currentSection ='home'
}
//-----------------------------------
// listeners 
//-----------------------------------
function addListeners() {
  T.btn_nav1.addEventListener('click', function(){ onNavClickHandler(1);}, false);
  T.btn_nav2.addEventListener('click',  function(){ onNavClickHandler(5);}, false);
  T.btn_nav3.addEventListener('click',  function(){ onNavClickHandler(6); }, false);
  T.btn_nav4.addEventListener('click',  function(){ onNavClickHandler(9); }, false);
  T.btn_nav5.addEventListener('click',  function(){ onNavClickHandler(12); }, false);
  T.btn_home.addEventListener('click', goHome, false);
  T.btn_back.addEventListener('click', backHandler, false);
  T.btn_next.addEventListener('click', nextHandler, false);
}

function goHome() {
  T.p1.style.visibility = "visible";
  T.p2.style.visibility = "hidden"
  turnOffOtherPlayers(0) // turn off all
  T.currentSection ='home'

  goIntroAnimation()
}
function backHandler() {
  var me = T.currentPage -1;
  if(me<1)me = T.pageArr.length
  gotoPage(me)
}
function nextHandler() {
  var me = T.currentPage +1;
  if(me>T.pageArr.length)me = 1
  gotoPage(me)
}
function onNavClickHandler(me) {
  T.p1.style.visibility = 'hidden'
  T.p2.style.visibility = 'visible'
  gotoPage(me)
 }
 function gotoPage(me){
    T.currentPage = me;
    sendData(me);
    var goingToSection = sectionTest(me)
   
    if( T.currentSection!=goingToSection){
      T.section.innerHTML = goingToSection
      sectionNameAnimae()
       T.currentSection = goingToSection
    }
    /////////////////////////////////////
    var me2=me;
    me2 = (me2==T.pageArr.length) ? 0 : me2 ;
    T.text_next.innerHTML = sectionTest(me2+1)
    var me0 = me
    me0 = (me0==1) ? T.pageArr.length+1 : me0 ;
    T.text_back.innerHTML = sectionTest(me0-1)
 }
 function sectionTest(me){
  var section;
  if(me>=12 ){
    section = T.pageSectionArr[4] 
  }else if(me>=9 ){
    section  = T.pageSectionArr[3] 
  } else if(me>=6 ){
    section  = T.pageSectionArr[2] 
  } else  if(me>=5 ){
    section  = T.pageSectionArr[1] 
  } else {
    section = T.pageSectionArr[0]     
  }
  return section;
 }
//------------------------------------------------------------------------------
//  iframe / parent communication
//------------------------------------------------------------------------------
  // LISTEN -  for iframe video players
  window.addEventListener('message', function(e) {
     if(e.data.event_id === 'switchVideoPlayer'){
      turnOffOtherPlayers(e.data.data.id);
    }
  });

 function sendData (me){
    var num = me -1
    // turn off and hide ALL
    turnOffOtherPlayers(0)//turn off all.
    for(var i=0; i<4;i++){
      T.playerArr[i].style.visibility='hidden' ;
    }
    //
    var d = 0
    
    for(var i=0; i<T.pageArr[num].length;i++){
        d+=0.1;
        T.playerArr[i].style.visibility='visible' ;
        var data = { text: T.pageArr[num][i]  };
        T.playerArr[i].contentWindow.dataReceive(data);
        T.playerArr[i].contentWindow.setID(i+1);
        T.playerArr[i].contentWindow.resetBtnsOff();
        TweenMax.killTweensOf(T.playerArr[i]);
        gsap.set(T.playerArr[i],{ scale:1,opacity: 1});
        gsap.from(T.playerArr[i], 1 ,{ delay: d, scale:0.96,opacity: 0});
    }
}
function turnOffOtherPlayers(me){
  for(var i=1; i<5;i++){
    if(i!=me){
      T.playerArr[i-1].contentWindow.dataTurnOffVid();
    } 
  }
}

//------------------------------------------------------------------------------
// Animation 
//------------------------------------------------------------------------------

function sectionNameAnimae (){
var mySplit  = new SplitText(T.section,{type:"chars"})
//  gsap.from(T.section, 1 ,{ delay: 0.2, scale:0.96,opacity: 0});
  TweenMax.staggerFrom(mySplit.chars , 0.8, {
    delay:0.5,
    scale:0.7, 
    autoAlpha:0, 
    rotationZ:0.05,
    ease: Back.easeOut
    }
    , 0.09
  );
}
function goIntroAnimation() {

  gsap.to(T.bannerCover, 0.4, { delay:0.1,opacity: 0});
  var d=0.2;
  var spd = 0.8;
  var ease1 = Power1.easeOut; 
  d+=0.5;

    var me = [T.title,T.btn_nav1, T.btn_nav2,btn_nav3,btn_nav4,T.btn_nav5]
    TweenMax.from(T.title, 1.2, {
      delay:0.5,
      scale:0.8, 
      autoAlpha:0, 
      ease: Elastic.easeOut.config(1, 0.5)
      }
      , 0.1
    );
    TweenMax.staggerFrom(T.nav_container, 0.8, {
      delay:0.5,
      scale:0.9, 
      autoAlpha:0, 
      ease: Back.easeOut
      }
      , 0.08
    );
    gsap.from(T.bg, 2, {
      delay:0,
      scale:1.2, 
      ease: Power1.easeOut
      }
      , 0.1
    );
  // gsap.delayedCall(6, goEndFrameAnimation);
}
function goEndFrameAnimation() {

}

//----------------------------------------------------------------------------
// Data
//-----------------------------------------------------------------------------
T.pageSectionArr = [
  'Rolls',
  'Paradiddles',
  "Flams",
  "Drags",
  "Rudiments in Action"
]
T.pageArr = [
  [
  "1. Single Stroke Roll",
  "2. Single Stroke Four",
  "3. Single Stroke Seven",
  "4. Multiple Bounce Roll"
],[
  "5. Triple Stroke Roll",
  "6. Double Stroke Open Roll",
  "7. Five Stroke Roll",
  "8. Six Stroke Roll",
  ],[
  "9. Seven Stroke Roll",
  "10. Nine Stroke Roll",
  "11. Ten Stroke Roll",
  "12. Eleven Stroke Roll",
],[
  "13. Thirteen Stroke Roll",
  "14. Fifteen Stroke Roll",
  "15. Seventeen Stroke Roll",
],[
  // Page 5 - Paradiddle
  "16. Single Paradiddle",
  "17. Double Paradiddle",
  "18. Triple Paradiddle",
  "19. Single Paradiddle-Diddle",
],[
  // Page 6 - flam
  "20. Flam",
  "21. Flam Accent",
  "22. Flam Tap",
  "23. Flamacue",
],[
  "24. Flam Paradiddle",
  "25. Single Flammed Mill",
  "26. Flam Paradiddle-Diddle",
  "27. Pataflafla",
],[
  
  "28. Swiss Army Triplet",
  "29. Inverted Flam Tap",
  "30. Flam Drag",
],[
  // Page 9 - Drag
  "31. Drag",
  "32. Single Drag Tap",
  "33. Double Drag Tap",
  "34. Lesson 25",
],[
  "35. Single Dragadiddle",
  "36. Drag Paradiddle #1",
  "36. Drag Paradiddle #2",
  "38. Single Ratamacue",
],[
  "39. Double Ratamacue",
  "40. Triple Ratamacue",
],[
  //Page 12
  "41. Steve Smith plays paradiddle combinations on drum set",
  "42. U.S. Army OId Guard Fife and Drum Corps",
  "43. The Middlesex County Volunteers Fife & Drums",
]
]
////
window.addEventListener('load', init);
////