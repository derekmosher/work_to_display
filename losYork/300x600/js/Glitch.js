console.log('load glitch')
var Glitch = {};

Glitch.init = function (obj){
//obj, vert, horz


    // console.log(T.txtObj1.height)
    for(var x = 0;x<=T.txtObj1.height;x++){
        //create multiple images
        var itm = document.getElementById("txt1");
        var cln = itm.cloneNode(true);
        document.getElementById("textBox1").appendChild(cln);
        //          
        var itm2 = document.getElementById("txt2");
        var cln2 = itm2.cloneNode(true);
        document.getElementById("textBox2").appendChild(cln2);
        
        var itm3 = document.getElementById("txt3");
        var cln3 = itm3.cloneNode(true);
        document.getElementById("textBox3").appendChild(cln3);


        //get all kids and mask
        var c1 = document.getElementById("textBox1").childNodes[x]
        TweenMax.set( c1,{ 
            clip:"rect("+ x +"px "+T.txtObj1.width+"px "+(x+1) +"px 0px)",
        })
        //
        var c2 = document.getElementById("textBox2").childNodes[x]
        TweenMax.set( c2,{ 
            clip:"rect("+ x +"px "+T.txtObj2.width+"px "+(x+1) +"px 0px)",
        })
        //
        var c3 = document.getElementById("textBox3").childNodes[x]
        TweenMax.set( c3,{ 
            clip:"rect("+ x +"px "+T.txtObj3.width+"px "+(x+1) +"px 0px)",
        })
    }
}