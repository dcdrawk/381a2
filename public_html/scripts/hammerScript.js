var myElement = document.getElementById('hammerPad');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// create a pinch and rotate recognizer
// these require 2 pointers
var pinch = new Hammer.Pinch();
//var pinchend = new Hammer.Pinch.pinchend();
var rotate = new Hammer.Rotate();

// we want to detect both the same time
pinch.recognizeWith(rotate);

// add to the Manager
mc.add([pinch, rotate]);


mc.on("pinch rotate press pinchend", function(ev) {
    var pinchScale = ev.scale;
    var pinchReverse = ev.scale;
    if(ev.type == "pinch" && pinchScale < 1){
      var pinchReverse = 1-ev.scale;
      //onDocumentPinch(ev, pinchScale);
      camera.position.y = 700+pinchReverse*400;
    }
  //  mc.on('release', onPinchEnd);
    if(ev.type == "pinchend"){
      console.log(ev.type +" detected" + pinchScale);
      $("hammerPad").trigger( "click" );
      onDocumentPinch(ev, pinchScale);
      camera.position.y = 700;
    }
});
