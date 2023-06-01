const age = 18;
var result = "未成年";

if  (age >= 18) {
    result = "已成年";
}
console.log(result) // 印出結果
// 大於 18 歲，result 是「已成年」，不然「未成年」
let gender = 2;
switch (gender) {
    case 1:
        console.log("男");
        break;
    case 2:
        console.log("女");
        break;
    default:
        console.log("不想說");
        break;
}

// 使用 prompt() 函數
// 讓使用者可以輸入西元年份（例如 2014），然後計算輸入的年份是否為閏年。
// 提示：年份可以被 4 整除而不可被 100 整除，但又可以被 400 整除
// 提示：整除可用 % 符號
const year = prompt("請輸入西元年份：");
const a = year%4 == 0
const b = year%100 != 0 
const c = year%400 == 0

if ((a && b) || c){
    console.log(year + "是閏年！");
}else {
    console.log(year + "不是閏年！");
}



// 印出 1 ~ 100 裡面 4 的倍數(for)
for (let i = 4; i <= 100; i += 4) {
    console.log(i);
  }

// 印出 1 ~ 100 裡面 4 的倍數(while)
let i = 4;
while (i <= 100){
    console.log(i);
    i += 4;
}

/* 請使用 for 或 while 迴圈
印出：
"你好5"
"你好3"
"你好1" */
for (let number = 5; number > 0; number -= 2){
    console.log("你好" + number);
}



// 1 ... 100 的和
let result1 = 0;
for (let i = 0; i <= 100; i++){
    result1 += i;
}
console.log(result1);