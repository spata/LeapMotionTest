var c =  canvas.getContext('2d');

var controller = new Leap.Controller({enableGestures:true});
controller.on( 'frame' , function( data ){
frame = data;
c.clearRect( 0 , 0 , width , height );

for( var i = 0; i < frame.gestures.length; i++ ){
	var gesture = frame.gestures[i];
	var type = gesture.type;
	switch( type ){
		case "swipe":
			break;
		case "screenTap":
			break;         
	}
  }
});
controller.connect();
	
	



    

