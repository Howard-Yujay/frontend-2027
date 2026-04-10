console.log("Day3 JavaScript 开始");

const userName = "Howard";
const major = "微电子";
let studyHours = 4;
let isLearning = true;

console.log(userName);
console.log(major);
console.log(studyHours);
console.log(isLearning);

const targetHours = 4;
let todayHours = 3;

console.log(todayHours + 1);
console.log(todayHours >= targetHours);

if (todayHours >= targetHours) {
    console.log("今天达标了");
} else {
    console.log("今天没达标");
}

for (let i = 1; i <= 6; i++) {
    console.log(`这是第 ${i} 次循环`);
}

const statusText = document.querySelector("#statusText");
const countText = document.querySelector("#countText");
const resultText = document.querySelector("#resultText");

const toggleBtn = document.querySelector("#toggleBtn");
const addBtn = document.querySelector("#addBtn");
const judgeBtn = document.querySelector("#judgeBtn");
const clearBtn = document.querySelector("#clearBtn");

let count = 0;
let isStudyMode = true;

toggleBtn.addEventListener("click", function(){
    if (isStudyMode){
        statusText.textContent = "当前状态：正在认真学习前端";
        isStudyMode = false;
    } else {
        statusText.textContent = "当前状态：今天开始学习 JavaScript";
        isStudyMode = true;
    }
});

addBtn.addEventListener("click", function(){
    count = count + 1;
    countText.textContent = `岗位匹配度：${count} %`;
});

judgeBtn.addEventListener("click", function(){
    const inputVaule = prompt("你今天学习了几个小时：");
    const hours = Number(inputVaule);

    if (hours >= 4) {
        resultText.textContent = "学习评价：很优秀哦，继续保持";
    } else if (hours > 2){
        resultText.textContent = "学习评价：合格哦，再补一点时间";
    } else if (hours > 0){
        resultText.textContent = "学习评价: 不够, 快继续学";
    } else {
        resultText.textContent = "不可以是负时长,也不可以乱输";
    }
});

clearBtn.addEventListener("click", function(){
    count = 0;
    countText.textContent = `岗位匹配度：${count} %`;
})