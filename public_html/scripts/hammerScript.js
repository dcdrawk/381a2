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

  //  mc.on('release', onPinchEnd);
    if(ev.type == "pinchend"){
      console.log(ev.type +" detected" + pinchScale);
      $("hammerPad").trigger( "click" );
      onDocumentMouseDown(ev, pinchScale);
    }
});
