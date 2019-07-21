var creative = {};
var tlm = new TimelineMax( {paused:true} );

function preInit() {
  console.log("preInit()");
   // if (!EB.isInitialized()) {
        // EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);

        //startAd(); //for BAckstage to work. 
   // } else {
        startAd();
    // }
}
function startAd() {
     setupDom();
     //set_tuneIns();
     creative.autoplay = true;
     addListeners();
     // addVideoSource();
    TweenMax.to(creative.blackCover, 1.0, { opacity: 0}); 
    if( checkforMobile() ) {
        goEndFrame();
    }else{
        goEndFrame();
    }
 }

//Initializes the ad components:
function setupDom() {
  //Part 1
  creative.myVideo = {};
  creative.myVideo.vidContainer = document.getElementById('video-container');
  creative.myVideo.vid          = document.getElementById('video');

  //endframe
  creative.endframe = document.getElementById('endframe');
  creative.bg = document.getElementById('bg');
  creative.exit = document.getElementById('exit');
  creative.title = document.getElementById('title');
  creative.girl = document.getElementById('girl');
  creative.ddt = document.getElementById('ddt');
    creative.b1 = document.getElementById('b1');
    creative.b2 = document.getElementById('b2');
    creative.b3 = document.getElementById('b3');
    creative.b4 = document.getElementById('b4');
    creative.b5 = document.getElementById('b5');
    creative.b6 = document.getElementById('b6');

    creative.cta = document.getElementById('cta');
    // creative.cta_on = document.getElementById('cta_on');
    creative.flare = document.getElementById('flare');



  //TOP
  creative.blackCover = document.getElementById('blackCover');
  creative.exit = document.getElementById('exit');
  // creative.replay = document.getElementById('replay');

  //vars:
  creative.onEndframe = false;
  creative.onEndframeComplete = false;
  creative.rolloverAnimating = false;
  creative.vidCompleted100 = false;
}


function checkforMobile () {
  if ( navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)) 
  {
    return true;
  } else {
    return false;
  }
}

//-----------------------------------
// listeners 
//-----------------------------------
  function addListeners() {
    console.log("addListeners()");
    creative.exit.addEventListener('click', onExitClickHandler);
    creative.exit.addEventListener('mouseout', onOutHandler);
    creative.exit.addEventListener('mouseover', onOverHandler);
    // creative.replay.addEventListener("mouseenter", onOverHandler);//mouseEnter better than mouseOver
    // creative.replay.addEventListener('click', onReplayHandler, false);
    // creative.replay.addEventListener('mouseover', onOverReplay, false);
    //video
    // creative.myVideo.vid.addEventListener('ended', videoEndHandler0, false);
    // creative.myVideo.vid.addEventListener('timeupdate', videoTimeUpdateHandler0, false);
  }

  function onOutHandler() {
    if(creative.onEndframe == true && creative.onEndframeComplete == true){
      tlm.reverse();
      TweenMax.to(creative.cta_on, 0.4, { 
          opacity: 0
      }) 
    }
  }
  function set_onEndframeComplete() {
      creative.onEndframeComplete = true;
  }
  function onOverHandler() {
    if(creative.onEndframe == true && creative.onEndframeComplete == true){
      tlm.play();

    TweenMax.from(creative.flare, 0.5, { 
           x: -402
      }) 

      // TweenMax.to(creative.cta_on, 0.5, { 
      //     opacity: 1
      // }) 
    }
  }

  function setUpRolloverAnimation(){
    var t1= 1;
    tlm.to(creative.b1, t1, { 
          y:-45,
          x:+30,
          rotation:"+=20_cw",
          ease:Power1.easeInOut
        },  
           "-=0.0"
        )
        .to(creative.b2, t1, {
            y:-45,
            x:+5,
            rotation:"-=40_ccw",
            ease:Power1.easeInOut
        },  
           "-=1"
        )
        .to(creative.b3, t1-0.15, {
            y:-45,
            x:+0,
            scaleX:1.15,
            scaleY:1.15,
            rotation:"-=10_ccw",
            ease:Power1.easeInOut
        },  
           "-=1"
        )
        .to(creative.b4, t1, {
            y:-15,
            x:-40,
            rotation:"+=30_cw",
            ease:Power1.easeInOut
        },  
           "-=1"
        )
        .to(creative.b5, t1-0.1, {
            y:-35,
            x:-25,
            scaleX:1.05,
            scaleY:1.05,
            rotation:"+=25_cw",
            ease:Power1.easeInOut
        },  
           "-=1"
        )
        .to(creative.b6, t1, {
            y:-45,
            x:-45,
            rotation:"-=35_ccw",
            ease:Power1.easeInOut
        },  
           "-=1"
        )
          .to(creative.girl, 0.95, {
            y:-5,
            x:+5,
            scaleX:1.04,
            scaleY:1.04,
            // x:-45,
            ease:Power1.easeInOut
        },  
           "-=1"
        )
  }


  function onExitClickHandler() {
     // try {	if( EB.isInitialized()) { EB.clickthrough();	}}
	   // catch( e ) { console.log( e ); };
    // /*console.log('Exit to' + clickTag);
    window.open(clickTag, '_blank');
  }

  function onReplayHandler(e) {
    onOutHandler(); //resetRollover animations
    rolloverAnimatingFalse(); 

    creative.myVideo.vid.load();
    creative.myVideo.vid.play();
    creative.myVideo.vid.volume = 1.0;
    //creative.myVideo.vidPauseBtn.style.visibility = 'visible';
   // creative.myVideo.vidMuteBtn.style.visibility  = 'visible';
    creative.myVideo.vidContainer.style.visibility  = 'visible';
    // Hide
    creative.endframe.style.display = 'none';
    // creative.replay.style.visibility = 'hidden';

    creative.onEndframe = false;
    creative.vidCompleted100 = false;
  }

//-----------------------------------
// Animation 
//-----------------------------------
  function onFinishTween() {
    console.log('fin part 1' );    
  }

function goPart1() {
      if (creative.autoplay===true) {
            console.log("creative.autoplay is true");
            console.log("creative.myVideo.vid.readyState : " + creative.myVideo.vid.readyState);
            initVideo();

          setTimeout(function() {
            // creative.myVideo.vidMuteBtn.style.visibility = 'hidden';
          }, 200);
      }
      else {
           //  creative.myVideo.vidMuteBtn.style.visibility    = 'visible';
        //  creative.myVideo.vidUnmuteBtn.style.visibility  = 'hidden';
         //creative.myVideo.vidPauseBtn.style.visibility   = 'hidden';
        // creative.myVideo.vidPlayBtn.style.visibility    = 'visible';
      }
      creative.myVideo.vidContainer.style.visibility  = 'visible';
      //goEndFrame();
}


function goEndFrame() {
    if(creative.onEndframe) return; creative.onEndframe = true;
    setUpRolloverAnimation();
    console.log('go end frame' );   
    creative.endframe.style.display = 'block'; 
    
    TweenMax.from(creative.bg, 2.5, { 
          scaleX:1.2, 
          scaleY:1.2,
          ease:Power4.easeOut
     })
    TweenMax.from(creative.girl, 2.5, { 
          scaleX:1.4, 
          scaleY:1.4,
          x:+10,
          ease:Power4.easeOut
     })
    TweenMax.from(creative.title, 0.95, { 
          delay:0.2,
          scaleX:2.5, 
          scaleY:2.5,
          x:-450,
          y:-50,
          opacity: 0,
          ease:Power3.easeOut
    })
    TweenMax.from(creative.ddt, 1, { 
          delay:0.9,
          opacity: 0,
          ease:Power0.easeNone
    })

    var t1= 1;
    TweenMax.from(creative.b1, t1, { 
          delay:0.3,
          y:+80,
          x:+20,
          rotation:"+=20_cw",
          opacity: 0,
          ease:Power1.easeOut
    })
    TweenMax.from(creative.b5, 0.75, { 
          delay:0.35,
          y:+45,
          opacity: 0,
          rotation:"+=30_cw",
          ease:Power1.easeOut
    })
    TweenMax.from(creative.b2, t1, { 
          delay:0.4,
          y:+40,
          x:-20,
          rotation:"-=40_ccw",
          opacity: 0,
          ease:Power1.easeOut
    })
    TweenMax.from(creative.b4, 0.75, { 
          delay:0.45,
          y:+80,
          opacity: 0,
          rotation:"-=30_ccw",
          ease:Power1.easeOut
    })
    TweenMax.from(creative.b3, t1, { 
          delay:0.5,
          y:+60,
          rotation:"+=30_cw",
          opacity: 0,
          ease:Power2.easeOut
    })
    TweenMax.from(creative.b6, 0.75, { 
          delay:0.45,
          y:+80,
          opacity: 0,
          rotation:"+=30_cw",
          ease:Power1.easeOut
    })
    TweenMax.from(creative.cta, 0.5, { 
          delay:0.8,
          y:-35,
          opacity: 0,
          ease:Power3.easeOut
    })
    TweenMax.from(creative.flare, 0.5, { 
      delay:1.3,
          x: -402
      }) 

    
    TweenMax.delayedCall(1.6, set_onEndframeComplete)
}

//-----------------------------------
// DATE CODING 
//-----------------------------------
  function getDatedObject(array){
    var today;
    if( getQueryVariable( 'overrideDate' )) { 
      // console.log("There is a date override variable.")
      today = new Date( getQueryVariable( 'overrideDate' ) * 1 ); 
    } else {
      today = new Date();
    }
    console.log("Month Today=" + today.getMonth() + ". DAY Today= " + today.getDate());
    var tempArray = {};
    for( var i = 0; i < array.length; i++ ){
      if (today.getTime() >= array[i].date.getTime()){
      tempArray = array[i];
      // console.log("ddt i = "+ i);
      }
    }
    return tempArray;
  }

  function getQueryVariable( variable ) {
     var query = window.location.search.substring(1);
     var vars = query.split("&");
     for (var i=0;i<vars.length;i++) {
         var pair = vars[i].split("=");
         if(pair[0] == variable){return pair[1];}
     }
    return(false);
 }

  var path = "media/";
  var filename = "WCCE_300x250";
  var ddtObjectArray = [{
      date: new Date("1/1/2000"),  //PRE
      mp4: path + filename + ".mp4",
      webm: path + filename + ".webm",
      date_version:1
    },{
        date: new Date("9/11/2016"),  //this week
        mp4: path + filename + ".mp4",
        webm: path + filename + ".webm",
        date_version:2
    },{
        date: new Date("9/13/2016"), //tomorrow
        mp4: path + filename + ".mp4",
        webm: path + filename + ".webm",
        date_version:3
    },{
        date: new Date("9/14/2016"), //tonight
        mp4: path + filename + ".mp4",
        webm: path + filename + ".webm",
        date_version:4
    },{
        date: new Date("9/15/2016"), //Post
        mp4: path + filename + ".mp4",
        webm: path + filename + ".webm",
        date_version:5
    }
  ];
  // var ddtObject = getDatedObject(ddt_array);
  // ddtObject.date_version =3
  var ddtObject = getDatedObject(ddtObjectArray);

  function set_tuneIns(){
    if(!ddtObject.date_version) ddtObject.date_version = 1; //make sure its defined.
    // creative.tune_in.style.src = "images/ddt"+ ddtObject.date_version + ".png";
  }



//-----------------------------------
// VIDEO  
//-----------------------------------
//Triggered once the video player is ready to play:
function startMuted0(e) {
  console.log("startMuted()");
  // Leaving the listener can cause issues on Chrome / Firefox
  if (creative.myVideo.hasCanPlay) {
    creative.myVideo.vid.removeEventListener('canplay', startMuted0);
    creative.myVideo.hasCanPlay = false;
  }
  // If paused then play
  creative.myVideo.vid.volume       = 0; // Muted by default
  creative.myVideo.vid.load();
  //creative.myVideo.vid.currentTime  = 0;
  creative.myVideo.vid.play();
  //creative.myVideo.vidPauseBtn.style.visibility = 'visible';
  //creative.myVideo.vidPlayBtn.style.visibility  = 'hidden';

}

//Play pause toggle:
function pausePlayHandler0(e) {
    console.log("pausePlayHandler0");
  // Under IE10, a video is not 'paused' after it ends.
  if (creative.myVideo.vid.paused || creative.myVideo.vid.ended) {
    if (creative.isClick0) {
      creative.myVideo.vid.volume = 1.0;
      //creative.myVideo.vidMuteBtn.style.visibility    = 'visible';
      //creative.myVideo.vidUnmuteBtn.style.visibility  = 'hidden';
      creative.isClick0 = false;
    }
    // If paused then play
    creative.myVideo.vid.play();
    //creative.myVideo.vidPauseBtn.style.visibility = 'visible';
   // creative.myVideo.vidPlayBtn.style.visibility  = 'hidden';
  }
  else {
    creative.myVideo.vid.pause();
   // creative.myVideo.vidPauseBtn.style.visibility = 'hidden';
   // creative.myVideo.vidPlayBtn.style.visibility  = 'visible';
  }
}

//Mutes or unmute the video player.
function muteUnmuteHandler0(e) {
    console.log(' call muter');
  
   // moveVideoControls();
   //creative.myVideo.vidPauseBtn.style.visibility = 'visible';

  if (creative.myVideo.vid.volume == 0.0) {
    //Enabler.counter("Unmute video 0", true);
    creative.myVideo.vid.volume = 1.0;
    //creative.myVideo.vidMuteBtn.style.visibility   = 'visible';
    //creative.myVideo.vidUnmuteBtn.style.visibility = 'hidden';
  } else {
    //Enabler.counter("Mute video 0", true);
    creative.myVideo.vid.volume = 0.0;
   // creative.myVideo.vidMuteBtn.style.visibility   = 'hidden';
   // creative.myVideo.vidUnmuteBtn.style.visibility = 'visible';
  }
}
function moveVideoControls(e){
  // creative.myVideo.vidMuteBtn.style.left  = '20px';
   //creative.myVideo.vidUnmuteBtn.style.left  = '20px';
}

//Stops the video:
function stopHandler0(e) {
  //Enabler.counter("Video 0 stopped", true);
  creative.myVideo.vid.pause();
  //creative.myVideo.vidPauseBtn.style.visibility = 'hidden';
  //creative.myVideo.vidPlayBtn.style.visibility  = 'visible';
  creative.isClick0 = true;
}

//On Video End:
function videoEndHandler0(e) {
  creative.myVideo.vid.currentTime = 0;
  creative.myVideo.vid.pause();
  creative.isClick0 = true;
  creative.vidCompleted100 = true;
  goEndFrame();
}

//Handler triggered when the video has timeUpdates:
function videoTimeUpdateHandler0(e) {
 // var perc = creative.myVideo.vid.currentTime / creative.myVideo.vid.duration;
 // if(perc>=1)  goEndFrame();//hack for unit not going to endframe after video completes in Safari
// creative.myVideo.vidProgressBar.style.width = Math.round(100*perc) + '%';
}

function initVideo(){
    console.log("initVideo()");
    try {
        var sdkData = EB.getSDKData();
    }catch(e) { console.log(  e ); }
    
    console.log("sdkData: " + sdkData);
    try {
        var videoTrackingModule = new EBG.VideoModule(video);
    }catch(e) { console.log(  e ); }
    
    creative.myVideo.vidContainer.style.visibility = "visible";
    creative.myVideo.vid.play();
    //videoTrackingModule.playVideo();
}
//Add video metrics by loading in video module, and assigning to videos:
function addVideoSource() {
  console.log("addVideoSource()");
  var srcNode = document.createElement('source');
  srcNode.setAttribute('type', 'video/webm');
  srcNode.setAttribute('src', ddtObject.webm);
  creative.myVideo.vid.appendChild(srcNode);
  //
  srcNode = document.createElement('source');
  srcNode.setAttribute('type', 'video/mp4');
  srcNode.setAttribute('src', ddtObject.mp4);
  creative.myVideo.vid.appendChild(srcNode);

}

// Main onload handler
window.addEventListener('load', preInit);
