document.addEventListener('deviceready', function() {
    new Promise(function (resolve) {
        bluetoothle.initialize(resolve, {request: true, statusReceiver: false});
        bluetoothle.initializePeripheral(resolve, { error: "error"}, {request: true, restoreKey: "bluetoothleplugin"});
    }).then(function(result){

    });

    studentInput();


});

function studentInput(){
    let studentNumber = prompt("What is your Student Number?");
    addService(studentNumber);
    startAdvertising(studentNumber);
}

function addService(studentNumber){

    let params = {
        service: studentNumber,
        characteristics:[
            {
                uuid:"ABCD",
                permissions: {
                    read: true,
                    write: true,
                },
                properties:{
                    read:true,
                    writeWithoutResponse:true,
                    write:true,
                    notify:true,
                    indicate:true,
                }
            }
        ]
    };
    console.log(params);

    bluetoothle.addService(serviceSuccess, serviceError, params);
}

function startAdvertising(studentNumber){

    let params = {
        "services":[studentNumber],
        "service":studentNumber,
        "name":"Craig Blakeney",
        timeout: 20000,
        powerLevel: "high",
        includeDeviceName: true,
    };

    console.log(params);

    bluetoothle.startAdvertising(advertSuccess, advertError, params);
}

function serviceSuccess(status){

    console.log(status);
}

function serviceError(status){
    console.log(status);
}

function advertSuccess(status){
    console.log(status);
}

function advertError(status){
    console.log(status);
}

