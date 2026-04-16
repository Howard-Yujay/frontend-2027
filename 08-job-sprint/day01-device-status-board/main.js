const runningCountText = document.querySelector("#runningCountText");
const faultCountText = document.querySelector("#faultCountText");
const deviceList = document.querySelector("#deviceList");

const devices = [   //核心数据
    {
        name:"温度传感器 A1",
        type:"传感器",
        status:"运行",
    },
    {
        name:"电源模块 B2",
        type:"供电模块",
        status:"待机",
    },
    {
        name:"主控单元 C3",
        type:"控制器",
        status:"故障",
    },
    {
        name:"通信模块 D4",
        type:"通信模块",
        status:"运行",
    },
];

const filterAllBtn = document.querySelector("#filter-all");
const filterRunningBtn = document.querySelector("#filter-running");
const filterStandbyBtn = document.querySelector("#filter-standby");
const filterFaultBtn = document.querySelector("#filter-fault");

const resetToStandbyBtn = document.querySelector("#resetToStandbyBtn");

let currentFilter = "全部"; //核心数据

function getNextStatus(status) {    //切换状态
    if (status === "运行") {
        return "待机";
    } else if (status === "待机") {
        return "故障";
    } else {
        return "运行";
    }
}

function renderSummary() {  //统计数量
    let runningCount = 0;
    let faultCount = 0;

    for (let i = 0; i < devices.length; i++) {
        if (devices[i].status === "运行") {
            runningCount++;
        } else if (devices[i].status === "故障") {
            faultCount++;
        }
    }

    runningCountText.textContent = `运行中设备数: ${runningCount}`;
    faultCountText.textContent = `故障设备数: ${faultCount}`;
}

function getFilteredDevices() { //筛选状态
    if (currentFilter === "全部") {
        return devices;
    } else {
        return devices.filter(function(device){
            return device.status === currentFilter; //返回布尔值
        });
    }
}

function renderDevices(list) {  //把设备列表拼成HTML，渲染；切换状态，渲染
    let html = "";

    for (let i = 0; i < list.length; i++) {
        let itemClass = "device-item";

        if (list[i].status === "故障") {
            itemClass += " device-item-fault";
        }

        html += `
            <div class="${itemClass}">
                <h3>${list[i].name}</h3>
                <p>类型: ${list[i].type}</p>
                <p>状态: ${list[i].status}</p>
                <button class="toggle-btn" data-name="${list[i].name}">切换状态</button>
            </div>
        `;
    }

    deviceList.innerHTML = html;

    const toggleButtons = document.querySelectorAll(".toggle-btn");

    for (let i = 0; i < toggleButtons.length; i++) {
        toggleButtons[i].addEventListener("click", function(){
            const targetName = toggleButtons[i].dataset.name;

            for (let j = 0; j < devices.length; j++) {
                if (devices[j].name === targetName) {
                    devices[j].status = getNextStatus(devices[j].status);
                    break;
                }
            }

            renderPage();
        });
    }
}

function renderPage() { //统一刷新页面/总刷新函数
    const filteredDevices = getFilteredDevices();
    renderDevices(filteredDevices);
    renderSummary();
    updateFilterButtons();
}

function updateFilterButtons() {    //给当前筛选按钮加高亮
    filterAllBtn.classList.remove("filter-active");
    filterRunningBtn.classList.remove("filter-active");
    filterStandbyBtn.classList.remove("filter-active");
    filterFaultBtn.classList.remove("filter-active");

    if (currentFilter === "全部") {
        filterAllBtn.classList.add("filter-active");
    } else if (currentFilter === "运行") {
        filterRunningBtn.classList.add("filter-active");
    } else if (currentFilter === "待机") {
        filterStandbyBtn.classList.add("filter-active");
    } else if (currentFilter === "故障") {
        filterFaultBtn.classList.add("filter-active");
    }
}

filterAllBtn.addEventListener("click", function(){
    currentFilter = "全部";
    renderPage();
});

filterRunningBtn.addEventListener("click", function(){
    currentFilter = "运行";
    renderPage();
});

filterStandbyBtn.addEventListener("click", function(){
    currentFilter = "待机";
    renderPage();
});

filterFaultBtn.addEventListener("click", function(){
    currentFilter = "故障";
    renderPage();
});

resetToStandbyBtn.addEventListener("click", function(){
    for (let i = 0;i < devices.length; i++) {
        devices[i].status = "待机";
    }

    renderPage();
});

renderPage();