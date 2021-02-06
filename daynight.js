const dayNightBtn = document.getElementById("js-daynight")

function nightDayHandler(self){
    const target = document.querySelector('body');
    if(self.value === 'night'){
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day';
    
    }
    else{
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';
    }
}


function init(){
    dayNightBtn.addEventListener("click",nightDayHandler);
}

init();