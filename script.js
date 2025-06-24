let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
let timer 
let isRunning = false

hours.value = '00'
minutes.value = '00'
seconds.value = '00'

document.querySelector('#play').addEventListener('click', start)
document.querySelector('#pause').addEventListener('click', pause)

function start(){
    if (!isRunning) {
        timer = setInterval(updateTime, 1000)
        isRunning = true
    }
}

function pause() {
    clearInterval(timer)
    isRunning = false
}

function updateTime(){
    let s = parseInt(seconds.value)
    let m = parseInt(minutes.value)
    let h = parseInt(hours.value)

    if(s === 0){
        if(m === 0){
            if(h === 0){
                clearInterval(timer)
                isRunning = false
                return
            } else{
                h--
                m = 59
                s = 59
            }

        }else{
            m--
            s = 59
        }
    } else{
        s--
    }
    
    seconds.value = s.toString().padStart(2, '0')
    minutes.value = m.toString().padStart(2, '0')
    hours.value = h.toString().padStart(2, '0')
}

hours.addEventListener('input', () => limitarHoras(hours))
minutes.addEventListener('input', () => limitarMinSec(minutes))
seconds.addEventListener('input', () => limitarMinSec(seconds))

function limitarHoras(input) {
  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2)
  }
}

function limitarMinSec(input){
    if(input.value.length >2){
        input.value = input.value.slice(0, 2)
    }
    let valor = parseInt(input.value)
    if (!isNaN(valor) && valor > 59) {
    input.value = '59'
  }
}

