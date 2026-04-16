## Day 1 - Device Status Board

Built a small JavaScript device status board.

### Finished
- rendered device cards from data
- implemented status toggle
- implemented summary counts
- implemented filter by status
- added fault-card highlight
- added reset-all-to-standby
- added active style for current filter button

### What I need to strengthen
- function parameters
- code flow understanding
- render logic after data changes

### Day 2
今天主要复盘了昨天完成的 device status board 小项目，没有开启新知识点，重点放在“函数拆分、参数传递、代码流转、数据变化后重新渲染页面”的理解上。

#### 今日完成
- 复盘了项目整体结构：统计区、筛选区、设备列表区、重置按钮
- 梳理了核心数据：devices、currentFilter
- 重新理解了核心函数：
  - getNextStatus
  - renderSummary
  - getFilteredDevices
  - renderDevices
  - updateFilterButtons
  - renderPage
- 自己重新过了一遍核心代码
- 整理了一版该项目的面试表达

#### 今日收获
- 对函数参数从哪里来、为什么这样拆分，有了更清楚的认识
- 开始理解“先改数据，再统一渲染页面”的思路
- 对原生 JavaScript 操作 DOM 的流程更熟了一些

#### 仍需加强
- 函数之间的调用关系还需要再熟一遍
- 参数传递还需要继续刻意练习
- 对“数据驱动页面更新”的理解还要继续巩固