let websocket;
const texMessageInInput = document.querySelector('.texMessage');
const buttonMesage = document.querySelector('.message');
const buttonGeo = document.querySelector('.geo');
const blockMessage = document.querySelector('.messagePrint');

buttonMesage.addEventListener('click', addMessageForUser)

function notEmptyString (text) {
    if (text) {
        return true;
    }
    else{
        return false;
    }
}

function addMessageForUser () {
    
    if(notEmptyString(texMessageInInput.value)){
        let sms = document.createElement('div');
        sms.classList.add('mesageText');
        sms.innerHTML = texMessageInInput.value;
        blockMessage.append(sms);
        console.log('+');


        websocket = new WebSocket("wss://echo-ws-service.herokuapp.com");
        websocket.onopen = function () {

            console.log("Соединение установлено");
            websocket.send(texMessageInInput.value); 
        }

        websocket.onmessage = function(event) {
          addSms (event) ;
        };
    }

    else {
        console.log('-')
    }
}



buttonGeo.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { coords } = position;
          console.log(coords.latitude, coords.longitude);
          addSms(coords.latitude, coords.longitude)
        });
      }
});


function addSms (text) {
    let mesageServer = document.createElement('div');
    mesageServer.classList.add('mesageServer');
    mesageServer.innerHTML = text.data;
    blockMessage.append(mesageServer);
}




