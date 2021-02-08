const dayNightBtn = document.querySelector("#js-daynight")
const BG_DARK = document.querySelector(".body-container")

function handleClick(){
    if(dayNightBtn.value==='day'){
        dayNightBtn.value='night';
        BG_DARK.classList.add("bg-dark");
        }
    else{
        dayNightBtn.value='day';
        BG_DARK.classList.remove("bg-dark");
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