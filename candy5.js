// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起
function squareDigits(num) {
    return (num + '').split('').map(x => x**2).join()  
}
console.log(squareDigits(3212)) // 印出 9414
console.log(squareDigits(2112)) // 印出 4114
console.log(squareDigits(387)) // 印出 96449
// function squareDigits(num) {
//     let SquareNum = (num + '').split('').map(x => x**2);;
//     let result = ''
//     for(let i = 0; i < SquareNum.length; i++){
//         result += (SquareNum[i]+'');
//     }
//     return result
// }
  
//   console.log(squareDigits(3212)) // 印出 9414
//   console.log(squareDigits(2112)) // 印出 4114
//   console.log(squareDigits(387)) // 印出 96449

// 將引數type轉為字串後，利用split('')將字串轉為字串組，map將矩陣內字串做平方，再利用forEach依序丟出後轉為字串做加總即可得出結果

  
