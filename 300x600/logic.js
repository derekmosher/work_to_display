var creative = {};

function preInit() {
  console.log("preInit()");
   // if (!EB.isInitialized()) {
        // EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);

        //startAd(); //for BAckstage to work. 
   // } else {
        startAd();
    // }
}
//test comment
function startAd() {
    setupDom();
     //set_tuneIns();
    creative.autoplay = true;
    addListeners();
    TweenMax.to(creative.blackCover, 1.0, { opacity: 0}); 
    goAnimation();
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
  creative.title = document.getElementById('title');

  creative.cta = document.getElementById('cta');
  creative.cta_on = document.getElementById('cta_on');

  //TOP
  creative.blackCover = document.getElementById('blackCover');
  creative.exit = document.getElementById('exit');

  //vars:
  creative.onEndframe = false;
  creative.onEndframeComplete = false;
  creative.rolloverAnimating = false;

}



//-----------------------------------
// listeners 
//-----------------------------------
  function addListeners() {
    console.log("addListeners()");
    creative.exit.addEventListener('click', onExitClickHandler);
    creative.exit.addEventListener('mouseout', onOutHandler);
    creative.exit.addEventListener('mouseover', onOverHandler);
  }

  // var onEndframe = false;
  function onOutHandler() {
      TweenMax.to(creative.cta_on, 0.4, { 
           opacity:0
      }) 
  }

  function onOverHandler() {
      TweenMax.to(creative.cta_on, 0.6, { 
           opacity:1
      }) 
  }



  function onExitClickHandler() {
     // try {  if( EB.isInitialized()) { EB.clickthrough();  }}
     // catch( e ) { console.log( e ); };
    // /*console.log('Exit to' + clickTag);
    //window.open(clickTag, '_blank');
  }
  function onReplayHandler(e) {  }

//-----------------------------------
// Animation 
//-----------------------------------
  function onFinishTween() {
    console.log('fin part 1' );    
  }

function goAnimation() {
    if(creative.onEndframe) return; creative.onEndframe = true;
    console.log('go end frame' );   
    creative.endframe.style.display = 'block'; 

    TweenMax.from(creative.bg, 2.0, { 
          scaleX:1.2, 
          scaleY:1.2,
          ease:Power4.easeOut
     })
  


    var d2=1;
    TweenMax.from(creative.title, 1.4, { 
          delay:d2-0.5,
          y: +10,
          opacity:0,
          ease:Power1.easeInOut
    })

  

    TweenMax.from(creative.cta, 1, { 
          delay:d2+1,
          opacity: 0,
          ease:Power1.easeOut
    })

    var t1= 1;
   console.log('go end frame 4' );  

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


// Main onload handler
window.addEventListener('load', preInit);
