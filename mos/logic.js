
var creative = {};
var tlm = new TimelineMax();
var canvas = document.getElementById("kale");
var canvas2 = document.getElementById("kale2");
canvas2.height = 300;
canvas2.width = 300;
canvas.height = 250;
canvas.width = 300;
 //Window onload handler:
function preInit() {
  setupDom();
  init();
}

//Initializes the ad components:
function setupDom() {
  //Part 1
  creative.myVideo = {};
  creative.myVideo.vidContainer = document.getElementById('video-container');
  creative.myVideo.vid          = document.getElementById('video');
  creative.myVideo.vidPlayBtn   = document.getElementById('play-btn');
  creative.myVideo.vidPauseBtn  = document.getElementById('pause-btn');
  creative.myVideo.vidStopBtn   = document.getElementById('stop-btn');
  creative.myVideo.vidReplayBtn = document.getElementById('replay-btn');
  creative.myVideo.vidUnmuteBtn = document.getElementById('unmute-btn');
  creative.myVideo.vidControls = document.getElementById('vid-controls');
  //creative.myVideo.vidUnmuteBtn = document.getElementById('unmute');
  creative.myVideo.vidMuteBtn   = document.getElementById('mute-btn');
  creative.myVideo.vidProgressBar   = document.getElementById('progress-bar');

  // creative.vid_tune_in = document.getElementById('vid_tune_in');
  //   creative.vid_tune_in1 = document.getElementById('vid_tune_in1');
  //     creative.vid_tune_in2 = document.getElementById('vid_tune_in2');
  //       creative.vid_tune_in3 = document.getElementById('vid_tune_in3');

  //endframe
  creative.whiteFlash = document.getElementById('whiteFlash');
  creative.endframe = document.getElementById('endframe');
  creative.bg = document.getElementById('bg');
  // creative.canvas = document.getElementById("kale");

  creative.exit = document.getElementById('exit');
  creative.title = document.getElementById('title');
  creative.tagline = document.getElementById('tagline');
  creative.peeps = document.getElementById('peeps');
  creative.kale = document.getElementById('kale');
  creative.kale2 = document.getElementById('kale2');
  
  
  creative.cta = document.getElementById('cta');
    creative.cta_on = document.getElementById('cta_on');

  creative.tune_in = document.getElementById('tune_in');
    creative.tune_in1 = document.getElementById('tune_in1');
      creative.tune_in2 = document.getElementById('tune_in2');
        creative.tune_in3 = document.getElementById('tune_in3');

  //TOP
  creative.blackCover = document.getElementById('blackCover');
  creative.exit = document.getElementById('exit');
  creative.replay = document.getElementById('replay');

  //vars:
  creative.onEndframe = false;
  creative.rolloverAnimating = false;
  creative.kale_loaded = false;
  creative.myTimer_endVideoShort;
}

 //init:
function init() {
  // 'true' = enable muted. Won't work on iOS.
  creative.autoplay = true;
  addVideoTracking0();
  addListeners();
  set_tuneIns();

 if( checkforMobile() ) {
     goEndFrame();
  }else{
     goEndFrame();
    //goPart1();
  }
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
    creative.exit.addEventListener('click', onExitClickHandler);
    creative.exit.addEventListener('mouseout', onOutHandler);
    creative.exit.addEventListener('mouseover', onOverHandler);
    creative.exit.addEventListener('mousemove', onOverHandler);
    creative.replay.addEventListener("mouseenter", onOverHandler);//mouseEnter better than mouseOver
    creative.replay.addEventListener('click', onReplayHandler, false);
    creative.replay.addEventListener('mouseover', onOverReplay, false);
    //video
    creative.myVideo.vidPlayBtn.addEventListener('click', pausePlayHandler0, false);
    creative.myVideo.vidPauseBtn.addEventListener('click', pausePlayHandler0, false);
    creative.myVideo.vidMuteBtn.addEventListener('click', muteUnmuteHandler0, false);
    creative.myVideo.vidUnmuteBtn.addEventListener('click', muteUnmuteHandler0, false);
    creative.myVideo.vidReplayBtn.addEventListener('click', onReplayHandler, false);
    creative.myVideo.vidStopBtn.addEventListener('click', stopHandler0, false);
    creative.myVideo.vid.addEventListener('ended', videoEndHandler0, false);
    creative.myVideo.vid.addEventListener('timeupdate', videoTimeUpdateHandler0, false);

  }

  function onOutHandler() {
    if(creative.onEndframe == true){
      TweenMax.to(creative.cta_on, 0.4, { 
            opacity:0,
            ease:Power0.easeNone
      });

      TweenMax.to(canvas2, 0.8, { 
              opacity:0,
              ease:Power0.none
      });

      creative.rolloverAnimating = false;
    }
  }
  function rolloverAnimatingFalse() {
      creative.rolloverAnimating = false;
  }
  function onOverHandler() {
    // console.log( "onOver = " + creative.kale_loaded   )
    if(creative.onEndframe == true && creative.rolloverAnimating == false&& creative.kale_loaded ==true){
      creative.rolloverAnimating = true;
      // creative.cta_on.style.visibility = 'visible'; 
      TweenMax.to(creative.cta_on, 0.3, { 
            opacity:1,
            ease:Power0.easeNone
      });
      TweenMax.to(canvas2, 0.8, { 
              opacity:1,
              ease:Power0.none
      });
    }
  }
 function onOverReplay() {
    TweenMax.to(creative.replay, 1, {
      rotation:"+=720_ccw",
      ease:Power4.easeNone
    });
  }

  function onExitClickHandler() {
    //Enabler.exit('BackgroundExit');
    console.log('Exit to' + clickTag);
    // window.open(clickTag, '_blank');
   stopHandler0();
    if(creative.onEndframe == false){
      goEndFrame();
    }
  }

  function onReplayHandler(e) {
    // location.reload();
    console.log('on replay')

    TweenMax.set(creative.replay, {   rotation:"0_ccw"   });
    TweenMax.set(canvas, { scaleX:1, scaleY:1  });

    onOutHandler(); //resetRollover animations
    creative.onEndframe = false;
    rolloverAnimatingFalse(); 
    //Enabler.counter("Replay video 0", true);
    creative.myVideo.vidControls.style.display = "block";
    creative.myVideo.vid.currentTime = 0;
    creative.myVideo.vid.play();
    creative.myVideo.vid.volume = 1.0;
    creative.myVideo.vidPauseBtn.style.visibility = 'visible';
    creative.myVideo.vidMuteBtn.style.visibility  = 'visible';
    creative.myVideo.vidContainer.style.visibility  = 'visible';
    // Hide
    creative.endframe.style.display = 'none';
    creative.whiteFlash.style.visibility = 'hidden';
    creative.replay.style.visibility = 'hidden';

    creative.onEndframe = false;
    canvas.style.zIndex = "8";
  }

//-----------------------------------
// Animation 
//-----------------------------------
  function onFinishTween() {
    console.log('fin part 1' );    
  }

function goPart1() {
      tween = TweenMax.to(creative.blackCover, 0.3, {
        opacity: 0,
        ease:Linear.easeNone
      });    

      creative.myVideo.vidUnmuteBtn.style.opacity     = 1;
      creative.myVideo.vidMuteBtn.style.visibility    = 'hidden';
      creative.myVideo.vidUnmuteBtn.style.visibility  = 'visible';

      creative.myVideo.vidPauseBtn.style.visibility   = 'hidden';
      creative.myVideo.vidPlayBtn.style.visibility    = 'hidden';
      if (creative.autoplay) {
            if (creative.myVideo.vid.readyState >= 2) {
              startMuted0(null);
            }
            else {
              creative.myVideo.hasCanPlay = true;
              creative.myVideo.vid.addEventListener('canplay', startMuted0, false);
            }
            // HACK: Safari experiences video rendering issues, fixed by forcing a viewport refresh
            creative.myVideo.vidMuteBtn.style.visibility = 'visible';
              setTimeout(function() {
                creative.myVideo.vidMuteBtn.style.visibility = 'hidden';
              }, 200);
      }
      else {
        creative.myVideo.vidMuteBtn.style.visibility    = 'visible';
        creative.myVideo.vidUnmuteBtn.style.visibility  = 'hidden';
        creative.myVideo.vidPauseBtn.style.visibility   = 'hidden';
        creative.myVideo.vidPlayBtn.style.visibility    = 'visible';
      }
      creative.myVideo.vidContainer.style.visibility  = 'visible';

      creative.myTimer_endVideoShort = setInterval(endVideoShort, 14000);

}
function endVideoShort() {
    console.log('endvideo')
    clearInterval(creative.myTimer_endVideoShort);
    stopHandler0();
    goEndFrame();
}

function swapZ(){
    console.log('swap Z')
    draw( document.getElementById("kale_image2").src,false,canvas2)

    // alert(document.getElementById("kale").style.zIndex);
    // console.log( 'zzz = ' + creative.exit.style.zIndex    )
    canvas.style.zIndex = "2";
    creative.onEndFrame = true;
}

function goEndFrame() {
    if(creative.onEndframe) return;
      console.log('p '+document.getElementById('peeps').style.zIndex);
      draw(document.getElementById("kale_image").src,true,canvas);

   TweenMax.set(canvas, { 
          opacity:1
     });

    creative.onEndframe = true;
    console.log('go end frame' );   
    creative.whiteFlash.style.visibility = 'visible'; 
    creative.myVideo.vidControls.style.display = "none";
    creative.endframe.style.display = 'block'; 
    creative.replay.style.visibility = 'visible'; 

    TweenMax.set(creative.blackCover, {opacity: 0 }); //make sure cover is off.
    TweenMax.from(creative.whiteFlash, 0.3, { 
          delay:0,
          opacity: 1,
          ease:Power0.easeNone 
   });
    TweenMax.to(canvas, 1, { 
          delay:0.5,
          opacity:0,
          ease:Power0.easeNone,
    });
     TweenMax.from(creative.peeps, 0.8, { 
          delay:1.1,
          scaleX:1.5, 
          scaleY:1.5,
          clip:"rect(0px 150px 250px 150px)",
          ease:Power4.easeOut,
          onComplete:swapZ
    });
    TweenMax.from(creative.tagline, 0.8, { 
          delay:1.4,
          scaleX:0.8, 
          scaleY:0.8,
          opacity: 0,
          ease:Power4.easeOut
    });
    TweenMax.from(creative.title, 0.7, { 
          delay:1.4,
          x:"-=100px",
          opacity: 0,
          ease:Power4.easeOut
    });
    TweenMax.from(creative.tune_in, 0.7, { 
          delay:1.4,
          x:"+=100px",
          opacity: 0,
          ease:Power4.easeOut
    });
    TweenMax.from(creative.cta, 0.9, { 
          delay:1.3,
          y:"+=35px",
          // opacity: 0,
          ease:Power4.easeOut,
          onComplete:setEndFrameTrue
    });
    TweenMax.from(creative.replay, 2, { 
          delay:2.1,
          rotation:"1060_cw",
          opacity: 0,
          ease:Expo.easeOut,
          onStart:setKale_loaded
    });
    // creative.onEndFrame = true;
}
function setEndFrameTrue(){
  creative.onEndFrame = true;
  creative.kale_loaded = true;
}
function setKale_loaded(){  //bug fix-where Kale_image appears to pop on instead of fade in. 
  creative.kale_loaded = true;
}

//-----------------------------------
// DATE CODING 
//-----------------------------------
  function getDatedObject(array){
    var today;
    if( getQueryVariable( 'overrideDate' )) { 
      console.log("There is a date override variable.")
      today = new Date( getQueryVariable( 'overrideDate' ) * 1 ); 
    } else {
      today = new Date();
    }
    console.log("Month Today=" + today.getMonth() + ". DAY Today= " + today.getDate());
    var tempArray = {};
    for( var i = 0; i < array.length; i++ ){
      if (today.getTime() >= array[i].date.getTime()){
      tempArray = array[i];
      console.log("ddt i = "+ i);
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

  //var path = "https://d97b9st0votpr.cloudfront.net/kungfupanda/";
  var path = "media/";
  var filename = "fpo_300x250";

  var ddtObjectArray = [
    { // default leave date 1/1/2000 . Month is 1 num back. (august = 7)
      //sunday
      date: new Date("1/1/2000"),
      mp4: path + filename + ".mp4",
      webm: path + filename + ".webm",
      date_version:1
    },{//wed
        date: new Date("8/25/2016"),
        mp4: path + filename + ".mp4",
        webm: path + filename + ".webm",
        date_version:2
    },{//tonight
        date: new Date("8/31/2016"),
        mp4: path + filename + ".mp4",
        webm: path + filename + ".webm",
        date_version:3
    },{//weds
        date: new Date("9/1/2016"),
        mp4: path + filename + ".mp4",
        webm: path + filename + ".webm",
        date_version:2
    }
  ];
  // var ddtObject = getDatedObject(ddt_array);
  // ddtObject.date_version =3
  var ddtObject = getDatedObject(ddtObjectArray);

  function set_tuneIns(){
    if(!ddtObject.date_version) ddtObject.date_version = 1; //is defined?
    creative['tune_in'+ ddtObject.date_version ].style.visibility ='visible';
    // creative['vid_tune_in'+ ddtObject.date_version ].style.visibility ='visible';
  }



//-----------------------------------
// VIDEO  
//-----------------------------------

//Triggered once the video player is ready to play:
function startMuted0(e) {
  // Leaving the listener can cause issues on Chrome / Firefox
  if (creative.myVideo.hasCanPlay) {
    creative.myVideo.vid.removeEventListener('canplay', startMuted0);
    creative.myVideo.hasCanPlay = false;
  }
  // If paused then play
  creative.myVideo.vid.volume       = 0; // Muted by default
  creative.myVideo.vid.currentTime  = 0;
  creative.myVideo.vid.play();
  //creative.myVideo.vidPauseBtn.style.visibility = 'visible';
  creative.myVideo.vidPlayBtn.style.visibility  = 'hidden';

}

//Play pause toggle:
function pausePlayHandler0(e) {
  // Under IE10, a video is not 'paused' after it ends.
  if (creative.myVideo.vid.paused || creative.myVideo.vid.ended) {
    if (creative.isClick0) {
      creative.myVideo.vid.volume = 1.0;
      creative.myVideo.vidMuteBtn.style.visibility    = 'visible';
      creative.myVideo.vidUnmuteBtn.style.visibility  = 'hidden';
      creative.isClick0 = false;
    }
    // If paused then play
    creative.myVideo.vid.play();
    creative.myVideo.vidPauseBtn.style.visibility = 'visible';
    creative.myVideo.vidPlayBtn.style.visibility  = 'hidden';
  }
  else {
    creative.myVideo.vid.pause();
    creative.myVideo.vidPauseBtn.style.visibility = 'hidden';
    creative.myVideo.vidPlayBtn.style.visibility  = 'visible';
  }
}

//Mutes or unmute the video player.
function muteUnmuteHandler0(e) {
    console.log(' call muter');
    clearInterval(creative.myTimer_endVideoShort);
  
   // moveVideoControls();
   creative.myVideo.vidPauseBtn.style.visibility = 'visible';

  if (creative.myVideo.vid.volume == 0.0) {
    // Enabler.counter("Unmute video 0", true);
    creative.myVideo.vid.volume = 1.0;
    creative.myVideo.vidMuteBtn.style.visibility   = 'visible';
    creative.myVideo.vidUnmuteBtn.style.visibility = 'hidden';
  } else {
    // Enabler.counter("Mute video 0", true);
    creative.myVideo.vid.volume = 0.0;
    creative.myVideo.vidMuteBtn.style.visibility   = 'hidden';
    creative.myVideo.vidUnmuteBtn.style.visibility = 'visible';
  }
}
function moveVideoControls(e){
   creative.myVideo.vidMuteBtn.style.left  = '20px';
   creative.myVideo.vidUnmuteBtn.style.left  = '20px';
}

//Stops the video:
function stopHandler0(e) {
  // Enabler.counter("Video 0 stopped", true);
  console.log("clearInterval2 = " + creative.myTimer_endVideoShort)
  creative.myVideo.vid.currentTime = 0;
  creative.myVideo.vid.pause();
  creative.myVideo.vidPauseBtn.style.visibility = 'hidden';
  creative.myVideo.vidPlayBtn.style.visibility  = 'visible';
  creative.isClick0 = true;
}

//On Video End:
function videoEndHandler0(e) {
  creative.myVideo.vid.currentTime = 0;
  creative.myVideo.vid.pause();
  creative.myVideo.vidPauseBtn.style.visibility = 'hidden';
  creative.myVideo.vidPlayBtn.style.visibility  = 'visible';
  creative.isClick0 = true;

  goEndFrame();
}

//Handler triggered when the video has timeUpdates:
function videoTimeUpdateHandler0(e) {
 var perc = creative.myVideo.vid.currentTime / creative.myVideo.vid.duration;
 creative.myVideo.vidProgressBar.style.width = Math.round(100*perc) + '%';
}

//Add video metrics by loading in video module, and assigning to videos:
function addVideoTracking0() {
  var srcNode = document.createElement('source');
  srcNode.setAttribute('type', 'video/webm');
  // srcNode.setAttribute('src', Enabler.getUrl(ddtObject.webm));
  srcNode.setAttribute('src', ddtObject.webm);
  creative.myVideo.vid.appendChild(srcNode);

  srcNode = document.createElement('source');
  srcNode.setAttribute('type', 'video/mp4');
  // srcNode.setAttribute('src', Enabler.getUrl(ddtObject.mp4));
  srcNode.setAttribute('src', ddtObject.mp4);
  creative.myVideo.vid.appendChild(srcNode);
  creative.myVideo.vid.appendChild(srcNode);


  // Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
  //   studio.video.Reporter.attach('Video Report 0', creative.myVideo.vid);
  // }.bind(this));
}



//-----------------------------------
// KaleidoScope Animation 
//-----------------------------------
function draw(myImage,myAuto,myCanvas) {

        var ctx = myCanvas.getContext('2d');

        var img = new Image();
        var counter = -50; // for auto play
        // var slider = document.getElementById("slider-1");
        var triangles = 14; 
            
        img.onload = function(){
            //getting image dimensions so entire canvas width is covered
            var diagonal = Math.sqrt(Math.pow(myCanvas.width,2) + Math.pow(myCanvas.height,2));
            var scaleFactor = img.width/img.height;
            var h = diagonal/2;
            var w = parseInt(scaleFactor*h);
            console.log("h = "+  h ); console.log("w = "+  w )
            
            //event listeners
            //draw kaleidoscope once before mouse movement detection begins
            kaleidoscope(w, h, img, myCanvas, ctx, triangles, 0,0);
            
            //draw kaleidoscope when mouse enters window
            creative.exit.addEventListener('mouseenter', function(e){
                if(!creative.onEndFrame) return;
                var mouseX = e.clientX.map(0, myCanvas.width, -w/10, w/10);
                var mouseY = e.clientY.map(0, myCanvas.height, -h/10, h/10);
                window.requestAnimationFrame(function(){kaleidoscope(w, h, img, myCanvas, ctx, triangles, mouseX*4, mouseY*1.3);});
            });
            
            //redraw kaleidoscope when mouse moves along x-axis, y-axis
            creative.exit.addEventListener('mousemove', function(e){
                if(!creative.onEndFrame) return;
                var mouseX = e.clientX.map(0, myCanvas.width, -w/8, w/8);
                var mouseY = e.clientY.map(0, myCanvas.height, -h/8, h/8);

                // console.log(mouseY)
                window.requestAnimationFrame(function(){kaleidoscope(w, h, img, myCanvas, ctx, triangles, mouseX*4, mouseY*1.3);});
            });

            if(myAuto){
                var myVar = setInterval(function(){ myTimer() }, 1000/60);
            }
            function myTimer() {
                counter+=1
                if(counter<=50){
                    kaleidoscope(w, h, img, myCanvas, ctx, triangles, counter,(counter/4));
                } else{

                    clearInterval(myVar);
                    // draw( document.getElementById("kale_image2").src,false)
                }
            }
        }
    img.src = myImage //document.getElementById("kale_image").src;
}
// draw();
/* draws a kaleidoscope
 * tranlates coordinates to center of canvas and then rotates by vertexAngle
 * then sets up the triangle clipping mask 
 * and rotates again by baseAngle so the image is perpendicular to the vertexAngle
 * finally draws the image (as is, or mirrored)
 */
function kaleidoscope(w, h, img, canvas, ctx, triangles, offset,offsetY){
    //creates the triangle for the clipping mask
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    var triangleClip = new Path2D();
    // triangleClip.clearRect(0, 0, canvas.width, canvas.height);

    triangleClip.moveTo(0,0);
    triangleClip.lineTo(canvas.width, 0);
    triangleClip.lineTo(canvas.width*Math.cos((Math.PI/180)*(360/triangles)),canvas.width*Math.sin((Math.PI/180)*(360/triangles)));
    triangleClip.lineTo(0, 0);
    
    //gets the angles of the triangleClip
    var vertexAngle = 360/triangles;
    var baseAngle = (180 - vertexAngle)/2;
    
    //start drawing triangles
    for (var i=0; i < triangles; i++){
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate((Math.PI/180)*vertexAngle*i);
        ctx.clip(triangleClip);
        if (i % 2 === 0) {
            ctx.rotate(-(Math.PI/180)*baseAngle);
            // mirror(img, ctx, w/2+offset, 0, w, h);
             mirror(img, ctx, w/2+offset,offsetY, w, h);
        }
        else {
            ctx.rotate(-(Math.PI/180)*baseAngle);
            //ctx.drawImage(img, -w/2+offset, 0, w, h);
            ctx.drawImage(img, -w/2+offset, offsetY, w, h);
           
        }
        ctx.restore();
    }
}

//http://stackoverflow.com/questions/8168217/html-canvas-how-to-draw-a-flipped-mirrored-image
function mirror(v, canvas, x, y, width, height){
    canvas.save();
    canvas.scale(-1,1);
    canvas.drawImage(v, x ,y ,width*-1,height);
    canvas.restore();
}

//http://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers#23202637
/* maps number from one range to another */
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}



// Main onload handler
window.addEventListener('load', preInit);
