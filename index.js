const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const secondes = document.getElementById('secondes');


function futur(){
    const voir = document.getElementById('date').value;
    const myDate = new Date(voir);
    const date = new Date();
    const diff = myDate - date;
    const totalSecondes = diff / 1000;

    const jours = Math.floor(totalSecondes / 3600 / 24);
    const heures = Math.floor(totalSecondes / 3600) % 24;
    const minute = Math.floor(totalSecondes / 60) % 60;
    const seconde = Math.floor(totalSecondes)%60;

    if(myDate > date){
        days.innerHTML = jours;
        hours.innerHTML = time(heures);
        minutes.innerHTML = time(minute);
        secondes.innerHTML = time(seconde);
    }else{
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        secondes.innerHTML = 0
    }
    
}

setInterval(futur, 1000)

function time(n){
    return n < 10 ? `0${n}` : n
}

// TOGGLE BUTTON

const switchs = document.getElementById('switch');

switchs.addEventListener('click',(e)=>{
    document.body.classList.toggle('dark', e.target.checked)
})