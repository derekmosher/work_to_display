//-----------------------------------
// helpers
//-----------------------------------
function centerMeX(div,myW,offset){
  var offset = offset || 0;
  var myWidth = myWidth || T.banner.width;
   var rect = div.getBoundingClientRect();
   var rectWidth = rect.right - rect.left;
   div.style.left = ((myW - rectWidth)/2+offset) +'px';
 }
 function centerMeY(div,myH,offset){
    var offset = offset || 0;
    var myH = myH || T.banner.height;
    var rect = div.getBoundingClientRect();
    var rectHeight = rect.bottom - rect.top;
    div.style.top = ((myH - rectHeight)/2 )+ offset +'px';
 }
 function centerOnX(div,x,offset){
  var offset = offset || 0;
  var rect = div.getBoundingClientRect();
  var rectWidth = rect.right - rect.left;
  div.style.left = (x - rectWidth/2+offset) +'px';
}
 function centerOnY(div,y,offset){
  var offset = offset || 0;
  var rect = div.getBoundingClientRect();
  var rectHeight = rect.bottom - rect.top;
  div.style.top = (y - rectHeight/2+offset) +'px';
}
// Center class elments:
// T.aboutMeClass = document.getElementsByClassName('aboutMe')
// for (var i = 0; i < T.aboutMeClass.length; i++) {
//     centerOnY(T.aboutMeClass[i], 104)
// }
function scaleHeight2Parent(div,scale){
  var scale = scale || 0.5;
  TweenMax.set(div,{height:T.banner.height*scale})
}
function scaleWidth2Parent(div,scale){
  var scale = scale || 0.5;
  TweenMax.set(div,{width:T.banner.width*scale})
}