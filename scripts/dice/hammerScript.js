var myElement = document.getElementById('hammerPad');
var controls = document.getElementById('controls');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);
var ct = new Hammer(controls);
// create a pinch and rotate recognizer
// these require 2 pointers
var pinch = new Hammer.Pinch();
//var pinchend = new Hammer.Pinch.pinchend();
var rotate = new Hammer.Rotate();
var pan = new Hammer.Pan();
// we want to detect both the same time
pinch.recognizeWith(rotate);
//pinch.recognizeWith(pan);
//pan.recognizeWith(pinch);
//pan.requireFailure(pinch);
//pinch.requireFailure(pan);
// add to the Manager
mc.add([pinch, rotate, pan]);

//mc.on("press", function(ev) {
//	console.log('press!');
//	//$scope.showListBottomSheet(ev);
//});
mc.on("pinch rotate press pinchstart pinchend panup pandown", function(ev) {
	console.log(ev);
    var pinchScale = ev.scale;
    var pinchReverse = ev.scale;
    if(ev.type == "pinch" && pinchScale < 1){
      var pinchReverse = 1-ev.scale;
      //onDocumentPinch(ev, pinchScale);
      camera.position.y = 700+pinchReverse*400;
    }
  //  mc.on('release', onPinchEnd);
	if(ev.type == "pinchstart"){
		onPinchStart(ev);
	} else{ 
	
	}
    if(ev.type == "pinchend"){
      console.log(ev.type +" detected" + pinchScale);
      $("hammerPad").trigger( "click" );
      onDocumentPinch(ev, pinchScale);
      camera.position.y = 700;
    } //else {
//		if(ev.type == "panup"){
//			controls.style.bottom = (0)+'px';
//		}
		if(ev.type == "pandown"){
			controls.style.bottom = (-150)+'px';
		}	
		
//	}
});
ct.on("pan panstart", function(ev) {
	if(ev.type == "panstart"){
			controls.style.bottom = (0)+'px';
		}
//		if(ev.type == "pandown"){
//			controls.style.bottom = (-80)+'%';
//		}	
});