/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         console.log( "Version 0.0.2" );
         
         
         
         // ---------------------- EXTERNAL CLICKS --------------------------------
         
         /*
         *	All external click outs are routed through this funciton using a switch. 
         */
         sym.exitClick = function( typ ) {
         	console.log( "Main Exit Click" );
         	/*try {	if( EB.isInitialized()) { EB.clickthrough();	}}
         	catch( e ) { console.log( e ); };*/
         	sym.showEndframe();
         }
         
         sym.showEndframe = function () {
            //endframe = true;
         	sym.play('end');
         }
         
         
         //////////////////////
          endframe = false;
          overBanner = false;
         
         
         sym.rolloverMain = function () {
            console.log("rolloverMain "+ endframe +" " + overBanner );
         	if(endframe==true){
         		if(overBanner==false){
         			sym.getSymbol("cta").play('over');
         			overBanner = true;
         		}
         	}
         }
         sym.rolloutMain = function () {
         	console.log("rolloutMain");
         	if(endframe==true ){
         		sym.getSymbol("cta").play('off');
         		overBanner = false;
         	}
         }
         
         
         /*sym.rolloverCTA = function () {
         console.log("rolloverCTA");
         	overBanner=true;
         	if(endframe==true){
         		sym.stop("stay"); 
         		sym.getSymbol("cta").stop('stay');
         	}
         }
         sym.rolloutCTA = function () {
         	console.log("rolloutCTA");
         	overBanner = true;
         	if(endframe==true){
         		sym.getSymbol("cta").stop('stay');	
         		sym.stop("stay");
         	}
         }
         sym.clickedReplay = function(){
         	console.log("click Replay");
         	endframe = false;
         	sym.play('start');
         }*/
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cta}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().trackInteraction( "MainExitButton" ); // Track the button interaction
         sym.getComposition().getStage().exitClick( 'cta' ); // Call the 'main' exit click 
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cta}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         //sym.endFrameRollover(); // Trigger a rollout
         sym.getSymbol("cta").play('over');
         //sym.stop('out');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cta}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         //sym.endFrameRollout(); // Trigger a rollout
         sym.getSymbol("cta").play('off');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HitArea}", "mouseover", function(sym, e) {
         sym.rolloverMain(); // Trigger a rollover

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HitArea}", "mouseout", function(sym, e) {
         sym.rolloutMain(); // Trigger a rollout

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HitArea}", "click", function(sym, e) {
         //sym.getComposition().getStage().trackInteraction( "MainExitButton" ); // Track the button interaction
         sym.getComposition().getStage().exitClick(); // Call the 'main' exit click 

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7297, function(sym, e) {
         endframe = true;
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${HitArea}", "mousemove", function(sym, e) {
         sym.rolloverMain(); // Trigger a rollover
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Content'
   (function(symbolName) {   
   
   })("Content");
   //Edge symbol end:'Content'

   //=========================================================
   
   //Edge symbol: 'glass'
   (function(symbolName) {   
   
   })("glass");
   //Edge symbol end:'glass'

   //=========================================================
   
   //Edge symbol: 'EndframeReveal'
   (function(symbolName) {   
   
   })("EndframeReveal");
   //Edge symbol end:'EndframeReveal'

   //=========================================================
   
   //Edge symbol: 'endframe-angle'
   (function(symbolName) {   
   
   })("endframe-angle");
   //Edge symbol end:'endframe-angle'

   //=========================================================
   
   //Edge symbol: 'cta'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10784, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 299, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 894, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1640, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("cta");
   //Edge symbol end:'cta'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-12860637");