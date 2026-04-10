console.log("Hello,I'am Howard");
for( let i = 0; i <= 100; i = i + 10){
    console.log(`Loading ${i}%`);
}

let currentStatus = 1;
let count = 0;

const statusText = document.querySelector("#statusText");
const toggleBtn = document.querySelector("#toggleBtn");

const countText = document.querySelector("#countText");
const addBtn = document.querySelector("#addBtn");

const clearBtn = document.querySelector("#clearBtn");

const resultText = document.querySelector("#resultText");
const judgeBtn = document.querySelector("#judgeBtn");

toggleBtn.addEventListener("click", function(){
    currentStatus++;
    if (currentStatus > 3){
        currentStatus = 1;
    }
    console.log("currentStatus =", currentStatus);

    if (currentStatus === 1){
        statusText.textContent = "当前状态: 学习";
    } else if (currentStatus === 2){
        statusText.textContent = "当前状态: 健身";
    } else {
        statusText.textContent = "当前状态: 睡觉";
    }
})

addBtn.addEventListener("click", function(){
    count = count + 1;
    countText.textContent = `学习进度: ${count}`;
})

clearBtn.addEventListener("click", function(){
    count = 0;
    countText.textContent = "学习进度: 白学了";
})

judgeBtn.addEventListener("click", function(){
    const inputValue = prompt("今天学了几小时呀?");
    const hours = Number(inputValue);

    if(hours >= 4){
        resultText.textContent = "今日学习评价: 优秀";
    }else if(hours >= 3){
        resultText.textContent = "今日学习评价: 达标"; 
    }else if(hours >= 2){
        resultText.textContent = "今日学习评价: 及格";
    }else if(hours >= 1){
        resultText.textContent = "今日学习评价: 热身";
    }else if(hours >= 0){
        resultText.textContent = "今日学习评价: 不够";
    }else{
        resultText.textContent = "错误输入";
    }
})