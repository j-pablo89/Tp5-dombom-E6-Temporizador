// 6- Realizar una web con un temporizador donde el usuario pueda ingresar 
// un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 

let iniciar = document.getElementById('botonIniciar');
let pausar = document.getElementById('botonPausar');
let reset = document.getElementById('botonReset');
let timer = document.getElementById('timer');

iniciar.addEventListener('click',iniciarTemporizador);
pausar.addEventListener('click',pausarTemporizador);
reset.addEventListener('click',resetTemporizador);


function iniciarTemporizador(){
    let hora = document.querySelector('#hora').value;
    let minuto = document.querySelector('#minuto').value;
    let segundo = document.querySelector('#segundo').value;
    decima = 99;
    if(hora < 10){
        hora = `0${hora}`;
    }
    if(minuto < 10){
        minuto = `0${minuto}`;
    }
    if(segundo < 10){
       segundo = `0${segundo}`;
    }
    intervalo = setInterval(()=>{
        decima--;
        if(decima < 10){
            decima = `0${decima}`;
        }
        if(decima == `0${-1}`){
            decima = 99; 
            segundo--;
            if(segundo < 10){
                segundo = `0${segundo}`;
        }
        }
        if(segundo == `0${-1}`){
            segundo = 59;
            minuto--;
            if(minuto < 10){
            minuto = `0${minuto}`;
        }
        }
        if(minuto == `0${-1}`){
            minuto = 59;
            hora--;
            if(hora < 10){
                hora = `0${hora}`;
        }
        }
        if(hora == `00` && minuto == `00` && segundo ==`00` && decima == `00`){
            clearInterval(intervalo);
        }
        timer.innerHTML = `${hora}:${minuto}:${segundo}:${decima}`;
    },10);
}

function pausarTemporizador(){
    clearInterval(intervalo);
}

function resetTemporizador(){
    clearInterval(intervalo);
    decima = `00`;
    segundo = `00`;
    minuto = `00`;
    hora = `00`;
    timer.innerHTML = `${hora}:${minuto}:${segundo}:${decima}`;
}