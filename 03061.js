// function mymax(...number){
//     let result = []
//     for (let i = 0; i < number.length; i++){
//         if Array.isArray(n){
//             result = result.concat(n);
//         } else{
//             result.push(n);
//         }
//     }
// }
// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // 印出 1 ~ 10 的偶數總和
// const even = list.filter(function(x){
//     return x % 2 == 0
// })
// const result = even.reduce(function(acc, cv){
//     return acc + cv;
// })
// console.log(result);
// -----------------------------------------------
// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 印出 1 ~ 10 的偶數總和
// const even = list.filter((x) => x % 2 == 0)
// const result = list.filter((x) => x % 2 == 0)
//                    .reduce((acc, cv) => acc + cv);

// console.log(result);
// -----------------------------------------------
//找到最大值,但效率太差不建議使用
const list = [1, 5, 2, 3, 19, 20, 4]

const result = list.reduce((acc, cv) => {
    if (acc > cv){
        return acc;
    }
    return cv;
})