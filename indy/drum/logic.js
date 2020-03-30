var T = {};
var vid_path = "media/";
var vid_filename = "vid1";

function init() {
  T.autoplay = false; //Has to be true. Figure out why later.
  setupDom();
  addListeners();
  goIntroAnimation()
}

function setupDom() {
  console.log('set up dom')

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
  //
  //P2 /////////////////////////////////////////////
  T.p2 = document.getElementById('p2');
  T.btn_home = document.getElementById('btn_home');
  T.aboutMeClass = document.getElementsByClassName('aboutMe')

  for (var i = 0; i < T.aboutMeClass.length; i++) {
      centerOnY(T.aboutMeClass[i], 100)
      console.log(T.aboutMeClass[i])
  }

  T.aboutArr = [
    document.getElementById('about1'),
    document.getElementById('about2'),
    document.getElementById('about3'),
    document.getElementById('about4'),
  ]
  ///////////////
  T.myVideo = {};
  T.myVideo.vidContainer = document.getElementById('video-container');
  T.myVideo.vid = document.getElementById('video');
  T.myVideo.vidControls = document.getElementById('vid-btns-container');
  
  T.myVideo.vidPlayBtn = document.getElementById('play-btn');
  T.myVideo.vidReplayBtn = document.getElementById('replay-btn');
  T.myVideo.vidBackBtn = document.getElementById('back-btn');
  T.myVideo.vidNextBtn = document.getElementById('next-btn');
  T.myVideo.vidPauseBtn = document.getElementById('pause-btn');
  T.myVideo.vidUnmuteBtn = document.getElementById('unmute-btn');
  T.myVideo.vidMuteBtn = document.getElementById('mute-btn');
  T.myVideo.vidProgressBar = document.getElementById('progress-bar');
  T.myVideo.vid_sound = document.getElementById('vid_sound');
  T.spin = document.getElementById('spin');
  ////

  T.bannerCover = document.getElementById('bannerCover');

  //vars:
  T.videoPlaying = false;
  T.play_thumb_alpha = 0.7;
  T.currentFrame = 0;
  //
}

//-----------------------------------
// listeners 
//-----------------------------------
function addListeners() {
  console.log("addListeners()");

  T.btn_nav1.addEventListener('click', function(){ onNavClickHandler(1);}, false);
  T.btn_nav2.addEventListener('click',  function(){ onNavClickHandler(2);}, false);
  T.btn_nav3.addEventListener('click',  function(){ onNavClickHandler(3); }, false);
  T.btn_nav4.addEventListener('click',  function(){ onNavClickHandler(4); }, false);
  T.btn_home.addEventListener('click', goHome, false);
  //
  T.myVideo.vidPlayBtn.addEventListener('click', pausePlayHandler, false);
  T.myVideo.vidPauseBtn.addEventListener('click', pausePlayHandler, false);
  T.myVideo.vidMuteBtn.addEventListener('click', muteUnmuteHandler, false);
  T.myVideo.vidUnmuteBtn.addEventListener('click', muteUnmuteHandler, false);

  T.myVideo.vidBackBtn.addEventListener('click', backHandler, false);
  T.myVideo.vidNextBtn.addEventListener('click', nextHandler, false);
  T.myVideo.vidReplayBtn.addEventListener('click', replayHandler, false);
  //
  T.myVideo.vid.addEventListener('ended', videoEndHandler, false);
  T.myVideo.vid.addEventListener('timeupdate', videoTimeUpdateHandler, false);
}

function goHome() {
  T.p1.style.visibility = "visible";
  T.p2.style.visibility = "hidden"
  //T.myVideo.vidContainer.style.visibility = "hidden"
  // T.myVideo.vidContainer 
          /* visibility: hidden; */

  stopHandler()
}
function backHandler() {
  var me = T.currentFrame -1;
  if(me<1)me = 4
  gotoSection(me)
 
}
function nextHandler() {
  var me = T.currentFrame +1;
  if(me>4)me = 1
  gotoSection(me)
}
function replayHandler() {
  stopHandler();
  pausePlayHandler()
}

function onNavClickHandler(me) {
  T.p1.style.visibility = 'hidden'
  T.p2.style.visibility = 'visible'
  gotoSection(me)
 }
 function gotoSection(me){
  var _me = me;
  vid_filename = 'vid'+_me;
  addVideo();
  goVideoIniter();
  goPlayVideo();
  T.videoPlaying = true;
  console.log( ' me = '+ me)

  var aboutArr = [  T.about1, T.about2, T.about3, T.about4]
  T.aboutArr[0].style.visibility='hidden';
  T.aboutArr[1].style.visibility='hidden';
  T.aboutArr[2].style.visibility='hidden';
  T.aboutArr[3].style.visibility='hidden';
  T.aboutArr[me-1].style.visibility='visible';
  T.currentFrame = me

 }
//------------------------------------------------------------------------------
// Animation 
//------------------------------------------------------------------------------
function goIntroAnimation() {

  gsap.to(T.bannerCover, 0.4, { delay:0.1,opacity: 0});
  var d=0.2;
  var spd = 0.8;
  var ease1 = Power1.easeOut;

  gsap.to(T.btn_nav1, 1, { 
      delay:d+0.2, 
      opacity: 1,
      ease:ease1
  });
 
  d+=0.5;
  gsap.delayedCall(6, goEndFrameAnimation);
}

  function goEndFrameAnimation() {
    T.myVideo.vidContainer = 'hidden'
}

function spinnerAnimation() {
  T.spin.style.visibility = 'visible';
  gsap.set(T.spin, {
    opacity: 1
  })
  gsap.from(T.spin, 10, {
    rotation: -1500,
  })
  T.myVideo.vid.onplay = function () {
    console.log("The video has started to play");
    gsap.to(T.spin, 0.5, {
      delay: 0.6,
      opacity: 0,
    })
  };
}
//----------------------------------------------------------------------------
// VIDEO  
//-----------------------------------------------------------------------------
function goPlayVideo() {
  console.log('go play Video')
 // T.myVideo.vidContainer.style.visibility = 'visible';
  T.myVideo.vidPauseBtn.style.visibility = 'visible';
  T.myVideo.vidPlayBtn.style.visibility = 'hidden';
  T.myVideo.vidControls.style.visibility = 'visible';
  //T.myVideo.vidControls.style.display = 'inline';
  T.myVideo.vidControls.style.pointerEvent = 'auto';
  spinnerAnimation()
}

function goEndVideo() {
  console.log('goEndVideo')
  T.videoPlaying = false
  // T.myVideo.vidControls.style.visibility = 'hidden';
  // T.myVideo.vidControls.style.display = 'none';
  T.myVideo.vidControls.style.pointerEvent = 'none';
  goEndFrameAnimation()
}

function goVideoIniter() {
  T.myVideo.vidMuteBtn.style.visibility = 'hidden';
  T.myVideo.vidPauseBtn.style.visibility = 'hidden';
  T.myVideo.vidPlayBtn.style.visibility = 'hidden';
  //
  if (T.autoplay) {
    if (T.myVideo.vid.readyState >= 2) {
      startMuted(null);
    } else {
      T.myVideo.hasCanPlay = true;
      T.myVideo.vid.addEventListener('canplay', startMuted, false);
    }
    // HACK: Safari experiences video rendering issues, fixed by forcing a viewport refresh
    T.myVideo.vidMuteBtn.style.visibility = 'visible';
    setTimeout(function () {
      T.myVideo.vidMuteBtn.style.visibility = 'hidden';
    }, 200);
  } else {
    T.myVideo.vidMuteBtn.style.visibility = 'visible';
    T.myVideo.vidUnmuteBtn.style.visibility = 'hidden';
    T.myVideo.vidPauseBtn.style.visibility = 'hidden';
    T.myVideo.vidPlayBtn.style.visibility = 'visible';
    T.myVideo.vid.volume = 1; // Muted by default
    T.myVideo.vid.currentTime = 0;
    //T.myVideo.vid.load(); 
    T.myVideo.vid.play();
  }
 // T.myVideo.vidContainer.style.visibility = 'visible';
}

//Triggered once the video player is ready to play:
function startMuted(e) {
  // Leaving the listener can cause issues on Chrome / Firefox
  if (T.myVideo.hasCanPlay) {
    T.myVideo.vid.removeEventListener('canplay', startMuted);
    T.myVideo.hasCanPlay = false;
  }
  // If paused then play
  T.myVideo.vid.volume = 0; // Muted by default
  T.myVideo.vid.currentTime = 0;
  T.myVideo.vid.play();
  T.myVideo.vidPlayBtn.style.visibility = 'hidden';
}

//Play pause toggle:
function pausePlayHandler(e) {
  // Under IE10, a video is not 'paused' after it ends.
  if (T.myVideo.vid.paused || T.myVideo.vid.ended) {
    if (T.isClick) {
      T.myVideo.vid.volume = 1.0;
      T.myVideo.vidMuteBtn.style.visibility = 'visible';
      T.myVideo.vidUnmuteBtn.style.visibility = 'hidden';
      T.isClick = false;
    }
    // If paused then play
    T.myVideo.vid.play();
    T.myVideo.vidPauseBtn.style.visibility = 'visible';
    T.myVideo.vidPlayBtn.style.visibility = 'hidden';
  } else {
    T.myVideo.vid.pause();
    T.myVideo.vidPauseBtn.style.visibility = 'hidden';
    T.myVideo.vidPlayBtn.style.visibility = 'visible';
  }
}

//Mutes or unmute the video player.
function muteUnmuteHandler(e) {
  if (T.myVideo.vid.volume == 0.0) {
    T.myVideo.vid.volume = 1.0;
    T.myVideo.vidMuteBtn.style.visibility = 'visible';
    T.myVideo.vidUnmuteBtn.style.visibility = 'hidden';
  } else {
    T.myVideo.vid.volume = 0.0;
    T.myVideo.vidMuteBtn.style.visibility = 'hidden';
    T.myVideo.vidUnmuteBtn.style.visibility = 'visible';
  }
}

//Stops the video:
function stopHandler(e) {
  T.myVideo.vid.currentTime = 0;
  T.myVideo.vid.pause();
  T.myVideo.vidPauseBtn.style.visibility = 'hidden';
  T.myVideo.vidPlayBtn.style.visibility = 'visible';
  T.isClick = true;
  goEndVideo()
}
//On Video End:
function videoEndHandler(e) {
  T.myVideo.vid.pause();
  T.myVideo.vidPauseBtn.style.visibility = 'hidden';
  T.myVideo.vidPlayBtn.style.visibility = 'visible';
  T.isClick = true;
  goEndVideo();
}

function videoTimeUpdateHandler(e) {
  if (T.myVideo.vid.currentTime > T.vid_triggerTime) {};
  if (T.myVideo.vid.currentTime > 1.8 && T.vid_dtt_hit == false) {};
}

function addVideo() {
  var srcNode2 = document.getElementById('vid_mp4');
  srcNode2.setAttribute('src', vid_path + vid_filename + ".mp4");

  T.myVideo.vid.load();
}
////
window.addEventListener('load', init);
////