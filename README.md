## 使用 vue 框架完成轮子
[![Build Status](https://travis-ci.com/wojiaofengzhongzhuifeng/vue-wheel.svg?branch=master)](https://travis-ci.com/wojiaofengzhongzhuifeng/vue-wheel)

## 安装

使用本框架前， 请在 css 开启 border-box

```
*{margin: 0;padding:0;}
```
## 轮子使用方法
1. `npm install --save`
2. 

## 轮子api

### button

| 属性         | 说明                                       | 类型    | 默认值 |
| ------------ | ------------------------------------------ | ------- | ------ |
| iconName     | 按钮添加icon                               | string  | -      |
| iconPosition | icon位置, 只能在left和right选择            | string  | -      |
| loading      | 点击之后, 按钮不可点击, 一定条件下才能点击 | boolean |        |

### icon

| 属性     | 说明         | 类型   | 默认值 |
| -------- | ------------ | ------ | ------ |
| iconName | 添加icon图案 | string | -      |

### row

| 属性   | 说明                                                         | 类型            | 默认值 |
| ------ | ------------------------------------------------------------ | --------------- | ------ |
| gutter | 该row内部的各个col组件的空隙, 以px为单位, 如gutter=10表示该row组件内的col组件间隔20px | number\| string | 0      |
| align  | 该row内部的各个col组件的内容对齐方式                         | string          | left   |

### col

| 属性         | 说明                                               | 类型             | 默认值 |
| ------------ | -------------------------------------------------- | ---------------- | ------ |
| span         | 该col占整个row组件(分成24)的份数                   | string \| number | -      |
| offset       | 该col的左侧占整个row组件(分成24)的份数             | string \| number | 0      |
| phone        | 屏幕宽度小于576px采用的span或者offset              | Object           | -      |
| ipad         | 屏幕宽度大于576px, 小于768px采用的span或者offset   | Object           | -      |
| narrowPc     | 屏幕宽度大于768px, 小于992px采用的span或者offset   | Object           | -      |
| pc           | 屏幕宽度大于992px, 小于1200px采用的span或者offset  | Object           | -      |
| widthPc      | 屏幕宽度大于1200px, 小于1600px采用的span或者offset | Object           | -      |
| widthWidthPc | 屏幕宽度大于1600px采用的span或者offset             | Object           | -      |





### 知识点


