var smokemachine = function (context, color){
    color = color || [24, 46.8, 48.2]
    var polyfillAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var lastframe;
    var currentparticles = []
    var pendingparticles = []

    var buffer = document.createElement('canvas'),
        bctx = buffer.getContext('2d')

    buffer.width = 20
    buffer.height = 20

    var opacities = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,3,5,5,7,4,4,1,1,0,1,0,0,0,0,0,1,0,0,17,27,41,52,56,34,23,15,11,4,9,5,1,0,0,0,0,0,0,1,45,63,57,45,78,66,52,41,34,37,23,20,0,1,0,0,0,0,1,43,62,66,64,67,115,112,114,56,58,47,33,18,12,10,0,0,0,0,39,50,63,76,87,107,105,112,128,104,69,64,29,18,21,15,0,0,0,7,42,52,85,91,103,126,153,128,124,82,57,52,52,24,1,0,0,0,2,17,41,67,84,100,122,136,159,127,78,69,60,50,47,25,7,1,0,0,0,34,33,66,82,113,138,149,168,175,82,142,133,70,62,41,25,6,0,0,0,18,39,55,113,111,137,141,139,141,128,102,130,90,96,65,37,0,0,0,2,15,27,71,104,129,129,158,140,154,146,150,131,92,100,67,26,3,0,0,0,0,46,73,104,124,145,135,122,107,120,122,101,98,96,35,38,7,2,0,0,0,50,58,91,124,127,139,118,121,177,156,88,90,88,28,43,3,0,0,0,0,30,62,68,91,83,117,89,139,139,99,105,77,32,1,1,0,0,0,0,0,16,21,8,45,101,125,118,87,110,86,64,39,0,0,0,0,0,0,0,0,0,1,28,79,79,117,122,88,84,54,46,11,0,0,0,0,0,0,0,0,0,1,0,6,55,61,68,71,30,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,23,25,20,12,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,9,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,2,2,0,0,0,0,0,0,0,0]
    
    var data = bctx.createImageData(20,20)
    var d = data.data

    for(var i=0;i<d.length;i+=4){
        d[i]=color[0]
        d[i+1]=color[1]
        d[i+2]=color[2]
        d[i+3]=opacities[i / 4]
    }

    bctx.putImageData(data,0,0)

    var imagewidth = 20 * 5
    var imageheight = 20 * 5

    function particle(x,y,l){
        this.x = x
        this.y = y // starting Ycoord.
        this.age = 0
        this.wind = 5 //4 is about 4 up
        this.spd_ran = 20//random amt. 30 original
        this.spd_min = 5 //minimum spd. 10 original
        this.vx = (Math.random()*8- this.wind)/100
        this.startvy = -(Math.random()*this.spd_ran+this.spd_min)/100
        this.vy = this.startvy

        //
        this.scale = Math.random()*.5
        this.scale = 0.1 // seems to narrow the start
        //
        this.lifetime = Math.random()*l+l/2   //original
    //    this.lifetime = Math.random()*l+(l*2)/1

        this.finalscale = 2+this.scale+Math.random()
        //2 narrows plume somewhat
        //this.finalscale = 5+this.scale+Math.random()

        this.update = function(deltatime){
            this.x+=this.vx*deltatime
            this.y+=this.vy*deltatime
            var frac = Math.pow((this.age)/this.lifetime,.5)
            this.vy = (1-frac)*this.startvy
            this.age+=deltatime
            this.scale=frac*this.finalscale
        }

        this.draw = function(){
            context.globalAlpha = (1-Math.abs(1-2*(this.age)/this.lifetime))/8
            var off = this.scale*imagewidth/2
            var xmin = this.x-off
            var xmax = xmin+this.scale*imageheight
            var ymin = this.y-off
            var ymax = ymin+this.scale*imageheight
            context.drawImage(buffer, xmin, ymin, xmax-xmin, ymax-ymin)
        }
    }


    function addparticles(x,y,n,lifetime){
        // console.log("lifetime= "+ lifetime)
        var milliSecs = 10000 //4000 original
        lifetime = lifetime || milliSecs
        n = n || 10
        if(n < 1) return Math.random() <= n && pendingparticles.push(new particle(x,y,lifetime));
        for (var i = 0; i < n; i++) {
            pendingparticles.push(new particle(x,y,lifetime))
        };
    }

    function updateanddrawparticles(deltatime){
        context.clearRect(0, 0, canvas.width, canvas.height);   
        deltatime = deltatime || 16
        var newparticles = []
        currentparticles = currentparticles.concat(pendingparticles)
        pendingparticles = []

        currentparticles.forEach(function(p){
            p.update(deltatime)
            if (p.age<p.lifetime){
                p.draw()
                newparticles.push(p)
            }
        })
        currentparticles = newparticles
    }

    function frame(time){
        if(running){
            var deltat = time-lastframe
            lastframe = time;

            updateanddrawparticles(deltat)
            polyfillAnimFrame(frame)            
        }
    }

    var running = false
    function start(){
        running = true
        polyfillAnimFrame(function(time){
            lastframe = time
            polyfillAnimFrame(frame)
        })          
    }

    function stop(){
        running = false
    }

    return {
        start:start,
        stop:stop,
        step: updateanddrawparticles,
        addsmoke: addparticles
    }

}

    //////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////

	var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var color = [208, 72, 81];
	var party = smokemachine(ctx, color) 
    party.start() // start animating
    
	// canvas.width = 300
    // canvas.height = 250
    var canvasBlue = document.getElementById('canvasBlue')
    var ctxBlue = canvasBlue.getContext('2d')
    var color2 = [84, 188, 249];
    var partyBlue = smokemachine(ctxBlue, color2)
	partyBlue.start() // start animating

    var b = document.getElementById('exit')


    // T.exit.addEventListener('click', onExitClickHandler);
    // T.cta.addEventListener('click', onExitClickHandler);
    b.addEventListener('mouseout', onOutHandler);
    b.addEventListener('mouseover', onOverHandler);
  
  // var onEndframe = false;
  function onOutHandler() {
     console.log('out banner' )
     onmousemove = {}

  }
  function onOverHandler() {
    console.log('over exit' )
    onmousemove = function (e) {
        console.log('move ')
		var x = e.clientX
		var y = e.clientY
		var n = 1//.5
		var t = Math.floor(Math.random() * 200) + 1800//3800
        party.addsmoke(x+15, y, n, t)
		partyBlue.addsmoke(x-25, y-30, n, t)
        
	}
      // TweenLite.to(T.cta, 0.6, { 
      //      backgroundColor: T.white,
      //      color:T.color,
      //      borderColor: T.color
      // }) 
  }



	// var go = setInterval(function(){
	// 	party.addsmoke(200/1, 350, 1)
	// 	partyBlue.addsmoke(150/1, 190, 1)
    // }, 100)
    var go;
    function startInt(){
        // reduce int for thickersmoke.
        go = setInterval(smoker, 50)
    }
    startInt()

        
    function smoker(){
        // (StartPt X, Y, numParticles Per sec?)
		party.addsmoke(200, 700, 2)
		partyBlue.addsmoke(130/1, 580, 1)
    }
    //////////////////////////////////////
    //var jamming = true
    onclick = function(e){
      // party.start();
      // partyBlue.start()
    //    if(jamming){
    //         party.stop()
    //         partyBlue.stop()
    //         jamming = false
    //         clearInterval(go)
    //    }else{
    //         party.start()
    //         partyBlue.start()
    //         startInt();
    //         jamming = true
    //    }
    }
    partyOff = function(){
        clearInterval(go); //stop Naturally looking
        onmousemove = function(){};
        //over NOW:
        //canvas.style.opacity = "0";
        //canvas2.style.opacity = "0";
    }
    partyOn = function(){
        canvas.style.opacity = "1";
        canvasBlue.style.opacity = "1";
    }