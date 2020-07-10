var oneSecond = 1000
var isDigital = false

function currentTimeAnalog(){

    var clock = document.getElementById("clocktext")
    
    var time = new Date()

    var endTime

    var seconds = time.getSeconds()
    var minutes = time.getMinutes()
    var hours = time.getHours()

    if(minutes < 10){
        minutes = '0' + minutes
    }

    if(seconds < 10){
        seconds = '0' + seconds
    }

    if(hours <= 12){
        endTime = 'AM'
        hours = '0' + hours
    } else {
        endTime = 'PM'
    }

    var stringVal = hours + ':' + minutes + ':' + seconds + ' ' + endTime
    clock.innerText = stringVal
}

function currentTimeDigital(){

    var clock = document.getElementById("clocktext")
    
    var time = new Date()

    var endTime

    var seconds = time.getSeconds()
    var minutes = time.getMinutes()
    var hours = time.getHours()

    if(minutes < 10){
        minutes = '0' + minutes
    }

    if(seconds < 10){
        seconds = '0' + seconds
    }

    if(hours < 12){
        endTime = 'AM'
        hours = '0' + hours
    } else {
        endTime = 'PM'
    }

    if(hours === 13){
        hours = 1
    } else if(hours === 14){
        hours = 2
    } else if(hours === 15){
        hours = 3
    } else if(hours === 16){
        hours = 4
    } else if(hours === 17){
        hours = 5
    } else if(hours === 18){
        hours = 6
    } else if(hours === 19){
        hours = 7
    } else if(hours === 20){
        hours = 8
    } else if(hours === 21){
        hours = 9
    } else if(hours === 22){
        hours = 10
    } else if(hours === 23){
        hours = 11
    } else if(hours === 24){
        hours = 12
    } 

    var stringVal = hours + ':' + minutes + ':' + seconds + ' ' + endTime
    clock.innerText = stringVal
}

currentTimeAnalog()
funThings()

setInterval(() => {
    if(isDigital){
        currentTimeDigital()
    } else {
        currentTimeAnalog()
    }
}, oneSecond);

document.getElementById('buttonid').addEventListener('click', function(){
    var state = document.getElementById('buttonid')
    if(state.innerText === 'Switch To Digital'){
        switchDigital()
    } else if(state.innerText === 'Switch To Analog'){
        switchAnalog()
    }
})

function switchDigital(){
    var state = document.getElementById('buttonid')
    isDigital = true
    state.innerText = 'Switch To Analog'
}

function switchAnalog(){
    var state = document.getElementById('buttonid')
    isDigital = false
    state.innerText = 'Switch To Digital'
}

function funThings() {
        var time = new Date()
        var hours = time.getHours()
        var minutes = time.getMinutes()
        var seconds = time.getSeconds()

        function insideFunThings(){
            if(hours >= 5 && hours < 10){
                document.getElementById("theimage").src = './images/morning.gif'
            } else if(hours >= 10 && hours < 19){
                document.getElementById("theimage").src = './images/afternoon.gif'
            } else if(hours >= 19 || hours < 5) {
                document.getElementById("theimage").src = './images/evening.gif'
            } else {
                document.getElementById("theimage").src = './images/errored.gif'
            }
        }

        insideFunThings()

        setInterval(() => {
            insideFunThings()
        }, 3600000);
}
