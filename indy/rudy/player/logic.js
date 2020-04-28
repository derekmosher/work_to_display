var T = {};
T.id = 1 ;  //this gets reset from parent 1 - 4.
T.vid_path = "media/";
T.vid_filename = "1";
T.imActive = false;
T.sliderValue = 0


function init() {
  T.autoplay = false; //Has to be true. Figure out why later.
  setupDom();
  addListeners();
  goIntroAnimation()
  setUpPlayer()
}

function setupDom() {
  T.myVideo = {};
  T.myVideo.vidContainer = document.getElementById('video-container');
  T.myVideo.vid = document.getElementById('video');
  T.myVideo.vidControls = document.getElementById('vid-btns-container');
  
  T.myVideo.vidPlayBtn = document.getElementById('play-btn');
  T.myVideo.vidReplayBtn = document.getElementById('replay-btn');
  T.myVideo.vidPauseBtn = document.getElementById('pause-btn');
  T.myVideo.vidUnmuteBtn = document.getElementById('unmute-btn');
  T.myVideo.vidMuteBtn = document.getElementById('mute-btn');
  T.myVideo.vidProgressbar = document.getElementById('progress-bar');
  T.myVideo.vid_sound = document.getElementById('vid_sound');
  T.myVideo.counter = document.getElementById('counter');
  ////

  T.title = document.getElementById('title');
  // T.btn_bar = document.getElementById('btn_bar');
  //vars:
  T.videoPlaying = false;
  T.play_thumb_alpha = 0.7;
  T.totalTime = 0;
  //
  T.slider = document.getElementById("myRange");

}
//-----------------------------------
// listeners 
//-----------------------------------
function addListeners() {
  T.myVideo.vid.addEventListener('click', btnClick_pausePlayHandler, false);
  T.myVideo.vidPlayBtn.addEventListener('click', btnClick_pausePlayHandler, false);
  T.myVideo.vidPauseBtn.addEventListener('click', btnClick_pausePlayHandler, false);
  T.myVideo.vidMuteBtn.addEventListener('click', btnClick_muteUnmuteHandler, false);
  T.myVideo.vidUnmuteBtn.addEventListener('click', btnClick_muteUnmuteHandler, false);

  T.myVideo.vidReplayBtn.addEventListener('click', btnClick_replayHandler, false);
  T.myVideo.vid.addEventListener('ended', videoEndHandler, false);
  T.myVideo.vid.addEventListener('timeupdate', videoTimeUpdateHandler, false);
  T.myVideo.vid.addEventListener('loadedmetadata', setupCounter,false);
    // Update the current slider value (each time you drag the slider handle)
  T.slider.oninput = function() {
    // console.log("slider miving. vid playing=  " +T.videoPlaying)
      T.sliderValue  = this.value;
      T.myVideo.vid.removeEventListener('timeupdate', videoTimeUpdateHandler, false);
     T.myVideo.vid.pause();
      T.myVideo.vid.currentTime = T.myVideo.vid.duration * (this.value/100);
  }
    
  T.slider.addEventListener('mouseup', function() {
      // console.log("slider UP  ")
      T.myVideo.vid.addEventListener('timeupdate', videoTimeUpdateHandler, false);
      if( T.videoPlaying)  T.myVideo.vid.play()  
  });
}
function btnClick_muteUnmuteHandler(e){
  muteUnmuteHandler();
  testActive();
}
function btnClick_pausePlayHandler(e){
  pausePlayHandler();
  testActive();
}
function btnClick_replayHandler(e) {
  stopHandler();
  pausePlayHandler()
  testActive();
}


//------------------------------------------------------------------------------
//  iframe / parent communication
//------------------------------------------------------------------------------
function testActive(){
  if(!T.isActive) {
    T.isActive = true;
    //console.log( ' send2Parent. id= '+T.id)
    send2Parent(T.id)
  }
}
  function dataReceive(e) {
      //console.log(' data received ')
      if(e.text )
      T.title.innerHTML =  e.text
      T.vid_filename = e.text.substring(0,e.text.indexOf("."))

      // cut off numbers for last group:
      if (e.text.indexOf("41. ")==0){
        T.title.innerHTML = e.text.substring(3,e.text.length)
      }
      if (e.text.indexOf("42. ")==0){
        T.title.innerHTML = e.text.substring(3,e.text.length)
      }
      if (e.text.indexOf("43. ")==0){
        T.title.innerHTML = e.text.substring(3,e.text.length)
      }
      setUpPlayer()
  }
  function setID(me){
    T.id = me
  }
  function resetBtnsOff(){
    T.isActive = false;
    stopHandler();
    mute();
  }
  function dataTurnOffVid(e){
    //console.log( ' dataTurnOffVid. id= '+T.id);
    T.isActive = false;
    mute();
    stopHandler();
  }
  function send2Parent(){
    //console.log( ' send2 parent')
    window.parent.postMessage({
          event_id: 'switchVideoPlayer',
          data: {
            id: T.id, 
            v2: 'value2'
          }
      }, "*" 
    ); 
 }

 function setUpPlayer(){
  addVideo();
 }

//------------------------------------------------------------------------------
// Animation 
//------------------------------------------------------------------------------
function goIntroAnimation() {

  gsap.delayedCall(6, goEndFrameAnimation);
}

  function goEndFrameAnimation() {
    T.myVideo.vidContainer = 'hidden'
}

//----------------------------------------------------------------------------
// VIDEO  
//-----------------------------------------------------------------------------
function goPlayVideo() {
  //console.log('go play Video')
  T.videoPlaying = true;
 // T.myVideo.vidContainer.style.visibility = 'visible';
  T.myVideo.vidPauseBtn.style.visibility = 'visible';
  T.myVideo.vidPlayBtn.style.visibility = 'hidden';
  T.myVideo.vidControls.style.visibility = 'visible';
  //T.myVideo.vidControls.style.display = 'inline';
  T.myVideo.vidControls.style.pointerEvent = 'auto';
  // spinnerAnimation()
}

function goEndVideo() {
  //console.log('goEndVideo')
  T.videoPlaying = false
  // T.myVideo.vidControls.style.visibility = 'hidden';
  // T.myVideo.vidControls.style.display = 'none';
  T.myVideo.vidControls.style.pointerEvent = 'none';
  goEndFrameAnimation()
}

function goVideoIniter() {
  //console.log('goVideoIniter')
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
  //console.log("pausePlayHandler = " ) 
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
    unMute();
    T.videoPlaying = true;
    T.myVideo.vidPauseBtn.style.visibility = 'visible';
    T.myVideo.vidPlayBtn.style.visibility = 'hidden';
  } else {
    T.myVideo.vid.pause();
    T.videoPlaying = false;
    T.myVideo.vidPauseBtn.style.visibility = 'hidden';
    T.myVideo.vidPlayBtn.style.visibility = 'visible';
  }

}

//Mutes or unmute the video player.
function muteUnmuteHandler(e) {
  if (T.myVideo.vid.volume == 0.0) {
   unMute();
    // T.myVideo.vid.volume = 1.0;
    // T.myVideo.vidMuteBtn.style.visibility = 'visible';
    // T.myVideo.vidUnmuteBtn.style.visibility = 'hidden';
  } else {
   mute();
    // T.myVideo.vid.volume = 0.0;
    // T.myVideo.vidMuteBtn.style.visibility = 'hidden';
    // T.myVideo.vidUnmuteBtn.style.visibility = 'visible';
  }
}
function mute(e) {
    T.myVideo.vid.volume = 0.0;
    T.myVideo.vidMuteBtn.style.visibility = 'hidden';
    T.myVideo.vidUnmuteBtn.style.visibility = 'visible';
}
function unMute(e) {
  T.myVideo.vid.volume = 1.0;
  T.myVideo.vidMuteBtn.style.visibility = 'visible';
  T.myVideo.vidUnmuteBtn.style.visibility = 'hidden';
}

//Stops the video:
function stopHandler(e) {
  // send2Parent(T.id)
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
  T.myVideo.counter.innerHTML = Math.floor(T.myVideo.vid.currentTime) + " / " + T.totalTime ;
  var currentPercent = T.myVideo.vid.currentTime / T.myVideo.vid.duration
 // console.log(currentPercent)
  var newX = Math.floor(100 *currentPercent)
  //console.log(newX)
  T.slider.value=newX
  //TweenMax.set(T.btn_bar,{x:newX})
  if (T.myVideo.vid.currentTime > T.vid_triggerTime) {};
  if (T.myVideo.vid.currentTime > 1.8 && T.vid_dtt_hit == false) {};
}

function addVideo() {
  //console.log('add video')
  var srcNode2 = document.getElementById('vid_mp4');
  srcNode2.setAttribute('src', T.vid_path + T.vid_filename + ".mp4");
  T.myVideo.vid.load();
}
function setupCounter(){
  //console.log('setup counter = ' +T.myVideo.vid.duration)
  var min = Math.floor( T.myVideo.vid.duration / 60 )
  var sec = Math.floor(T.myVideo.vid.duration % 60 )
  T.totalTime =  min+":"+sec
  T.myVideo.counter.innerHTML = T.myVideo.vid.currentTime + " / " + T.totalTime;
}
function moveVideoPosition(num){
  T.myVideo.vid.currentTime = T.myVideo.vid.duration * num;
  T.myVideo.vid.play()

//  //console.log('setup counter = ' +T.myVideo.vid.duration)

}

////
window.addEventListener('load', init);
////