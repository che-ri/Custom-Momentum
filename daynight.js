const dayNightBtn = document.querySelector("#js-daynight")
const BODY_BG = document.querySelector(".body-container")

function handleClick(){
    if(dayNightBtn.value==='🌞'){
        dayNightBtn.value='🌜';
        BODY_BG.classList.add("bg-dark");
        }
    else{
        dayNightBtn.value='🌞';
        BODY_BG.classList.remove("bg-dark");
    }
}

dayNightBtn.addEventListener('click',handleClick);

// function nightDayHandler(self){
//     const target = document.querySelector('body');
//     if(self.value === 'night'){
//         target.style.backgroundColor = 'black';
//         target.style.color = 'white';
//         self.value = 'day';
    
//     }
//     else{
//         target.style.backgroundColor = 'white';
//         target.style.color = 'black';
//         self.value = 'night';
//     }
// }


// function init(){
//     dayNightBtn.addEventListener("click",nightDayHandler);
// }

// init();