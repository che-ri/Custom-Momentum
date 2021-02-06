const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1")


function getTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    
    //AmOrPm은 hours의 값을 12시간 단위로 변환해줍니다. 
    const AmOrPm = hours>=12? 'pm' : "am";
    //AmOrPm은 12크거나 같으면 pm 아니면 am으로 리턴
    hours = (hours%12)||12;
    //hours는 hours의%12이다. hours가 12일때는 값이 0이 되므로 12로 리턴한다.
    
    
    clockTitle.innerText = `${hours}시${minutes<10?`0${minutes}분`:`${minutes}분`}${AmOrPm}`;
    //여기서는 미니if를 사용하여 시간이 10보다 작을때 01 처럼 표시될 수 있도록 하였다.
    //만약 minutes가 10보다 작다면 `0${minutes}분`를 리턴하고 아니면 `${minutes}분`를 리턴해라!
}




function init() {
    getTime();
    setInterval(getTime,1000);
    //setInterval은 함수가 반복되는 시간을 정하는 것이다. coooooooool! 
}

init()