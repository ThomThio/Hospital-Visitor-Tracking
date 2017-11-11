// NOBLE_REPORT_ALL_HCI_EVENTS=1

var EstimoteSticker = require('./estimote-sticker');

EstimoteSticker.on('discover', function(estimoteSticker) {
	// macs = ["fb:f8:e7:ea:bf:81"]
	ids = ["dcccf79c84d77521","43fb737941fcc163"] //bag, door
	// console.log(estimoteSticker);

	// if (estimoteSticker.moving === true) {
	// 	console.log(estimoteSticker.id);
	// }

	if (estimoteSticker.id === ids[0] || estimoteSticker.id === ids[1]){
		if(estimoteSticker.moving === true) {
			console.log("moving match found");
	  		console.log("ID: " + estimoteSticker.id);
	  		console.log("Moving?: " + estimoteSticker.moving);
	  		console.log("Acceleration: " + estimoteSticker.acceleration);
	  		console.log("Current motion state: " + estimoteSticker.currentMotionStateDuration);
	  		console.log("Previous motion state: " + estimoteSticker.previousMotionStateDuration);
	  		console.log("\n")
			
		}
	}
});

EstimoteSticker.startScanning();

// currentMotionStateDuration - #previousMotionStateDuration
// acceleration