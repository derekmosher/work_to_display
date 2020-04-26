var T = {};

function init() {
  T.autoplay = false; //Has to be true. Figure out why later.
  setupDom();
  addListeners();
  goIntroAnimation();
}

function setupDom() {
  console.log('set up dom Parent')
  // P1 ///////////////////////////////////////////
  T.p1 = document.getElementById('p1');
  T.btn_nav1 = document.getElementById('btn_nav1');
  T.btn_nav2 = document.getElementById('btn_nav2');
  T.btn_nav3 = document.getElementById('btn_nav3');
  T.btn_nav4 = document.getElementById('btn_nav4');
  T.btn_nav1.myNum = 1;
  T.btn_nav2.myNum = 2;
  T.btn_nav3.myNum = 3;
  T.btn_nav4.myNum = 4;
  //P2 /////////////////////////////////////////////
  T.p2 = document.getElementById('p2');
  T.btn_home = document.getElementById('btn_home');
  T.btn_back = document.getElementById('btn_back');
  T.btn_next = document.getElementById('btn_next');
  T.aboutMeClass = document.getElementsByClassName('aboutMe')

  for (var i = 0; i < T.aboutMeClass.length; i++) {
      centerOnY(T.aboutMeClass[i], 100)
      console.log(T.aboutMeClass[i])
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
}
//-----------------------------------
// listeners 
//-----------------------------------
function addListeners() {
  // console.log("addListeners()");
  T.btn_nav1.addEventListener('click', function(){ onNavClickHandler(1);}, false);
  T.btn_nav2.addEventListener('click',  function(){ onNavClickHandler(5);}, false);
  T.btn_nav3.addEventListener('click',  function(){ onNavClickHandler(6); }, false);
  T.btn_nav4.addEventListener('click',  function(){ onNavClickHandler(8); }, false);
  //
  T.btn_home.addEventListener('click', goHome, false);
  T.btn_back.addEventListener('click', backHandler, false);
  T.btn_next.addEventListener('click', nextHandler, false);
  //
}

function goHome() {
  T.p1.style.visibility = "visible";
  T.p2.style.visibility = "hidden"
  turnOffOtherPlayers(0) // turn off all
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
    T.currentPage = me
    sendData(me)
 }
//------------------------------------------------------------------------------
//  iframe / parent communication
//------------------------------------------------------------------------------
  // LISTEN -  for iframe video players
  window.addEventListener('message', function(e) {
    console.log(' came from kid = '+ e.data.data.id)
     if(e.data.event_id === 'switchVideoPlayer'){
      turnOffOtherPlayers(e.data.data.id)
    }
  });

 function sendData (me){
   var num = me -1
  console.log(' sendData = ' + T.pageArr[num-1] )
  // turn off and hide ALL
  turnOffOtherPlayers(0)//turn off all.
  for(var i=0; i<4;i++){
    T.playerArr[i].style.visibility='hidden' 
  }
 //
  for(var i=0; i<T.pageArr[num].length;i++){
      T.playerArr[i].style.visibility='visible' 
      var data = { text: T.pageArr[num][i]  }
      T.playerArr[i].contentWindow.dataReceive(data);
      T.playerArr[i].contentWindow.setID(i+1);
      T.playerArr[i].contentWindow.resetBtnsOff();
  }
}
function turnOffOtherPlayers(me){
  console.log("turnOffOtherPlayers. but not me = " + me)

  for(var i=1; i<5;i++){
    if(i!=me){
      console.log("turn off player num" + i)
      T.playerArr[i-1].contentWindow.dataTurnOffVid();
    } 
  }
}

//------------------------------------------------------------------------------
// Animation 
//------------------------------------------------------------------------------

function goIntroAnimation() {

  gsap.to(T.bannerCover, 0.4, { delay:0.1,opacity: 0});
  var d=0.2;
  var spd = 0.8;
  var ease1 = Power1.easeOut; 
  d+=0.5;
  gsap.delayedCall(6, goEndFrameAnimation);
}
function goEndFrameAnimation() {
    // T.myVideo.vidContainer = 'hidden'
}

//----------------------------------------------------------------------------
// Data
//-----------------------------------------------------------------------------

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
  // Page 8 - Drag
  "28. Swiss Army Triplet",
  "29. Inverted Flam Tap",
  "30. Flam Drag",
],[
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
  "40.Triple Ratamacue",
],[
  //Page 12
  "Steve Smith plays paradiddle combinations on drum set",
  "U.S. Army OId Guard Fife and Drum Corps",
  "The Middlesex County Volunteers Fife & Drums",
]
]
////
window.addEventListener('load', init);
////