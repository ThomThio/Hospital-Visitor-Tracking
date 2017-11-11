var async = require('async');

var Estimote = require('./estimote.js');


uuids = ["43FB737941FCC163", "DCCCF79C84D77521"]
macs = ["fb:f8:e7:ea:bf:81"]


var focus = ""

Estimote.discover(function(estimote){

  console.log("looking for the correct estimote");
  var uuid = estimote.id;
  // console.log(estimote)
  // console.log(estimote.address);
  // console.log(estimote.uuid);
   // var tick = "aa7a04fa8a124c63844d9ddea7b7cd3e";
  

  if (estimote.address === macs[0]) {
        console.log("match found!");
        focus = estimote;
        async.series([
          function(callback) {
              estimote.on('disconnect', function() {
                console.log('beacon attempted disconnect!');
                estimote.on('motionStateChange', function(isMoving) {
                    console.log('\tmotion state change: isMoving = ' + isMoving);
                });
                console.log("motion: " + estimote.onMotionData);
              })

            console.log('found: ' + estimote.toString());

            // estimote.on('motionStateChange', function(isMoving) {
            //     console.log('\tmotion state change: isMoving = ' + isMoving);
            // })
            console.log("motion: " + estimote.onMotionData);
            
            estimote.connectAndSetup(callback);
            focus = estimote;

          },
          // function(callback){
          //   // console.log("Pairing");
          //   // estimote.pair(callback);
          // },
          function(callback){
            console.log("Subscribing to motion change");
            estimote.subscribeMotion(callback);
            console.log("motion: " + estimote.onMotionData);

          },
          // function(callback){
          //   estimote.on('motionStateChange', callback(isMoving)) {
          //     console.log("movement");
          //   }
          // }

        ])

  }

  
});

// if (focus != "") {
//   focus.on('motionStateChange', function(isMoving) {
//       console.log('\tmotion state change: isMoving = ' + isMoving);
//   });
  
// }





// Estimote.discover(function(estimote) {
//   async.series([
//     function(callback) {
//       estimote.on('disconnect', function() {
//         console.log('disconnected!');
//         // console.log(this);
//         process.exit(0);
//       });

//       estimote.on('motionStateChange', function(isMoving) {
//         console.log('\tmotion state change: isMoving = ' + isMoving);
//       });

//       console.log('found: ' + estimote.toString());

//       // console.log('connectAndSetUp');
//       // estimote.connectAndSetUp(callback);

//     },
//     // function(callback) {
//     //   console.log('pair');
//     //   estimote.pair(callback);
//     // },
//     // function(callback) {
//     //   console.log('readMajor');
//     //   estimote.readMajor(function(error, major) {
//     //     console.log('\tmajor = ' + major + ' (0x' + major.toString(16) + ')');

//     //     console.log('writeMajor');
//     //     estimote.writeMajor(major, callback);
//     //   });
//     // },
//     // function(callback) {
//     //   console.log('readMinor');
//     //   estimote.readMinor(function(error, minor) {
//     //     console.log('\tminor = ' + minor + ' (0x' + minor.toString(16) + ')');

//     //     console.log('writeMinor');
//     //     estimote.writeMinor(minor, callback);
//     //   });
//     // },
//     function(callback) {
//       console.log('readUuid1');
//       estimote.readUuid1(function(error, uuid1) {
//         console.log('\tuuid 1 = ' + uuid1);

//         console.log('writeUuid1');
//         estimote.writeUuid1(uuid1, callback);
//       });
//     },
//     function(callback) {
//       console.log('readUuid2');
//       estimote.readUuid2(function(error, uuid2) {
//         console.log('\tuuid 2 = ' + uuid2);

//         console.log('writeUuid2');
//         estimote.writeUuid2(uuid2, callback);
//       });
//     },
//     function(callback) {
//       console.log('readPowerLevel');
//       estimote.readPowerLevel(function(error, powerLevel, dBm) {
//         console.log('\tpower level ' + powerLevel + ', ' + dBm + ' dBm');

//         console.log('writePowerLevel');
//         estimote.writePowerLevel(powerLevel, callback);
//       });
//     },
//     // function(callback) {
//     //   console.log('readAdvertisementInterval');
//     //   estimote.readAdvertisementInterval(function(error, advertisementInterval) {
//     //     console.log('\tadvertisement interval = ' + advertisementInterval + ' ms');

//     //     console.log('writeAdvertisementInterval');
//     //     estimote.writeAdvertisementInterval(advertisementInterval, callback);
//     //   });
//     // },
//     // function(callback) {
//     //   console.log('readTemperature');
//     //   estimote.readTemperature(function(error, temperature) {
//     //     console.log('\ttemperature = ' + temperature.toFixed(1));

//     //     callback();
//     //   });
//     // },
//     function(callback) {
//       console.log('subscribeMotion');
//       estimote.subscribeMotion(callback);
//     },
//     // function(callback) {
//     //   setTimeout(callback, 5000);
//     // },
//     function(callback) {
//       console.log('unsubscribeMotion');
//       estimote.unsubscribeMotion(callback);
//     },
//     // function(callback) {
//     //   console.log('readService2_9');
//     //   estimote.readService2_9(function(error, data) {
//     //     console.log('\tservice 2 9 = ' + data.toString('hex'));

//     //     callback();
//     //   });
//     // },
//     // function(callback) {
//     //   console.log('readService2_10');
//     //   estimote.readService2_10(function(error, data) {
//     //     console.log('\tservice 2 10 = ' + data.toString('hex'));

//     //     callback();
//     //   });
//     // },
//     function(callback) {
//       console.log('readBatteryLevel');
//       estimote.readBatteryLevel(function(error, batteryLevel) {
//         console.log('\tbattery level = ' + batteryLevel);

//         callback();
//       });
//     }
//     // function(callback) {
//     //   console.log('readServiceConfiguration');
//     //   estimote.readServiceConfiguration(function(error, serviceConfiguration) {
//     //     console.log('\tservice configuration = ' + serviceConfiguration);

//     //     console.log('writeServiceConfiguration');
//     //     estimote.writeServiceConfiguration(serviceConfiguration, callback);
//     //   });
//     // },
//     // function(callback) {
//     //   console.log('readEddystoneUidNamespace');
//     //   estimote.readEddystoneUidNamespace(function(error, uidNamespace) {
//     //     console.log('\tUID namespace = ' + uidNamespace);

//     //     console.log('writeEddystoneUidNamespace');
//     //     estimote.writeEddystoneUidNamespace(uidNamespace, callback);
//     //   });
//     // },
//     // function(callback) {
//     //   console.log('readEddystoneUidInstance');
//     //   estimote.readEddystoneUidInstance(function(error, uidInstance) {
//     //     console.log('\tUID instance = ' + uidInstance);

//     //     console.log('writeEddystoneUidInstance');
//     //     estimote.writeEddystoneUidInstance(uidInstance, callback);
//     //   });
//     // },
//     // function(callback) {
//     //   console.log('readEddystoneUrl');
//     //   estimote.readEddystoneUrl(function(error, url) {
//     //     console.log('\tURL = ' + url.toString('hex'));

//     //     console.log('writeEddystoneUrl');
//     //     estimote.writeEddystoneUrl(url, callback);
//     //   });
//     // },
//     // function(callback) {
//     //   console.log('readFirmwareVersion');
//     //   estimote.readFirmwareVersion(function(error, firmwareVersion) {
//     //     console.log('\tfirmware version = ' + firmwareVersion);

//     //     callback();
//     //   });
//     // },
//     // function(callback) {
//     //   console.log('readHardwareVersion');
//     //   estimote.readHardwareVersion(function(error, hardwareVersion) {
//     //     console.log('\thardware version = ' + hardwareVersion);

//     //     callback();
//     //   });
//     // },
//     // function(callback) {
//     //   console.log('disconnect');
//     //   estimote.disconnect(callback);
//     // }
//   ]);
// });
